class CreateSpreeProductVariantTypes < ActiveRecord::Migration
  def change
    create_table :spree_product_variant_types do |t|
      t.string :name
      t.string :presentation
      t.belongs_to :product, class_name: "Spree::Product", index: true

      t.timestamps null: false
    end
  end
end
