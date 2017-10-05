class Api::AccountsController < BaseController
  before_filter :check_authorization, except: :create

  def serialization_scope
    current_order
  end

  def create
    if !link_to_corporate_user
      invalid_resource!(false)
      return
    end

    @user = Spree::User.create(spree_user_params)
    
    @order = current_order

    if @user.persisted? 
      sign_in(:spree_user, @user)
      @order.update(user: @user) if @order && !@order.user
      
      @user.spree_role_ids = [created_user_role]
      @user.corporate_account_id = link_to_corporate_user
      @user.generate_spree_api_key!

      render_user
    else
      invalid_resource!(@user)
    end
  end

  def show
    authorize! :show, @user
    @order = current_order

    render_user
  end

  def update
    authorize! :update, @user
    @user.update_attributes spree_user_params

    if @user.valid?
      @order = current_order

      render_user
    else
      invalid_resource!(@user)
    end
  end

private

  def spree_user_params
    params.require(:spree_user).permit(Spree::PermittedAttributes.user_attributes | [
                                        :doctor,
                                        :license,
                                        :corporate_account_id,
                                        spree_role_ids: []])
  end

  def created_user_role
    Spree::Role.find_by_name(params.require(:spree_user)['user_type']).id
  end

  def link_to_corporate_user
    Spree::CorporateAccount.all.each do |corp|
      if corp.company_id == params.require(:spree_user)['company_id'] && corp.password == params.require(:spree_user)['company_password']
        return corp.id
      end
    end
    return false
  end

  def render_user
    serializer = params[:serializer] == 'full' ? UserSerializer : LiteUserSerializer

    render json: @user,
           root: false,
           scope: @user,
           serializer: serializer
  end
end
