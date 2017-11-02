module Api
    class DropDownItemsController < BaseController
        def index
            if drop_down
                @drop_down_items = drop_down.drop_down_items
            else
                @drop_down_items = Spree::DropDownItems.all
            end

            respond_with @drop_down_items
        end

        def show
            @drop_down_item = drop_down.drop_down_items.find(params[:id])

            respond_with @drop_down_item
        end

        private
            def drop_down
                if params[:drop_down_id].present?
                    @drop_down = Spree::DropDown.find(params[:drop_down_id])
                end
            end
    end
end