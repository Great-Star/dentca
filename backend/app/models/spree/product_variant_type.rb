module Spree
    class ProductVariantType < Spree::Base
        belongs_to :product, class_name: "Spree::Product", :dependent => :destroy
        has_many :product_variant_values, class_name: "Spree::ProductVariantValue", :dependent => :destroy

        accepts_nested_attributes_for :product_variant_values, allow_destroy: true
    end
end
