

/**********
 * FILTER CHECKBOXES - SENT (JavaScript)
 * **********/

// JavaScript (START)
function filterCheck() {

    var checkbox20182019 = document.getElementById("QueryFilter.Filters.2018-2019").checked;
    var checkbox20172018 = document.getElementById("QueryFilter.Filters.2017-2018").checked;

    // I've had to inverse the normal logic for this to work (don't know why, possibly because the status changes just before the logic is run)
    // RULE 1 - Both boxes NOT CHECKED (NONE)
    if (checkbox20182019 == false && checkbox20172018 == false) {
        window.location.assign("sent-to-esfa-none");
    }
    // RULE 2 - 2018-2019 CHECKED and 2017-2018 NOT CHECKED (sent-from-esfa-2018-2019)
    else if (checkbox20182019 == true && checkbox20172018 == false) {
        window.location.assign("sent-to-esfa-2018-2019");
    }
    // RULE 3 - 2018-2019 NOT CHECKED and 2017-2018 CHECKED (sent-from-esfa-2018-2019)
    else if (checkbox20182019 == false && checkbox20172018 == true) {
        window.location.assign("sent-to-esfa-2017-2018");
    }
    // RULE 4 - Both boxes CHECKED (ALL)
    else if (checkbox20182019 == true && checkbox20172018 == true) {
        window.location.assign("sent-to-esfa");
    }
    // Default - Display all results
    else {
        window.location.assign("sent-to-esfa");
    }

}
// JavaScript (END)