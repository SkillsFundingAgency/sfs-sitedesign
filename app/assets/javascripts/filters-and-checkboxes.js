

/**********
 * FILTERS AND CHECKBOXES (JavaScript)
 * **********/

// jQuery (START)
$(document).ready(function () {

    // Trigger the select all documents in document list rules (see below) via clicking "Select/deselect all team members" link
    $("#selectAllTrigger").click(function () {
        $("#document-checkbox").trigger("click");
    });

    // Filter (via clicking ERROR link) to show me only documents with errors
    $("#showMeErrorsOnlyErrorLink").click(function () {
        $("#queryFilterStatusError").trigger("click");
    });

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

    // Filter logic for filter #3 (academic year)
    $("#academic-year-filters :input:checkbox").change(function () {
    
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
// jQuery (END)

// JavaScript (START)
// Select and unselect all documents in the document list
function selectAll(divid) {
    
    var selectAllCheckbox = document.getElementById('document-checkbox').checked;
    var totalDocumentCount = document.getElementById('totalDocumentCount').textContent;

    if (selectAllCheckbox == true) {

        var checks = document.querySelectorAll('#' + divid + ' input[type="checkbox"]');
        
        for (var i = 0; i < checks.length; i++) {
        
            var check = checks[i];
            check.checked = true;
    
        }

        document.getElementById("documentsSelectedText").innerHTML = totalDocumentCount + " documents selected";

    }
    else {

        var checks = document.querySelectorAll('#' + divid + ' input[type="checkbox"]');

        for (var i = 0; i < checks.length; i++) {
        
            var check = checks[i];
            check.checked = false;
    
        }

        document.getElementById("documentsSelectedText").innerHTML = "0 documents selected";

    }

}
// JavaScript (END)