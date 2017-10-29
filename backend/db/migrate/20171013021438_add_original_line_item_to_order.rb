class AddOriginalLineItemToOrder < ActiveRecord::Migration
  def change
    add_column :spree_orders, :original_line_item, :string
  end
end
