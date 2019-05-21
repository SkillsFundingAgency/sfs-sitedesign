

/**********
 * CUSTOM GLOBAL BEHAVIOUR (JavaScript)
 * **********/

// jQuery (START)
$(document).ready(function () {

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

});
// jQuery (END)