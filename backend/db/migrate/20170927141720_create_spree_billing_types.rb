class CreateSpreeBillingTypes < ActiveRecord::Migration
  def change
    create_table :spree_billing_types do |t|
      t.string :name
      t.timestamps null: false
    end
  end
end
