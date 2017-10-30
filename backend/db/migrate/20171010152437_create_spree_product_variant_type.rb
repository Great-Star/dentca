class CreateSpreeProductVariantType < ActiveRecord::Migration
  def change
    create_table :spree_product_variant_types do |t|
      t.string :name
      t.string :presentation
      t.references :product, class_name: "Spree::Product", index: true
      t.references :option_type, class_name: "Spree::OptionType", index: true 

      t.timestamps null: false
    end
  end
end
