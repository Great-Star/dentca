class Spree::ProductVariantType < ActiveRecord::Base
    belongs_to :product, class_name: "Spree::Product"
    belongs_to :option_type, class_name: "Spree::OptionType"
    has_many :product_variant_values, class_name: "Spree::ProductVariantValue", dependent: :destroy

    accepts_nested_attributes_for :product_variant_values, allow_destroy: true
end

