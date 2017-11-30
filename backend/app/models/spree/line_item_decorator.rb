module Spree
  LineItem.class_eval do
    before_save :update_shipping_type

    def copy_price
      if variant
        self.price = self.ordered_price if price.nil? # what to update
        self.currency = variant.currency if currency.nil?
      end
    end

    def update_price  #what to update
      # self.price = variant.price_including_vat_for(tax_zone: tax_zone)
      # self.price = order_info.price
      # self.shipping_type_id = 3
    end

    def update_shipping_type
      self.shipping_type_id = product.shipping_type_id
    end

    def product
      Spree::Product.unscoped { super }
    end

    def trans_own_shipping
       self.is_own_ship = true
    end

    def ensure_number(number, index)
      self.number = "#{number}-#{index.to_s}"
    end

  end
end
