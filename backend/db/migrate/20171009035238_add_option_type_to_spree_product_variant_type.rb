class AddOptionTypeToSpreeProductVariantType < ActiveRecord::Migration
  def change
    add_reference :spree_product_variant_types, :option_type, class_name: "Spree::OptionType", index: true 
  end
end
