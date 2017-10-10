module Spree
    OptionValue.class_eval do
        has_attached_file :image, styles: { large: "600*600>", medium: "300*300>", thumb: "150*150#" }
        validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
        has_many :products, class_name: "Spree::Product", through: :spree_option_type
        has_many :product_variant_values, class_name: "Spree::ProductVariantValue", dependent: :destroy

        has_many :variants, through: :option_value_variants, class_name: 'Spree::Variant', :dependent => :destroy
    end
end
