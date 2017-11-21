class AddShippingTypeToLineItem < ActiveRecord::Migration
  def change
    add_column :spree_line_items, :shipping_type_id, :integer
  end
end
