class AddIsCloneToSpreeVariant < ActiveRecord::Migration
  def change
    add_column :spree_variants, :is_clone, :boolean, default: false
  end
end
