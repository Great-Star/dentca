module Spree
    OptionType.class_eval do
        has_many :product_variant_types, class_name: "Spree::ProductVariantType", dependent: :destroy
        has_attached_file :image, styles: { large: "600*600>", medium: "300*300>", thumb: "150*150#" }
        validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

        belongs_to :option_case, class_name: "Spree::OptionCase"
        has_many :children, :class_name => "Spree::OptionType", foreign_key: "parent_id", dependent: :destroy
        belongs_to :parent, :class_name => "Spree::OptionType"
    end
end