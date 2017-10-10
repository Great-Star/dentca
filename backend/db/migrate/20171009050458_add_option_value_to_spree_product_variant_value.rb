class AddOptionValueToSpreeProductVariantValue < ActiveRecord::Migration
  def change
    add_reference :spree_product_variant_values, :option_value, class_name: "Spree::OptionValue", index: true 
  end
end
