module Api
    class CorporateAccountsController < BaseController
        skip_before_action :verify_authenticity_token

        def create
            @corporate_account = Spree::CorporateAccount.create(corporate_account_params)
            if @corporate_account.persisted?
                render_corp_account
            else
                invalid_resource!(@corporate_account)
            end
        end

        def show
            # @corporate_account = Spree::CorporateAccount.find(1)
            # render_corp_account
        end

        private
            def corporate_account_params
                params.require(:corporate_user).permit(:id,
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
                                                        :product_price_set_id)
            end

            def render_corp_account
                render json: @corporate_account,
                    #    scope: @corporate_account,
                       root: true,
                       serializer: CorporateAccountSerializer
            end
    end
end
