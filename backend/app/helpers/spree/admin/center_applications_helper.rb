module Spree
  module Admin
    module CenterApplicationsHelper

      # Renders all the extension partials that may have been specified in the extensions
      def center_application_event_links(center_application, events)
        links = []
        events.sort.each do |event|
          if center_application.send("can_#{event}?")
            label = Spree.t(event, scope: 'admin.center_application.events', default: Spree.t(event))
            links << button_link_to(
                label.capitalize,
                [event, :admin, center_application],
                method: :put,
                icon: "#{event}",
                data: { confirm: Spree.t(:center_application_sure_want_to, event: label) }
            )
          end
        end
        safe_join(links, '&nbsp;'.html_safe)
      end
    end
  end
end
