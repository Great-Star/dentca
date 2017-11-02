$(document).ready(function () {
    'use strict';
    var uniqueId = 1;
    $('.add_new_drop_down_item').click(function(){
        var target = $(this).data("target");
        var sel_target = $(target + ' tr:visible:last')
        sel_target.find('select').select2('destroy')
        sel_target.select2('destroy');

        var new_table_row = sel_target.clone();
        var new_id = new Date().getTime() + (uniqueId++);

        new_table_row.find("input, select").each(function () {
            var el = $(this);
            el.val("");
            el.prop("id", el.prop("id").replace(/\d+/, new_id))
            el.prop("name", el.prop("name").replace(/\d+/, new_id))
        })
        new_table_row.find('select').select2();
        // When cloning a new row, set the href of all icons to be an empty "#"
        // This is so that clicking on them does not perform the actions for the
        // duplicated row
        new_table_row.find("a").each(function () {
            var el = $(this);
            el.prop('href', '#');
        })
        
        $(target).find('select').select2();
        $(target).prepend(new_table_row);
    })
});