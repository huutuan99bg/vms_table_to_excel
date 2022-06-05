(function ($) {
    Drupal.behaviors.vms_table_to_xls = {
        attach: function (context) {

            if ($('#vms_table_to_xlsx').length == 0 && Drupal.settings.vms_xlsx_opt == 1) {
                $('<button style="background: transparent; border: 1px solid #dfdfdf; padding: 2px; margin-right: 5px;" id="vms_table_to_xlsx"  title="Tải xuống với định dạng .xlsx"><img width="45" src="/' + Drupal.settings.xlsx_icon_path + '"></button>').insertAfter('.views-table');
                $('#vms_table_to_xlsx').click(function () {
                    downloadExcel('xlsx')
                });
            }

            if ($('#vms_table_to_xls').length == 0 && Drupal.settings.vms_xls_opt == 1) {
                $('<button style="background: transparent; border: 1px solid #dfdfdf; padding: 2px; margin-right: 5px;"  id="vms_table_to_xls" title="Tải xuống với định dạng .xls"><img width="45" src="/' + Drupal.settings.xls_icon_path + '"></button>').insertAfter('.views-table');
                $('#vms_table_to_xls').click(function () {
                    downloadExcel('xls')
                });
            }
            
            function downloadExcel(type) {
                let new_table = $('<table></table>').html($('table.views-table').html());
                let colspan = $('table.views-table>thead>tr').eq(0).find('th').length ? $('table.views-table>thead>tr').eq(0).find('th').length : 1;
                let temp_table = $(new_table);
                if ($('.view-header').length > 0 && Drupal.settings.vms_header_opt == 1) {
                    let header = $('.view-header').text().trim().split(/\r?\n/);
                    let output = '';
                    for (let i = 0; i < header.length; i++) {
                        output+='<tr> <th colspan="'+colspan+'">'+header[i].trim()+'</th></tr>'
                    }
                    temp_table.find('thead').prepend(output)
                }
                // temp_table.insertAfter('#vms_table_to_xlsx');
                var wb = XLSX.utils.table_to_book(temp_table[0], { sheet: "Sheet_0" });
                return XLSX.writeFile(wb, $('#page-title').text() + '.' + (type || 'xlsx'));
            }

        }
    }
})(jQuery);