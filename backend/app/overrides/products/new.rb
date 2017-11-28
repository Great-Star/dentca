Deface::Override.new(:virtual_path => "spree/admin/products/new",
    :name => "add_shipping_type_field",
    :insert_after => "[data-hook='new_product_available_on']",
    :text => "<div data-hook='new_product_shipping_type' class='col-xs-12 col-md-4'>
        <%= f.field_container :shipping_type, class: ['form-group'] do %>
            <%= f.label :shipping_type_id, Spree.t(:shipping_types) %><span class='required'>*</span>
            <%= f.collection_select(:shipping_type_id, Spree::ShippingType.all, :id, :name, { include_blank: Spree.t('match_choices.none')}, { class: 'select2', required: :required })%>
            <%= f.error_message_on :shipping_type_id %>
        <% end %>
    </div>")

Deface::Override.new(:virtual_path => "spree/admin/products/new",
    :name => "remove_shipping_category_field",
    :remove => "[data-hook='new_product_shipping_category']")
