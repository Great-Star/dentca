class Spree::ProductPriceSet < ActiveRecord::Base
    has_many :product_prices, :dependent => :destroy
    has_many :corporate_accounts
    
    accepts_nested_attributes_for :product_prices
end
