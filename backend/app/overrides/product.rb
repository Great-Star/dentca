# Deface::Override.new(:virtual_path => "spree/admin/products/_add_stock_form",
#     :name => "modify_variant_stock_form",
#     :replace => "div.panel-body",
#     :text => "<div class='panel-body'>
#                 <%= form_for [:admin, Spree::StockMovement.new], url: admin_stock_items_path do |f| %>
#                     <div data-hook='admin_stock_movements_form_fields' class='row'>
#                     <div class='col-xs-12 col-md-2'>
#                         <div class='form-group'>
#                         <%= f.field_container :quantity do %>
#                             <%= f.label :quantity, Spree.t(:quantity) %>
#                             <%= f.number_field :quantity, class: 'form-control', value: 1 %>
#                         <% end %>
#                         </div>
#                     </div>
#                     <div class='col-xs-12 col-md-5'>
#                         <div class='form-group'>
#                         <%= f.field_container :stock_location do %>
#                             <%= label_tag :stock_location_id, Spree.t(:stock_location) %>
#                             <%= select_tag 'stock_location_id', options_from_collection_for_select(@stock_locations, :id, :name),
#                             class: 'select2' %>
#                         <% end %>
#                         </div>
#                     </div>

#                     <div class='col-xs-12 col-md-5'>
#                         <div class='form-group'>
#                         <%= f.field_container :variant_id do %>
#                             <%= label_tag 'variant_id', Spree.t(:product) %>
#                             <%= select_tag 'variant_id', options_from_collection_for_select(@variants, :id, :name),
#                             class: 'select2' %>
#                         <% end %>
#                         </div>
#                     </div>
#                     </div>

#                     <div class='form-actions text-center' data-hook='buttons'>
#                     <%= button Spree.t(:add_stock), 'plus' %>
#                     </div>
#                 <% end %>
#                 </div>")

Deface::Override.new(:virtual_path => "spree/admin/products/stock",
    :name => "modify_stock_view_thead",
    :replace => "thead",
    :text => "<thead>
      <tr data-hook='admin_product_stock_management_index_headers'>
        <th colspan='2'><%= Spree.t(:product) %></th>
        <th colspan='3'><%= Spree.t(:stock_location_info) %></th>
      </tr>
    </thead>")

# Deface::Override.new(:virtual_path => "spree/admin/products/stock",
#     :name => "modify_stock_view_tbody",
#     :replace => "tbody",
#     :text => "<tbody>
#       <% variant = @variants[0]%>
#         <% if variant.stock_items.present? %>
#           <tr id='<%= spree_dom_id variant %>' data-hook='admin_product_stock_management_index_rows'>
#             <td class='image text-center'>
#               <% if variant.images.present? %>
#                 <%= image_tag variant.images.first.attachment.url(:mini) %>
#               <% end %>
#             </td>
#             <td>
#               <%= variant.name %>
#               <%= form_tag admin_product_variants_including_master_path(@product, variant, format: :js), method: :put, class: 'toggle_variant_track_inventory' do %>
#                 <div class='checkbox'>
#                   <%= label_tag 'track_inventory_#{ 'variant.id' }' do %>
#                     <%= check_box_tag 'track_inventory', 1, variant.track_inventory?,
#                                       class: 'track_inventory_checkbox', id: 'track_inventory_#{ 'variant.id' }' %>
#                     <%= Spree.t(:track_inventory) %>
#                     <%= hidden_field_tag 'variant[track_inventory]', variant.track_inventory?,
#                         class: 'variant_track_inventory',
#                         id: 'variant_track_inventory_#{'variant.id'}' %>
#                   <% end %>
#                 </div>
#               <% end if can?(:update, @product) && can?(:update, variant) %>
#             </td>

#             <td colspan='3' class='stock_location_info'>
#               <table class='table table-bordered no-marginb'>
#                 <thead>
#                   <th><%= Spree.t(:stock_location) %></th>
#                   <th class='text-center'><%= Spree.t(:count_on_hand) %></th>
#                   <th class='text-center'><%= Spree.t(:backorderable) %></th>
#                   <th class='actions text-center'></th>
#                 </thead>
#                 <tbody>
#                   <% variant.stock_items.each do |item| %>
#                     <% next unless @stock_locations.include?(item.stock_location) %>
#                     <tr id='stock-item-<%= item.id %>'>
#                       <td><%= item.stock_location.name %></td>
#                       <td class='text-center'><%= item.count_on_hand %></td>
#                       <td class='text-center'>
#                         <%= form_tag admin_stock_item_path(item), method: :put, class: 'toggle_stock_item_backorderable' do %>
#                           <%= check_box_tag 'stock_item[backorderable]', true,
#                                 item.backorderable?,
#                                 class: 'stock_item_backorderable',
#                                 id: 'stock_item_backorderable_#{'item.stock_location.id'}' %>
#                         <% end if can? :update, item %>
#                       </td>
#                       <td class='actions actions-1 text-center'>
#                         <%= link_to_with_icon('delete', Spree.t(:remove), [:admin, item], method: :delete, remote: true, class: 'icon_link btn btn-danger btn-sm', data: { action: :remove, confirm: Spree.t(:are_you_sure) }, no_text: true) if can? :destroy, item %>
#                       </td>
#                     </tr>
#                   <% end %>
#                 </tbody>
#               </table>
#             </td>
#         <% end %>
#         </tr>

#     </tbody>" )   
