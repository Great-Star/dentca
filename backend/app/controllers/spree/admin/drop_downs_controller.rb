module Spree
    module Admin
        class DropDownsController < ResourceController
            before_action :setup_new_drop_down_item, :only => :edit
            before_action :available_pages, :only => [:edit, :update]

            def update_items_positions
                params[:positions].each do |id, index|
                    Spree::DropDownItem.where(id: id).update_all(position: index)
                end

                respond_to do |format|
                    format.js {render plain: 'Ok'}
                end
            end
            
            private
                def setup_new_drop_down_item
                    @drop_down.drop_down_items.build if @drop_down.drop_down_items.empty?
                end

                def available_pages
                    @available_pages = Spree::MaintainablePage.all
                    # .reject{|page| page.drop_down_item_id != nil && !@drop_down.drop_down_item_ids.include?(page.drop_down_item_id)}
                end
        end
    end
end
