module Spree
    module Admin
        class MaintainablePagesController < ResourceController
            before_action :set_default_link, :only => [:new, :edit]

            def set_default_link
                if @maintainable_page.link.blank?
                    @maintainable_page.link = 'blog/link/'
                end
            end
        end
    end
end
