var res = eval('(' + _REST.response.body + ')');
var page_code = "%globals_get_ref%";
if (res && page_code) {
  for (i = 0; i < res.length; i++) {
    var this_dept_code = res[i].code;
    if (page_code === this_dept_code) {
      print(res[i].content);
    }
  }
}
