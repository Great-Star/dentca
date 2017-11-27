class CreateSpreeCenterApplications < ActiveRecord::Migration
  def change
    create_table :spree_center_applications do |t|
      t.string :office_name
      t.string :head_doctor
      t.string :email
      t.string :website
      t.integer :num_of_doctors, :default => 0
      t.integer :num_of_staff, :default => 0
      t.string :college
      t.string :degree

      t.string :state

      t.references :address

      t.timestamps null: false
    end
  end
end
