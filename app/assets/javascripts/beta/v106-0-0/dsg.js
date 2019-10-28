

/**********
 * DSG (JavaScript)
 * **********/

// jQuery (START)
$(document).ready(function () {

    // On load clear any CSS we don't want to appear when JavaScript is turned on
    $(".govuk-tabs__list").css("padding-bottom", "");

    // Code which stops the user being taken directly to the anchor links for each tab section
    var reloads = $("#reloads").text();
    var tab = $("#tab").text();
    
    // Check whether we have run this one off query once already
    if (reloads > 1) {
        // Do nothing...
    }
    else {

        if (tab == "schools") {            

            // Show this tab
            $("#tab_schools").addClass("govuk-tabs__tab--selected");
            $("#tab_schools").attr("aria-selected", true);
            $("#tab_schools").attr("tagindex", "0");
            $("#tab_schools").addClass();
            $("#schools").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_css").removeClass("govuk-tabs__tab--selected");
            $("#tab_css").attr("aria-selected", false);
            $("#tab_css").attr("tagindex", "-1");
            $("#css").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-needs").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-needs").attr("aria-selected", false);
            $("#tab_high-needs").attr("tagindex", "-1");
            $("#high-needs").addClass("govuk-tabs__panel--hidden");
            $("#tab_early-years").removeClass("govuk-tabs__tab--selected");
            $("#tab_early-years").attr("aria-selected", false);
            $("#tab_early-years").attr("tagindex", "-1");
            $("#early-years").addClass("govuk-tabs__panel--hidden");

            // Finally set the DEFAULT CSS to be applied to the print view of the UI served to the user
            $('head').append('<style type="text/css" media="print">#schools { display: inherit; } #css { display: none; } #high-needs { display: none; } #early-years { display: none; }</style>');
    
        }
        else if (tab == "css") {
    
            // Show this tab
            $("#tab_css").addClass("govuk-tabs__tab--selected");
            $("#tab_css").attr("aria-selected", true);
            $("#tab_css").attr("tagindex", "0");
            $("#css").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_schools").removeClass("govuk-tabs__tab--selected");
            $("#tab_schools").attr("aria-selected", false);
            $("#tab_schools").attr("tagindex", "-1");
            $("#schools").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-needs").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-needs").attr("aria-selected", false);
            $("#tab_high-needs").attr("tagindex", "-1");
            $("#high-needs").addClass("govuk-tabs__panel--hidden");
            $("#tab_early-years").removeClass("govuk-tabs__tab--selected");
            $("#tab_early-years").attr("aria-selected", false);
            $("#tab_early-years").attr("tagindex", "-1");
            $("#early-years").addClass("govuk-tabs__panel--hidden");

            // Finally set the DEFAULT CSS to be applied to the print view of the UI served to the user
            $('head').append('<style type="text/css" media="print">#schools { display: none; } #css { display: inherit; } #high-needs { display: none; } #early-years { display: none; }</style>');
    
        }
        else if (tab == "highneeds") {
            
            // Show this tab
            $("#tab_high-needs").addClass("govuk-tabs__tab--selected");
            $("#tab_high-needs").attr("aria-selected", true);
            $("#tab_high-needs").attr("tagindex", "0");
            $("#high-needs").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_schools").removeClass("govuk-tabs__tab--selected");
            $("#tab_schools").attr("aria-selected", false);
            $("#tab_schools").attr("tagindex", "-1");
            $("#schools").addClass("govuk-tabs__panel--hidden");
            $("#tab_css").removeClass("govuk-tabs__tab--selected");
            $("#tab_css").attr("aria-selected", false);
            $("#tab_css").attr("tagindex", "-1");
            $("#css").addClass("govuk-tabs__panel--hidden");
            $("#tab_early-years").removeClass("govuk-tabs__tab--selected");
            $("#tab_early-years").attr("aria-selected", false);
            $("#tab_early-years").attr("tagindex", "-1");
            $("#early-years").addClass("govuk-tabs__panel--hidden");

            // Finally set the DEFAULT CSS to be applied to the print view of the UI served to the user
            $('head').append('<style type="text/css" media="print">#schools { display: none; } #css { display: none; } #high-needs { display: inherit; } #early-years { display: none; }</style>');
    
        }
        else if (tab == "earlyyears") {
    
            // Show this tab
            $("#tab_early-years").addClass("govuk-tabs__tab--selected");
            $("#tab_early-years").attr("aria-selected", true);
            $("#tab_early-years").attr("tagindex", "0");
            $("#early-years").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_schools").removeClass("govuk-tabs__tab--selected");
            $("#tab_schools").attr("aria-selected", false);
            $("#tab_schools").attr("tagindex", "-1");
            $("#schools").addClass("govuk-tabs__panel--hidden");
            $("#tab_css").removeClass("govuk-tabs__tab--selected");
            $("#tab_css").attr("aria-selected", false);
            $("#tab_css").attr("tagindex", "-1");
            $("#css").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-needs").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-needs").attr("aria-selected", false);
            $("#tab_high-needs").attr("tagindex", "-1");
            $("#high-needs").addClass("govuk-tabs__panel--hidden");

            // Finally set the DEFAULT CSS to be applied to the print view of the UI served to the user
            $('head').append('<style type="text/css" media="print">#schools { display: none; } #css { display: none; } #high-needs { display: none; } #early-years { display: inherit; }</style>');
    
        }
        // Default to the default view wired into the GOV.UK tabs component - the 'schools' tab
        else {
    
            // Show this tab
            $("#tab_schools").addClass("govuk-tabs__tab--selected");
            $("#tab_schools").attr("aria-selected", true);
            $("#tab_schools").attr("tagindex", "0");
            $("#schools").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_css").removeClass("govuk-tabs__tab--selected");
            $("#tab_css").attr("aria-selected", false);
            $("#tab_css").attr("tagindex", "-1");
            $("#css").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-needs").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-needs").attr("aria-selected", false);
            $("#tab_high-needs").attr("tagindex", "-1");
            $("#high-needs").addClass("govuk-tabs__panel--hidden");
            $("#tab_early-years").removeClass("govuk-tabs__tab--selected");
            $("#tab_early-years").attr("aria-selected", false);
            $("#tab_early-years").attr("tagindex", "-1");
            $("#early-years").addClass("govuk-tabs__panel--hidden");

            // Finally set the DEFAULT CSS to be applied to the print view of the UI served to the user
            $('head').append('<style type="text/css" media="print">#schools { display: inherit; } #css { display: none; } #high-needs { display: none; } #early-years { display: none; }</style>');
    
        }

    }

    // Dynamically update the CSS being applied to the print view of the UI served to the user
    $(".print-trigger").click(function () {

        var clickedPrintSection = $(this).attr('href');
        
        if (clickedPrintSection == "#schools") {
            $('head').append('<style type="text/css" media="print">#schools { display: inherit; } #css { display: none; } #high-needs { display: none; } #early-years { display: none; }</style>');
        }
        else if (clickedPrintSection == "#css") {
            $('head').append('<style type="text/css" media="print">#schools { display: none; } #css { display: inherit; } #high-needs { display: none; } #early-years { display: none; }</style>');
        }
        else if (clickedPrintSection == "#high-needs") {
            $('head').append('<style type="text/css" media="print">#schools { display: none; } #css { display: none; } #high-needs { display: inherit; } #early-years { display: none; }</style>');
        }
        else if (clickedPrintSection == "#early-years") {
            $('head').append('<style type="text/css" media="print">#schools { display: none; } #css { display: none; } #high-needs { display: none; } #early-years { display: inherit; }</style>');
        }

    });
    
});
// jQuery (END)

// JavaScript (START)

// JavaScript (END)