module Spree
    Order.class_eval do

        before_save :save_original_line
        def save_original_line
            if line_items[0] != nil
                self.original_line_item = self.line_items[0].order_info.original_line_item
            end
        end
    end
end
