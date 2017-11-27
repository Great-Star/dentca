class Api::CenterApplicationsController < BaseController
  def index
    @centerApplications = Spree::CenterApplication.all

    render json: @centerApplications,
           root: false,
           each_serializer: CenterApplicationSerializer
  end

  def activated
    @centerApplications = Spree::CenterApplication.where(state: 'activated')

    render json: @centerApplications,
           root: false,
           each_serializer: CenterApplicationSerializer
  end

  def create
    @centerApplication = Spree::CenterApplication.create(center_application_params)

    if @centerApplication.persisted?
      render json: @centerApplication,
             root: false,
             serializer: CenterApplicationSerializer
    else
      invalid_resource!(@centerApplication)
    end
  end

  private

    def center_application_params
      params.require(:center_application).permit(:office_name,
                                                 :head_doctor,
                                                 :email,
                                                 :website,
                                                 :num_of_doctors,
                                                 :num_of_staff,
                                                 :college,
                                                 :degree,
                                                 address_attributes: permitted_address_attributes)
    end
end
