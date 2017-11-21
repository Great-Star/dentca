
Spree::Order.state_machine.before_transition from: :delivery, do: :update_shipping_rates_and_amounts_if_own_shipping!