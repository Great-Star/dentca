class AddPositionToDropDown < ActiveRecord::Migration
  def change
    add_column :spree_drop_downs, :position, :integer
  end
end
