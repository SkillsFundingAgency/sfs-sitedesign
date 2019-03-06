$(document).ready(function () {
    $("#togglehelp").click(function () {
        if ($("#help_block").hasClass("visuallyhidden")) {
            $("#help_block").removeClass("visuallyhidden");
        } else {
            $("#help_block").addClass("visuallyhidden");
        }
    });
    
    (function () {
        if (!$(".assistivetext").hasClass("visuallyhidden")) {
            $(".assistivetext").addClass("visuallyhidden");
        }
    })();


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

    // For filters
    function clear_form_elements(dv) {
        dv.find(':input').each(function () {
            switch (this.type) {
                case 'password':
                case 'text':
                case 'textarea':
                case 'file':
                case 'select-one':
                case 'select-multiple':
                case 'date':
                case 'number':
                case 'tel':
                case 'email':
                    jQuery(this).val('');
                    break;
                case 'checkbox':
                case 'radio':
                    this.checked = false;
                    break;
            }
        });
    }

    (function () {
        $("#years-filter").find(':checkbox').change(function () {
            if ($(this).is(":checked")) {
                clear_form_elements($("#period-filter"));
            }
        });

        $("#period-filter").find(':radio').change(function () {
            if ($(this).is(":checked")) {
                clear_form_elements($("#years-filter"));
            }
        });
    })();




    (function () {

        var $container = $(".js-filter-collapsible-collections");

        if ($container) {
            var $sections = $container.find(".js-filter-collapsible");

            $sections.each(function () {
                var $section = $(this);



                $section.toggleContent = function () {
                    $section.find(".js-filter-collapsible-content").toggle();
                    var $open = $section.find("input[type=hidden]");

                    if ($open.val() === "True") {
                        $open.val("False");
                    } else {
                        $open.val("True");
                    }

                    $section.toggleClass("js-open");
                };

                $section.find("header")
                    .addClass("js-filter-collapsible-header")
                    .click(function () {
                        $section.toggleContent();
                    });
            });
            $sections
                .has(":hidden[value='False']")
                .find(".js-filter-collapsible-content")
                .hide()
                .removeClass("js-open");

            $sections
                .has(":hidden[value='True']")
                .show()
                .addClass("js-open");
        }
    })();

    // for _Filters.cshtml

    function toggleFilter() {
        $(".search-hidden-mobile").toggleClass("show-filter");
        $(".mobile-arrow-up").toggleClass("mobile-arrow-down");
    }

    $("#open-mobile-menu").click(function () {
        toggleFilter();
    });

    $(".mobile-arrow-up").addClass("mobile-arrow-down");
    $(".search-hidden-mobile").addClass("js-mobile-hide");

    
    (function openPdfLinksInNewWindow() {
        $(".pdf-open-link").each(function (e) {
            this.onclick = function (e) {
                e.preventDefault();
                var posX, posY; //position of popup
                var w = 595;    //standard a4 width for pdf
                var h = $(window).innerHeight() * 0.89;
                var offsetX = ($(window).innerWidth() / 2) - (w / 2), offsetY = ($(window).innerHeight() / 2) - (h / 2); //x and y offset relative to the parent window
                if (typeof window.screenLeft != "undefined") { //IE
                    posX = window.screenLeft + offsetX;
                    posY = window.screenTop + offsetY;
                }
                else if (typeof window.screenX != "undefined") { //NS/Moz
                    posX = window.screenX + offsetX;
                    posY = window.screenY + offsetY;
                }
                else { //default - center of screen - highly unlikely
                    posX = screen.availWidth / 2 - w / 2;
                    posY = screen.availHeight / 2 - h / 2;
                }
                var win = window.open(this.href, "newwindow", "width=" + w + ",height=" + h + ",left=" + posX + ",top=" + posY).focus();
            }
        });
    })();

    (function () {
        progressiveDisclosureInitializer();
    })();

    function progressiveDisclosureInitializer() {
        this.$divHolders = $(".progressive-disclosure-holder");
        this.$divHolders.each(function() {
            progressiveDisclosureHolder(this);
        });
    }

    function progressiveDisclosureHolder(divHolder) {
        this.$divholder = $(divHolder);
        this.$displayElements = this.$divholder.find(".progressive-disclosure-display-element");
        this.$disclosureInitiatorElement = this.$divholder.find(".progressive-disclosure-element").first();
        this.$inputsInsideDivElement = this.$divholder.find("input");
        var outervariable = this;

        this.listenerInitialiser = function () {
            var outerVariable = this;
            this.$inputsInsideDivElement.each(function () {
                $(this).change(function () { outerVariable.disclosureElementCorrector() });
            });
        }

        this.disclosureElementCorrector = function () {
            var isChecked = outervariable.$disclosureInitiatorElement.is(':checked');
            outervariable.$displayElements.each(function () {
                var $elem = $(this);
                if (isChecked && $elem.hasClass("js-hidden")) {
                    $elem.removeClass("js-hidden");
                } else if (!isChecked && !$elem.hasClass("js-hidden")) {
                    $elem.addClass("js-hidden");
                }
            });
        }

        this.disclosureElementCorrector();
        this.listenerInitialiser();
    }
});

function toggleVisibility(id) {
    /// <summary>Hides or unhides an element.</summary>  
    /// <param name="id">The element id.</param> 
    if ($(id).hasClass("visuallyhidden")) {
        $(id).removeClass("visuallyhidden");
    } else {
        $(id).addClass("visuallyhidden");
    }
}