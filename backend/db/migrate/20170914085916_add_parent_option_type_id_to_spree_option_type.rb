class AddParentOptionTypeIdToSpreeOptionType < ActiveRecord::Migration
  def change
    add_column :spree_option_types, :parent_option_type_id, :integer
  end
end
