class AddProductPriceSetToUser < ActiveRecord::Migration
  def change
    add_column :spree_users, :product_price_set_id, :integer
  end
end
