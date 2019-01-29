

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

    // Open/close ALL filter sections - Toggles content based on user clicking grey filter sections
    // GLOBAL
    // ACTION: '.click'
    (function () {

        var $container = $(".js-filter-collapsible-collections");

        if ($container) {
            
            var $sections = $container.find(".js-filter-collapsible");
            
            $sections.each(function () {
                
                var $section = $(this);

                $section.toggleContent = function () {
                    
                    $section.find(".js-filter-collapsible-content").toggle();
                    
                    var $openInput = $section.find("input[type=hidden]");
                    var $openURL = $section.find("a[type=button]");

                    // Update ARIA information on hidden input field
                    if ($openInput.val() === "true") {
                        $openInput.val("false");
                        $openInput.attr("aria-expanded","false");
                    }
                    else {
                        $openInput.val("true");
                        $openInput.attr("aria-expanded","true");
                    }

                    // Update ARIA information on the URL
                    if ($openURL.attr("aria-expanded") === "true") {
                        $openURL.attr("aria-expanded","false");
                    }
                    else {
                        $openURL.attr("aria-expanded","true");
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
                /*
                $(".filter-keyboard").keyup(function(event) {
                    
                    if (event.keyCode === 13) {
                        $section.toggleContent();
                    }

                });
                */

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

    // Filter #1 (Academic Year) - Toggles content based on user clicking the 'Open all/Close all' link

    // Open/close ALL filter sections - Toggles content based on user pressing the 'return' key within grey filter sections
    // ACTION: '.keyup'
    $("#filter-keyboard-academic-year").keyup(function(event) {
        
        if (event.keyCode === 13) {
            
            var $container = $(".js-filter-collapsible-collections");

            if ($container) {
                
                var $sections = $container.find("#academic-year-filter");
                
                $sections.each(function () {
                    
                    var $section = $(this);

                    $section.toggleContent = function () {
                        
                        $section.find(".js-filter-collapsible-content").toggle();
                        
                        var $openInput = $section.find("input[type=hidden]");
                        var $openURL = $section.find("a[type=button]");

                        // Update ARIA information on hidden input field
                        if ($openInput.val() === "true") {
                            $openInput.val("false");
                            $openInput.attr("aria-expanded","false");
                        }
                        else {
                            $openInput.val("true");
                            $openInput.attr("aria-expanded","true");
                        }

                        // Update ARIA information on the URL
                        if ($openURL.attr("aria-expanded") === "true") {
                            $openURL.attr("aria-expanded","false");
                        }
                        else {
                            $openURL.attr("aria-expanded","true");
                        }

                        $section.toggleClass("js-open");
                    };

                    $section.find("header")
                    .addClass("js-filter-collapsible-header")
                    $section.toggleContent();

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
            
        }

    });
    // Filter logic
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

    // Filter #2 (Document Name Error) - Toggles content based on user clicking the 'Open all/Close all' link

    // Open/close ALL filter sections - Toggles content based on user pressing the 'return' key within grey filter sections
    // ACTION: '.keyup'
    $("#filter-keyboard-document-name-error").keyup(function(event) {
        
        if (event.keyCode === 13) {
            
            var $container = $(".js-filter-collapsible-collections");

            if ($container) {
                
                var $sections = $container.find("#document-name-error-filter");
                
                $sections.each(function () {
                    
                    var $section = $(this);

                    $section.toggleContent = function () {
                        
                        $section.find(".js-filter-collapsible-content").toggle();
                        
                        var $openInput = $section.find("input[type=hidden]");
                        var $openURL = $section.find("a[type=button]");

                        // Update ARIA information on hidden input field
                        if ($openInput.val() === "true") {
                            $openInput.val("false");
                            $openInput.attr("aria-expanded","false");
                        }
                        else {
                            $openInput.val("true");
                            $openInput.attr("aria-expanded","true");
                        }

                        // Update ARIA information on the URL
                        if ($openURL.attr("aria-expanded") === "true") {
                            $openURL.attr("aria-expanded","false");
                        }
                        else {
                            $openURL.attr("aria-expanded","true");
                        }

                        $section.toggleClass("js-open");
                    };

                    $section.find("header")
                    .addClass("js-filter-collapsible-header")
                    $section.toggleContent();

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
            
        }

    });
    // Filter logic
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


    // Filter #3 (Document Type) - Toggles content based on user clicking the 'Open all/Close all' link
    
    // Open/close ALL filter sections - Toggles content based on user pressing the 'return' key within grey filter sections
    // ACTION: '.keyup'
    $("#filter-keyboard-document-type").keyup(function(event) {
        
        if (event.keyCode === 13) {
            
            var $container = $(".js-filter-collapsible-collections");

            if ($container) {
                
                var $sections = $container.find("#document-type-filter");
                
                $sections.each(function () {
                    
                    var $section = $(this);

                    $section.toggleContent = function () {
                        
                        $section.find(".js-filter-collapsible-content").toggle();
                        
                        var $openInput = $section.find("input[type=hidden]");
                        var $openURL = $section.find("a[type=button]");

                        // Update ARIA information on hidden input field
                        if ($openInput.val() === "true") {
                            $openInput.val("false");
                            $openInput.attr("aria-expanded","false");
                        }
                        else {
                            $openInput.val("true");
                            $openInput.attr("aria-expanded","true");
                        }

                        // Update ARIA information on the URL
                        if ($openURL.attr("aria-expanded") === "true") {
                            $openURL.attr("aria-expanded","false");
                        }
                        else {
                            $openURL.attr("aria-expanded","true");
                        }

                        $section.toggleClass("js-open");
                    };

                    $section.find("header")
                    .addClass("js-filter-collapsible-header")
                    $section.toggleContent();

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
            
        }
    
    });
    // Filter logic
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

    // Filter #4 (Organisation) - Toggles content based on user clicking the 'Open all/Close all' link
    
    // Open/close ALL filter sections - Toggles content based on user pressing the 'return' key within grey filter sections
    // ACTION: '.keyup'
    $("#filter-keyboard-organisation").keyup(function(event) {
        
        if (event.keyCode === 13) {
            
            var $container = $(".js-filter-collapsible-collections");

            if ($container) {
                
                var $sections = $container.find("#organisation-filter");
                
                $sections.each(function () {
                    
                    var $section = $(this);

                    $section.toggleContent = function () {
                        
                        $section.find(".js-filter-collapsible-content").toggle();
                        
                        var $openInput = $section.find("input[type=hidden]");
                        var $openURL = $section.find("a[type=button]");

                        // Update ARIA information on hidden input field
                        if ($openInput.val() === "true") {
                            $openInput.val("false");
                            $openInput.attr("aria-expanded","false");
                        }
                        else {
                            $openInput.val("true");
                            $openInput.attr("aria-expanded","true");
                        }

                        // Update ARIA information on the URL
                        if ($openURL.attr("aria-expanded") === "true") {
                            $openURL.attr("aria-expanded","false");
                        }
                        else {
                            $openURL.attr("aria-expanded","true");
                        }

                        $section.toggleClass("js-open");
                    };

                    $section.find("header")
                    .addClass("js-filter-collapsible-header")
                    $section.toggleContent();

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
            
        }
    
    });
    // Filter logic
    $("#organisation-filter :input:checkbox").change(function () {

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

    // Filter #5 (Status) - Toggles content based on user clicking the 'Open all/Close all' link
    
    // Open/close ALL filter sections - Toggles content based on user pressing the 'return' key within grey filter sections
    // ACTION: '.keyup'
    $("#filter-keyboard-status").keyup(function(event) {
        
        if (event.keyCode === 13) {
            
            var $container = $(".js-filter-collapsible-collections");

            if ($container) {
                
                var $sections = $container.find("#status-filter");
                
                $sections.each(function () {
                    
                    var $section = $(this);

                    $section.toggleContent = function () {
                        
                        $section.find(".js-filter-collapsible-content").toggle();
                        
                        var $openInput = $section.find("input[type=hidden]");
                        var $openURL = $section.find("a[type=button]");

                        // Update ARIA information on hidden input field
                        if ($openInput.val() === "true") {
                            $openInput.val("false");
                            $openInput.attr("aria-expanded","false");
                        }
                        else {
                            $openInput.val("true");
                            $openInput.attr("aria-expanded","true");
                        }

                        // Update ARIA information on the URL
                        if ($openURL.attr("aria-expanded") === "true") {
                            $openURL.attr("aria-expanded","false");
                        }
                        else {
                            $openURL.attr("aria-expanded","true");
                        }

                        $section.toggleClass("js-open");
                    };

                    $section.find("header")
                    .addClass("js-filter-collapsible-header")
                    $section.toggleContent();

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
            
        }
    
    });
    // Filter logic
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


    // Filter #6 (Type) - Toggles content based on user clicking the 'Open all/Close all' link
    
    // Open/close ALL filter sections - Toggles content based on user pressing the 'return' key within grey filter sections
    // ACTION: '.keyup'
    $("#filter-keyboard-type").keyup(function(event) {
        
        if (event.keyCode === 13) {
            
            var $container = $(".js-filter-collapsible-collections");

            if ($container) {
                
                var $sections = $container.find("#type-filter");
                
                $sections.each(function () {
                    
                    var $section = $(this);

                    $section.toggleContent = function () {
                        
                        $section.find(".js-filter-collapsible-content").toggle();
                        
                        var $openInput = $section.find("input[type=hidden]");
                        var $openURL = $section.find("a[type=button]");

                        // Update ARIA information on hidden input field
                        if ($openInput.val() === "true") {
                            $openInput.val("false");
                            $openInput.attr("aria-expanded","false");
                        }
                        else {
                            $openInput.val("true");
                            $openInput.attr("aria-expanded","true");
                        }

                        // Update ARIA information on the URL
                        if ($openURL.attr("aria-expanded") === "true") {
                            $openURL.attr("aria-expanded","false");
                        }
                        else {
                            $openURL.attr("aria-expanded","true");
                        }

                        $section.toggleClass("js-open");
                    };

                    $section.find("header")
                    .addClass("js-filter-collapsible-header")
                    $section.toggleContent();

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
            
        }
    
    });
    // Filter logic
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

    // Filter #7 (Year) - Toggles content based on user clicking the 'Open all/Close all' link
    
    // Open/close ALL filter sections - Toggles content based on user pressing the 'return' key within grey filter sections
    // ACTION: '.keyup'
    $("#filter-keyboard-year").keyup(function(event) {
        
        if (event.keyCode === 13) {
            
            var $container = $(".js-filter-collapsible-collections");

            if ($container) {
                
                var $sections = $container.find("#year-filter");
                
                $sections.each(function () {
                    
                    var $section = $(this);

                    $section.toggleContent = function () {
                        
                        $section.find(".js-filter-collapsible-content").toggle();
                        
                        var $openInput = $section.find("input[type=hidden]");
                        var $openURL = $section.find("a[type=button]");

                        // Update ARIA information on hidden input field
                        if ($openInput.val() === "true") {
                            $openInput.val("false");
                            $openInput.attr("aria-expanded","false");
                        }
                        else {
                            $openInput.val("true");
                            $openInput.attr("aria-expanded","true");
                        }

                        // Update ARIA information on the URL
                        if ($openURL.attr("aria-expanded") === "true") {
                            $openURL.attr("aria-expanded","false");
                        }
                        else {
                            $openURL.attr("aria-expanded","true");
                        }

                        $section.toggleClass("js-open");
                    };

                    $section.find("header")
                    .addClass("js-filter-collapsible-header")
                    $section.toggleContent();

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
            
        }
    
    });
    // Filter logic
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