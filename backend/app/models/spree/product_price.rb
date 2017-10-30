class Spree::ProductPrice < ActiveRecord::Base
    belongs_to :product_price_set, class_name: "Spree::ProductPriceSet"
    belongs_to :product, class_name: "Spree::Product"

    validates :product_id, presence: true
    validates :price, presence: true
end
