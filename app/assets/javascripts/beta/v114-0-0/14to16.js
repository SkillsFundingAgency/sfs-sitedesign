

/**********
* 14 TO 16 (JavaScript)
* **********/

// jQuery (START)
$(document).ready(function () {

    // On load clear any CSS we don't want to appear when JavaScript is turned on
    $(".govuk-tabs__list").css("padding-bottom", "");

    // Code which stops the user being taken directly to the anchor links for each tab section
    // First set our variables
    var reloads = $("#reloads").text();
    var tab = $("#tab").text();
    
    // Check whether we have run this one off query once already
    if (reloads > 1) {
        // Do nothing...
    }
    else {

        if (tab == "programmefundingformula") {            

            // Show this tab
            $("#tab_programmefundingformula").addClass("govuk-tabs__tab--selected");
            $("#tab_programmefundingformula").attr("aria-selected", true);
            $("#tab_programmefundingformula").attr("tagindex", "0");
            $("#programmefundingformula").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_pupilpremium").removeClass("govuk-tabs__tab--selected");
            $("#tab_pupilpremium").attr("aria-selected", false);
            $("#tab_pupilpremium").attr("tagindex", "-1");
            $("#pupilpremium").addClass("govuk-tabs__panel--hidden");
    
        }
        else if (tab == "pupilpremium") {
    
            // Show this tab
            $("#tab_pupilpremium").addClass("govuk-tabs__tab--selected");
            $("#tab_pupilpremium").attr("aria-selected", true);
            $("#tab_pupilpremium").attr("tagindex", "0");
            $("#pupilpremium").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_programmefundingformula").removeClass("govuk-tabs__tab--selected");
            $("#tab_programmefundingformula").attr("aria-selected", false);
            $("#tab_programmefundingformula").attr("tagindex", "-1");
            $("#programmefundingformula").addClass("govuk-tabs__panel--hidden");
    
        }
        // Default to the default view wired into the GOV.UK tabs component - the 'high needs' tab
        else {
    
            // Show this tab
            $("#tab_programmefundingformula").addClass("govuk-tabs__tab--selected");
            $("#tab_programmefundingformula").attr("aria-selected", true);
            $("#tab_programmefundingformula").attr("tagindex", "0");
            $("#programmefundingformula").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_pupilpremium").removeClass("govuk-tabs__tab--selected");
            $("#tab_pupilpremium").attr("aria-selected", false);
            $("#tab_pupilpremium").attr("tagindex", "-1");
            $("#pupilpremium").addClass("govuk-tabs__panel--hidden");
    
        }

    }
    
});
// jQuery (END)
