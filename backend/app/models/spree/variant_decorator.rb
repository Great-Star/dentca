module Spree
    Variant.class_eval do
        belongs_to :product_variant_value, class_name: "Spree::ProductVariantValue"
        delegate :is_consolidated, to: :product

        _validators[:option_values]
            .find { |v| v.is_a? ActiveRecord::Validations::PresenceValidator }
            .attributes
            .delete(:option_values)
        
        _validators[:sku]
            .find { |v| v.is_a? ActiveRecord::Validations::UniquenessValidator }
            .attributes
            .delete(:sku)
    end
end
