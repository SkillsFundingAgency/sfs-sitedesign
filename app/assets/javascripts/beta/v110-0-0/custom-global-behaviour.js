

/**********
 * CUSTOM GLOBAL BEHAVIOUR (JavaScript)
 * **********/

// jQuery (START)
$(document).ready(function () {

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