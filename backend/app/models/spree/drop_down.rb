module Spree
    class DropDown < Spree::Base
        acts_as_list

        default_scope{ order(:position) }

        validates :name, presence: true
        validates :presentation, presence: true

        
        with_options dependent: :destroy, inverse_of: :drop_down do
            has_many :drop_down_items, -> { order(:position) }, class_name: "Spree::DropDownItem"
        end

        has_many :maintainable_pages, class_name: "Spree::MaintainablePage", inverse_of: :drop_down
        accepts_nested_attributes_for :drop_down_items, allow_destroy: true
    end
end
