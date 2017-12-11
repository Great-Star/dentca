class Api::CorporateUsersController < BaseController
    before_filter :check_authorization
    before_filter :check_corp_authorization
    before_filter :current_corp_user, except: [:create, :index]

    def create
        @corp_user = Spree::User.create(corp_user_params)
        if @corp_user.persisted?
            @corp_user.spree_role_ids = [roles]
            @corp_user.corporate_account_id = @corp_admin.id
            @corp_user.generate_spree_api_key!

            @corp_user.save
            render json: @corp_user,
                   root: true,
                   serializer: UserSerializer
        else
            invalid_resource!(@corp_user)
        end
    end

    def index 
        @corp_users = @corp_admin.corporate_users

        render json: @corp_users,
            root: false,
            each_serializer: UserSerializer
    end

    def show
        render json: @corp_user,
            root: false,
            serializer: UserSerializer
    end
        
    def update
        if @corp_user.update_attributes corp_user_params
            render json: @corp_user,
                    root: false,
                    serializer: UserSerializer
        else
            invalid_resource!(@corp_user)
        end
    end

    def destroy
        @corp_user.destroy
        respond_with(@corp_user, status: 204)
    end

    private
        def corp_user_params
            params.require(:corp_user).permit(Spree::PermittedAttributes.user_attributes | [
                                                :doctor,
                                                :license,
                                                :corporate_account_id,
                                                status,
                                                bill_address_attributes: permitted_address_attributes,
                                                ship_address_attributes: permitted_address_attributes])  
        end

        def current_corp_user
            @corp_user = @corp_admin.corporate_users.find_by(id: params[:id])
            render json: { errors: "Not Found" }, status: 404 unless @corp_user
        end

        def roles
            Spree::Role.find_by_name('corporate user').id
        end
end
