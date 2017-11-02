module Spree
    class DropDownItem < Spree::Base
        validates :name, presence: true
        validates :presentation, presence: true
        
        belongs_to :drop_down, class_name: "Spree::DropDown", inverse_of: :drop_down_items
        has_many :maintainable_pages, class_name: "Spree::MaintainablePage", inverse_of: :drop_down_item
    end
end
