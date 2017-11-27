Spree::PermittedAttributes.shipment_attributes.push(:is_own_shipping)
Spree::PermittedAttributes.line_item_attributes.push(:is_own_ship)

Spree::PermittedAttributes.product_attributes.push(:is_consolidated)