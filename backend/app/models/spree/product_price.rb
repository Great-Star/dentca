class Spree::ProductPrice < ActiveRecord::Base
    belongs_to :spree_product_price_sets, :foreign_key => "product_price_set_id"
    belongs_to :spree_products, :foreign_key => "product_id"

    validates :product_id, presence: true
    validates :price, presence: true
end
