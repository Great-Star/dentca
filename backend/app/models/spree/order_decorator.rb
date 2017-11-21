module Spree
    Order.class_eval do
        before_save :save_original_line
        def save_original_line
            if line_items[0] != nil
                self.original_line_item = self.line_items[0].adjust_order_number
            end
        end

        def update_shipping_rates_and_amounts_if_own_shipping!
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
    end
end
