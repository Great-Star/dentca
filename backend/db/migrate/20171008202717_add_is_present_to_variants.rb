class AddIsPresentToVariants < ActiveRecord::Migration
  def change
    add_column :spree_variants, :is_present, :boolean, default: false
  end
end
