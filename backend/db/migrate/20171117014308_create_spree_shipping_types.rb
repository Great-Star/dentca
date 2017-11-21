class CreateSpreeShippingTypes < ActiveRecord::Migration
  def change
    create_table :spree_shipping_types do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
