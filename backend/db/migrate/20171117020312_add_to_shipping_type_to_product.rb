class AddToShippingTypeToProduct < ActiveRecord::Migration
  def change
    add_reference :spree_products, :shipping_type, class_name: "Spree::ShippingType", index: true
  end
end
