class CreateSpreeMaintainablePages < ActiveRecord::Migration
  def change
    create_table :spree_maintainable_pages do |t|
      t.string :name
      t.text :content
      t.string :link
      t.references :drop_down_item, class_name: "Spree::DropDownItem", index: true
      t.references :drop_down, class_name: "Spree::DropDown", index: true

      t.timestamps null: false
    end
  end
end
