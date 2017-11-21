
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
    :insert_after => "[data-hook='admin_product_form_shipping_categories']",
    :text => "<div data-hook='admin_product_form_shipping_type'>
      <%= f.field_container :shipping_type, class: ['form-group'] do %>
        <%= f.label :shipping_type_id, Spree.t(:shipping_types) %>
        <%= f.collection_select(:shipping_type_id, Spree::ShippingType.all, :id, :name, { include_blank: Spree.t('match_choices.none')}, { class: 'select2', required: :required })%>
        <%= f.error_message_on :shipping_type_id %>
      <% end %>
    </div>")

# Deface::Override.new(:virtual_path => "spree/admin/products/new",
#     :name => "remove_product_prototype_field",
#     :remove => "[data-hook='product-from-prototype']")   

Deface::Override.new(:virtual_path => "spree/admin/products/new",
      :name => "add_shipping_type_field",
      :insert_after => "[data-hook='new_product_shipping_category']",
      :text => "<div data-hook='new_product_shipping_type' class='col-xs-12 col-md-4'>
        <%= f.field_container :shipping_type, class: ['form-group'] do %>
          <%= f.label :shipping_type_id, Spree.t(:shipping_types) %><span class='required'>*</span>
          <%= f.collection_select(:shipping_type_id, Spree::ShippingType.all, :id, :name, { include_blank: Spree.t('match_choices.none')}, { class: 'select2', required: :required })%>
          <%= f.error_message_on :shipping_type_id %>
        <% end %>
      </div>")

Deface::Override.new(:virtual_path => "spree/admin/products/stock",
    :name => "modify_stock_view_thead",
    :replace => "thead",
    :text => "<thead>
      <tr data-hook='admin_product_stock_management_index_headers'>
        <th colspan='2'><%= Spree.t(:product) %></th>
        <th colspan='3'><%= Spree.t(:stock_location_info) %></th>
      </tr>
    </thead>")



