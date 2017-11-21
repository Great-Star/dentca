class AddLinkToDropDown < ActiveRecord::Migration
  def change
    add_column :spree_drop_downs, :link_to, :string
  end
end
