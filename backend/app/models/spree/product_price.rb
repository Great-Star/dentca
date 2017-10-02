class Spree::ProductPrice < ActiveRecord::Base
    belongs_to :spree_product_price_set, class_name: "Spree::ProductPriceSet", :foreign_key => "product_price_set_id"
    belongs_to :spree_products, :foreign_key => "product_id"

    has_many :users, class_name: "Spree::User", through: :spree_product_price_set
    accepts_nested_attributes_for :users

    validates :product_id, presence: true
    validates :price, presence: true
end
