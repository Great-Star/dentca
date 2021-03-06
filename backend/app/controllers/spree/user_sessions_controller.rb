class Spree::UserSessionsController < Devise::SessionsController
  helper 'spree/base', 'spree/store', Spree::Api::ApiHelpers

  if Spree::Auth::Engine.dash_available?
    helper 'spree/analytics'
  end

  include Spree::Core::ControllerHelpers::Auth
  include Spree::Core::ControllerHelpers::Common
  include Spree::Core::ControllerHelpers::Order
  # include Spree::Core::ControllerHelpers::SSL
  include Spree::Core::ControllerHelpers::Store

  protect_from_forgery with: :null_session, if: -> { request.format.json? }

  prepend_before_action :allow_params_authentication!, only: :create

  # ssl_required :new, :create, :destroy, :update
  # ssl_allowed :login_bar

  def create
    # Warden authentication
    self.resource = warden.authenticate!(auth_options)
    if spree_user_signed_in?
      if is_activated?
        respond_to do |format|
          format.html {
            flash[:success] = Spree.t(:logged_in_succesfully)
            redirect_back_or_default(after_sign_in_path_for(spree_current_user))
          }        
          format.json {
            @user = spree_current_user
            @order = current_order({create_order_if_necessary: true})
            @current_user_roles = @user.spree_roles
            
            render json: @user,
                  root: false,
                  scope: @user,
                  serializer: LiteUserSerializer
          }
        end
      else
        respond_to do |format|
          format.html {
            flash.now[:error] = "Current user is deaticated"
            render :new
          }        
          format.json {
            render json: { error: "Current user is deaticated" }, status: :unprocessable_entity, layout: false
          }
        end
      end
    else
      respond_to do |format|
        format.html {
          flash.now[:error] = t('devise.failure.invalid')
          render :new
        }        
        format.json {
          render json: { error: t('devise.failure.invalid') }, status: :unprocessable_entity, layout: false
        }
      end
    end
  end

  def auth_options
    # This is to login spree_user(Spree::User)
    { :scope => :spree_user }
  end

  def destroy
    redirect_path = after_sign_out_path_for(resource_name)
    signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
    set_flash_message :notice, :signed_out if signed_out && is_flashing_format?
    yield resource if block_given?

    # We actually need to hardcode this as Rails default responder doesn't
    # support returning empty response on GET request
    respond_to do |format|
      format.json { render json: {} }
      format.all { head :no_content }
      format.any(*navigational_formats) { redirect_to redirect_path }
    end
  end

  private
    def accurate_title
      Spree.t(:login)
    end

    def redirect_back_or_default(default)
      redirect_to(session["spree_user_return_to"] || default)
      session["spree_user_return_to"] = nil
    end

    def is_activated?
      if spree_current_user.status == "activated"
        return true
      else
        Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name)
        return false
      end
    end
end
