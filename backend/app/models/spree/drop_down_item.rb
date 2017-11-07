module Spree
    class DropDownItem < Spree::Base
        before_save :validate_drop_down_item
        
        acts_as_list scope: :drop_down
        
        validates :name, presence: true
        validates :presentation, presence: true
        
        belongs_to :drop_down, class_name: "Spree::DropDown", inverse_of: :drop_down_items
        has_many :maintainable_pages, class_name: "Spree::MaintainablePage", inverse_of: :drop_down_item

        def validate_drop_down_item
            page = self.maintainable_pages.first
            if page != nil
                self.maintainable_pages.delete(page) unless self.slug.blank?
            end
        end
    end
end
