module Spree
    module Admin
        class DropDownsController < ResourceController
            before_action :setup_new_drop_down_item, :only => [:edit, :update]
            
            private
                def setup_new_drop_down_item
                    @drop_down.drop_down_items.build if @drop_down.drop_down_items.empty?
                    @available_pages = Spree::MaintainablePage.all
                        .reject{|page| page.drop_down_item_id != nil && !@drop_down.drop_down_item_ids.include?(page.drop_down_item_id)}
                end
        end
    end
end
