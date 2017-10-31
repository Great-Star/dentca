class CreateSpreeMaintainableMenus < ActiveRecord::Migration
  def change
    create_table :spree_maintainable_menus do |t|

      t.timestamps null: false
    end
  end
end
