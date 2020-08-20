

/**********
* 16 TO 19 (JavaScript)
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

        if (tab == "highneeds") {            

            // Show this tab
            $("#tab_highneeds").addClass("govuk-tabs__tab--selected");
            $("#tab_highneeds").attr("aria-selected", true);
            $("#tab_highneeds").attr("tagindex", "0");
            $("#highneeds").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_studentfinancialsupport").removeClass("govuk-tabs__tab--selected");
            $("#tab_studentfinancialsupport").attr("aria-selected", false);
            $("#tab_studentfinancialsupport").attr("tagindex", "-1");
            $("#studentfinancialsupport").addClass("govuk-tabs__panel--hidden");
    
        }
        else if (tab == "studentfinancialsupport") {
    
            // Show this tab
            $("#tab_studentfinancialsupport").addClass("govuk-tabs__tab--selected");
            $("#tab_studentfinancialsupport").attr("aria-selected", true);
            $("#tab_studentfinancialsupport").attr("tagindex", "0");
            $("#studentfinancialsupport").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_highneeds").removeClass("govuk-tabs__tab--selected");
            $("#tab_highneeds").attr("aria-selected", false);
            $("#tab_highneeds").attr("tagindex", "-1");
            $("#highneeds").addClass("govuk-tabs__panel--hidden");
    
        }
        // Default to the default view wired into the GOV.UK tabs component - the 'high needs' tab
        else {
    
            // Show this tab
            $("#tab_highneeds").addClass("govuk-tabs__tab--selected");
            $("#tab_highneeds").attr("aria-selected", true);
            $("#tab_highneeds").attr("tagindex", "0");
            $("#highneeds").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_studentfinancialsupport").removeClass("govuk-tabs__tab--selected");
            $("#tab_studentfinancialsupport").attr("aria-selected", false);
            $("#tab_studentfinancialsupport").attr("tagindex", "-1");
            $("#studentfinancialsupport").addClass("govuk-tabs__panel--hidden");
    
        }

    }
    
});
// jQuery (END)
