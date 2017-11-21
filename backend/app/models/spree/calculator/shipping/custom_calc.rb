require_dependency 'spree/shipping_calculator'

module Spree
    module Calculator::Shipping
        class CustomCalc < Spree::ShippingCalculator
            preference :currency, :string, default: -> { Spree::Config[:currency] }
            preference :amount_1x, :decimal, default: 0
            preference :amount_2x, :decimal, default: 0

            def self.description
                Spree.t(:dentca_shipping)
            end

            def compute_package(package)
                variant_ids = []
                package.contents.reduce(0) do |sum, content|
                    sum += compute_from_matched_line_items(package.order.line_items, content.inventory_unit.line_item_id, variant_ids)
                end
            end

            def compute_from_matched_line_items(line_items, id, variant_ids)
                type = line_items.find(id).shipping_type_id 
                variant_id = line_items.find(id).variant_id
                is_own_ship = line_items.find(id).is_own_ship
                if type == 1 || variant_ids.include?(variant_id)
                    return 0
                end
                variant_ids.push(variant_id)
                if is_own_ship
                    return self.preferred_amount_1x
                end
                type == 2 ? self.preferred_amount_1x : self.preferred_amount_2x
            end
        end
    end
end