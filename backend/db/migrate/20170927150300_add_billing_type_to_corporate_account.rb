class AddBillingTypeToCorporateAccount < ActiveRecord::Migration
  def change
    add_column :spree_corporate_accounts, :billing_type_id, :integer
  end
end
