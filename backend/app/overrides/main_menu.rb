# Deface::Override.new(:virtual_path => "spree/admin/shared/_main_menu",
    # :name => "_main_menu_remove_orders",
    # :remove => "erb[loud]:contains('ORDER_TABS')")     

Deface::Override.new(:virtual_path => "spree/admin/shared/_main_menu",
    :name => "_main_menu_remove_tab_reports",
    :remove => "erb[loud]:contains('REPORT_TABS')")             

# Deface::Override.new(:virtual_path => "spree/admin/shared/_main_menu",
#     :name => "_main_menu_remove_tab_returns",
#     :remove => "erb[loud]:contains('.t(:returns)')")             

Deface::Override.new(:virtual_path => "spree/admin/shared/_main_menu",
    :name => "_main_menu_add_corporate_account_tab",
    :insert_before => "erb[loud]:contains('.t(:configurations)')",
    :text => "<ul class='nav nav-sidebar' data-hook='corporate_account_tab'>
                <%= tab :corporate_accounts, icon: 'user'  %>
                </ul>")

# Deface::Override.new(:virtual_path => "spree/admin/shared/_main_menu",
#     :name => "_main_menu_remove_tab_configuration",
#     :remove => "erb[loud]:contains('.t(:configurations)')")

Deface::Override.new(:virtual_path => "spree/admin/shared/_main_menu",
    :name => "_main_menu_remove_tab_promotions",
    :remove => "erb[loud]:contains('.t(:promotions)')")    

Deface::Override.new(:virtual_path => "spree/layouts/spree_application",
    :name => "_login_header_remove",
    :remove => "erb[loud]:contains('spree/shared/header')")

# Deface::Override.new(:virtual_path => "spree/admin/shared/_main_menu",
#     :name => "_main_menu_add_tab_coupon",
#     :insert_before => "erb[silent]:contains('if can? :admin, Spree::Admin::ReportsController')",
#     :text => "<ul class='nav nav-sidebar'>
#                 <%= tab :coupons, icon: 'file'  %>
#                 </ul>")      

Deface::Override.new(:virtual_path => "spree/admin/shared/_main_menu",
    :name => "_main_menu_add_tab_drop_downs",
    :insert_after => "[data-hook='corporate_account_tab']",
    :text => "<ul class='nav nav-sidebar'>
                <%= tab :maintainable_pages, icon: 'file' %>
            </ul>")
