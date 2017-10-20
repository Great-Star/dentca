var update_value = function (volumn, done) {
  'use strict';

  var type = $('span#' + volumn + 'type .select2').select2('val');
  var value_select = $('span#' + volumn + 'value select.select2');
  var value_input = $('span#' + volumn + 'value input.value_name');

  $.get(Spree.routes.option_value_search + '?option_type_id=' + type, function (data) {
    var values = data;
    if (values.length > 0) {
      value_select.html('');
      var value_with_blank = [{
        name: '',
        id: ''
      }].concat(values);
      $.each(value_with_blank, function (pos, value) {
        var opt = $(document.createElement('option'))
          .prop('value', value.id)
          .html(value.name);
        value_select.append(opt);
      });
      value_select.prop('disabled', false).show();
      value_select.select2();
      value_input.hide().prop('disabled', true);
    } else {
    //   state_input.prop('disabled', false).show();
      state_select.select2('destroy').hide();
    }
    if(done) done();
  });
};
