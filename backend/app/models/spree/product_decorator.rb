module Spree
    Product.class_eval do
        has_many :product_variant_types,     :dependent => :destroy
        has_many :product_variant_values,    :dependent => :destroy
        has_many :product_prices,            :dependent => :destroy
        has_many :product_price_sets, class_name: "Spree::ProductPriceSet", through: :product_prices

        accepts_nested_attributes_for :product_prices
        
        def empty_option_values?
            options.empty? || options.any? do |opt|
                opt.option_type.option_values.empty? && opt.option_type.spree_option_case_id == 1
            end
        end
    end
end