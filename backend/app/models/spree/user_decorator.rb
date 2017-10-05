module Spree
    User.class_eval do
        before_save {
            if !selected_user_roles.include?('corporate user')
                self.corporate_account_id = nil
            else
                self.product_price_set_id = self.corporate_account.product_price_set_id if self.corporate_account
            end
        }

        belongs_to :corporate_account, class_name: "Spree::CorporateAccount"
        belongs_to :product_price_set, class_name: "Spree::ProductPriceSet"

        def selected_user_roles
            self.spree_roles.pluck(:name)
        end
    end
end