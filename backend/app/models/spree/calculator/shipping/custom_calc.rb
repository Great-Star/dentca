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
                if package.contents.size == 1
                    compute_from(package.contents.first)
                else
                    # compute_from_consolidation(package.contents.first)
                    self.preferred_amount_1x
                end
            end

            def compute_from_consolidation(content)
                type = content.inventory_unit.line_item.shipping_type_id
                self.preferred_amount_1x
            end

            def compute_from(content)
                type = content.inventory_unit.line_item.shipping_type_id
                is_own_ship = content.inventory_unit.line_item.is_own_ship

                # case of free shipping
                return 0 if type == 1  

                # case of own shipping?
                return self.preferred_amount_1x if is_own_ship

                # case of 1 way shipping
                if type == 2    
                    self.preferred_amount_1x
                # case of 2 way shippings
                else            
                    self.preferred_amount_2x
                end
            end
            
        end
    end
end