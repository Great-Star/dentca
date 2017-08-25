# Deface::Override.new(:virtual_path=>"spree/admin/shared/_header",
#     :name=>"change_logo",
#     :remove=>"erb[loud]:contains(link_to)");


Deface::Override.new(:virtual_path=>"spree/admin/products/_form",
    :name=>"remove_promotionable",
    :remove=>"[data-hook='admin_product_form_promotionable']")

Deface::Override.new(:virtual_path=>"spree/admin/products/_form",
    :name=>"remove_shipping_specs",
    :remove=>"div#shipping_specs")  

Deface::Override.new(:virtual_path=>"spree/admin/products/_form",
    :name =>"add_comment_option_types",
    :insert_before =>"[data-hook='admin_product_form_shipping_categories']",
    :text =>"<div data-hook='admin_product_form_comment'>
          <%= f.field_container :comment_option, class: ['form-group'] do %>
            <%= f.label :comment_option, Spree.t(:comment_option) %>
            <%= f.check_box :comment_option, class: 'form-control' %>
          <% end %>
        </div>")  

Deface::Override.new(:virtual_path => "spree/admin/shared/_main_menu",
    :name => "_main_menu_remove_orders",
    :remove => "erb[loud]:contains('ORDER_TABS')")     

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

# Deface::Override.new(:virtual_path => "spree/admin/shared/_main_menu",
# :name => "_main_menu_add_tab_coupon",
# :insert_before => "erb[silent]:contains('if can? :admin, Spree::Admin::ReportsController')",
# :text => "<ul class='nav nav-sidebar'>
#             <%= tab :coupons, icon: 'file'  %>
#             </ul>")      