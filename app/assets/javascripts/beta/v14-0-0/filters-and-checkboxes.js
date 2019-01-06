

/**********
 * FILTERS AND CHECKBOXES (JavaScript)
 * **********/

// jQuery (START)
$(document).ready(function () {

    // Trigger the select all documents in document list rules (see below) via clicking "Select/deselect all team members" link
    $("#selectAllTrigger").click(function () {
        $("#document-checkbox").trigger("click");
    });

    // Filter (via clicking ERROR link) to show me only documents with errors
    $("#showMeErrorsOnlyErrorLink").click(function () {
        $("#queryFilterStatusError").trigger("click");
    });

    // Filter (via clicking link) to show me only documents with errors
    $("#showMeErrorsOnlyLink").click(function () {
        $("#queryFilterStatusError").trigger("click");
    });

    // Filter #1 - Toggles content based on user clicking the 'Open all/Close all' link
    // LEGACY
    (function() {

        var $container = $(".js-collapsible-collections");

        if ($container) {
           
            var $sections = $container.find(".js-collapsible");
            var $toggleContainer = $("<div class='js-collapsible-toggle'/>");
            var $openAll = $("<a aria-hidden='true' href='#'>Open all</a>");
            var $closeAll = $("<a aria-hidden='true' href='#'>Close all</a>");

            $container.prepend($toggleContainer);
            $toggleContainer.prepend($closeAll);
            $toggleContainer.prepend($openAll);

            $toggleContainer.enableToggles = function () {
                $openAll.toggleClass('disabled', $sections.children(".js-collapsible-content:hidden").length === 0);
                $closeAll.toggleClass('disabled', $sections.children(".js-collapsible-content:visible").length === 0);
            };

            $openAll.click(function(event) {
                event.preventDefault();
                $sections.find(".js-collapsible-content").show();
                $sections.addClass("js-open");
                $toggleContainer.enableToggles();
            });

            $closeAll.click(function(event) {
                event.preventDefault();
                $sections.find(".js-collapsible-content").hide();
                $sections.removeClass("js-open");
                $toggleContainer.enableToggles();
            });

            $sections.each(function () {
                
                var $section = $(this);

                $section.toggleContent = function () {
                    $section.find(".js-collapsible-content").toggle();
                    $section.toggleClass("js-open");
                    $toggleContainer.enableToggles();
                };

                $section.find("header")
                    .addClass("js-collapsible-header")

                    .click(function () {
                        $section.toggleContent();
                    });
            });

            $closeAll.click();
        }

    })();

    // Filter #2 - Toggles content based on user clicking grey filter sections
    // DEFAULT
    (function () {

        var $container = $(".js-filter-collapsible-collections");

        if ($container) {
            
            var $sections = $container.find(".js-filter-collapsible");
            
            $sections.each(function () {
                
                var $section = $(this);

                $section.toggleContent = function () {
                    
                    $section.find(".js-filter-collapsible-content").toggle();
                    
                    var $open = $section.find("input[type=hidden]");

                    if ($open.val() === "true") {
                        $open.val("false");
                        $open.attr("aria-expanded","false");
                    }
                    else {
                        $open.val("true");
                        $open.attr("aria-expanded","true");
                    }

                    $section.toggleClass("js-open");
                };

                $section.find("header")
                
                .addClass("js-filter-collapsible-header")

                // TRIGGER 1 - 'click'
                .click(function () {
                    $section.toggleContent();
                });

                // TRIGGER 2 - 'keyup'
                $(".filter-keyboard-button").keyup(function(event) {
                    if (event.keyCode === 13) {
                        $section.toggleContent();
                    }
                });

            });
            $sections
                .has(":hidden[value='false']")
                .find(".js-filter-collapsible-content")
                .hide()
                .removeClass("js-open");

            $sections
                .has(":hidden[value='true']")
                .show()
                .addClass("js-open");
        }

    })();

    // Filter logic #1 (Academic Year)
    $("#academic-year-filter :input:checkbox").change(function () {
        
        var showAll = true;
        
        $('tr').not('.first').hide();
        $('input[type=checkbox]').each(function () {
            
            if ($(this)[0].checked) {
                
                showAll = false;
                var status = $(this).attr('rel');
                var value = $(this).val();

                $('td.' + status + '[rel="' + value + '"]').parent('tr').show();
            }

        });

        if (showAll) {
            $('tr').show();
        }

    });

    // Filter logic #2 (Document Name Error)
    $("#document-name-error-filter :input:checkbox").change(function () {

        var showAll = true;
        
        $('tr').not('.first').hide();
        $('input[type=checkbox]').each(function () {
            
            if ($(this)[0].checked) {
                
                showAll = false;
                var status = $(this).attr('rel');
                var value = $(this).val();

                $('td.' + status + '[rel="' + value + '"]').parent('tr').show();
            }

        });

        if (showAll) {
            $('tr').show();
        }

    });

    // Filter logic #3 (Document Type)
    $("#document-type-filter :input:checkbox").change(function () {

        var showAll = true;
        
        $('tr').not('.first').hide();
        $('input[type=checkbox]').each(function () {
            
            if ($(this)[0].checked) {
                
                showAll = false;
                var status = $(this).attr('rel');
                var value = $(this).val();

                $('td.' + status + '[rel="' + value + '"]').parent('tr').show();
            }

        });

        if (showAll) {
            $('tr').show();
        }

    });

    // Filter logic #4 (Status)
    $("#status-filter :input:checkbox").change(function () {

        var showAll = true;
        
        $('tr').not('.first').hide();
        $('input[type=checkbox]').each(function () {
            
            if ($(this)[0].checked) {
                
                showAll = false;
                var status = $(this).attr('rel');
                var value = $(this).val();

                $('td.' + status + '[rel="' + value + '"]').parent('tr').show();
            }

        });

        if (showAll) {
            $('tr').show();
        }

    });

    // Filter logic #5 (Type)
    $("#type-filter :input:checkbox").change(function () {

        var showAll = true;
        
        $('tr').not('.first').hide();
        $('input[type=checkbox]').each(function () {
            
            if ($(this)[0].checked) {
                
                showAll = false;
                var status = $(this).attr('rel');
                var value = $(this).val();

                $('td.' + status + '[rel="' + value + '"]').parent('tr').show();
            }

        });

        if (showAll) {
            $('tr').show();
        }

    });

    // Filter logic #6 (Year)
    $("#year-filter :input:checkbox").change(function () {

        var showAll = true;
        
        $('tr').not('.first').hide();
        $('input[type=checkbox]').each(function () {
            
            if ($(this)[0].checked) {
                
                showAll = false;
                var status = $(this).attr('rel');
                var value = $(this).val();

                $('td.' + status + '[rel="' + value + '"]').parent('tr').show();
            }

        });

        if (showAll) {
            $('tr').show();
        }

    });

});
// jQuery (END)

// JavaScript (START)
// Select and unselect all documents in the document list
function selectAll(divid) {
    
    var selectAllCheckbox = document.getElementById('document-checkbox').checked;
    var totalDocumentCount = document.getElementById('totalDocumentCount').textContent;

    if (selectAllCheckbox == true) {

        var checks = document.querySelectorAll('#' + divid + ' input[type="checkbox"]');
        
        for (var i = 0; i < checks.length; i++) {
        
            var check = checks[i];
            check.checked = true;
    
        }

        document.getElementById("documentsSelectedText").innerHTML = totalDocumentCount + " documents selected";

    }
    else {

        var checks = document.querySelectorAll('#' + divid + ' input[type="checkbox"]');

        for (var i = 0; i < checks.length; i++) {
        
            var check = checks[i];
            check.checked = false;
    
        }

        document.getElementById("documentsSelectedText").innerHTML = "0 documents selected";

    }

}
// JavaScript (END)