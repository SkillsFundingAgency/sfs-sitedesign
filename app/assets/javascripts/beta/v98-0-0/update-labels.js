

/**********
 * UPDATE LABELS (JavaScript)
 * **********/

// jQuery (START)
$(document).ready(function () {
    
    var currentURL = window.location.href;
    var doesThisContainQuery = currentURL.includes("?");

    /***
    *	So we can update the individual labels for each of the NEW documents received from the ESFA
    *   INDIVIDUAL
    ***/

    // NEW document received #1
    $(".document1").click(function() {

        if (doesThisContainQuery == true) {
            currentURL = currentURL + "&documentReceived1=Downloaded";
            window.location.replace(currentURL);
        }
        else {
            currentURL = currentURL + "?documentReceived1=Downloaded";
            window.location.replace(currentURL);
        }
        
    });

    // NEW document received #2
    $(".document2").click(function() {

        if (doesThisContainQuery == true) {
            currentURL = currentURL + "&documentReceived2=Downloaded";
            window.location.replace(currentURL);
        }
        else {
            currentURL = currentURL + "?documentReceived2=Downloaded";
            window.location.replace(currentURL);
        }

    });

    // NEW document received #3
    $(".document3").click(function() {

        if (doesThisContainQuery == true) {
            currentURL = currentURL + "&documentReceived3=Downloaded";
            window.location.replace(currentURL);
        }
        else {
            currentURL = currentURL + "?documentReceived3=Downloaded";
            window.location.replace(currentURL);
        }

    });

    // NEW document received #4
    $(".document4").click(function() {

        if (doesThisContainQuery == true) {
            currentURL = currentURL + "&documentReceived4=Downloaded";
            window.location.replace(currentURL);
        }
        else {
            currentURL = currentURL + "?documentReceived4=Downloaded";
            window.location.replace(currentURL);
        }

    });

    // NEW document received #5
    $(".document5").click(function() {

        if (doesThisContainQuery == true) {
            currentURL = currentURL + "&documentReceived5=Downloaded";
            window.location.replace(currentURL);
        }
        else {
            currentURL = currentURL + "?documentReceived5=Downloaded";
            window.location.replace(currentURL);
        }

    });

    // NEW document received #6
    $(".document6").click(function() {

        if (doesThisContainQuery == true) {
            currentURL = currentURL + "&documentReceived6=Downloaded";
            window.location.replace(currentURL);
        }
        else {
            currentURL = currentURL + "?documentReceived6=Downloaded";
            window.location.replace(currentURL);
        }

    });

    // NEW document received #7
    $(".document7").click(function() {

        if (doesThisContainQuery == true) {
            currentURL = currentURL + "&documentReceived7=Downloaded";
            window.location.replace(currentURL);
        }
        else {
            currentURL = currentURL + "?documentReceived7=Downloaded";
            window.location.replace(currentURL);
        }

    });

    // NEW document received #8
    $(".document8").click(function() {

        if (doesThisContainQuery == true) {
            currentURL = currentURL + "&documentReceived8=Downloaded";
            window.location.replace(currentURL);
        }
        else {
            currentURL = currentURL + "?documentReceived8=Downloaded";
            window.location.replace(currentURL);
        }

    });

    // NEW document received #9
    $(".document9").click(function() {

        if (doesThisContainQuery == true) {
            currentURL = currentURL + "&documentReceived9=Downloaded";
            window.location.replace(currentURL);
        }
        else {
            currentURL = currentURL + "?documentReceived9=Downloaded";
            window.location.replace(currentURL);
        }

    });

    // NEW document received #10
    $(".document10").click(function() {

        if (doesThisContainQuery == true) {
            currentURL = currentURL + "&documentReceived10=Downloaded";
            window.location.replace(currentURL);
        }
        else {
            currentURL = currentURL + "?documentReceived10=Downloaded";
            window.location.replace(currentURL);
        }

    });

    // NEW document received #11
    $(".document11").click(function() {

        if (doesThisContainQuery == true) {
            currentURL = currentURL + "&documentReceived11=Downloaded";
            window.location.replace(currentURL);
        }
        else {
            currentURL = currentURL + "?documentReceived11=Downloaded";
            window.location.replace(currentURL);
        }

    });

    // NEW document received #12
    $(".document12").click(function() {

        if (doesThisContainQuery == true) {
            currentURL = currentURL + "&documentReceived12=Downloaded";
            window.location.replace(currentURL);
        }
        else {
            currentURL = currentURL + "?documentReceived12=Downloaded";
            window.location.replace(currentURL);
        }

    });

    // NEW document received #13
    $(".document13").click(function() {

        if (doesThisContainQuery == true) {
            currentURL = currentURL + "&documentReceived13=Downloaded";
            window.location.replace(currentURL);
        }
        else {
            currentURL = currentURL + "?documentReceived13=Downloaded";
            window.location.replace(currentURL);
        }

    });

    /***
    *	So we can update the ALL labels in bulk for the NEW documents received from the ESFA
    *   BULK (ALL)
    ***/

    // ALL NEW documents received (BULK)
    $(".alldocumentsReceived").click(function() {
        
        if (doesThisContainQuery == true) {
            currentURL = currentURL + "&alldocumentsReceived=Downloaded";
            window.location.replace(currentURL);
        }
        else {
            currentURL = currentURL + "?alldocumentsReceived=Downloaded";
            window.location.replace(currentURL);
        } 
        
    });

});
// jQuery (END)