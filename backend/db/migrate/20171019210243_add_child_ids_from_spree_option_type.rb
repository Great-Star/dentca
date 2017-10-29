class AddChildIdsFromSpreeOptionType < ActiveRecord::Migration
  def change
    add_column :spree_option_types, :first_child_id, :integer
    add_column :spree_option_types, :second_child_id, :integer
  end
end
