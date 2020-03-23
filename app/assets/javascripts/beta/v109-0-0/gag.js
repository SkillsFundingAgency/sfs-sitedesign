

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

        // Only execute this print logic on mobile view (e.g. when ALL DSG tabs are displaying) when the screen width is less than 641 pixels
        if (screen.width < 641) {
            $('head').append('<style type="text/css" media="print">#school { display: inherit; } #mfg { display: inherit; } #post-opening-grant { display: inherit; }</style>');
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
    
                // Finally set the DEFAULT CSS to be applied to the print view of the UI served to the user
                $('head').append('<style type="text/css" media="print">#school { display: inherit; } #mfg { display: none; } #post-opening-grant { display: none; }</style>');
        
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
    
                // Finally set the DEFAULT CSS to be applied to the print view of the UI served to the user
                $('head').append('<style type="text/css" media="print">#school { display: none; } #mfg { display: inherit; } #post-opening-grant { display: none; }</style>');
        
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
    
                // Finally set the DEFAULT CSS to be applied to the print view of the UI served to the user
                $('head').append('<style type="text/css" media="print">#school { display: none; } #mfg { display: none; } #post-opening-grant { display: inherit; }</style>');
        
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
    
                // Finally set the DEFAULT CSS to be applied to the print view of the UI served to the user
                $('head').append('<style type="text/css" media="print">#school { display: inherit; } #mfg { display: none; } #post-opening-grant { display: none; }</style>');
        
            }

        }        

    }

    // Dynamically update the CSS being applied to the print view of the UI served to the user
    $(".print-trigger").click(function () {

        var clickedPrintSection = $(this).attr('href');
        
        if (clickedPrintSection == "#school") {
            $('head').append('<style type="text/css" media="print">#school { display: inherit; } #mfg { display: none; } #post-opening-grant { display: none; }</style>');
        }
        else if (clickedPrintSection == "#mfg") {
            $('head').append('<style type="text/css" media="print">#school { display: none; } #mfg { display: inherit; } #post-opening-grant { display: none; }</style>');
        }
        else if (clickedPrintSection == "#post-opening-grant") {
            $('head').append('<style type="text/css" media="print">#school { display: none; } #mfg { display: none; } #post-opening-grant { display: inherit; }</style>');
        }

    });
    
});
// jQuery (END)

// JavaScript (START)

// JavaScript (END)