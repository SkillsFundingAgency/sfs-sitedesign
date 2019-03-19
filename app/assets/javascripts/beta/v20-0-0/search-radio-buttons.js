

/**********
 * SEARCH RADIO BUTTONS (JavaScript)
 * **********/

// jQuery (START)
$(document).ready(function () {

    $('input[name="academyOrSchoolName"]').on('change', function() {
        
        var selectedRadioButtonValue = $('input[name=academyOrSchoolName]:checked').val(); 
        var clearFilter = jQuery("[data-clear-filter]");
        var searchContainer = jQuery("[data-checkbox-search-filter]");
        var searchInput = searchContainer.find("input");
        var searchInputValue = searchInput.val();

        // If the user hasn't searched
        if (searchInputValue == "") {

            // Show the hidden link
            $(clearFilter).removeClass("hidden");
            $(clearFilter).attr("aria-hidden", false);
            $(clearFilter).removeAttr("hidden");
            
            // Rename the link and associated header 
            $("#clearSearchAndSelection").text("Clear selection");
            $("#selectedChoiceHeading").text("You’ve selected “" + selectedRadioButtonValue + "”");

        }
        // Unless they have searched...
        else  {
            // Show the hidden link
            $(clearFilter).removeClass("hidden");
            $(clearFilter).attr("aria-hidden", false);
            $(clearFilter).removeAttr("hidden");
            
            // Rename the link and associated header 
            $("#clearSearchAndSelection").text("Clear search and selection");
            $("#selectedChoiceHeading").text("You’ve selected “" + selectedRadioButtonValue + "”");
        }

    });

});
// jQuery (END)

// JavaScript (START)
// JavaScript (END)