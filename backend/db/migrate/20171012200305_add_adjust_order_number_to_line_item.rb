class AddAdjustOrderNumberToLineItem < ActiveRecord::Migration
  def change
    add_column :spree_line_items, :adjust_order_number, :string
  end
end
