class Spree::ShippingType < ActiveRecord::Base
    has_many :products, class_name: "Spree::Product"
end
