module Spree
    class DropDown < Spree::Base
        validates :name, presence: true
        validates :presentation, presence: true

        has_many :drop_down_items, class_name: "Spree::DropDownItem", inverse_of: :drop_down
        has_many :maintainable_pages, class_name: "Spree::MaintainablePage", inverse_of: :drop_down
        accepts_nested_attributes_for :drop_down_items, allow_destroy: true
    end
end
