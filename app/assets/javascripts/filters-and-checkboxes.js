

/*
----------------------------------
Filter and Checkboxes (JavaScript)
----------------------------------
*/

// jQuery (READY)
$(document).ready(function () {

    // Filter (via clicking link) to show me only documents with errors
    $("#showMeErrorsOnlyLink").click(function () {
        $("#queryFilterStatusError").trigger("click");
    });

    // Filter logic for filter #1 (document type)
    $("#document-type-filters :input:checkbox").change(function () {
        
        var showAll = true;
        
        $('tr').not('.first').hide();
        $('input[type=checkbox]').each(function () {
            
            if ($(this)[0].checked) {
                
                showAll = false;
                var status = $(this).attr('rel');
                var value = $(this).val();

                $('td.' + status + '[rel="' + value + '"]').parent('tr').show();
            }

        });

        if (showAll) {
            $('tr').show();
        }

    });

    // Filter logic for filter #2 (status)
    $("#status-filters :input:checkbox").change(function () {
        
        var showAll = true;
        
        $('tr').not('.first').hide();
        $('input[type=checkbox]').each(function () {
            
            if ($(this)[0].checked) {
                
                showAll = false;
                var status = $(this).attr('rel');
                var value = $(this).val();

                $('td.' + status + '[rel="' + value + '"]').parent('tr').show();
            }

        });

        if (showAll) {
            $('tr').show();
        }

    });

});

// Select and unselect all documents in the document list
function selectAll(divid) {
    
    var checks = document.querySelectorAll('#' + divid + ' input[type="checkbox"]');
    
    for (var i = 0; i < checks.length; i++) {
        
        var check = checks[i];
        
        if (check.checked) {
            check.checked = false;
        }
        else {
            check.checked = true;
        }

    }

}