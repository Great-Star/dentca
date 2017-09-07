#  Deface::Override.new(:virtual_path=>"spree/admin/shared/_header",
#     :name=>"change_logo",
#     :remove=>"erb[loud]:contains(link_to)");

#------------------------- Product form customization -----------------------

Deface::Override.new(:virtual_path => "spree/admin/products/_form",
    :name => "remove_promotionable",
    :replace => "[data-hook='admin_product_form_promotionable']",
    :text => "<div data-hook='admin_product_form_file_up_load'>
        <%= f.field_container :file_up_load, class: ['form-group'] do %>
          <%= f.label :file_up_load, Spree.t(:file_up_load) %>
          <%= f.error_message_on :file_up_load %>
          <%= f.check_box :file_up_load, class: 'form-control' %>
        <% end %>
      </div>")

Deface::Override.new(:virtual_path => "spree/admin/products/_form",
    :name => "remove_shipping_specs",
    :remove => "div#shipping_specs")  

#------------------------- option_types view customize ----------------------

Deface::Override.new(:virtual_path=>"spree/admin/option_types/index",
    :name=>"replace_option_types_any",
    :replace=>"table",
    :text=>"<table class='table sortable' id='listing_option_types' data-hook data-sortable-link='<%= update_positions_admin_option_types_url %>'>
        <thead>
            <tr data-hook='option_header'>
            <th class='no-border'></th>
            <th><%= Spree.t(:name) %></th>
            <th><%= Spree.t(:presentation) %></th>
            <th><%= Spree.t(:option_case) %></th>
            <th class='actions'></th>
            </tr>
        </thead>
        <tbody>
            <% @option_types.each do |option_type| %>
            <tr class='spree_option_type <%= cycle('odd', 'even')%>' id='<%= spree_dom_id option_type %>' data-hook='option_row'>
                <td class='move-handle text-center'>
                <span class='icon icon-move handle'></span>
                </td>
                <td><%= option_type.name %></td>
                <td class='presentation'><%= option_type.presentation %></td>
                <td class='option_case'><%= option_type.spree_option_case_id %></td>
                <td class='actions actions-2 text-right'>
                <%= link_to_edit(option_type, class: 'admin_edit_option_type', no_text: true) if can?(:edit, option_type) %>
                <%= link_to_delete(option_type, no_text: true) if can?(:delete, option_type) %>
                </td>
            </tr>
            <% end %>
        </tbody>
        </table>") 

#

Deface::Override.new(:virtual_path => "spree/admin/option_types/_form",
    :name => "replace_option_type_form_fields",
    :replace => "[data-hook='admin_option_type_form_fields']",
    :text => "<div data-hook='admin_option_type_form_fields' class='row'>
            <div class='col-xs-12 col-md-4'>
                <%= f.field_container :name, class: ['form-group'] do %>
                <%= f.label :name, Spree.t(:name) %> <span class='required'>*</span>
                <%= f.text_field :name, class: 'form-control' %>
                <%= f.error_message_on :name %>
                <% end %>
            </div>
            <div class='col-xs-12 col-md-4'>
                <%= f.field_container :presentation, class: ['form-group'] do %>
                <%= f.label :presentation, Spree.t(:presentation) %> <span class='required'>*</span>
                <%= f.text_field :presentation, class: 'form-control' %>
                <%= f.error_message_on :presentation %>
                <% end %> 
            </div>
            <div class='col-xs-12 col-md-4'>
                <%= f.field_container :option_case, class: ['form-group'] do %>
                <%= f.label :type, Spree.t(:option_case) %>
                <%= f.collection_select(:spree_option_case_id, @option_cases, :id, :name, {  }, { class: 'select2' }) %>
                <%= f.error_message_on :option_case %>
                <% end %>
            </div>  
        ")


Deface::Override.new(:virtual_path => "spree/admin/option_types/edit",
    :name => "remove_option_values_if_comment",
    :surround => "table.table-condensed",
    :text => "<% if @option_type.spree_option_case_id == 1 %>
                <%= render_original %>
            <% end %>")

Deface::Override.new(:virtual_path => "spree/admin/option_types/edit",
    :name => "add_validation_of_add_new_option_value_button",
    :surround => "span#new_add_option_value",
    :text => "<% if @option_type.spree_option_case_id == 1 %>
                <%= render_original %>
            <% end %>")

Deface::Override.new(:virtual_path => "spree/admin/variants/_form",
    :name => "add_validation_comment",
    :surround => "[data-hook='presentation']",
    :text => "<% if option_type.spree_option_case_id == 1 %>
                <%= render_original %>
            <% end %>")

# Deface::Override.new(:virtual_path => "spree/admin/shared/_main_menu",
#     :name => "_main_menu_remove_orders",
#     :remove => "erb[loud]:contains('ORDER_TABS')")     

Deface::Override.new(:virtual_path => "spree/admin/shared/_main_menu",
    :name => "_main_menu_remove_tab_reports",
    :remove => "erb[loud]:contains('REPORT_TABS')")             

Deface::Override.new(:virtual_path => "spree/admin/shared/_main_menu",
    :name => "_main_menu_remove_tab_returns",
    :remove => "erb[loud]:contains('.t(:returns)')")             

Deface::Override.new(:virtual_path => "spree/admin/shared/_main_menu",
    :name => "_main_menu_remove_tab_configuration",
    :remove => "erb[loud]:contains('.t(:configurations)')")

Deface::Override.new(:virtual_path => "spree/admin/shared/_main_menu",
    :name => "_main_menu_remove_tab_promotions",
    :remove => "erb[loud]:contains('.t(:promotions)')")    

Deface::Override.new(:virtual_path => "spree/layouts/spree_application",
    :name => "_login_header_remove",
    :remove => "erb[loud]:contains('spree/shared/header')")

Deface::Override.new(:virtual_path => "spree/admin/shared/_main_menu",
    :name => "_main_menu_add_tab_coupon",
    :insert_before => "erb[silent]:contains('if can? :admin, Spree::Admin::ReportsController')",
    :text => "<ul class='nav nav-sidebar'>
                <%= tab :coupons, icon: 'file'  %>
                </ul>")      
# Deface::Override.new(:virtual_path => "spree/admin/shared/sub_menu/_product",
#     :name => "_main_menu_add_tab_orders",
#     :insert_before => "erb[loud]:contains(':properties')",
#     :text => "<%= tab :order_info_options %>")  

Deface::Override.new(:virtual_path => "spree/admin/shared/_product_tabs",
    :name => "add_product_variant_type_tab_product_admin_tabs",
    :insert_before => "erb[loud]:contains('current == :properties')",
    :text => "<%= content_tag :li, class: ('active' if current == :product_variant_types) do %>
                <%= link_to_with_icon 'th-large', Spree.t(:variant_types),  spree.admin_product_product_variant_types_url(@product) %>
            <% end if can?(:admin, Spree::ProductVariantType) && !@product.deleted? %>")