class AddLinkToDropDownItem < ActiveRecord::Migration
  def change
    add_column :spree_drop_down_items, :link_to, :string
  end
end
