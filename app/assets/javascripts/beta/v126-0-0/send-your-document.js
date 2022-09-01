

/**********
* SEND YOUR DOCUMENT (JavaScript)
* **********/

// jQuery (START)
$(document).ready(function () {

    // HIDE all non-JS elements
    $("#nonJavaScript").hide();
    $("#nonJavaScript").addClass("hidden");
    $("#nonJavaScript").attr("aria-hidden", true);
    $("#nonJavaScript").attr("hidden");
    
    // Trigger that fires when a user selects a file to send to the ESFA
    $("#fileInput").change(function () {

        // Get the file name waiting for upload
        var userDocumentName = $('input[type=file]').val().split('\\').pop();
        
        // Hide the input type="file" HTML element 
        $("#fileUploadComponent").hide();
        $("#fileUploadComponent").addClass("hidden");
        $("#fileUploadComponent").attr("aria-hidden", true);
        $("#fileUploadComponent").attr("hidden");

        // Show the document upload review table
        $("#documentToSendReviewTable").show();
        $("#documentToSendReviewTable").removeClass("hidden");
        $("#documentToSendReviewTable").attr("aria-hidden", false);
        $("#documentToSendReviewTable").removeAttr("hidden");

        // Show the document upload SUBMIT button
        $("#documentToSendButton").show();
        $("#documentToSendButton").removeClass("hidden");
        $("#documentToSendButton").attr("aria-hidden", false);
        $("#documentToSendButton").removeAttr("hidden");

        // Update the document upload review table with the file name of the user's chosen document  
        $("#fileName").text(userDocumentName);

        // Update the 'Remove' URL so that it includes the user's file name (e.g. to enable removal)
        $("#removeURL").attr("href", "document-upload-remove?uploadedDocumentName=" + userDocumentName)

    });

});
// jQuery (END)
