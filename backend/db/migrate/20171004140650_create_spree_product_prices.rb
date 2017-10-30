class CreateSpreeProductPrices < ActiveRecord::Migration
  def change
    create_table :spree_product_prices do |t|
      t.integer :price
      t.belongs_to :product_price_set, class_name: "Spree::ProductPriceSet", index: true
      t.belongs_to :product, class_name: "Spree::Product", index: true

      t.timestamps null: false
    end
  end
end
