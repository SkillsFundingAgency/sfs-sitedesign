

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
        window.location = "received-from-esfa?paginationRequired=true&page1=true&documentReceived1=Downloaded";
    });

    // NEW document received #2
    $(".document2").click(function() {
        window.location = "received-from-esfa?paginationRequired=true&page1=true&documentReceived2=Downloaded";
    });

    // NEW document received #3
    $(".document3").click(function() {
        window.location = "received-from-esfa?paginationRequired=true&page1=true&documentReceived3=Downloaded";
    });

    // NEW document received #4
    $(".document4").click(function() {
        window.location = "received-from-esfa?paginationRequired=true&page1=true&documentReceived4=Downloaded";
    });

    // NEW document received #5
    $(".document5").click(function() {
        window.location = "received-from-esfa?paginationRequired=true&page1=true&documentReceived5=Downloaded";
    });

    // NEW document received #6
    $(".document6").click(function() {
        window.location = "received-from-esfa?paginationRequired=true&page1=true&documentReceived6=Downloaded";
    });

    // NEW document received #7
    $(".document7").click(function() {
        window.location = "received-from-esfa?paginationRequired=true&page1=true&documentReceived7=Downloaded";
    });

    // NEW document received #8
    $(".document8").click(function() {
        window.location = "received-from-esfa?paginationRequired=true&page1=true&documentReceived8=Downloaded";
    });

    // NEW document received #9
    $(".document9").click(function() {
        window.location = "received-from-esfa?paginationRequired=true&page1=true&documentReceived9=Downloaded";
    });

    // NEW document received #10
    $(".document10").click(function() {
        window.location = "received-from-esfa?paginationRequired=true&page1=true&documentReceived10=Downloaded";
    });

    // NEW document received #11
    $(".document11").click(function() {
        window.location = "received-from-esfa?paginationRequired=true&page1=true&documentReceived11=Downloaded";
    });

    // NEW document received #12
    $(".document12").click(function() {
        window.location = "received-from-esfa?paginationRequired=true&page1=true&documentReceived12=Downloaded";
    });

    // NEW document received #13
    $(".document13").click(function() {
        window.location = "received-from-esfa?paginationRequired=true&page1=true&documentReceived13=Downloaded";
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