class AddParamsToLineItem < ActiveRecord::Migration
  def change
    add_column :spree_line_items, :ordered_price, :number
    add_column :spree_line_items, :adjustment_slug, :string
    add_column :spree_line_items, :options_context, :string
  end
end
