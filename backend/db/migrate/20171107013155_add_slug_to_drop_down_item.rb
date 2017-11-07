class AddSlugToDropDownItem < ActiveRecord::Migration
  def change
    add_column :spree_drop_down_items, :slug, :string
  end
end
