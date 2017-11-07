module Spree
    class DropDownItem < Spree::Base
        before_save :validate_drop_down_item
        
        acts_as_list scope: :drop_down
        # validates_uniqueness_of :name
        # validates :name, presence: true
        # validates :presentation, presence: true
        
        belongs_to :drop_down, class_name: "Spree::DropDown", inverse_of: :drop_down_items
        has_many :maintainable_pages, class_name: "Spree::MaintainablePage", inverse_of: :drop_down_item

        def validate_drop_down_item
            page = self.maintainable_pages.first
            if page != nil
                self.maintainable_pages.delete(page) unless self.slug.blank?
            end

            self.name = self.name.downcase.strip.gsub(' ', '-')

            if self.name.blank? || self.presentation.blank?
                return false
            end
        end
    end
end
