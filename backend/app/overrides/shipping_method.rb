Deface::Override.new(:virtual_path => "spree/admin/shipping_methods/index",
    :name => "add_price_to_table_header",
    :replace => "[data-hook='admin_shipping_methods_index_headers']",
    :text => "<tr data-hook='customized_admin_shipping_methods_index_headers'>
        <th><%= Spree.t(:name) %></th>
        <th class='text-center'><%= Spree.t(:price_1x) %></th>
        <th class='text-center'><%= Spree.t(:price_2x) %></th>
        <th class='text-center'><%= Spree.t(:categories) %></th>
        <th data-hook='admin_shipping_methods_index_header_actions' class='actions'></th>
    </tr>")

Deface::Override.new(:virtual_path => "spree/admin/shipping_methods/index",
    :name => "add_price_to_table_body",
    :replace => "[data-hook='admin_shipping_methods_index_rows']",
    :text => "<tr id='<%= spree_dom_id shipping_method %>' data-hook='customized_admin_shipping_methods_index_rows'>
        <td><%= shipping_method.admin_name + ' / ' if shipping_method.admin_name.present? %><%= shipping_method.name %></td>
        <td class='text-center'><%= Spree::Money.new(shipping_method.calculator.preferred_amount_1x, currency: shipping_method.calculator.preferred_currency) %></td>
        <td class='text-center'><%= Spree::Money.new(shipping_method.calculator.preferred_amount_2x, currency: shipping_method.calculator.preferred_currency) %></td>
        <td class='text-center'><%= shipping_method.shipping_categories.collect(&:name).join(', ') if shipping_method.shipping_categories %></td>
        <td data-hook='admin_shipping_methods_index_row_actions' class='actions actions-2 text-right'>
          <%= link_to_edit(shipping_method, no_text: true) if can? :edit, shipping_method %>
          <%= link_to_delete(shipping_method, no_text: true) if can? :delete, shipping_method %>
        </td>
      </tr>")
