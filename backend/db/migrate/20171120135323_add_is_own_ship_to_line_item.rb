class AddIsOwnShipToLineItem < ActiveRecord::Migration
  def change
    add_column :spree_line_items, :is_own_ship, :boolean, default: false
  end
end
