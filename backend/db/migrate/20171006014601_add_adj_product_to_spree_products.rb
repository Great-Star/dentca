class AddAdjProductToSpreeProducts < ActiveRecord::Migration
  def change
    add_column :spree_products, :adj_sku, :string
  end
end
