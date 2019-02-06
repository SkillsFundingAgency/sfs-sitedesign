

/**********
 * SEARCH RADIO BUTTONS (JavaScript)
 * **********/

// jQuery (START)
$(document).ready(function () {

    // $('input[name="academyOrSchoolName"]').click(function() {
    $('input[name="academyOrSchoolName"]').on('change', function() {
        
        var selectedRadioButtonValue = $('input[name=academyOrSchoolName]:checked').val(); 

        $("#clearSearchAndSelection").text("Clear search and selection");
        $("#selectedChoiceHeading").text("You’ve selected “" + selectedRadioButtonValue + "”");
    });

});
// jQuery (END)

// JavaScript (START)
// JavaScript (END)