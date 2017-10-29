class Spree::BillingType < ActiveRecord::Base
    has_many :corporate_accounts, class_name: "Spree::CorporateAccount"
end
