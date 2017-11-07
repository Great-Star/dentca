module Spree
    class DropDown < Spree::Base
        before_save :validate_drop_down

        acts_as_list

        default_scope{ order(:position) }

        validates :name, presence: true
        validates :presentation, presence: true

        
        with_options dependent: :destroy, inverse_of: :drop_down do
            has_many :drop_down_items, -> { order(:position) }, class_name: "Spree::DropDownItem"
        end

        has_many :maintainable_pages, class_name: "Spree::MaintainablePage", inverse_of: :drop_down
        accepts_nested_attributes_for :drop_down_items, allow_destroy: true

        def has_item?
            drop_down_items.any?
        end

        def validate_drop_down
            page = self.maintainable_pages.first
            if page != nil
                self.maintainable_pages.delete(page) unless self.slug.blank?
            end

            if !self.slug.blank? || self.maintainable_pages.any?
                self.drop_down_items.delete_all
            end
        end
    end
end
