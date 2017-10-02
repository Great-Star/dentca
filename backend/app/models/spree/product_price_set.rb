class Spree::ProductPriceSet < ActiveRecord::Base

    has_many :product_prices, class_name: "Spree::ProductPrice", :dependent => :destroy
    has_many :corporate_accounts, class_name: "Spree::CorporateAccount"

    has_many :users, class_name: "Spree::User", through: :corporate_accounts
    
    accepts_nested_attributes_for :product_prices

end
