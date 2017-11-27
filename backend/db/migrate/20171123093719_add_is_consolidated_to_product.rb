class AddIsConsolidatedToProduct < ActiveRecord::Migration
  def change
    add_column :spree_products, :is_consolidated, :boolean, default: false
  end
end
