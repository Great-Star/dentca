Deface::Override.new(virtual_path: 'spree/layouts/admin',
                     name: 'add_center_tab_to_main_menu',
                     :insert_bottom => "[data-hook='admin_tabs']",
                     text: "
<ul class='nav nav-sidebar'>
  <%= main_menu_tree Spree.t(:centers), icon: 'home', sub_menu: 'center', url: '#sidebar-centers' %>
</ul>
")