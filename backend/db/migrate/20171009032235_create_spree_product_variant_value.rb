class CreateSpreeProductVariantValue < ActiveRecord::Migration
  def change
    create_table :spree_product_variant_values do |t|
      t.string :name
      t.string :presentation
      t.float :price,  default: 0
      t.references :product, class_name: "Spree::Product", index: true
      t.references :product_variant_type, class_name: "Spree::ProductVariantType", index: true

      t.timestamps null: false
    end
  end
end
      