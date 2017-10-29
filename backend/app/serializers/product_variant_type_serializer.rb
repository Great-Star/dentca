class ProductVariantTypeSerializer < BaseSerializer
  attributes :id, :name, :product_id, :option_type_id
  has_many :product_variant_values, embed: :objects,
                          serializer: ProductVariantValueSerializer
end
