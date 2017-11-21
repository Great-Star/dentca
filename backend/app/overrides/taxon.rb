# Deface::Override.new(:virtual_path=>"spree/admin/taxons/_form",
#     :name => "add_title_field_to_taxon",
#     :insert_before => "erb[loud]:contains('.field_container :description')",
#     :text => "<%= f.field_container :title, class: ['form-group'] do %>
#             <%= f.label :title, Spree.t(:title) %>
#             <%= f.text_field :title, class: 'form-control', rows: 6 %>
#         <% end %>")