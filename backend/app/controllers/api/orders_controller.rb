class Api::OrdersController < BaseController
  before_filter :check_authorization, only: :index

  def index
    @orders = @user.orders.complete

    render json: @orders,
           include: '**',
           scope: spree_current_user,
           each_serializer: LiteOrderSerializer,
           root: false
  end

  def show
    check_authorization
    @order = @user.orders.find_by!(number: params[:id])

    render json: @order,
           scope: spree_current_user,
           serializer: LiteOrderSerializer,
           root: false
  end
end
