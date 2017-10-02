module Spree
    User.class_eval do
        before_save { self.corporate_account_id = nil if !selected_user_roles.include?('corporate user') }

        belongs_to :spree_corporate_account, class_name: "Spree::CorporateAccount", :foreign_key => "corporate_account_id"
        has_one :spree_product_price_set, :through => :spree_corporate_account, :source => "product_price_set"

        def selected_user_roles
            self.spree_roles.pluck(:name)
        end
    end
end