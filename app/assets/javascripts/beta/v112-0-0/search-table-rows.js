

/**********
* SEARCH TABLE ROWS (JavaScript)
* **********/

// jQuery (START)
$(document).ready(function () {

    var _searchContainer = jQuery("[data-checkbox-search-filter]")
    var _searchFieldset = _searchContainer.closest("fieldset")

    // HIDE all non-JS elements
    // Hide the <form> and <button> 
    _searchFieldset.unwrap()
    _searchContainer.find(".search-submit").remove()
    _searchContainer.find(".search-input").removeClass("search-input-with-button")

    // Search for a specific funding term from the glossary table
    $('#searchfundingTerms').keyup(function() {
        
        // Search text
        var search = $(this).val();

        // Hide the 'clear search' link when users enter no characters into the search field
        if (search == "") {
            $('#clearSearchLink').hide();
            $('#clearSearchLink').addClass("hidden");
            $('#clearSearchLink').attr("aria-hidden", true);
            $('#clearSearchLink').attr("hidden");
        }
        // Show the 'clear search' link when at least 1 character has been entered into the search field
        else {
            $('#clearSearchLink').show();
            $('#clearSearchLink').removeClass("hidden");
            $('#clearSearchLink').attr("aria-hidden", false);
            $('#clearSearchLink').removeAttr("hidden");
        }

        // Hide the glossary of funding terms table
        $('table tbody tr').hide();
        $('table tbody tr').addClass("hidden");
        $('table tbody tr').attr("aria-hidden", true);
        $('table tbody tr').attr("hidden");

        // Count total search result
        var numberOfSearchMatches = $('table tbody tr th.fundingTerm:contains("' + search + '")').length;
        
        if (numberOfSearchMatches > 0) {
          
            // If pagination rules are triggered (e.g. > 25 results to view) then only display the 'back to top' link for users
            if (numberOfSearchMatches > 25) {
                $('#backToTopLink').show();
                $('#backToTopLink').removeClass("hidden");
                $('#backToTopLink').attr("aria-hidden", false);
                $('#backToTopLink').removeAttr("hidden");
            }
            else {
                $('#backToTopLink').hide();
                $('#backToTopLink').addClass("hidden");
                $('#backToTopLink').attr("aria-hidden", true);
                $('#backToTopLink').attr("hidden");
            }

            // Show the glossary of funding terms table
            $('#fundingTermsTable').show();
            $('#fundingTermsTable').removeClass("hidden");
            $('#fundingTermsTable').attr("aria-hidden", false);
            $('#fundingTermsTable').removeAttr("hidden");

            // Show all rows that contain the matching search term
            $('table tbody tr th.fundingTerm:contains("' + search + '")').each(function() {
                $(this).closest('tr').show();
                $(this).closest('tr').removeClass("hidden");
                $(this).closest('tr').attr("aria-hidden", false);
                $(this).closest('tr').removeAttr("hidden");
            });

            // Hide the 'no search results' hidden section
            $('#noSearchResults').hide();
            $('#noSearchResults').addClass("hidden");
            $('#noSearchResults').attr("aria-hidden", true);
            $('#noSearchResults').attr("hidden");

        }
        else {

            // Hide the glossary of funding terms table
            $('#fundingTermsTable').hide();
            $('#fundingTermsTable').addClass("hidden");
            $('#fundingTermsTable').attr("aria-hidden", true);
            $('#fundingTermsTable').attr("hidden");

            // Update the content (e.g. display the user's search term) for the 'no search results' hidden section
            $("#noSearchResults").text("0 matches for “" + search + "”");

            // Show the 'no search results' hidden section
            $('#noSearchResults').show();
            $('#noSearchResults').removeClass("hidden");
            $('#noSearchResults').attr("aria-hidden", false);
            $('#noSearchResults').removeAttr("hidden");

            // Hide the 'back to top' link
            $('#backToTopLink').hide();
            $('#backToTopLink').addClass("hidden");
            $('#backToTopLink').attr("aria-hidden", true);
            $('#backToTopLink').attr("hidden");
            
        }
        
    });

});
// jQuery (END)

// JavaScript (START)
// Case-insensitive searching (Note - remove the below script for Case sensitive search )
$.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function(elem) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});
// JavaScript (END)
