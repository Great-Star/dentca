class Spree::ProductVariantValue < ActiveRecord::Base

    belongs_to :product_variant_type, class_name: "Spree::ProductVariantType"
    belongs_to :option_value, class_name: "Spree::OptionValue"
    belongs_to :product, class_name: "Spree::Product"
    has_one :variant, class_name: "Spree::Variant", dependent: :destroy


    # delegate :name, :presentation, to: :product_variant_type, prefix: true, allow_nil: true

    # self.whitelisted_ransackable_attributes = ['presentation']
end

