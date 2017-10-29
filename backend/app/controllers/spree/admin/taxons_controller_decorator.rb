Spree::Admin::TaxonsController.class_eval do
      def taxon_params
        params.require(:taxon).permit(permitted_taxon_attributes, :title)
      end
end