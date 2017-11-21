module Spree
    class DropDownItem < Spree::Base
        before_save :validate_drop_down_item
        before_save :save_slug
        
        acts_as_list scope: :drop_down
        
        belongs_to :drop_down, class_name: "Spree::DropDown", inverse_of: :drop_down_items
        has_many :maintainable_pages, class_name: "Spree::MaintainablePage", inverse_of: :drop_down_item

        def validate_drop_down_item
            page = self.maintainable_pages.first
            if page != nil
                self.maintainable_pages.delete(page) unless self.link_to.blank?
            end

            self.name = self.name.downcase.strip.gsub(' ', '_')

            if self.name.blank? || self.presentation.blank?
                return false
            end
        end

        def save_slug
            page = self.maintainable_pages.first
            if page != nil
                self.slug = page.link
            else
                self.slug = self.link_to
            end
        end
    end
end
