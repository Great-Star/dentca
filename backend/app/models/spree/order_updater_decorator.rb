Spree::OrderUpdater.class_eval do
    def update_item_total
        order.item_total = line_items.sum('price * quantity')
        line_items.each do |x|
            Rails.logger.warn "----------Price-#{x.price.to_i}--------------------"    
        end
        Rails.logger.warn "----------Order-#{order.item_total.to_i}--------------------"
        update_order_total
    end
end