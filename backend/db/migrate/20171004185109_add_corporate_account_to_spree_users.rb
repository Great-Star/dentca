class AddCorporateAccountToSpreeUsers < ActiveRecord::Migration
  def change
    add_reference :spree_users, :corporate_account, class_name: "Spree::CorporateAccount", index: true
  end
end
