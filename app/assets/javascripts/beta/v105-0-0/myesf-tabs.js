

/**********
 * MYESF Tabs (JavaScript)
 * **********/

// jQuery (START)
$(document).ready(function () {

    // On load clear any CSS we don't want to appear when JavaScript is turned on
    $(".govuk-tabs__list").css("padding-bottom", "");

    // Code which stops the user being taken directly to the anchor links dfor each tab section
    var reloads = $("#reloads").text();
    var tab = $("#tab").text();
    
    // Check whether we have run this one off query once already
    if (reloads > 1) {
        // Do nothing...
    }
    else {

        if (tab == "external") {            

            // Show this tab
            $("#external").addClass("govuk-tabs__tab--selected");
            $("#external").attr("aria-selected", true);
            $("#external").attr("tagindex", "0");
            $("#external").addClass();
            $("#external").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#internal").removeClass("govuk-tabs__tab--selected");
            $("#internal").attr("aria-selected", false);
            $("#internal").attr("tagindex", "-1");
            $("#internal").addClass("govuk-tabs__panel--hidden");

        }
        else if (tab == "internal") {
    
            // Show this tab
            $("#internal").addClass("govuk-tabs__tab--selected");
            $("#internal").attr("aria-selected", true);
            $("#internal").attr("tagindex", "0");
            $("#internal").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#external").removeClass("govuk-tabs__tab--selected");
            $("#external").attr("aria-selected", false);
            $("#external").attr("tagindex", "-1");
            $("#external").addClass("govuk-tabs__panel--hidden");

        }
        // Default to the default view wired into the GOV.UK tabs component - the 'external' tab
        else {
    
            // Show this tab
            $("#external").addClass("govuk-tabs__tab--selected");
            $("#external").attr("aria-selected", true);
            $("#external").attr("tagindex", "0");
            $("#external").addClass();
            $("#external").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#internal").removeClass("govuk-tabs__tab--selected");
            $("#internal").attr("aria-selected", false);
            $("#internal").attr("tagindex", "-1");
            $("#internal").addClass("govuk-tabs__panel--hidden");

        }

    }
    
});
// jQuery (END)

// JavaScript (START)

// JavaScript (END)