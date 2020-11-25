function stuDobDateConvert(dob) {
  //convert 08-JUN-00 to yyyy-MM-dd
  if (dob) {
    var day = dob.slice(0,2);
    var month = dob.slice(3,6);
    var monthsArray = {
      "JAN": "01",
      "FEB": "02",
      "MAR": "03",
      "APR": "04",
      "MAY": "05",
      "JUN": "06",
      "JUL": "07",
      "AUG": "08",
      "SEP": "09",
      "OCT": "10",
      "NOV": "11",
      "DEC": "12"
    }
    month = monthsArray[month];
    var year = dob.slice(7,9);
    year = '20' + year;
    return year + '-' + month + '-' + day;
  }
}

function initStudentAutoFill() {
  if (jQuery('form[data-uuid-af="true"]').length > 0) {
    function fillField(data, selector, type) {
      if (data !== '' || data !== null) {
        if (jQuery(selector).length > 0) {
          if (jQuery(selector).val() == '') {
            if (type == 'text') {
              jQuery(selector).val(data);
            }
          }
          if (type == 'select') {
            jQuery(selector).val(data);
          }
          if (type == 'radio') {
            if (selector == '.stu-mode') {
              var options = {
                "FT": "0",
                "PT": "1"
              };
            }
            if (selector == '.stu-campus') {
              var options = {
                "BT": "0",
                "CE": "1",
                "JT": "2",
                "MG": "3"
              };
            }
            if (selector == '.stu-faculty') {
              if (data.toLowerCase().indexOf("art") != -1) {
                data = "AHSS";
              } else if (data.toLowerCase().indexOf("computing") != -1) {
                data = "CEBE";
              } else if (data.toLowerCase().indexOf("life") != -1) {
                data = "LHS";
              } else if (data.toLowerCase().indexOf("ulster") != -1) {
                data = "UUBS";
              } else { }
              var options = {
                "AHSS": "0",
                "CEBE": "1",
                "LHS": "2",
                "UUBS": "3"
              };
            }
            jQuery(selector).each(function() {
              if (jQuery(this).val() == options[data]) {
                jQuery(this).click();
              }
            });
          }
        }
      }
    }

    var uid = '';
    uid = jQuery('form').data('stu-uid');
    jQuery(document).ready(function() {
      jQuery.ajax({
        url: 'https://www.ulster.ac.uk/_sl/_web_services/response/_nocache?uid=' + uid + '',
        //url: 'http://localhost:8888/test-json/response.json',
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        success: function(data) {
          if (data) {
            var dob = stuDobDateConvert(data.dob); //yyyy-MM-dd
            var telno = data.mobile_countrycode + data.mobile_no;
            var faculty = data.faculty_desc;
            var school = data.long_schooldesc;
            var campus = data.campus;
            var year = data.programme_year;
            var course_title = data.prog_title;
            var course_code = data.programme;
            var mode = data.moa;
            var cdname = data.cdname;
            var cdemail = data.cdemail;
            fillField(dob, '.stu-dob', 'text');
            fillField(school, '.stu-school', 'text');
            fillField(course_title, '.stu-course-title', 'text');
            fillField(course_code, '.stu-course-code', 'text');
            fillField(year, '.stu-year', 'select');
            fillField(mode, '.stu-mode', 'radio');
            fillField(campus, '.stu-campus', 'radio');
            fillField(faculty, '.stu-faculty', 'radio');
            fillField(telno, '.stu-telno', 'text');
            fillField(cdname, '.stu-cdname', 'text');
            fillField(cdemail, '.stu-cdemail', 'text');
          }
        }
      });
    });
  }
}
initStudentAutoFill();
