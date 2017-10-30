class AddPriceSetToCorporateAccount < ActiveRecord::Migration
  def change
    add_column :spree_corporate_accounts, :product_price_set_id, :integer
  end
end
