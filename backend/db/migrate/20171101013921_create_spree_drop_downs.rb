class CreateSpreeDropDowns < ActiveRecord::Migration
  def change
    create_table :spree_drop_downs do |t|
      t.string :name
      t.string :presentation
      
      t.timestamps null: false
    end
  end
end
