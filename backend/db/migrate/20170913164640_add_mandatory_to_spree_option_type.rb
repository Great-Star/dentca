class AddMandatoryToSpreeOptionType < ActiveRecord::Migration
  def change
    add_column :spree_option_types, :mandatory, :boolean, default: false
  end
end
