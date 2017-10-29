var update_value = function (volumn, done) {
  'use strict';

  var type = $('span#' + volumn + 'type .select2').select2('val');
  var value_select = [$('span#' + volumn + 'value1 select.select2'), $('span#' + volumn + 'value2 select.select2')];
  var value_input = [$('span#' + volumn + 'value1 input.value_name'), $('span#' + volumn + 'value1 input.value_name')];
  console.log("update");
  $.get(Spree.routes.option_value_search + '?option_type_id=' + type, function (data) {
    var values = data;
    for (var i = 0; i < 2; i ++){
      if (values.length > 0) {
        value_select[i].html('');
        var value_with_blank = [{
          name: '',
          id: ''
        }].concat(values);
        $.each(value_with_blank, function (pos, value) {
          var opt = $(document.createElement('option'))
            .prop('value', value.id)
            .html(value.name);
          value_select[i].append(opt);
        });
        value_select[i].prop('disabled', false).show();
        value_select[i].select2();
        value_input[i].hide().prop('disabled', true);
      } else {
      //   state_input.prop('disabled', false).show();
        value_select[i].select2('destroy').hide();
      }
    }
    if(done) done();
  });
};

var update_show_value = function (volumn, done){
  var show_value = $('span#' + volumn + 'value1 select.select2');
  show_value.val(null).trigger('change');
  if (done) done();
}
var update_hide_value = function (volumn, done){
  var hide_value = $('span#' + volumn + 'value2 select.select2');
  hide_value.val(null).trigger('change');
  if (done) done();
}