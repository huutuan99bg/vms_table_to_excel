(function ($) {
    Drupal.behaviors.vms_table_to_xls = {
        attach: function (context) {
            $('#views-ui-edit-display-form').submit(function () {
                let xlsx_opt = $('#edit-style-options-vms-table-to-excel-vms-table-to-excel-xlsx').is(":checked") == true ? 1 : 0;
                let xls_opt = $('#edit-style-options-vms-table-to-excel-vms-table-to-excel-xls').is(":checked") == true ? 1 : 0;
                let header_opt = $('#edit-style-options-vms-table-to-excel-vms-table-to-excel-header').is(":checked") == true ? 1 : 0;

                $.ajax({
                    url: '/vms_tte/update-tte-config',
                    type: 'POST',
                    data: { tte_id: Drupal.settings.tte_id, tte_value: xlsx_opt + ',' + xls_opt + ',' + header_opt },
                    success: function (response) {
                        console.log(response)
                    }
                });
            });

        }
    }
})(jQuery);