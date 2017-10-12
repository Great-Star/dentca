module Spree
  LineItem.class_eval do
    # attr_accessible :variants
    # serialize :variants, Array
    # has_many :variants, class_name: "Spree::Variant"
    has_one :order_info, class_name: "Spree::OrderInfo", :dependent => :destroy

    def update_price
      Rails.logger.warn"-------------------PASS_HERE-------------------------------------------------------------"
      # self.price = variant.price_including_vat_for(tax_zone: tax_zone)
      self.price = order_info.price
    end
  end
end
