class AddVariantValueToSpreeVariant < ActiveRecord::Migration
  def change
    add_reference :spree_variants, :product_variant_value, class_name: "Spree::ProductVariantValue"
  end
end
