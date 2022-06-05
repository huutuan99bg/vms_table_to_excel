CONTENTS OF THIS FILE
---------------------

 * Introductions
 * Installations
 * Configurations
 
--------------------------------------------------------------------------------
                                Introductions
--------------------------------------------------------------------------------
Simple module that allows to export Views table data to Excel (xls/xlsx).
Option to export view header or not.

--------------------------------------------------------------------------------
                                Installations
--------------------------------------------------------------------------------
Dependencies:
    1. jquery_update
    2. views
    
Installations:
    1. Extract the zip file of the module.
    2. Upload the entire directory and all its contents to your modules directory (sites/all/modules/vms_table_to_excel).
    3. Go to Admin -> Modules, and enable Views table to excel(xls/xlsx).

--------------------------------------------------------------------------------
                                Configurations
--------------------------------------------------------------------------------
1. Create view with display type of table (or similar).
2. Click settings of display format.
3. Go to fieldset "VMS Export Table to Excel":
    - Option Export type .xlsx
    - Option Export type .xls
    - Option Export view header
4. Click Apply 
