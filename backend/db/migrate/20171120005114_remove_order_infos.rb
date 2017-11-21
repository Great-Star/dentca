class RemoveOrderInfos < ActiveRecord::Migration
  def change
    drop_table :spree_order_infos
  end
end
