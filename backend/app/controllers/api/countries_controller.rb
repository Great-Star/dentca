class Api::CountriesController < BaseController
  def index
    @countries = Spree::Country.includes(:states).order(:name)

    render json: @countries,
           root: false,
           each_serializer: CountrySerializer
  end

  def show
    @country = Spree::Country.includes(:states).find(params[:id])

    render json: @country,
           root: false,
           serializer: CountrySerializer
  end
end
