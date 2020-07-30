

/**********
* DSG (JavaScript)
* **********/

// jQuery (START)
$(document).ready(function () {

    // On load clear any CSS we don't want to appear when JavaScript is turned on
    $(".govuk-tabs__list").css("padding-bottom", "");

    // Code which stops the user being taken directly to the anchor links for each tab section
    // First set our variables
    var reloads = $("#reloads").text();
    var tab = $("#tab").text();
    
    // Check whether we have run this one off query once already
    if (reloads > 1) {
        // Do nothing...
    }
    else {

        if (tab == "programmeformula") {            

            // Show this tab
            $("#tab_programme-formula").addClass("govuk-tabs__tab--selected");
            $("#tab_programme-formula").attr("aria-selected", true);
            $("#tab_programme-formula").attr("tagindex", "0");
            $("#tab_programme-formula").addClass();
            $("#programme-funding").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_condition-of-funding").removeClass("govuk-tabs__tab--selected");
            $("#tab_condition-of-funding").attr("aria-selected", false);
            $("#tab_condition-of-funding").attr("tagindex", "-1");
            $("#condition-of-funding").addClass("govuk-tabs__panel--hidden");
            $("#tab_care-standards").removeClass("govuk-tabs__tab--selected");
            $("#tab_care-standards").attr("aria-selected", false);
            $("#tab_care-standards").attr("tagindex", "-1");
            $("#care-standards").addClass("govuk-tabs__panel--hidden");
            $("#tab_formula-protection").removeClass("govuk-tabs__tab--selected");
            $("#tab_formula-protection").attr("aria-selected", false);
            $("#tab_formula-protection").attr("tagindex", "-1");
            $("#formula-protection").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-needs").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-needs").attr("aria-selected", false);
            $("#tab_high-needs").attr("tagindex", "-1");
            $("#high-needs").addClass("govuk-tabs__panel--hidden");
            $("#tab_student-financial-support").removeClass("govuk-tabs__tab--selected");
            $("#tab_student-financial-support").attr("aria-selected", false);
            $("#tab_student-financial-support").attr("tagindex", "-1");
            $("#student-financial-support").addClass("govuk-tabs__panel--hidden");
            $("#tab_industry-placement").removeClass("govuk-tabs__tab--selected");
            $("#tab_industry-placement").attr("aria-selected", false);
            $("#tab_industry-placement").attr("tagindex", "-1");
            $("#industry-placement").addClass("govuk-tabs__panel--hidden");
            $("#tab_advanced-maths").removeClass("govuk-tabs__tab--selected");
            $("#tab_advanced-maths").attr("aria-selected", false);
            $("#tab_advanced-maths").attr("tagindex", "-1");
            $("#advanced-maths").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-value").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-value").attr("aria-selected", false);
            $("#tab_high-value").attr("tagindex", "-1");
            $("#high-value").addClass("govuk-tabs__panel--hidden");
            $("#tab_teachers-pension").removeClass("govuk-tabs__tab--selected");
            $("#tab_teachers-pension").attr("aria-selected", false);
            $("#tab_teachers-pension").attr("tagindex", "-1");
            $("#teachers-pension").addClass("govuk-tabs__panel--hidden");
            $("#tab_alternative-completion").removeClass("govuk-tabs__tab--selected");
            $("#tab_alternative-completion").attr("aria-selected", false);
            $("#tab_alternative-completion").attr("tagindex", "-1");
            $("#alternative-completion").addClass("govuk-tabs__panel--hidden");
    
        }
        else if (tab == "conditionoffunding") {
    
            // Show this tab
            $("#tab_condition-of-funding").addClass("govuk-tabs__tab--selected");
            $("#tab_condition-of-funding").attr("aria-selected", true);
            $("#tab_condition-of-funding").attr("tagindex", "0");
            $("#condition-of-funding").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_programme-formula").removeClass("govuk-tabs__tab--selected");
            $("#tab_programme-formula").attr("aria-selected", false);
            $("#tab_programme-formula").attr("tagindex", "-1");
            $("#programme-formula").addClass("govuk-tabs__panel--hidden");
            $("#tab_care-standards").removeClass("govuk-tabs__tab--selected");
            $("#tab_care-standards").attr("aria-selected", false);
            $("#tab_care-standards").attr("tagindex", "-1");
            $("#care-standards").addClass("govuk-tabs__panel--hidden");
            $("#tab_formula-protection").removeClass("govuk-tabs__tab--selected");
            $("#tab_formula-protection").attr("aria-selected", false);
            $("#tab_formula-protection").attr("tagindex", "-1");
            $("#formula-protection").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-needs").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-needs").attr("aria-selected", false);
            $("#tab_high-needs").attr("tagindex", "-1");
            $("#high-needs").addClass("govuk-tabs__panel--hidden");
            $("#tab_student-financial-support").removeClass("govuk-tabs__tab--selected");
            $("#tab_student-financial-support").attr("aria-selected", false);
            $("#tab_student-financial-support").attr("tagindex", "-1");
            $("#student-financial-support").addClass("govuk-tabs__panel--hidden");
            $("#tab_industry-placement").removeClass("govuk-tabs__tab--selected");
            $("#tab_industry-placement").attr("aria-selected", false);
            $("#tab_industry-placement").attr("tagindex", "-1");
            $("#industry-placement").addClass("govuk-tabs__panel--hidden");
            $("#tab_advanced-maths").removeClass("govuk-tabs__tab--selected");
            $("#tab_advanced-maths").attr("aria-selected", false);
            $("#tab_advanced-maths").attr("tagindex", "-1");
            $("#advanced-maths").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-value").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-value").attr("aria-selected", false);
            $("#tab_high-value").attr("tagindex", "-1");
            $("#high-value").addClass("govuk-tabs__panel--hidden");
            $("#tab_teachers-pension").removeClass("govuk-tabs__tab--selected");
            $("#tab_teachers-pension").attr("aria-selected", false);
            $("#tab_teachers-pension").attr("tagindex", "-1");
            $("#teachers-pension").addClass("govuk-tabs__panel--hidden");
            $("#tab_alternative-completion").removeClass("govuk-tabs__tab--selected");
            $("#tab_alternative-completion").attr("aria-selected", false);
            $("#tab_alternative-completion").attr("tagindex", "-1");
            $("#alternative-completion").addClass("govuk-tabs__panel--hidden");
    
        }
        else if (tab == "carestandards") {
            
            // Show this tab
            $("#tab_care-standards").addClass("govuk-tabs__tab--selected");
            $("#tab_care-standards").attr("aria-selected", true);
            $("#tab_care-standards").attr("tagindex", "0");
            $("#care-standards").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_programme-formula").removeClass("govuk-tabs__tab--selected");
            $("#tab_programme-formula").attr("aria-selected", false);
            $("#tab_programme-formula").attr("tagindex", "-1");
            $("#programme-formula").addClass("govuk-tabs__panel--hidden");
            $("#tab_condition-of-funding").removeClass("govuk-tabs__tab--selected");
            $("#tab_condition-of-funding").attr("aria-selected", false);
            $("#tab_condition-of-funding").attr("tagindex", "-1");
            $("#condition-of-funding").addClass("govuk-tabs__panel--hidden");
            $("#tab_formula-protection").removeClass("govuk-tabs__tab--selected");
            $("#tab_formula-protection").attr("aria-selected", false);
            $("#tab_formula-protection").attr("tagindex", "-1");
            $("#formula-protection").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-needs").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-needs").attr("aria-selected", false);
            $("#tab_high-needs").attr("tagindex", "-1");
            $("#high-needs").addClass("govuk-tabs__panel--hidden");
            $("#tab_student-financial-support").removeClass("govuk-tabs__tab--selected");
            $("#tab_student-financial-support").attr("aria-selected", false);
            $("#tab_student-financial-support").attr("tagindex", "-1");
            $("#student-financial-support").addClass("govuk-tabs__panel--hidden");
            $("#tab_industry-placement").removeClass("govuk-tabs__tab--selected");
            $("#tab_industry-placement").attr("aria-selected", false);
            $("#tab_industry-placement").attr("tagindex", "-1");
            $("#industry-placement").addClass("govuk-tabs__panel--hidden");
            $("#tab_advanced-maths").removeClass("govuk-tabs__tab--selected");
            $("#tab_advanced-maths").attr("aria-selected", false);
            $("#tab_advanced-maths").attr("tagindex", "-1");
            $("#advanced-maths").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-value").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-value").attr("aria-selected", false);
            $("#tab_high-value").attr("tagindex", "-1");
            $("#high-value").addClass("govuk-tabs__panel--hidden");
            $("#tab_teachers-pension").removeClass("govuk-tabs__tab--selected");
            $("#tab_teachers-pension").attr("aria-selected", false);
            $("#tab_teachers-pension").attr("tagindex", "-1");
            $("#teachers-pension").addClass("govuk-tabs__panel--hidden");
            $("#tab_alternative-completion").removeClass("govuk-tabs__tab--selected");
            $("#tab_alternative-completion").attr("aria-selected", false);
            $("#tab_alternative-completion").attr("tagindex", "-1");
            $("#alternative-completion").addClass("govuk-tabs__panel--hidden");
    
        }
        else if (tab == "formulaprotection") {
            
            // Show this tab
            $("#tab_formula-protection").addClass("govuk-tabs__tab--selected");
            $("#tab_formula-protection").attr("aria-selected", true);
            $("#tab_formula-protection").attr("tagindex", "0");
            $("#formula-protection").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_programme-formula").removeClass("govuk-tabs__tab--selected");
            $("#tab_programme-formula").attr("aria-selected", false);
            $("#tab_programme-formula").attr("tagindex", "-1");
            $("#programme-formula").addClass("govuk-tabs__panel--hidden");
            $("#tab_condition-of-funding").removeClass("govuk-tabs__tab--selected");
            $("#tab_condition-of-funding").attr("aria-selected", false);
            $("#tab_condition-of-funding").attr("tagindex", "-1");
            $("#condition-of-funding").addClass("govuk-tabs__panel--hidden");
            $("#tab_care-standards").removeClass("govuk-tabs__tab--selected");
            $("#tab_care-standards").attr("aria-selected", false);
            $("#tab_care-standards").attr("tagindex", "-1");
            $("#care-standards").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-needs").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-needs").attr("aria-selected", false);
            $("#tab_high-needs").attr("tagindex", "-1");
            $("#high-needs").addClass("govuk-tabs__panel--hidden");
            $("#tab_student-financial-support").removeClass("govuk-tabs__tab--selected");
            $("#tab_student-financial-support").attr("aria-selected", false);
            $("#tab_student-financial-support").attr("tagindex", "-1");
            $("#student-financial-support").addClass("govuk-tabs__panel--hidden");
            $("#tab_industry-placement").removeClass("govuk-tabs__tab--selected");
            $("#tab_industry-placement").attr("aria-selected", false);
            $("#tab_industry-placement").attr("tagindex", "-1");
            $("#industry-placement").addClass("govuk-tabs__panel--hidden");
            $("#tab_advanced-maths").removeClass("govuk-tabs__tab--selected");
            $("#tab_advanced-maths").attr("aria-selected", false);
            $("#tab_advanced-maths").attr("tagindex", "-1");
            $("#advanced-maths").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-value").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-value").attr("aria-selected", false);
            $("#tab_high-value").attr("tagindex", "-1");
            $("#high-value").addClass("govuk-tabs__panel--hidden");
            $("#tab_teachers-pension").removeClass("govuk-tabs__tab--selected");
            $("#tab_teachers-pension").attr("aria-selected", false);
            $("#tab_teachers-pension").attr("tagindex", "-1");
            $("#teachers-pension").addClass("govuk-tabs__panel--hidden");
            $("#tab_alternative-completion").removeClass("govuk-tabs__tab--selected");
            $("#tab_alternative-completion").attr("aria-selected", false);
            $("#tab_alternative-completion").attr("tagindex", "-1");
            $("#alternative-completion").addClass("govuk-tabs__panel--hidden");
    
        }
        else if (tab == "highneeds") {
            
            // Show this tab
            $("#tab_high-needs").addClass("govuk-tabs__tab--selected");
            $("#tab_high-needs").attr("aria-selected", true);
            $("#tab_high-needs").attr("tagindex", "0");
            $("#high-needs").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_programme-formula").removeClass("govuk-tabs__tab--selected");
            $("#tab_programme-formula").attr("aria-selected", false);
            $("#tab_programme-formula").attr("tagindex", "-1");
            $("#programme-formula").addClass("govuk-tabs__panel--hidden");
            $("#tab_condition-of-funding").removeClass("govuk-tabs__tab--selected");
            $("#tab_condition-of-funding").attr("aria-selected", false);
            $("#tab_condition-of-funding").attr("tagindex", "-1");
            $("#condition-of-funding").addClass("govuk-tabs__panel--hidden");
            $("#tab_care-standards").removeClass("govuk-tabs__tab--selected");
            $("#tab_care-standards").attr("aria-selected", false);
            $("#tab_care-standards").attr("tagindex", "-1");
            $("#care-standards").addClass("govuk-tabs__panel--hidden");
            $("#tab_formula-protection").removeClass("govuk-tabs__tab--selected");
            $("#tab_formula-protection").attr("aria-selected", false);
            $("#tab_formula-protection").attr("tagindex", "-1");
            $("#formula-protection").addClass("govuk-tabs__panel--hidden");
            $("#tab_student-financial-support").removeClass("govuk-tabs__tab--selected");
            $("#tab_student-financial-support").attr("aria-selected", false);
            $("#tab_student-financial-support").attr("tagindex", "-1");
            $("#student-financial-support").addClass("govuk-tabs__panel--hidden");
            $("#tab_industry-placement").removeClass("govuk-tabs__tab--selected");
            $("#tab_industry-placement").attr("aria-selected", false);
            $("#tab_industry-placement").attr("tagindex", "-1");
            $("#industry-placement").addClass("govuk-tabs__panel--hidden");
            $("#tab_advanced-maths").removeClass("govuk-tabs__tab--selected");
            $("#tab_advanced-maths").attr("aria-selected", false);
            $("#tab_advanced-maths").attr("tagindex", "-1");
            $("#advanced-maths").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-value").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-value").attr("aria-selected", false);
            $("#tab_high-value").attr("tagindex", "-1");
            $("#high-value").addClass("govuk-tabs__panel--hidden");
            $("#tab_teachers-pension").removeClass("govuk-tabs__tab--selected");
            $("#tab_teachers-pension").attr("aria-selected", false);
            $("#tab_teachers-pension").attr("tagindex", "-1");
            $("#teachers-pension").addClass("govuk-tabs__panel--hidden");
            $("#tab_alternative-completion").removeClass("govuk-tabs__tab--selected");
            $("#tab_alternative-completion").attr("aria-selected", false);
            $("#tab_alternative-completion").attr("tagindex", "-1");
            $("#alternative-completion").addClass("govuk-tabs__panel--hidden");
    
        }
        else if (tab == "studentfinancialsupport") {
    
            // Show this tab
            $("#tab_student-financial-support").addClass("govuk-tabs__tab--selected");
            $("#tab_student-financial-support").attr("aria-selected", true);
            $("#tab_student-financial-support").attr("tagindex", "0");
            $("#student-financial-support").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_programme-formula").removeClass("govuk-tabs__tab--selected");
            $("#tab_programme-formula").attr("aria-selected", false);
            $("#tab_programme-formula").attr("tagindex", "-1");
            $("#programme-formula").addClass("govuk-tabs__panel--hidden");
            $("#tab_condition-of-funding").removeClass("govuk-tabs__tab--selected");
            $("#tab_condition-of-funding").attr("aria-selected", false);
            $("#tab_condition-of-funding").attr("tagindex", "-1");
            $("#condition-of-funding").addClass("govuk-tabs__panel--hidden");
            $("#tab_care-standards").removeClass("govuk-tabs__tab--selected");
            $("#tab_care-standards").attr("aria-selected", false);
            $("#tab_care-standards").attr("tagindex", "-1");
            $("#care-standards").addClass("govuk-tabs__panel--hidden");
            $("#tab_formula-protection").removeClass("govuk-tabs__tab--selected");
            $("#tab_formula-protection").attr("aria-selected", false);
            $("#tab_formula-protection").attr("tagindex", "-1");
            $("#formula-protection").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-needs").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-needs").attr("aria-selected", false);
            $("#tab_high-needs").attr("tagindex", "-1");
            $("#high-needs").addClass("govuk-tabs__panel--hidden");
            $("#tab_industry-placement").removeClass("govuk-tabs__tab--selected");
            $("#tab_industry-placement").attr("aria-selected", false);
            $("#tab_industry-placement").attr("tagindex", "-1");
            $("#industry-placement").addClass("govuk-tabs__panel--hidden");
            $("#tab_advanced-maths").removeClass("govuk-tabs__tab--selected");
            $("#tab_advanced-maths").attr("aria-selected", false);
            $("#tab_advanced-maths").attr("tagindex", "-1");
            $("#advanced-maths").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-value").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-value").attr("aria-selected", false);
            $("#tab_high-value").attr("tagindex", "-1");
            $("#high-value").addClass("govuk-tabs__panel--hidden");
            $("#tab_teachers-pension").removeClass("govuk-tabs__tab--selected");
            $("#tab_teachers-pension").attr("aria-selected", false);
            $("#tab_teachers-pension").attr("tagindex", "-1");
            $("#teachers-pension").addClass("govuk-tabs__panel--hidden");
            $("#tab_alternative-completion").removeClass("govuk-tabs__tab--selected");
            $("#tab_alternative-completion").attr("aria-selected", false);
            $("#tab_alternative-completion").attr("tagindex", "-1");
            $("#alternative-completion").addClass("govuk-tabs__panel--hidden");
    
        }
        else if (tab == "industryplacement") {
    
            // Show this tab
            $("#tab_industry-placement").addClass("govuk-tabs__tab--selected");
            $("#tab_industry-placement").attr("aria-selected", true);
            $("#tab_industry-placement").attr("tagindex", "0");
            $("#industry-placement").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_programme-formula").removeClass("govuk-tabs__tab--selected");
            $("#tab_programme-formula").attr("aria-selected", false);
            $("#tab_programme-formula").attr("tagindex", "-1");
            $("#programme-formula").addClass("govuk-tabs__panel--hidden");
            $("#tab_condition-of-funding").removeClass("govuk-tabs__tab--selected");
            $("#tab_condition-of-funding").attr("aria-selected", false);
            $("#tab_condition-of-funding").attr("tagindex", "-1");
            $("#condition-of-funding").addClass("govuk-tabs__panel--hidden");
            $("#tab_care-standards").removeClass("govuk-tabs__tab--selected");
            $("#tab_care-standards").attr("aria-selected", false);
            $("#tab_care-standards").attr("tagindex", "-1");
            $("#care-standards").addClass("govuk-tabs__panel--hidden");
            $("#tab_formula-protection").removeClass("govuk-tabs__tab--selected");
            $("#tab_formula-protection").attr("aria-selected", false);
            $("#tab_formula-protection").attr("tagindex", "-1");
            $("#formula-protection").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-needs").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-needs").attr("aria-selected", false);
            $("#tab_high-needs").attr("tagindex", "-1");
            $("#high-needs").addClass("govuk-tabs__panel--hidden");
            $("#tab_student-financial-support").removeClass("govuk-tabs__tab--selected");
            $("#tab_student-financial-support").attr("aria-selected", false);
            $("#tab_student-financial-support").attr("tagindex", "-1");
            $("#student-financial-support").addClass("govuk-tabs__panel--hidden");
            $("#tab_advanced-maths").removeClass("govuk-tabs__tab--selected");
            $("#tab_advanced-maths").attr("aria-selected", false);
            $("#tab_advanced-maths").attr("tagindex", "-1");
            $("#advanced-maths").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-value").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-value").attr("aria-selected", false);
            $("#tab_high-value").attr("tagindex", "-1");
            $("#high-value").addClass("govuk-tabs__panel--hidden");
            $("#tab_teachers-pension").removeClass("govuk-tabs__tab--selected");
            $("#tab_teachers-pension").attr("aria-selected", false);
            $("#tab_teachers-pension").attr("tagindex", "-1");
            $("#teachers-pension").addClass("govuk-tabs__panel--hidden");
            $("#tab_alternative-completion").removeClass("govuk-tabs__tab--selected");
            $("#tab_alternative-completion").attr("aria-selected", false);
            $("#tab_alternative-completion").attr("tagindex", "-1");
            $("#alternative-completion").addClass("govuk-tabs__panel--hidden");
    
        }
        else if (tab == "advancedmaths") {
    
            // Show this tab
            $("#tab_advanced-maths").addClass("govuk-tabs__tab--selected");
            $("#tab_advanced-maths").attr("aria-selected", true);
            $("#tab_advanced-maths").attr("tagindex", "0");
            $("#advanced-maths").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_programme-formula").removeClass("govuk-tabs__tab--selected");
            $("#tab_programme-formula").attr("aria-selected", false);
            $("#tab_programme-formula").attr("tagindex", "-1");
            $("#programme-formula").addClass("govuk-tabs__panel--hidden");
            $("#tab_condition-of-funding").removeClass("govuk-tabs__tab--selected");
            $("#tab_condition-of-funding").attr("aria-selected", false);
            $("#tab_condition-of-funding").attr("tagindex", "-1");
            $("#condition-of-funding").addClass("govuk-tabs__panel--hidden");
            $("#tab_care-standards").removeClass("govuk-tabs__tab--selected");
            $("#tab_care-standards").attr("aria-selected", false);
            $("#tab_care-standards").attr("tagindex", "-1");
            $("#care-standards").addClass("govuk-tabs__panel--hidden");
            $("#tab_formula-protection").removeClass("govuk-tabs__tab--selected");
            $("#tab_formula-protection").attr("aria-selected", false);
            $("#tab_formula-protection").attr("tagindex", "-1");
            $("#formula-protection").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-needs").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-needs").attr("aria-selected", false);
            $("#tab_high-needs").attr("tagindex", "-1");
            $("#high-needs").addClass("govuk-tabs__panel--hidden");
            $("#tab_student-financial-support").removeClass("govuk-tabs__tab--selected");
            $("#tab_student-financial-support").attr("aria-selected", false);
            $("#tab_student-financial-support").attr("tagindex", "-1");
            $("#student-financial-support").addClass("govuk-tabs__panel--hidden");
            $("#tab_industry-placement").removeClass("govuk-tabs__tab--selected");
            $("#tab_industry-placement").attr("aria-selected", false);
            $("#tab_industry-placement").attr("tagindex", "-1");
            $("#industry-placement").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-value").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-value").attr("aria-selected", false);
            $("#tab_high-value").attr("tagindex", "-1");
            $("#high-value").addClass("govuk-tabs__panel--hidden");
            $("#tab_teachers-pension").removeClass("govuk-tabs__tab--selected");
            $("#tab_teachers-pension").attr("aria-selected", false);
            $("#tab_teachers-pension").attr("tagindex", "-1");
            $("#teachers-pension").addClass("govuk-tabs__panel--hidden");
            $("#tab_alternative-completion").removeClass("govuk-tabs__tab--selected");
            $("#tab_alternative-completion").attr("aria-selected", false);
            $("#tab_alternative-completion").attr("tagindex", "-1");
            $("#alternative-completion").addClass("govuk-tabs__panel--hidden");
    
        }
        else if (tab == "highvalue") {
    
            // Show this tab
            $("#tab_high-value").addClass("govuk-tabs__tab--selected");
            $("#tab_high-value").attr("aria-selected", true);
            $("#tab_high-value").attr("tagindex", "0");
            $("#high-value").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_programme-formula").removeClass("govuk-tabs__tab--selected");
            $("#tab_programme-formula").attr("aria-selected", false);
            $("#tab_programme-formula").attr("tagindex", "-1");
            $("#programme-formula").addClass("govuk-tabs__panel--hidden");
            $("#tab_condition-of-funding").removeClass("govuk-tabs__tab--selected");
            $("#tab_condition-of-funding").attr("aria-selected", false);
            $("#tab_condition-of-funding").attr("tagindex", "-1");
            $("#condition-of-funding").addClass("govuk-tabs__panel--hidden");
            $("#tab_care-standards").removeClass("govuk-tabs__tab--selected");
            $("#tab_care-standards").attr("aria-selected", false);
            $("#tab_care-standards").attr("tagindex", "-1");
            $("#care-standards").addClass("govuk-tabs__panel--hidden");
            $("#tab_formula-protection").removeClass("govuk-tabs__tab--selected");
            $("#tab_formula-protection").attr("aria-selected", false);
            $("#tab_formula-protection").attr("tagindex", "-1");
            $("#formula-protection").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-needs").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-needs").attr("aria-selected", false);
            $("#tab_high-needs").attr("tagindex", "-1");
            $("#high-needs").addClass("govuk-tabs__panel--hidden");
            $("#tab_student-financial-support").removeClass("govuk-tabs__tab--selected");
            $("#tab_student-financial-support").attr("aria-selected", false);
            $("#tab_student-financial-support").attr("tagindex", "-1");
            $("#student-financial-support").addClass("govuk-tabs__panel--hidden");
            $("#tab_industry-placement").removeClass("govuk-tabs__tab--selected");
            $("#tab_industry-placement").attr("aria-selected", false);
            $("#tab_industry-placement").attr("tagindex", "-1");
            $("#industry-placement").addClass("govuk-tabs__panel--hidden");
            $("#tab_advanced-maths").removeClass("govuk-tabs__tab--selected");
            $("#tab_advanced-maths").attr("aria-selected", false);
            $("#tab_advanced-maths").attr("tagindex", "-1");
            $("#advanced-maths").addClass("govuk-tabs__panel--hidden");
            $("#tab_teachers-pension").removeClass("govuk-tabs__tab--selected");
            $("#tab_teachers-pension").attr("aria-selected", false);
            $("#tab_teachers-pension").attr("tagindex", "-1");
            $("#teachers-pension").addClass("govuk-tabs__panel--hidden");
            $("#tab_alternative-completion").removeClass("govuk-tabs__tab--selected");
            $("#tab_alternative-completion").attr("aria-selected", false);
            $("#tab_alternative-completion").attr("tagindex", "-1");
            $("#alternative-completion").addClass("govuk-tabs__panel--hidden");
    
        }
        else if (tab == "teacherspension") {
    
            // Show this tab
            $("#tab_teachers-pension").addClass("govuk-tabs__tab--selected");
            $("#tab_teachers-pension").attr("aria-selected", true);
            $("#tab_teachers-pension").attr("tagindex", "0");
            $("#teachers-pension").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_programme-formula").removeClass("govuk-tabs__tab--selected");
            $("#tab_programme-formula").attr("aria-selected", false);
            $("#tab_programme-formula").attr("tagindex", "-1");
            $("#programme-formula").addClass("govuk-tabs__panel--hidden");
            $("#tab_condition-of-funding").removeClass("govuk-tabs__tab--selected");
            $("#tab_condition-of-funding").attr("aria-selected", false);
            $("#tab_condition-of-funding").attr("tagindex", "-1");
            $("#condition-of-funding").addClass("govuk-tabs__panel--hidden");
            $("#tab_care-standards").removeClass("govuk-tabs__tab--selected");
            $("#tab_care-standards").attr("aria-selected", false);
            $("#tab_care-standards").attr("tagindex", "-1");
            $("#care-standards").addClass("govuk-tabs__panel--hidden");
            $("#tab_formula-protection").removeClass("govuk-tabs__tab--selected");
            $("#tab_formula-protection").attr("aria-selected", false);
            $("#tab_formula-protection").attr("tagindex", "-1");
            $("#formula-protection").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-needs").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-needs").attr("aria-selected", false);
            $("#tab_high-needs").attr("tagindex", "-1");
            $("#high-needs").addClass("govuk-tabs__panel--hidden");
            $("#tab_student-financial-support").removeClass("govuk-tabs__tab--selected");
            $("#tab_student-financial-support").attr("aria-selected", false);
            $("#tab_student-financial-support").attr("tagindex", "-1");
            $("#student-financial-support").addClass("govuk-tabs__panel--hidden");
            $("#tab_industry-placement").removeClass("govuk-tabs__tab--selected");
            $("#tab_industry-placement").attr("aria-selected", false);
            $("#tab_industry-placement").attr("tagindex", "-1");
            $("#industry-placement").addClass("govuk-tabs__panel--hidden");
            $("#tab_advanced-maths").removeClass("govuk-tabs__tab--selected");
            $("#tab_advanced-maths").attr("aria-selected", false);
            $("#tab_advanced-maths").attr("tagindex", "-1");
            $("#advanced-maths").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-value").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-value").attr("aria-selected", false);
            $("#tab_high-value").attr("tagindex", "-1");
            $("#high-value").addClass("govuk-tabs__panel--hidden");
            $("#tab_alternative-completion").removeClass("govuk-tabs__tab--selected");
            $("#tab_alternative-completion").attr("aria-selected", false);
            $("#tab_alternative-completion").attr("tagindex", "-1");
            $("#alternative-completion").addClass("govuk-tabs__panel--hidden");
    
        }
        else if (tab == "alternativecompletion") {
    
            // Show this tab
            $("#tab_alternative-completion").addClass("govuk-tabs__tab--selected");
            $("#tab_alternative-completion").attr("aria-selected", true);
            $("#tab_alternative-completion").attr("tagindex", "0");
            $("#alternative-completion").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_programme-formula").removeClass("govuk-tabs__tab--selected");
            $("#tab_programme-formula").attr("aria-selected", false);
            $("#tab_programme-formula").attr("tagindex", "-1");
            $("#programme-formula").addClass("govuk-tabs__panel--hidden");
            $("#tab_condition-of-funding").removeClass("govuk-tabs__tab--selected");
            $("#tab_condition-of-funding").attr("aria-selected", false);
            $("#tab_condition-of-funding").attr("tagindex", "-1");
            $("#condition-of-funding").addClass("govuk-tabs__panel--hidden");
            $("#tab_care-standards").removeClass("govuk-tabs__tab--selected");
            $("#tab_care-standards").attr("aria-selected", false);
            $("#tab_care-standards").attr("tagindex", "-1");
            $("#care-standards").addClass("govuk-tabs__panel--hidden");
            $("#tab_formula-protection").removeClass("govuk-tabs__tab--selected");
            $("#tab_formula-protection").attr("aria-selected", false);
            $("#tab_formula-protection").attr("tagindex", "-1");
            $("#formula-protection").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-needs").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-needs").attr("aria-selected", false);
            $("#tab_high-needs").attr("tagindex", "-1");
            $("#high-needs").addClass("govuk-tabs__panel--hidden");
            $("#tab_student-financial-support").removeClass("govuk-tabs__tab--selected");
            $("#tab_student-financial-support").attr("aria-selected", false);
            $("#tab_student-financial-support").attr("tagindex", "-1");
            $("#student-financial-support").addClass("govuk-tabs__panel--hidden");
            $("#tab_industry-placement").removeClass("govuk-tabs__tab--selected");
            $("#tab_industry-placement").attr("aria-selected", false);
            $("#tab_industry-placement").attr("tagindex", "-1");
            $("#industry-placement").addClass("govuk-tabs__panel--hidden");
            $("#tab_advanced-maths").removeClass("govuk-tabs__tab--selected");
            $("#tab_advanced-maths").attr("aria-selected", false);
            $("#tab_advanced-maths").attr("tagindex", "-1");
            $("#advanced-maths").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-value").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-value").attr("aria-selected", false);
            $("#tab_high-value").attr("tagindex", "-1");
            $("#high-value").addClass("govuk-tabs__panel--hidden");
            $("#tab_teachers-pension").removeClass("govuk-tabs__tab--selected");
            $("#tab_teachers-pension").attr("aria-selected", false);
            $("#tab_teachers-pension").attr("tagindex", "-1");
            $("#teachers-pension").addClass("govuk-tabs__panel--hidden");
    
        }
        // Default to the default view wired into the GOV.UK tabs component - the 'school' tab
        else {
    
            // Show this tab
            $("#tab_programme-formula").addClass("govuk-tabs__tab--selected");
            $("#tab_programme-formula").attr("aria-selected", true);
            $("#tab_programme-formula").attr("tagindex", "0");
            $("#programme-formula").removeClass("govuk-tabs__panel--hidden");
    
            // Hide these
            $("#tab_condition-of-funding").removeClass("govuk-tabs__tab--selected");
            $("#tab_condition-of-funding").attr("aria-selected", false);
            $("#tab_condition-of-funding").attr("tagindex", "-1");
            $("#condition-of-funding").addClass("govuk-tabs__panel--hidden");
            $("#tab_care-standards").removeClass("govuk-tabs__tab--selected");
            $("#tab_care-standards").attr("aria-selected", false);
            $("#tab_care-standards").attr("tagindex", "-1");
            $("#care-standards").addClass("govuk-tabs__panel--hidden");
            $("#tab_formula-protection").removeClass("govuk-tabs__tab--selected");
            $("#tab_formula-protection").attr("aria-selected", false);
            $("#tab_formula-protection").attr("tagindex", "-1");
            $("#formula-protection").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-needs").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-needs").attr("aria-selected", false);
            $("#tab_high-needs").attr("tagindex", "-1");
            $("#high-needs").addClass("govuk-tabs__panel--hidden");
            $("#tab_student-financial-support").removeClass("govuk-tabs__tab--selected");
            $("#tab_student-financial-support").attr("aria-selected", false);
            $("#tab_student-financial-support").attr("tagindex", "-1");
            $("#student-financial-support").addClass("govuk-tabs__panel--hidden");
            $("#tab_industry-placement").removeClass("govuk-tabs__tab--selected");
            $("#tab_industry-placement").attr("aria-selected", false);
            $("#tab_industry-placement").attr("tagindex", "-1");
            $("#industry-placement").addClass("govuk-tabs__panel--hidden");
            $("#tab_advanced-maths").removeClass("govuk-tabs__tab--selected");
            $("#tab_advanced-maths").attr("aria-selected", false);
            $("#tab_advanced-maths").attr("tagindex", "-1");
            $("#advanced-maths").addClass("govuk-tabs__panel--hidden");
            $("#tab_high-value").removeClass("govuk-tabs__tab--selected");
            $("#tab_high-value").attr("aria-selected", false);
            $("#tab_high-value").attr("tagindex", "-1");
            $("#high-value").addClass("govuk-tabs__panel--hidden");
            $("#tab_teachers-pension").removeClass("govuk-tabs__tab--selected");
            $("#tab_teachers-pension").attr("aria-selected", false);
            $("#tab_teachers-pension").attr("tagindex", "-1");
            $("#teachers-pension").addClass("govuk-tabs__panel--hidden");
            $("#tab_alternative-completion").removeClass("govuk-tabs__tab--selected");
            $("#tab_alternative-completion").attr("aria-selected", false);
            $("#tab_alternative-completion").attr("tagindex", "-1");
            $("#alternative-completion").addClass("govuk-tabs__panel--hidden");
    
        }

    }
    
});
// jQuery (END)

// JavaScript (START)

// JavaScript (END)