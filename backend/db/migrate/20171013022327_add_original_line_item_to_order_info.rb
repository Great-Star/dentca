class AddOriginalLineItemToOrderInfo < ActiveRecord::Migration
  def change
    add_column :spree_order_infos, :original_line_item, :string
  end
end
