class AddShowOptionValueToOptionType < ActiveRecord::Migration
  def change
    add_column :spree_option_types, :show_option_value, :integer
  end
end
