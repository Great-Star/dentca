module Api
    class CorporateAccountsController < BaseController
        skip_before_action :verify_authenticity_token, only: :create
        before_filter :check_authorization, except: :create
        before_filter :check_corp_authorization, only: :orders

        def create
            @corporate_account = Spree::CorporateAccount.create(corporate_account_params)
            if @corporate_account.persisted?
                render json: @corporate_account,
                       root: true,
                       serializer: CorporateAccountSerializer
            else
                invalid_resource!(@corporate_account)
            end
        end

        def show
        end

        def orders
            @orders = @corp_admin.orders
            render  json: @orders,
                    root: false,
                    each_serializer: LiteOrderSerializer
        end

        private
            def corporate_account_params
                params.require(:corporate_account).permit(:id,
                                                        :company_id,
                                                        :company_name,
                                                        :email,
                                                        :password,
                                                        :password_confirmation,
                                                        :checkout_password,
                                                        :checkout_password_confirmation,
                                                        :password,
                                                        :company,
                                                        :address1,
                                                        :address2,
                                                        :city,
                                                        :state_name,
                                                        :state_id,
                                                        :country_id,
                                                        :zip_code,
                                                        :contact_phone,
                                                        :address,
                                                        :shipping_category_id,
                                                        :product_price_set_id,
                                                        :billing_type_id)
            end

        end
end
