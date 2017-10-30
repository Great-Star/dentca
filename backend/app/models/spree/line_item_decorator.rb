module Spree
  LineItem.class_eval do
    has_one :order_info, class_name: "Spree::OrderInfo", :dependent => :destroy

    def update_price
      # self.price = variant.price_including_vat_for(tax_zone: tax_zone)
      self.price = order_info.price
    end
  end
end
