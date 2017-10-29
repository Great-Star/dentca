module Api
    class OptionCasesController < BaseController
        def index
            @option_cases = Spree::OptionCase.all
            respond_with @option_cases
        end
    end
end
