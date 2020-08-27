

/**********
* DSG (JavaScript)
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

        if (tab == "school") {            

            // Show this tab
            $("#tab_school").addClass("govuk-tabs__tab--selected");
            $("#tab_school").attr("aria-selected", true);
            $("#tab_school").attr("tagindex", "0");
            $("#tab_school").addClass();
            $("#school").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_mfg").removeClass("govuk-tabs__tab--selected");
            $("#tab_mfg").attr("aria-selected", false);
            $("#tab_mfg").attr("tagindex", "-1");
            $("#mfg").addClass("govuk-tabs__panel--hidden");
            $("#tab_post-opening-grant").removeClass("govuk-tabs__tab--selected");
            $("#tab_post-opening-grant").attr("aria-selected", false);
            $("#tab_post-opening-grant").attr("tagindex", "-1");
            $("#post-opening-grant").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-needs").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-needs").attr("aria-selected", false);
            $("#tab_high-needs").attr("tagindex", "-1");
            $("#high-needs").addClass("govuk-tabs__panel--hidden");
    
        }
        else if (tab == "mfg") {
    
            // Show this tab
            $("#tab_mfg").addClass("govuk-tabs__tab--selected");
            $("#tab_mfg").attr("aria-selected", true);
            $("#tab_mfg").attr("tagindex", "0");
            $("#mfg").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_school").removeClass("govuk-tabs__tab--selected");
            $("#tab_school").attr("aria-selected", false);
            $("#tab_school").attr("tagindex", "-1");
            $("#school").addClass("govuk-tabs__panel--hidden");
            $("#tab_post-opening-grant").removeClass("govuk-tabs__tab--selected");
            $("#tab_post-opening-grant").attr("aria-selected", false);
            $("#tab_post-opening-grant").attr("tagindex", "-1");
            $("#post-opening-grant").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-needs").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-needs").attr("aria-selected", false);
            $("#tab_high-needs").attr("tagindex", "-1");
            $("#high-needs").addClass("govuk-tabs__panel--hidden");
    
        }
        else if (tab == "postopeninggrant") {
            
            // Show this tab
            $("#tab_post-opening-grant").addClass("govuk-tabs__tab--selected");
            $("#tab_post-opening-grant").attr("aria-selected", true);
            $("#tab_post-opening-grant").attr("tagindex", "0");
            $("#post-opening-grant").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_school").removeClass("govuk-tabs__tab--selected");
            $("#tab_school").attr("aria-selected", false);
            $("#tab_school").attr("tagindex", "-1");
            $("#school").addClass("govuk-tabs__panel--hidden");
            $("#tab_mfg").removeClass("govuk-tabs__tab--selected");
            $("#tab_mfg").attr("aria-selected", false);
            $("#tab_mfg").attr("tagindex", "-1");
            $("#mfg").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-needs").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-needs").attr("aria-selected", false);
            $("#tab_high-needs").attr("tagindex", "-1");
            $("#high-needs").addClass("govuk-tabs__panel--hidden");
    
        }
        else if (tab == "highneeds") {
            
            // Show this tab
            $("#tab_high-needs").addClass("govuk-tabs__tab--selected");
            $("#tab_high-needs").attr("aria-selected", true);
            $("#tab_high-needs").attr("tagindex", "0");
            $("#high-needs").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_school").removeClass("govuk-tabs__tab--selected");
            $("#tab_school").attr("aria-selected", false);
            $("#tab_school").attr("tagindex", "-1");
            $("#school").addClass("govuk-tabs__panel--hidden");
            $("#tab_mfg").removeClass("govuk-tabs__tab--selected");
            $("#tab_mfg").attr("aria-selected", false);
            $("#tab_mfg").attr("tagindex", "-1");
            $("#mfg").addClass("govuk-tabs__panel--hidden");
            $("#tab_post-opening-grant").removeClass("govuk-tabs__tab--selected");
            $("#tab_post-opening-grant").attr("aria-selected", false);
            $("#tab_post-opening-grant").attr("tagindex", "-1");
            $("#post-opening-grant").addClass("govuk-tabs__panel--hidden");
    
        }
        // Default to the default view wired into the GOV.UK tabs component - the 'school' tab
        else {
    
            // Show this tab
            $("#tab_school").addClass("govuk-tabs__tab--selected");
            $("#tab_school").attr("aria-selected", true);
            $("#tab_school").attr("tagindex", "0");
            $("#school").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_mfg").removeClass("govuk-tabs__tab--selected");
            $("#tab_mfg").attr("aria-selected", false);
            $("#tab_mfg").attr("tagindex", "-1");
            $("#mfg").addClass("govuk-tabs__panel--hidden");
            $("#tab_post-opening-grant").removeClass("govuk-tabs__tab--selected");
            $("#tab_post-opening-grant").attr("aria-selected", false);
            $("#tab_post-opening-grant").attr("tagindex", "-1");
            $("#post-opening-grant").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-needs").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-needs").attr("aria-selected", false);
            $("#tab_high-needs").attr("tagindex", "-1");
            $("#high-needs").addClass("govuk-tabs__panel--hidden");
    
        }

    }
    
});
// jQuery (END)

// JavaScript (START)

// JavaScript (END)