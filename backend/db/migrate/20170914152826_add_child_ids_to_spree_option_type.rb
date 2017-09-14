class AddChildIdsToSpreeOptionType < ActiveRecord::Migration
  def change
    add_column :spree_option_types, :child_one_id, :integer
    add_column :spree_option_types, :child_two_id, :integer
  end
end
