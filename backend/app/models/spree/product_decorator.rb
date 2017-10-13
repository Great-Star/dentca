module Spree
    Product.class_eval do
        has_many :product_variant_types, class_name: "Spree::ProductVariantType", :dependent => :destroy
        has_many :product_variant_values, class_name: "Spree::ProductVariantValue", through: :product_variant_types
        has_many :product_prices, class_name: "Spree::ProductPrice", :dependent => :destroy
        has_many :product_price_sets, class_name: "Spree::ProductPriceSet", through: :product_prices
        has_many :option_values, class_name: "Spree::OptionValue", through: :option_types
        after_save :auto_create_product_variant_types
        after_save :auto_create_variants

        accepts_nested_attributes_for :product_prices

        def empty_option_values?
            options.empty? || options.any? do |opt|
                opt.option_type.option_values.empty? && opt.option_type.spree_option_case_id == 1
            end
        end

        def auto_create_product_variant_types
            type_ids = product_variant_types.map{|x| x.option_type_id}
            missing_ids = option_type_ids.reject{|x| type_ids.include? x}
            missing_ids.each do |id|
                option_type = option_types.find(id)
                if option_type.spree_option_case_id == 1
                    type = product_variant_types.create(name: option_type.name, presentation: option_type.presentation, product_id: self, option_type_id: id)
                    auto_create_product_variant_values(type.id, id)
                end
            end

            type_ids += missing_ids
            removed_type_ids = type_ids.reject{|x| option_type_ids.include? x}
            product_variant_types.each do |type|
                type.destroy if removed_type_ids.include? type.option_type_id
            end
        end

        def auto_create_product_variant_values(p_type_id, type_id)
            value_ids = product_variant_values.map{|x| x.option_value_id}
            missing_ids = option_types.find(type_id).option_value_ids.reject{|x| value_ids.include? x}
            missing_ids.each do |id|
                option_value = option_values.find(id)
                Spree::ProductVariantValue.create(name: option_value.name, presentation: option_value.  presentation, product_variant_type_id: p_type_id, product_id: self.id, option_value_id: id)
            end
        end

        def auto_create_variants
            variant_value_ids = variants.map{|x| x.option_value_ids[0]}
            missing_value_ids = option_value_ids.reject{|x| variant_value_ids.include? x}
            missing_value_ids.each do |id|
                variant_value = option_values.find(id).product_variant_values.where(option_value_id: id).first
                variants.create(price: variant_value.price, option_value_ids: [id], product_variant_value_id: variant_value.id)
            end
        end
        
        def build_variants_from_option_values_hash

        end
    end
end