

/**********
 * CUSTOM GLOBAL BEHAVIOUR (JavaScript)
 * **********/

// jQuery (START)
$(document).ready(function () {

    // Onload of the page set the DEFAULT CSS to be applied to the print view of the UI served to the user (this is updated dynamically on click below)
    var hashURL = window.location.hash;

    if (hashURL == "#schools") {
        $('head').append('<style type="text/css" media="print">#schools { display: inherit; } #css { display: none; } #high-needs { display: none; } #early-years { display: none; }</style>');
    }
    else if (hashURL == "#css") {
        $('head').append('<style type="text/css" media="print">#schools { display: none; } #css { display: inherit; } #high-needs { display: none; } #early-years { display: none; }</style>');
    }
    else if (hashURL == "#high-needs") {
        $('head').append('<style type="text/css" media="print">#schools { display: none; } #css { display: none; } #high-needs { display: inherit; } #early-years { display: none; }</style>');
    }
    else if (hashURL == "#early-years") {
        $('head').append('<style type="text/css" media="print">#schools { display: none; } #css { display: none; } #high-needs { display: none; } #early-years { display: inherit; }</style>');
    }
    // Default to the schools block tab when a user hits the parent URL (https://esfstest.herokuapp.com/beta/v104-0-0/not-signed-in/single-funding-statement/latest/dedicated-schools-grant/funding-breakdown/27-03-2019) directly without a tab or hash (e.g. #schools)
    else if (hashURL == "") {
        $('head').append('<style type="text/css" media="print">#schools { display: inherit; } #css { display: none; } #high-needs { display: none; } #early-years { display: none; }</style>');
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

    // Trigger the select all documents in document list rules (see below) via clicking "Select/deselect all team members" link
    $(".toggle-wrap").click(function (e) {
        
        e.preventDefault();

        var parentLinkText = $(this).find('a:first').text();

        if (parentLinkText == "More") {
            // Update the parent "More" link state
            $('.gem-c-related-navigation__toggle').attr("data-expanded", true);
            $('.gem-c-related-navigation__toggle').text("Show fewer");
            $('.gem-c-related-navigation__toggle').attr("aria-expanded", true);
            // Update the child conditional links            
            $('.gem-c-related-navigation__toggle-more').show();
            $('.gem-c-related-navigation__toggle-more').removeClass("js-hidden");
            $('.gem-c-related-navigation__toggle-more').attr("aria-hidden", false);
        }
        else if (parentLinkText == "Show fewer") {
            // Update the parent "More" link state
            $('.gem-c-related-navigation__toggle').attr("data-expanded", false);
            $('.gem-c-related-navigation__toggle').text("More");
            $('.gem-c-related-navigation__toggle').attr("aria-expanded", false);
            // Update the child conditional links            
            $('.gem-c-related-navigation__toggle-more').hide();
            $('.gem-c-related-navigation__toggle-more').addClass("js-hidden");
            $('.gem-c-related-navigation__toggle-more').attr("aria-hidden", true);
        }

    });

    // Global function to deal with expanding and closing all hidden links in the service, currently covering:
    // a) Download component
    // b) Support component
    $(".expand-hidden-section").click(function (e) {
        
        e.preventDefault();

        var expandHiddenSectionState = $(this).attr('aria-expanded');
        var hiddenSection = $(this).attr('href');

        if (expandHiddenSectionState == "false") {
            // Update the parent (trigger) link
            $(this).attr("data-expanded", true);
            $(this).attr("aria-expanded", true);
            // Then update the child hidden section           
            $(hiddenSection).show();
            $(hiddenSection).removeClass("js-hidden");
            $(hiddenSection).attr("aria-hidden", false);
            $(hiddenSection).css("display", "inline-block");
        }
        else if (expandHiddenSectionState == "true") {
            // Update the parent (trigger) link
            $(this).attr("data-expanded", false);
            $(this).attr("aria-expanded", false);
            // Then update the child hidden section           
            $(hiddenSection).hide();
            $(hiddenSection).addClass("js-hidden");
            $(hiddenSection).attr("aria-hidden", true);
            $(hiddenSection).css("display", "none");
        }

    });

    // Global print function
    $('.print-page').click(function(e){
        
        e.preventDefault()

        // If the clicked item is a link then open the print dialogue
        window.print();        
    });

});
// jQuery (END)

// JavaScript (START)

// Global 'Back' link functionality
function goBack() {
    window.history.back();
}

// JavaScript (END)