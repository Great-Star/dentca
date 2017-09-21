class CreateSpreeProductPrices < ActiveRecord::Migration
  def change
    create_table :spree_product_prices do |t|
      t.integer :price
      t.integer :product_price_set_id
      t.integer :product_id

      t.timestamps null: false
    end
  end
end
