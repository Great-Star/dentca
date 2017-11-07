class AddSlugToDropDown < ActiveRecord::Migration
  def change
    add_column :spree_drop_downs, :slug, :string
  end
end
