#  Deface::Override.new(:virtual_path=>"spree/admin/shared/_header",
#     :name=>"change_logo",
#     :remove=>"erb[loud]:contains(link_to)");


Deface::Override.new(:virtual_path => "spree/admin/variants/_form",
    :name => "add_validation_comment",
    :surround => "[data-hook='presentation']",
    :text => "<% if option_type.option_case.name == 'Selection' %>
                <%= render_original %>
            <% end %>")

Deface::Override.new(:virtual_path => "spree/admin/shared/_product_tabs",
    :name => "remove_product_variant_tab_from_product_admin_tabs",
    :remove => "erb[loud]:contains('Spree.t(:variants)')")

Deface::Override.new(:virtual_path => "spree/admin/shared/_product_tabs",
    :name => "add_product_variant_type_tab_product_admin_tabs",
    :insert_before => "erb[loud]:contains('current == :properties')",
    :text => "<%= content_tag :li, class: ('active' if current == :product_variant_types) do %>
                <%= link_to_with_icon 'th-large', Spree.t(:variant_types),  spree.admin_product_product_variant_types_url(@product) %>
            <% end if can?(:admin, Spree::ProductVariantType) && !@product.deleted? %>")


Deface::Override.new(:virtual_path => "spree/admin/users/_form",
    :name => "relpace_general_setting_fields",
    :replace => "[data-hook='admin_user_form_password_fields']",
    :text => "<div data-hook='admin_user_form_right_side' class='col-xs-12 col-md-6'>
            <% s_or_b = 'ca' %>
            <div data-hook='admin_user_form_password_fields' class='col-xs-12 col-md-12'>
                <%= f.field_container :password, class: ['form-group'] do %>
                    <%= f.label :password, Spree.t(:password) %>
                    <%= f.password_field :password, class: 'form-control' %>
                    <%= f.error_message_on :password %>
                <% end %>

                <%= f.field_container :password_confirmation, class: ['form-group'] do %>
                    <%= f.label :password_confirmation, Spree.t(:confirm_password) %>
                    <%= f.password_field :password_confirmation, class: 'form-control' %>
                    <%= f.error_message_on :password_confirmation %>
                <% end %>
            </div>
            <div data-hook='admin_user_form_doctor_field' class='col-xs-12 col-md-12'>
                <%= f.field_container :doctor_name, class: ['form-group'] do %>    
                    <%= f.label :doctor_name, Spree.t(:doctor_name) %>
                    <%= f.text_field :doctor, class: 'form-control' %>
                    <%= f.error_message_on :doctor_name %>
                <% end %>
                <%= f.field_container :doctor_license, class: ['form-group'] do %>    
                    <%= f.label :doctor_license, Spree.t(:doctor_license) %>
                    <%= f.text_field :license, class: 'form-control' %>
                    <%= f.error_message_on :doctor_license %>
                <% end %>
            </div>
            <div data-hook='admin_user_form_corporate_account_field' class='col-xs-12 col-md-12' >
                <% if @selected_user_roles.include?('corporate user') %>    
                    <%= f.field_container :corporate_account_id, class: ['form-group'] do %>
                        <%= f.label :corporate_account_id, Spree.t(:corporate_account) %>
                        <%= f.collection_select(:corporate_account_id, Spree::CorporateAccount.all, :id, :company_name, { :include_blank => 'None' }, { class: 'select2' }) %>
                    <% end %>
                <% end %>
                <% if !@selected_user_roles.include?('corporate user') %>    
                    <%= f.field_container :product_price_set_id, class: ['form-group'] do %>
                        <%= f.label :product_price_set_id, Spree.t(:product_price_set) %>
                        <%= f.collection_select(:product_price_set_id, Spree::ProductPriceSet.all, :id, :name, { }, { class: 'select2' }) %>
                    <% end %>
                    <%= f.field_container :shipping_category_id, class: ['form-group'] do %>
                        <%= f.label :shipping_category_id, Spree.t(:shipping_category) %>
                        <%= f.collection_select(:shipping_category_id, Spree::ShippingCategory.all, :id, :name, { }, { class: 'select2' }) %>
                    <% end %>
                <% end %>
            </div>
        </div>")    

Deface::Override.new(:virtual_path => "spree/admin/users/_sidebar",
    :name => "add_edit_corporate_account_tab",
    :insert_bottom => "[data-hook='admin_user_tab_options']",
    :text => "<% @selected_user_roles = @user.spree_roles.pluck(:name) %>
            <% if @selected_user_roles.include?('corporate user') && @user.corporate_account_id %>
                <li>
                    <%= link_to_with_icon 'user', Spree.t(:corporate_account), spree.edit_admin_corporate_account_path(@user.corporate_account_id)%>
                </li>
            <% end %>")

Deface::Override.new(:virtual_path => "spree/admin/roles/index",
    :name => "add_filter_to_roles_name",
    :surround => "td.actions",
    :text => "<% if role.name != 'doctor' && role.name != 'corporate user' %>
                <%= render_original %>
            <% end %>")

Deface::Override.new(:virtual_path => "spree/admin/bookkeeping_documents/index",
    :name => "fixing_translation_missing_issue",
    :replace => "[data-hook = 'printables_index_headers']",
    :text => "<tr data-hook='modifed_printables_index_headers'>
                <th><%= sort_link @search, :created_at, Spree.t(:date, scope: [:spree, :print_invoice]) %></th>
                <th><%= sort_link @search, :template, Spree.t(:document_type, scope: [:spree, :print_invoice]) %></th>
                <th><%= sort_link @search, :number, Spree.t(:number, scope: [:spree, :print_invoice]) %></th>
                <th><%= sort_link @search, :firstname, Spree.t(:firstname, scope: [:spree, :print_invoice]) %></th>
                <th><%= sort_link @search, :lastname, Spree.t(:lastname, scope: [:spree, :print_invoice]) %></th>
                <th><%= sort_link @search, :email, Spree.t(:email, scope: [:spree, :print_invoice]) %></th>
                <th><%= sort_link @search, :total, Spree.t(:total, scope: [:spree, :print_invoice]) %></th>
                <th data-hook='admin_orders_index_header_actions' class='actions'></th>
            </tr>")        