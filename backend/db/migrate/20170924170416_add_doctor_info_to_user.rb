class AddDoctorInfoToUser < ActiveRecord::Migration
  def change
    add_column :spree_users, :doctor, :string
    add_column :spree_users, :license, :string
  end
end
