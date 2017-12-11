module Spree
    Order.class_eval do
        before_save :save_original_line

        before_validation(on: :create) do
            self.number = Spree::Core::NumberGenerator.new({prefix: '', length: 6}).send(:generate_permalink, Spree::Order)
        end
        
        def save_original_line
            if line_items[0] != nil
                self.original_line_item = self.line_items[0].adjust_order_number
            end
        end

        def update_shipping_rates_and_amounts_if_own_shipping
            self.update_line_items_for_own_shipping
            self.refresh_shipment_rates
            shipments.map { |s| s.update_amounts }
        end

        def update_line_items_for_own_shipping
            shipments.each do |s|
                transaction do
                    line_items.each(&:trans_own_shipping) unless !s.is_own_shipping
                    save!
                end
            end
        end

        def ensure_line_item_numbers
            transaction do
                line_items.each_with_index{ |line_item, index| line_item.ensure_number(self.number, index + 1)}
                save!
            end
        end

        remove_checkout_step :address
        insert_checkout_step :address, before: :payment
        
    end
end

Spree::Order.state_machine.before_transition from: :delivery, do: :update_shipping_rates_and_amounts_if_own_shipping
Spree::Order.state_machine.before_transition from: :delivery, do: :ensure_line_item_numbers