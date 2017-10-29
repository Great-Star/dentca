class RemoveChildIdsFromSpreeOptionType < ActiveRecord::Migration
  def change
    remove_column :spree_option_types, :child_one_id
    remove_column :spree_option_types, :child_two_id
  end
end
