class ProductVariantValueSerializer < BaseSerializer
  attributes :id, :name, :presentation, :product_variant_type_id, :option_value_id, :price
end
