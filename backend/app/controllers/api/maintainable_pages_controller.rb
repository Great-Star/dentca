module Api
    class MaintainablePagesController < BaseController
        def index
            @maintainable_pages = Spree::MaintainablePage.all
            respond_with link_page
        end

        def link_page
            @maintainable_pages.reject {|page| page.link.blank?}
        end
    end
end
