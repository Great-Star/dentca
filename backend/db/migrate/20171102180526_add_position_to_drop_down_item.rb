class AddPositionToDropDownItem < ActiveRecord::Migration
  def change
    add_column :spree_drop_down_items, :position, :integer
  end
end
