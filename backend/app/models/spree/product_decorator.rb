module Spree
    Product.class_eval do
        def empty_option_values?
            options.empty? || options.any? do |opt|
                opt.option_type.option_values.empty? && opt.option_type.comment == false
            end
        end
    end
end