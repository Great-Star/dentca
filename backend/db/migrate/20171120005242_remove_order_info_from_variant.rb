class RemoveOrderInfoFromVariant < ActiveRecord::Migration
  def change
    remove_column :spree_variants, :order_info_id
  end
end
