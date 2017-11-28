class LiteShipmentSerializer < BaseSerializer
  attributes :id, :number, :cost, :shipping_method, :order_id, :stock_location_name, :is_consolidated, :line_item_ids
  
  def shipping_method
    object.selected_shipping_rate.name
  end

  def order_id
    object.order.number
  end

  def stock_location_name
    object.stock_location.name
  end

  def is_consolidated
    if object.manifest.size > 1
      return true
    else
      return false
    end
  end

  def line_item_ids
    object.manifest.map{ |m| m.line_item.id }
  end
  
end
