

/**********
 * UPDATE LABELS (JavaScript)
 * **********/

// jQuery (START)
$(document).ready(function () {
    
    /***
    *	So we can update the individual labels for each of the NEW documents received from the ESFA
    *   INDIVIDUAL
    ***/

    // NEW document received #1
    $(".document1").click(function() {

        var currentURL = window.location.href;
        var doesThisContainQ = currentURL.includes("q");

        if (doesThisContainQ == true) {
            window.location = window.location.href + "&documentReceived1=Downloaded";
        }
        else {
            window.location = window.location.href + "?documentReceived1=Downloaded";
        }
        
    });

    // NEW document received #2
    $(".document2").click(function() {

        var currentURL = window.location.href;
        var doesThisContainQ = currentURL.includes("q");

        if (doesThisContainQ == true) {
            window.location = window.location.href + "&documentReceived2=Downloaded";
        }
        else {
            window.location = window.location.href + "?documentReceived2=Downloaded";
        }

    });

    // NEW document received #3
    $(".document3").click(function() {

        var currentURL = window.location.href;
        var doesThisContainQ = currentURL.includes("q");

        if (doesThisContainQ == true) {
            window.location = window.location.href + "&documentReceived3=Downloaded";
        }
        else {
            window.location = window.location.href + "?documentReceived3=Downloaded";
        }

    });

    // NEW document received #4
    $(".document4").click(function() {

        var currentURL = window.location.href;
        var doesThisContainQ = currentURL.includes("q");

        if (doesThisContainQ == true) {
            window.location = window.location.href + "&documentReceived4=Downloaded";
        }
        else {
            window.location = window.location.href + "?documentReceived4=Downloaded";
        }

    });

    // NEW document received #5
    $(".document5").click(function() {

        var currentURL = window.location.href;
        var doesThisContainQ = currentURL.includes("q");

        if (doesThisContainQ == true) {
            window.location = window.location.href + "&documentReceived5=Downloaded";
        }
        else {
            window.location = window.location.href + "?documentReceived5=Downloaded";
        }

    });

    // NEW document received #6
    $(".document6").click(function() {

        var currentURL = window.location.href;
        var doesThisContainQ = currentURL.includes("q");

        if (doesThisContainQ == true) {
            window.location = window.location.href + "&documentReceived6=Downloaded";
        }
        else {
            window.location = window.location.href + "?documentReceived6=Downloaded";
        }

    });

    // NEW document received #7
    $(".document7").click(function() {

        var currentURL = window.location.href;
        var doesThisContainQ = currentURL.includes("q");

        if (doesThisContainQ == true) {
            window.location = window.location.href + "&documentReceived7=Downloaded";
        }
        else {
            window.location = window.location.href + "?documentReceived7=Downloaded";
        }

    });

    // NEW document received #8
    $(".document8").click(function() {

        var currentURL = window.location.href;
        var doesThisContainQ = currentURL.includes("q");

        if (doesThisContainQ == true) {
            window.location = window.location.href + "&documentReceived8=Downloaded";
        }
        else {
            window.location = window.location.href + "?documentReceived8=Downloaded";
        }

    });

    // NEW document received #9
    $(".document9").click(function() {

        var currentURL = window.location.href;
        var doesThisContainQ = currentURL.includes("q");

        if (doesThisContainQ == true) {
            window.location = window.location.href + "&documentReceived9=Downloaded";
        }
        else {
            window.location = window.location.href + "?documentReceived9=Downloaded";
        }

    });

    // NEW document received #10
    $(".document10").click(function() {

        var currentURL = window.location.href;
        var doesThisContainQ = currentURL.includes("q");

        if (doesThisContainQ == true) {
            window.location = window.location.href + "&documentReceived10=Downloaded";
        }
        else {
            window.location = window.location.href + "?documentReceived10=Downloaded";
        }

    });

    // NEW document received #11
    $(".document11").click(function() {

        var currentURL = window.location.href;
        var doesThisContainQ = currentURL.includes("q");

        if (doesThisContainQ == true) {
            window.location = window.location.href + "&documentReceived11=Downloaded";
        }
        else {
            window.location = window.location.href + "?documentReceived11=Downloaded";
        }

    });

    // NEW document received #12
    $(".document12").click(function() {

        var currentURL = window.location.href;
        var doesThisContainQ = currentURL.includes("q");

        if (doesThisContainQ == true) {
            window.location = window.location.href + "&documentReceived12=Downloaded";
        }
        else {
            window.location = window.location.href + "?documentReceived12=Downloaded";
        }

    });

    // NEW document received #13
    $(".document13").click(function() {

        var currentURL = window.location.href;
        var doesThisContainQ = currentURL.includes("q");

        if (doesThisContainQ == true) {
            window.location = window.location.href + "&documentReceived13=Downloaded";
        }
        else {
            window.location = window.location.href + "?documentReceived13=Downloaded";
        }

    });

    /***
    *	So we can update the ALL labels in bulk for the NEW documents received from the ESFA
    *   BULK (ALL)
    ***/

    // ALL NEW documents received (BULK)
    $(".alldocumentsReceived").click(function() {
        window.location = "received-from-esfa?paginationRequired=true&page1=true&alldocumentsReceived=Downloaded";
    });

});
// jQuery (END)