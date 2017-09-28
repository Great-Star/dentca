module Spree
    ShippingCategory.class_eval do
        has_many :corporate_accounts, class_name: "Spree::CorporateAccount"
    end
end