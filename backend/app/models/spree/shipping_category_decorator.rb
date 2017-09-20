module Spree
    ShippingCategory.class_eval do
        has_many :corporate_accounts
    end
end