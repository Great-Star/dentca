module Spree
    Variant.class_eval do
        belongs_to :order_infos

        # _validators.reject!{ |key, _| key == :option_values }

        # _validate_callbacks.reject do |callback|
        #     callback.raw_filter.attributes == [:option_values]
        # end

        _validators[:option_values]
            .find { |v| v.is_a? ActiveRecord::Validations::PresenceValidator }
            .attributes
            .delete(:option_values)
        
        _validators[:sku]
            .find { |v| v.is_a? ActiveRecord::Validations::UniquenessValidator }
            .attributes
            .delete(:sku)
    end
end
