class AddHideOptionValueToOptionType < ActiveRecord::Migration
  def change
    add_column :spree_option_types, :hide_option_value, :integer
  end
end
