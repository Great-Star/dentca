module Spree
    module Admin
        class DropDownItemsController < ResourceController
            def destroy
                drop_down_item = Spree::DropDownItem.find(params[:id])
                drop_down_item.destroy
                render plain: nil
            end
        end
    end
end
