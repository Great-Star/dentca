class AddStatusToUser < ActiveRecord::Migration
  def change
    add_column :spree_users, :status, :string, default: "activated"
  end
end
