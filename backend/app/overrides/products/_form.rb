Deface::Override.new(:virtual_path => "spree/admin/products/_form",
    :name => "modify_variant_manage_form",
    :replace => "[data-hook='admin_product_form_multiple_variants']",
    :text => "<div data-hook='admin_product_form_sku'>
        <%= f.field_container :sku, class: ['form-group'] do %>
            <%= f.label :sku, Spree.t(:sku) %>
            <%= f.text_field :sku, size: 16, class: 'form-control' %>
        <% end %>
    </div>")

Deface::Override.new(:virtual_path => "spree/admin/products/_form",
    :name => "add_adj_sku",
    :insert_after => "[data-hook='admin_product_form_sku']",
    :text => "<div data-hook='admin_product_form_adj_sku'>
        <%= f.field_container :adj_sku, class: ['form-group'] do %>
            <%= f.label :adj_sku, Spree.t(:adjustment_sku) %>
            <%= f.error_message_on :adj_sku %>
            <%= f.text_field :adj_sku, class: 'form-control' %>
        <% end %>
    </div>")

Deface::Override.new(:virtual_path => "spree/admin/products/_form",
    :name => "remove_shipping_specs",
    :remove => "div#shipping_specs")  

Deface::Override.new(:virtual_path => "spree/admin/products/_form",
    :name => "add_shipping_type_field",
    :insert_after => "[data-hook='admin_product_form_adj_sku']",
    :text => "<div data-hook='admin_product_form_shipping_type', id: 'shipping_type_field'>
        <%= f.field_container :shipping_type, class: ['form-group'] do %>
            <%= f.label :shipping_type_id, Spree.t(:shipping_types) %>
            <%= f.collection_select(:shipping_type_id, Spree::ShippingType.all, :id, :name, { include_blank: Spree.t('match_choices.none')}, { class: 'select2', required: :required })%>
            <%= f.error_message_on :shipping_type_id %>
        <% end %>
    </div>
    <div data-hook='admin_product_form_is_consolidated'>
        <%= f.field_container :is_consolidated, class: ['form-group'] do %>
            <%= f.label :is_consolidated, Spree.t(:is_consolidated) %>
            <%= f.error_message_on :is_consolidated %>
            <%= f.check_box :is_consolidated, class: 'form-control', id: 'consolidate_check' %>
        <% end %>
    </div>")

Deface::Override.new(:virtual_path => "spree/admin/products/_form",
    :name => "remove_shipping_category",
    :remove => "[data-hook='admin_product_form_shipping_categories']")