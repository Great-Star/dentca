class CreateSpreeProductPriceSets < ActiveRecord::Migration
  def change
    create_table :spree_product_price_sets do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
