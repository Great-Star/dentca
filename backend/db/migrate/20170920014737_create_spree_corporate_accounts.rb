class CreateSpreeCorporateAccounts < ActiveRecord::Migration
  def change
    create_table :spree_corporate_accounts do |t|
      t.string :company_id
      t.string :company_name
      t.string :email
      t.string :password
      t.string :checkout_password

      t.string :company
      t.string :address1
      t.string :address2
      t.string :city
      t.string :state_name
      t.integer :state_id
      t.integer :country_id
      t.integer :zip_code
      t.string :contact_phone

      t.timestamps null: false
    end
  end
end
