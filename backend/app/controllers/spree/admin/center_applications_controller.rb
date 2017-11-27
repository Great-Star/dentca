module Spree
  module Admin
    class CenterApplicationsController < ResourceController
      before_action :initialize_center_application_events
      before_action :load_center_application, only: [:edit, :review, :cancel, :resume, :accept, :activate, :deactivate]

      def index
        respond_with(@collection)
      end

      def address
        if request.put?

          if @center_application.update_attributes(center_application_params)
            flash.now[:success] = Spree.t(:center_application_updated)
          end

          render :address

        end
      end

      def review
        @center_application.review
        flash[:success] = Spree.t(:center_application_under_review)
        redirect_to :back
      end

      def cancel
        @center_application.cancel
        flash[:success] = Spree.t(:center_application_cancelled)
        redirect_to :back
      end

      def resume
        @center_application.resume
        flash[:success] = Spree.t(:center_application_resumed)
        redirect_to :back
      end

      def accept
        @center_application.accept
        flash[:success] = Spree.t(:center_application_accepted)
        redirect_to :back
      end

      def activate
        @center_application.activate
        flash[:success] = Spree.t(:center_application_activated)
        redirect_to :back
      end

      def deactivate
        @center_application.deactivate
        flash[:success] = Spree.t(:center_application_deactivated)
        redirect_to :back
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

      def collection
        return @collection if @collection.present?

        # params[:q] can be blank upon pagination
        params[:q] = {} if params[:q].blank?

        @collection = super
        @search = @collection.ransack(params[:q])
        @collection = @search.result.
            page(params[:page]).
            per(Spree::Config[:center_applications_per_page])
      end

      def initialize_center_application_events
        @center_application_events = %w{review cancel resume accept activate deactivate}
      end

      def load_center_application
        @center_application = CenterApplication.find(params[:id])
      end
    end
  end
end