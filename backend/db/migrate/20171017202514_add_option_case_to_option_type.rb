class AddOptionCaseToOptionType < ActiveRecord::Migration
  def change
    add_reference :spree_option_types, :option_case, class_name: "Spree::OptionCase", index: true
  end
end
