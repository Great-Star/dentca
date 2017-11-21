module Spree
    module Admin
        class MaintainablePagesController < ResourceController
            before_action :set_default_link, only: :new

            def set_default_link
                @maintainable_page.link = 'blog/page/'
            end
        end
    end
end
