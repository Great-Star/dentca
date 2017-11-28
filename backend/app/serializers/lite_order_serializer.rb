class LiteOrderSerializer < BaseSerializer
  attributes(
  	:number, :payment_state, :completed_at, :state, :total,
  	:shipment_state, :created_at, :updated_at, :currency, :original_line_item, :line_items
  )

  has_many :line_items, serializer: LiteLineItemSerializer
  has_many :shipments, serializer: LiteShipmentSerializer

end