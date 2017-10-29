class AddOptionTypeToSpreeOptionType < ActiveRecord::Migration
  def change
    add_reference :spree_option_types, :parent, class_name: "Spree::OptionType", index: true
  end
end
