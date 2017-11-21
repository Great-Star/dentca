class AddIsOwnShippingToShipment < ActiveRecord::Migration
  def change
    add_column :spree_shipments, :is_own_shipping, :boolean, default: false
  end
end
