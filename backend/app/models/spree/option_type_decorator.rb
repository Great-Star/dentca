module Spree
    OptionType.class_eval do
        has_attached_file :image, styles: { large: "600*600>", medium: "300*300>", thumb: "150*150#" }
        validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

        belongs_to :parent, :class_name => "Spree::OptionType", :foreign_key => "parent_option_type_id"
        has_many :child_option_types, :class_name => "Spree::OptionType", :foreign_key => "parent_option_type_id"
    end
end