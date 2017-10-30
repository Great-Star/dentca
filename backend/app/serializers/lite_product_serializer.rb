class LiteProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :display_price,
             :available_on, :slug, :meta_title, :meta_description, :meta_keywords,
             :shipping_category_id, :taxon_ids, :master, :product_price_sets, :product_prices

  has_one :master, serializer: SmallVariantSerializer
end
