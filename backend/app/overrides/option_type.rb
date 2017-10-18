Deface::Override.new(:virtual_path=>"spree/admin/option_types/index",
    :name=>"replace_option_types_any",
    :replace=>"table",
    :text=>"<table class='table sortable' id='listing_option_types' data-hook data-sortable-link='<%= update_positions_admin_option_types_url %>'>
            <thead>
                <tr data-hook='option_header'>
                <th class='no-border'></th>
                <th><%= Spree.t(:name) %></th>
                <th><%= Spree.t(:presentation) %></th>
                <th><%= Spree.t(:description) %></th>
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
                        <td class='description'><%= option_type.description %></td>
                        <td class='option_case'><%= option_type.option_case.name %></td>
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
            <div class='col-xs-12 col-md-3'>
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
            <div class='col-xs-12 col-md-3'>
                <%= f.field_container :option_case, class: ['form-group'] do %>
                <%= f.label :type, Spree.t(:option_case) %>
                <%= f.collection_select(:option_case_id, @option_cases, :id, :name, {  }, { class: 'select2' }) %>
                <%= f.error_message_on :option_case %>
                <% end %>
            </div>
            <div class='col-xs-12 col-md-2'>
                <%= f.field_container :mandatory, class: ['form-group'] do %>
                <%= f.label :type, Spree.t(:mandatory) %>
                <%= f.check_box :mandatory, class: 'form-control' %>
                <% end %>
            </div>  
            <div class='col-xs-12 col-md-12'>
                <%= f.field_container :description, class: ['form-group'] do %>
                <%= f.label :description, Spree.t(:description) %> <span class='required'>*</span>
                <%= f.text_area :description, class: 'form-control' %>
                <%= f.error_message_on :description %>
                <% end %> 
            </div>
        </div>")

Deface::Override.new(:virtual_path => "spree/admin/option_types/_form",
    :name => "add_innor_option_type_to_form",
    :insert_bottom => "[data-hook='admin_option_type_form_fields']",
    :text => "<% if @option_type.option_case && @option_type.option_case.name == 'Option Group' %>
                <div class='col-xs-12 col-md-12' data-hook='form_option_types'>
                    <%= f.field_container :child_ids, class: ['form-group'] do %>
                        <%= f.label :child_ids, Spree.t(:select_innor_option_types) %>
                        <% if can? :modify, Spree::OptionType %>
                            <%= f.hidden_field :child_ids, value: @option_type.child_ids.join(',') %>
                        <% elsif @option_type.childs.any? %>
                            <ul class='text_list'>
                            <% @option_type.childs.each do |type| %>
                                <li><%= type.presentation %> (<%= type.name %>)</li>
                            <% end %>
                            </ul>
                        <% else %>
                            <div class='alert alert-info'><%= Spree.t(:no_resource_found, resource: :option_types) %></div>
                        <% end %>
                    <% end %>
                </div>
            <% end %>")

Deface::Override.new(:virtual_path => "spree/admin/option_types/edit",
    :name => "image_view_if_image",
    :insert_before => "table.table-condensed",
    :text => "<% if @option_type.option_case.name == 'Image' %>
                <div class='panel-image row'>
                    <div class = 'col-md-6 col-sm-12'>
                        <% if @option_type.image_file_name %>
                            <%= image_tag @option_type.image.url(:large) %>
                        <% end %>
                    </div>
                    <div class = 'col-md-6 col-sm-12'>
                        <div class = 'col-md-6 col-sm-12'>
                            <%= f.text_field :image_file_name, readonly:true, class: 'form-control' %>
                        </div>
                        <div class = 'col-md-6 col-sm-12'>
                            <%= f.file_field :image %>
                        </div>
                    </div>
                </div>
            <% end %>")

Deface::Override.new(:virtual_path => "spree/admin/option_types/edit",
    :name => "child_option_types_if_select_options",
    :insert_before => "table.table-condensed",
    :text => "<% if @option_type.option_case.name == 'Option Select' %>
                <table class='table table-bordered sortable'>
                    <thead data-hook='option_type_header'>
                        <tr>
                            <th ><%= Spree.t(:options) %></th>
                            <th><%= Spree.t(:title) %></th>
                        </tr>
                    </thead>
                    <tbody id='child_option_types'>
                        <tr>
                            <td><%= Spree.t(:first_option) %></td>
                            <td><%= f.collection_select(:child_one_id, @type_values, :id, :name, {}, { class: 'select2' }) %></td>
                        </tr>                        
                        <tr>
                            <td><%= Spree.t(:second_option) %></td>
                            <td><%= f.collection_select(:child_two_id, @type_values, :id, :name, {}, { class: 'select2' }) %></td>
                        </tr>                        
                    </tbody>
                </table>
            <% end %>")            

Deface::Override.new(:virtual_path => "spree/admin/option_types/edit",
    :name => "remove_option_values_if_comment", 
    :surround => "table.table-condensed",
    :text => "<% if @option_type.option_case.name == 'Selection' %>
                <%= render_original %>
            <% end %>")

Deface::Override.new(:virtual_path => "spree/admin/option_types/edit",
    :name => "add_validation_of_add_new_option_value_button",
    :surround => "span#new_add_option_value",
    :text => "<% if @option_type.option_case.name == 'Selection' %>
                <%= render_original %>
            <% end %>")

Deface::Override.new(:virtual_path => "spree/admin/option_types/edit",
    :name => "add_image_to_table_header",
    :insert_after => "erb[loud]:contains('.t(:display)')",
    :text => "<% if @option_type.option_case.name == 'Image' %>
                <th><%= Spree.t(:image) %></th>
            <% end %>")            

Deface::Override.new(:virtual_path => "spree/admin/option_types/_option_value_fields",
    :name => "add_attached_image_field",
    :insert_after => "td.presentation",
    :text => "<td class='image row'>
                <div class = 'col-md-6 col-sm-12'>
                    <%= f.text_field :image_file_name, readonly:true, class: 'form-control' %>
                </div>
                <div class = 'col-md-6 col-sm-12'>
                    <%= f.file_field :image %>
                </div>
            </td>")