module Spree
    Product.class_eval do
        def empty_option_values?
            options.empty? || options.any? do |opt|
                opt.option_type.option_values.empty? && opt.option_type.spree_option_case_id == 1
            end
        end
    end
end