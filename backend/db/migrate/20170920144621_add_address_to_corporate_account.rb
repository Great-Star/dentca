class AddAddressToCorporateAccount < ActiveRecord::Migration
  def change
    add_column :spree_corporate_accounts, :address, :string
    add_column :spree_corporate_accounts, :shipping_category_id, :integer
  end
end
