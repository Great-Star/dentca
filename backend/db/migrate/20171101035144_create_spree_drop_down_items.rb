class CreateSpreeDropDownItems < ActiveRecord::Migration
  def change
    create_table :spree_drop_down_items do |t|
      t.string :name
      t.string :presentation
      t.references :drop_down, class_name: "Spree::DropDown", index: true
      
      t.timestamps null: false
    end
  end
end
