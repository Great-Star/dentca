Spree::Admin::UsersController.class_eval do
    before_action :selected_user_roles

    def create
        @user = Spree.user_class.new(user_params)
        if @user.save
            flash.now[:success] = flash_message_for(@user, :successfully_created)
            render :edit
        else
            render :new
        end
    end

    private
        def user_params
            params.require(:user).permit(permitted_user_attributes | [
                                        spree_role_ids: [],
                                        ship_address_attributes: permitted_address_attributes,
                                        bill_address_attributes: permitted_address_attributes] | [
                                        :doctor,
                                        :license,
                                        :corporate_account_id,
                                        :product_price_set_id])
        end

        def selected_user_roles
            @selected_user_roles = @user ? @user.spree_roles.pluck(:name) : []
        end
end