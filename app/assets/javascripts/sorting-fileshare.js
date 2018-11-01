

/*
--------------------
Sorting (JavaScript)
--------------------
*/

// jQuery (READY)
// Change the visual (sorting) indicators for each table column heading whenever they are clicked
$(document).ready(function() {

    // Column 1 (on click)
    $("#file-name").click(function() {

        var fileName = $("#file-name").hasClass("active");
        var documentType = $("#document-type").hasClass("active");
        var documentStatus = $("#document-status").hasClass("active");

        if (fileName == true) {

            var fileNameHodChevronUp = $("#file-name-hod-chevron-up").hasClass("hidden");
            var fileNameHodChevronDown = $("#file-name-hod-chevron-down").hasClass("hidden");
            
            if (fileNameHodChevronUp == true) {
                $("#file-name-hod-chevron-up").removeClass("hidden");
                $("#file-name-hod-chevron-down").addClass("hidden");
            }
            else if (fileNameHodChevronDown == true) {
                $("#file-name-hod-chevron-up").addClass("hidden");
                $("#file-name-hod-chevron-down").removeClass("hidden");
            }

        }      
        else if (documentType == true) {
            $("#file-name").addClass("tab-header-active");
            $("#file-name").addClass("active");
            $("#file-name-hod-chevron-up").removeClass("hidden");
            $("#file-name-hod-chevron-down").addClass("hidden");
            $("#document-type").removeClass("tab-header-active");
            $("#document-type").removeClass("active");
            $("#document-type-hod-chevron-up").removeClass("hidden");
            $("#document-type-hod-chevron-down").removeClass("hidden");
        }
        else if (documentStatus == true) {
            $("#file-name").addClass("tab-header-active");
            $("#file-name").addClass("active");
            $("#file-name-hod-chevron-up").removeClass("hidden");
            $("#file-name-hod-chevron-down").addClass("hidden");
            $("#document-status").removeClass("tab-header-active");
            $("#document-status").removeClass("active");
            $("#document-status-hod-chevron-up").removeClass("hidden");
            $("#document-status-hod-chevron-down").removeClass("hidden");
        }

    });

    // Column 2 (on click)
    $("#document-type").click(function() {

        var fileName = $("#file-name").hasClass("active");
        var documentType = $("#document-type").hasClass("active");
        var documentStatus = $("#document-status").hasClass("active");

        if (fileName == true) {
            $("#file-name").removeClass("tab-header-active");
            $("#file-name").removeClass("active");
            $("#file-name-hod-chevron-up").removeClass("hidden");
            $("#file-name-hod-chevron-down").removeClass("hidden");
            $("#document-type").addClass("tab-header-active");
            $("#document-type").addClass("active");
            $("#document-type-hod-chevron-up").removeClass("hidden");
            $("#document-type-hod-chevron-down").addClass("hidden");
        }      
        else if (documentType == true) {

            var documentTypeHodChevronUp = $("#document-type-hod-chevron-up").hasClass("hidden");
            var documentTypeHodChevronDown = $("#document-type-hod-chevron-down").hasClass("hidden");
            
            if (documentTypeHodChevronUp == true) {
                $("#document-type-hod-chevron-up").removeClass("hidden");
                $("#document-type-hod-chevron-down").addClass("hidden");
            }
            else if (documentTypeHodChevronDown == true) {
                $("#document-type-hod-chevron-up").addClass("hidden");
                $("#document-type-hod-chevron-down").removeClass("hidden");
            }

        }
        else if (documentStatus == true) {
            $("#document-type").addClass("tab-header-active");
            $("#document-type").addClass("active");
            $("#document-type-hod-chevron-up").removeClass("hidden");
            $("#document-type-hod-chevron-down").addClass("hidden");
            $("#document-status").removeClass("tab-header-active");
            $("#document-status").removeClass("active");
            $("#document-status-hod-chevron-up").removeClass("hidden");
            $("#document-status-hod-chevron-down").removeClass("hidden");
        }

    });

    // Column 3 (on click)
    $("#document-status").click(function() {

        var fileName = $("#file-name").hasClass("active");
        var documentType = $("#document-type").hasClass("active");
        var documentStatus = $("#document-status").hasClass("active");

        if (fileName == true) {
            $("#file-name").removeClass("tab-header-active");
            $("#file-name").removeClass("active");
            $("#file-name-hod-chevron-up").removeClass("hidden");
            $("#file-name-hod-chevron-down").removeClass("hidden");
            $("#document-status").addClass("tab-header-active");
            $("#document-status").addClass("active");
            $("#document-status-hod-chevron-up").removeClass("hidden");
            $("#document-status-hod-chevron-down").addClass("hidden");
        }      
        else if (documentType == true) {
            $("#document-type").removeClass("tab-header-active");
            $("#document-type").removeClass("active");
            $("#document-type-hod-chevron-up").removeClass("hidden");
            $("#document-type-hod-chevron-down").removeClass("hidden");
            $("#document-status").addClass("tab-header-active");
            $("#document-status").addClass("active");
            $("#document-status-hod-chevron-up").removeClass("hidden");
            $("#document-status-hod-chevron-down").addClass("hidden");
        }
        else if (documentStatus == true) {

            var documentStatusHodChevronUp = $("#document-status-hod-chevron-up").hasClass("hidden");
            var documentStatusHodChevronDown = $("#document-status-hod-chevron-down").hasClass("hidden");
            
            if (documentStatusHodChevronUp == true) {
                $("#document-status-hod-chevron-up").removeClass("hidden");
                $("#document-status-hod-chevron-down").addClass("hidden");
            }
            else if (documentStatusHodChevronDown == true) {
                $("#document-status-hod-chevron-up").addClass("hidden");
                $("#document-status-hod-chevron-down").removeClass("hidden");
            }

        }

    });

});

// JavaScript
// Sort the table rows
function sortTable(n) {
        
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("sortable-table");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc"; 
    
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the four elements you want to compare,
            one from EACH ROW: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            // z = rows[i + 2].getElementsByTagName("TD")[n];
            // y = rows[i + 3].getElementsByTagName("TD")[n];
            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir == "asc") {
                
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }

            }
            else if (dir == "desc") {
            
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }

            }

        }

        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount ++; 
        }
        else {
            
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }

        }

    }
}