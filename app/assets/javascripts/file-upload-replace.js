

/**********
 * FILE UPLOAD - REPLACE (JavaScript)
 * **********/

// jQuery (START)
(function () {

  // MOCK
  $("form").submit(function(e) {
      window.location = "document-upload-replace-complete";
      e.preventDefault();
  });

  // Step 1 - Show the continue button when the user has selected a type
  $("#fileTypeDiv input").click(function () { $("#goToStep2").removeAttr("disabled"); });

  // Step 1 - Go to the file upload page when click 'Continue' (also when you click to go back to step 2)
  $("#goToStep2, #backToStep2").click(function (e) {
      GoToStep(2);
      e.preventDefault();
  });

  $("#goToStep2").click();

  // Step 2 - Live event listener to check file upload being added
  $("#uploadFileDiv").on("change", "input", function () {
      Step2Logic();
  });

  // Step 2 - Upload another. Starts the journey again
  $("#uploadAnother").click(function (e) {
      Move($(".fileUploads").length);

      GoToStep(2);
      e.preventDefault();
  });

  var removeFileIdx = null;

  // Step 2 - Click 'Remove' on a document (Live event listener)
  $("#documentsToSend").on("click", ".removeLink", function (e) {
      removeFileIdx = parseInt($(this).attr("id").replace("remove", ""));

      GoToStep(3);
      e.preventDefault();
  });

  // Step 3 (remove screen) - Click 'Remove' button (confirm remove)
  $("#removeFile").click(function (e) {
      
      var uploads = $(".fileUploads");

      // Its the in-play file upload component
      if (removeFileIdx === uploads.length - 1) {
          // Reset the file input (by replacing it)
          $("#fileInput" + removeFileIdx).remove();

          if (uploads.length === 1) {
              AddFileUploader(removeFileIdx);
          }
          else {
              $("#fileInput" + removeFileIdx - 1).appendTo("#uploadFileDiv");
          }

          // Clear out the checks on the metadata radio buttons
          $("input[name='radio-group-" + removeFileIdx + "']").prop("checked", false);
      }
      else {
          // Remove the input and the matching metadata
          $("#fileInput" + removeFileIdx + ", input[name='radio-group-" + removeFileIdx + "']").remove();

          // Re-index the numbers after
          for (var idx = removeFileIdx + 1, len = uploads.length; idx < len; idx++) {
              var ele = $("#fileInput" + idx);
              ele.attr("id", "fileInput" + (idx - 1));
          }
      }                

      removeFileIdx = null;
      GoToStep(2);
      e.preventDefault();
  });

  // Work out what to show on step 2
  function Step2Logic() {
      $("#uploadFileDiv").show();

      // Hide all on this page
      $("#goToStep3, #documentsToSend, #uploadAnotherDiv, #fileUploadPlaceholder").hide();

      var uploadsLength = $(".fileUploads").length;
      var newestUpload = $("#fileInput" + (uploadsLength - 1))[0];
      var newestFileNotSet = newestUpload.files.length === 0;
      var atLeastOneFileSet = uploadsLength >= 2 || newestUpload.files.length > 0;

      // There is no file set yet, show the file selector
      if (newestFileNotSet) {
          $("#fileUploadPlaceholder").show();
      }

      // There is at least one file set, show the bottom grid
      if (atLeastOneFileSet) {
          BuildReadyToSendTable("#documentsToSend tbody");
          $("#goToStep3, #documentsToSend").show();
      }

      // Allow another file to be added if we aren't alreadu in the file adding process
      if (atLeastOneFileSet && !newestFileNotSet) {
          $("#uploadAnotherDiv").show();
      }

      function BuildReadyToSendTable(selector) {
          
          var sb = [];
          var uploadsLength = $(".fileUploads").length;

          for (var i = 0; i < uploadsLength; i++) {
              
              var upload = $("#fileInput" + i)[0];

              if (upload.files.length === 0) continue;                        
              sb.push(
                  "<tr>" +
                  "<td><a href='#'>" + upload.files[0].name + "</a></td>" +
                  "<td>Business case</td>" +
                  "<td>businesscase-03</td>" +
                  "<td class='numeric'><a class='removeLink' id='remove" + i + "' href='#'>Remove</a></td>" +
                  "</tr>"
              );
          }

          // Replace the table
          $(selector).html(sb.join(''));
      }
  }            

  function GoToStep(step) {
      // Hide all steps
      $("#fileTypeDiv, #uploadFileDiv, #documentsToSend, #uploadAnotherDiv, #goToStep3, #removeFileDiv").hide();
      $("#goToStep2").attr("disabled", "disabled");
      
      switch (step)
      {
          case 1:
              $("#fileTypeDiv").show();
              break;
          case 2:
              Step2Logic();
              break;
          case 3:
              $("#removeFileDiv").show();
              $("#removeFileName").text($("#fileInput" + removeFileIdx)[0].files[0].name);

              break;
      }

      var SetTitle = function(step) {
          
          var t;

          $("#removeADocBreadcrumb1").show();
          $("#removeADocBreadcrumb2").hide();

          switch (step) {
              case 1:
                  t = "Select your document type";

                  break;
              case 2:
                  t = "Replace your document";

                  break;
              case 3:
                  t = "Confirm you want to remove this document";

                  $("#removeADocBreadcrumb1").hide();
                  $("#removeADocBreadcrumb2").show();

                  break;
              }

              $("h1").text(t);

          }

          (step);
      }            

  function Move(i) {
      
      var MoveFileUpload = function (i) {
          // Move the file upload bit
          $("#uploadFileDiv input[name='fileInput']").appendTo("#hiddenFormEles");

          // Make a new one at the original place
          AddFileUploader(i);
      }
      
      (i);

      var MoveAndSaveRadioButtons = function (fileCounter) {
         
          // Get the radio selection value, uncheck the radio buttons, reset them and save the initial value
          var currentName = "radio-group-" + (fileCounter - 1);
          var currentId = "radio-" + (fileCounter - 1);
          var newName = "radio-group-" + fileCounter;
          var newId = "radio-" + fileCounter;
          var eles = $("#fileTypeDiv input[name='" + currentName + "']");
          // Grab the value before its changed
          var val = eles.val();

          // Change the name and uncheck
          eles.prop("checked", false)
              .attr("name", eles.attr("name").replace(currentName, newName));

          // Fix the IDs
          eles.each(function () {
              var newId2 = $(this).attr("id").replace(currentId, newId);
              $(this).attr("id", newId2);
          });

          var labels = $("#fileTypeDiv label[for^='" + currentId + "']");

          labels.each(function () {
              var newId2 = $(this).attr("for").replace(currentId, newId);
              $(this).attr("for", newId2);
          });

          $("#hiddenFormEles").append("<input type='hidden' name='" + currentName + "' value='" + val + "' />");
      }
      
      (i);
  }            

  function AddFileUploader(i) {
      $("#fileUploadPlaceholder")
      .append("<input id=\"fileInput" + i + "\" name=\"fileInput\" type=\"file\" class='fileUploads' />");
  }

})();
// jQuery (END)