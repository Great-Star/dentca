class AddNumberToLineItem < ActiveRecord::Migration
  def change
    add_column :spree_line_items, :number, :string
  end
end
