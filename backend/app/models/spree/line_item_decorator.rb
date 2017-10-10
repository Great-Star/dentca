module Spree
  LineItem.class_eval do
    # attr_accessible :variants
    # serialize :variants, Array
    # has_many :variants, class_name: "Spree::Variant"
    has_many :order_infos

    def update_price
      Rails.logger.warn"-------------------PASS_HERE-------------------------------------------------------------"
      # self.price = variant.price_including_vat_for(tax_zone: tax_zone)
      self.price = order_infos.first.price
    end
  end
end
