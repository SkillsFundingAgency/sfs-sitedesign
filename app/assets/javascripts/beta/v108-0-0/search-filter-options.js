

/**********
* SEARCH FILTER OPTIONS (JavaScript)
* **********/

// jQuery (START)
// Function that allows users to search all available filter options (e.g. when filter results >= 25)
(function() {
    SetupAllFilters();
    SetupDynamicSearch();
    AddSearchBox();

    function AddSearchBox() {

        var laEle = $(".RegionFilter .filter-search");

        laEle.keyup(filterLaList);
        laEle.on("input", filterLaList);
        filterLaList();

        function filterLaList() {

            var val = laEle.val().toLowerCase();

            $(".RegionFilter ul li").each(function() {

                var t = $(this).text().toLowerCase();

                if (t === "all") val === "" ? $(this).removeClass("hide") : $(this).addClass("hide");

                if (val === "" || t.indexOf(val) > -1) {
                    $(this).removeClass("hide");
                }
                else {
                    $(this).addClass("hide");
                }

            });
        }
    }

    function SetupDynamicSearch() {
        $("#UpdateResults").hide();
        $("form").submit(function(e) {
            updateResults();
            e.preventDefault();
        });

        var filtersEles = $(".filters input[type='checkbox']");

        filtersEles.change(updateResults);

        $("#ResetSearch").click(function(e) {
            filtersEles.prop('checked', false);
            updateResults();
            e.stopPropagation();
            e.preventDefault();
        });

        // Uncheck everything
        filtersEles.each(function() {
            $(this).prop("checked", false);
        });

        var urTimer = null;

        function updateResults() {

            if (urTimer) {
                clearTimeout(urTimer);
                urTimer = null;
            }

            urTimer = setTimeout(function() {

                var acceptablesEstablishmentTypes = $.map($("input[name='QueryFilter.Filters.SchoolType']:checked"), function(ele) {
                    return $(ele).val();
                });

                var acceptableLaCodes = $.map($("input[name='QueryFilter.Filters.Region']:checked"), function(ele) {
                    return $(ele).val();
                });
                var matches = 0;

                $("#results li").each(function() {

                    var establishmentType = $(this).attr("data-establishment-type");
                    var laCode = $(this).attr("data-la");
                    var shouldShow = (acceptableLaCodes.length === 0 || acceptableLaCodes.indexOf(laCode) > -1) && (acceptablesEstablishmentTypes.length === 0 || acceptablesEstablishmentTypes.indexOf(establishmentType) > -1);

                    if (shouldShow) {
                        $(this).removeClass("hidden");
                        matches += 1;
                    }
                    else $(this).addClass("hidden");

                });

                var multipleSchoolsMsg = "We found {count} schools. Did you mean:";
                var noSchoolsFoundMsg = "No schools were found matching your search. Please refine your criteria.";
                var msEle = $("#multiple-schools h3");

                if (matches === 0) msEle.show().html(noSchoolsFoundMsg);
                else if (matches === 1) msEle.hide();
                else msEle.show().html(multipleSchoolsMsg.replace(/\{count\}/ig, matches));

            }, 25);
        }
    }

    function SetupAllFilters() {
        SetupEstablishmentFilters();
        SetupEstablishmentLas();
    }

    function SetupEstablishmentFilters() {

        var eles = $(".SchoolTypeFilter input[name='QueryFilter.Filters.SchoolType']");

        eles.click(updateCheckboxes);

        var allEle = $("input[name='QueryFilter.Filters.SchoolType.Special']");

        allEle.click(function() {

            var checked = allEle.prop("checked");

            eles.prop("checked", checked);
        });

        function updateCheckboxes() {
            
            var checkedCount = $("input[name='QueryFilter.Filters.SchoolType']:checked").length;
            
            allEle.prop("checked", eles.length === checkedCount);
        }

        updateCheckboxes();
    }

    function SetupEstablishmentLas() {

        var eles = $(".RegionFilter input[name='QueryFilter.Filters.Region']");

        eles.click(updateCheckboxes);

        var allEle = $("input[name='QueryFilter.Filters.Region.Special']");
        
        allEle.click(function() {
            
            var checked = allEle.prop("checked");
            
            eles.prop("checked", checked);
        });

        function updateCheckboxes() {
            
            var checkedCount = $("input[name='QueryFilter.Filters.Region']:checked").length;
            
            allEle.prop("checked", eles.length === checkedCount);
        }

        updateCheckboxes();
    }
})();
// jQuery (END)
