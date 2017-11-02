class Spree::MaintainablePage < ActiveRecord::Base
    validates :name, presence: true

    belongs_to :drop_down_item, class_name: "Spree::DropDownItem", inverse_of: :maintainable_pages
    belongs_to :drop_down, class_name: "Spree::DropDown", inverse_of: :maintainable_pages
end
