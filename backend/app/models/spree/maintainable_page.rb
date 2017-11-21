class Spree::MaintainablePage < ActiveRecord::Base
    before_save :set_default_link

    validates :name, presence: true
    validates_uniqueness_of :name

    belongs_to :drop_down_item, class_name: "Spree::DropDownItem", inverse_of: :maintainable_pages
    belongs_to :drop_down, class_name: "Spree::DropDown", inverse_of: :maintainable_pages

    private
        def set_default_link
            if self.link == 'blog/page/'
                self.link += self.name.downcase.strip.gsub(' ', '_')
            end
        end
end
