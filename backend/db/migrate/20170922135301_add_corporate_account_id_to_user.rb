class AddCorporateAccountIdToUser < ActiveRecord::Migration
  def change
    add_column :spree_users, :corporate_account_id, :integer
  end
end
