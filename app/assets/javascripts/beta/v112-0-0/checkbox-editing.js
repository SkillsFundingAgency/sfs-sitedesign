function checkboxEditing(totalCheckboxesCount,clearLocalStorage,itemsPerPage,itemTypeLabel,itemTypeLabelPlural) {

    var testCount = 0;

    //
    // Data attr elements already in HTML
    //

        // - non-js-checkboxes
        // - checkboxes

        // - non-js-paging
        // - paging

        // - selected-items-message
        // - select-all-link

        // - checkbox-search-filter

        // - clear-filter
        // - clear-filter-non-js

        // - filtered-message

    // Non-js paging and checkboxes
    var _checkboxesContainerNonJS = jQuery("[data-non-js-checkboxes]")
    _checkboxesContainerNonJS.remove()
    var _pagingNonJS = jQuery("[data-non-js-paging]")
    _pagingNonJS.remove()
    
    var _paging = jQuery("[data-paging]")
    // Show JS paging
    showOrHideElement(_paging, "show")

    var _checkboxesContainer = jQuery("[data-checkboxes]")
    // Show JS checkboxes
    showOrHideElement(_checkboxesContainer, "show")

    var _checkboxes = _checkboxesContainer.find("input[type='radio']")
    var _checkboxesTickedCount = 0

    // Store tickedcheckboxes in local storage
    if (clearLocalStorage == true) {
        localStorage.setItem("tickedCheckboxes", JSON.stringify({}));
    }
    var tickedCheckboxes = JSON.parse(localStorage.getItem('tickedCheckboxes')) || {};
    jQuery(document).on(
        'change',
        _checkboxes,
        function() {
            // Update local storage ticked object
            _checkboxesTickedCount = 0	
            _checkboxes.each(function() {
                if (this.checked) {
                    _checkboxesTickedCount++
                    tickedCheckboxes[this.id] = true;
                }
                else {
                    delete tickedCheckboxes[this.id]; 
                }
            });
            localStorage.setItem("tickedCheckboxes", JSON.stringify(tickedCheckboxes));
            updateMessage()
        }
    );
    // Set checkboxes to be unticked on load (bug with caching selected class from old checkboxes)
    _checkboxes.each(function() {
        jQuery(this).prop('checked', false);
        jQuery(this).closest("div.searchable-radio").removeClass("selected")
    });
    // Set checkboxes to be ticked on load if value in tickedCheckboxes localStorage
    jQuery.each(tickedCheckboxes, function(key, value) {
        _checkboxesTickedCount++
        jQuery("#" + key).prop('checked', true);
        jQuery("#" + key).closest("div.searchable-radio").addClass("selected")
    });

    // Count message element
    var _countMessage = jQuery("[data-selected-items-message]");
    function updateMessage() {       
        // _countMessage.text(_checkboxesTickedCount + " of " + totalCheckboxesCount + " " + itemTypeLabelPlural + " selected")
        var _itemTypeLabel = _checkboxesTickedCount != 1 ? itemTypeLabelPlural : itemTypeLabel
        if (_checkboxesTickedCount == totalCheckboxesCount) {
            _countMessage.text("All " + itemTypeLabelPlural + " selected")
        }
        else {
            _countMessage.text(_checkboxesTickedCount + " " + _itemTypeLabel + " selected")
        }
    }
    updateMessage()

    // Select all link
    var _selectAllLinkContainer = jQuery("[data-select-all-link]")
    showOrHideElement(_selectAllLinkContainer, "show")
    var _selectAllLink = _selectAllLinkContainer.find("a")
    _selectAllLink.on(
        'click',
        function() {
            event.preventDefault();
            // If all ticked then untick them all, else tick them all
            if (jQuery("[data-checkboxes]").find("input[type='radio']:checked").length == _checkboxes.length) {
                _checkboxes.prop('checked', false).closest("div.searchable-radio").removeClass("selected");
            }
            else {
                _checkboxes.prop('checked', true).closest("div.searchable-radio").addClass("selected");
            }
            _checkboxes.trigger("change")
        }
    )

    //
    //
    // AS YOU TYPE SEARCH
    //
    //

    // Set Localstorage defaults
    if (clearLocalStorage == true) {
        localStorage.setItem("searchTerm", JSON.stringify(""));
        localStorage.setItem("filteredCount", JSON.stringify(totalCheckboxesCount));
        localStorage.setItem("activePage", JSON.stringify(""));
    }
    var searchTerm = JSON.parse(localStorage.getItem('searchTerm')) || "";

    // Find search box
    var _searchContainer = jQuery("[data-checkbox-search-filter]")
    var _search = _searchContainer.find("input")
    var _searchFieldset = _searchContainer.closest("fieldset")

    // Remove form elements (form, button)
    _searchFieldset.unwrap()
    _searchContainer.find(".search-submit").remove()
    _searchContainer.find(".search-input").removeClass("search-input-with-button")

    var _clearFilter = jQuery("[data-clear-filter]")
    var _clearFilterLink = _clearFilter.find("a")
    _clearFilterLink.on(
        'click',
        function(event) {
            // Commented out since we don't use or rely on session JSON data for now 
            // event.preventDefault();
            localStorage.setItem("searchTerm", JSON.stringify(""));
            _search.val("").trigger("input")
            showOrHideElement($countMessage, "hide")
        }
    )
    // Remove non-js clear filter link
    jQuery("[data-clear-filter-non-js]").remove()

    // Set total count
    var _totalCount = totalCheckboxesCount
    var _filteredCount = _totalCount
    var $countMessage = jQuery("[data-filtered-message]")
    showOrHideElement($countMessage, "hide")
    var _messageText = _totalCount + " "
    _messageText += (_totalCount == 1 ? itemTypeLabel : itemTypeLabelPlural)
    var _filteredMessageText = _messageText			
    var _itemLabel = ""
    var _matchText = ""	

    function filterCheckboxes(value) {
        var _valueUpper = value.toUpperCase().trim()
        localStorage.setItem("searchTerm", JSON.stringify(value));
        var _results = false
        _checkboxes.each(function(index) {
            var _this = jQuery(this),
                _thisName = _this.data("search-value")
                _thisNameUpper = _thisName.toUpperCase().trim()
            if (_thisNameUpper.indexOf(_valueUpper) != -1) {
                // Match
                _this.data("matches-search", true)
                _results = true
            }
            else {
                // No match
                _filteredCount--
                _this.data("matches-search", false)
                // _this.closest("div.searchable-radio").hide()
            }
        });
        // doPaging()
        localStorage.setItem("filteredCount", JSON.stringify(_filteredCount));
        if (_filteredCount == 1) {
            _itemLabel = itemTypeLabel
            _matchText = "matches"
        }
        else {
            _itemLabel = itemTypeLabelPlural
            _matchText = "matches"
        }
        // _filteredMessageText = _filteredCount + " " + _itemLabel  + " " + _matchText + " your search of \"" + value + "\""
        _filteredMessageText = _filteredCount + " " + _matchText + " for \"" + value + "\""
        $countMessage.text(_filteredMessageText)
        // Show message only if result count is 0
        showOrHideElement($countMessage, (_filteredCount == 0) ? "show" : "hide")
        return _filteredCount
    }
    // Search box checks on load
    _search.val(searchTerm)
    var _valueUpper = searchTerm.toUpperCase().trim()
    if (_valueUpper.length != 0) {
        _filteredCount = filterCheckboxes(searchTerm)
        showOrHideElement(_clearFilter, "show")
        // showOrHideElement(_selectAllLinkContainer, (_filteredCount < totalCheckboxesCount) ? "hide" : "show")
        showOrHideElement(_selectAllLinkContainer, "hide")
    }
    else {
        _filteredCount = _totalCount
        _checkboxes.data("matches-search", true)
        $countMessage.text(_messageText)
        showOrHideElement($countMessage, "hide")
        showOrHideElement(_clearFilter, "hide")
        showOrHideElement(_selectAllLinkContainer, "show")
    }
    _search.on(
        "input",
        function(event) {
            _filteredCount = _totalCount
            $countMessage.text(_messageText)
            // _noResultsMessage.remove()
            // _checkboxes.closest("div.searchable-radio").show()
            // _checkboxes.data("matches-search") = true
            _checkboxes.data("matches-search", true)
            showOrHideElement(_checkboxes.closest("div.searchable-radio"), "show", true)
            // _checkboxes.closest("div.searchable-radio").show()
            var _value = _search.val()
            var _valueUpper = _value.toUpperCase().trim()
            if (_valueUpper.length != 0) {
                _filteredCount = filterCheckboxes(_value)
                showOrHideElement(_clearFilter, "show")
                // showOrHideElement(_selectAllLinkContainer, (_filteredCount < totalCheckboxesCount) ? "hide" : "show")
                showOrHideElement(_selectAllLinkContainer, "hide")
            }
            else {
                localStorage.setItem("searchTerm", JSON.stringify(""));
                localStorage.setItem("filteredCount", JSON.stringify(totalCheckboxesCount));
                $countMessage.text(_messageText)
                showOrHideElement($countMessage, "hide")
                showOrHideElement(_clearFilter, "hide")
                showOrHideElement(_selectAllLinkContainer, "show")
            }
            doPaging(true)
        }
    )

    // TODO paging
    function doPaging(reset) {

        // Turn off previously added click events on paging links

        //
        // setupPagingData START
        //				

        var _pageCount = Math.ceil(_filteredCount/itemsPerPage)        
        var _activePage = JSON.parse(localStorage.getItem('activePage')) || (_paging.data("page-number") || 1)
        
        if (reset) {
            _activePage = 1
        }
        _paging.data("page-number", _activePage)
        localStorage.setItem("activePage", JSON.stringify(_activePage));
        
        var _lastPage = false
        var _firstPage = false
        if (_activePage == _pageCount) {
            _lastPage = true
        }
        if (_activePage == 1) {
            _firstPage = true
        }
        // FIRST AND LAST ITEM RANGE
        var _pagingFirstItemIndex = 1
        var _pagingLastItemIndex = itemsPerPage
        var _pageCountToDisplay = (_pageCount > 5) ? 5 : _pageCount
        var _middlePage = 3
        var _startPageNumRange = 1     
        var _endPageNumRange = _pageCountToDisplay
        if (_pageCount > _pageCountToDisplay) {
            if (_activePage > _middlePage) {     
                if (_activePage < (_pageCount - 1)) {    
                    _startPageNumRange = _activePage - 2
                    _endPageNumRange = _activePage + 2
                }
                else {
                    var _totalEitherSide = _pageCountToDisplay - 1
                    var _distanceToEnd = _pageCount - _activePage
                    var _distanceToLeft = _totalEitherSide - _distanceToEnd
                    _startPageNumRange = _activePage - _distanceToLeft
                    _endPageNumRange = _activePage + _distanceToEnd
                }
            }
        }
        //
        // setupPagingData END
        //
        var _pagingCalc1 = (_activePage - 1) * itemsPerPage
        var _pagingCalc2 = _activePage * itemsPerPage

        //
        // Loop through checkboxes to decide on visibility
        //
        var _displayedCount = 0
        var _pagingFirstItemIndexDone = false
        _checkboxes.each(function(index) {
            var _this = jQuery(this)
            if (_this.data("matches-search") == true) {
                _displayedCount++
            }
            if ((_this.data("matches-search") == true) && ((_displayedCount > _pagingCalc1) && (_displayedCount <= _pagingCalc2))) {
                showOrHideElement(_this.closest("div.searchable-radio"), "show", true)
                if (_pagingFirstItemIndexDone == false) {
                    _pagingFirstItemIndex = _displayedCount
                    _pagingFirstItemIndexDone = true
                }
                if (_displayedCount <= _pagingCalc2) {
                    _pagingLastItemIndex = _displayedCount
                }			
            }
            else {
                showOrHideElement(_this.closest("div.searchable-radio"), "hide", true)
            }
        });

        //
        // Build paging element
        //
        // Message
        _paging.find(".pager-summary").text("Showing " + _pagingFirstItemIndex + " to " + _pagingLastItemIndex + " of " + _filteredCount + " " + itemTypeLabelPlural)
        // Previous Link
        _prevLink = _paging.find(".pager-prev")		
        _prevLink.off(".paging")
        _prevLink.on(
            "click.paging",
            function(event) {	
                event.preventDefault();
                _paging.data("page-number", _activePage-1)	
                localStorage.setItem("activePage", JSON.stringify(_activePage-1));				
                doPaging(false)
            }
        )
        showOrHideElement(_prevLink, (!_firstPage ? "show" : "hide"), false)
        // Next Link
        _nextLink = _paging.find(".pager-next")
        _nextLink.off(".paging")
        _nextLink.on(
            "click.paging",
            function(event) {	
                event.preventDefault();
                _paging.data("page-number", _activePage+1)	
                localStorage.setItem("activePage", JSON.stringify(_activePage+1));				
                doPaging(false)
            }
        )
        showOrHideElement(_nextLink, (!_lastPage ? "show" : "hide"), false)
        // Page numbers
        _pageNumList = _paging.find(".pager-items")
        _pageNumList.empty()
        for (i = 1; i < _pageCount+1; i++) {
            var _pageNumber = i
            if (i >= _startPageNumRange && i <= _endPageNumRange) {
                var _thisPageItem = jQuery('<li/>')
                    _thisPageLink = jQuery("<a href='#' >" + _pageNumber + "</a>")	
                _thisPageLink.data("page-number",_pageNumber)						
                _thisPageLink.off(".paging")
                _thisPageLink.on(
                    "click.paging",
                    function(event) {
                        var _thisLink = jQuery(this)
                            _thisLinkPage = _thisLink.data("page-number")
                        event.preventDefault();
                        _paging.data("page-number", _thisLinkPage)
                        localStorage.setItem("activePage", JSON.stringify(_thisLinkPage));
                        doPaging(false)
                    }
                )
                if (i != _activePage) {
                    _thisPageItem.append(_thisPageLink)
                }
                else {
                    _thisPageItem.text(_pageNumber)
                }
            }
            _pageNumList.append(_thisPageItem)
        }

        if (_filteredCount > itemsPerPage) {
            showOrHideElement(_paging, "show", false)
        }
        else {
            showOrHideElement(_paging, "hide", false)
        }

    }
    doPaging()

    // Show/Hide
    function showOrHideElement(_this, showOrHide, inlineShowHide) {
        inlineShowHide = inlineShowHide || false 
        if (showOrHide == "show") {
            // If show
            if (inlineShowHide) {
                _this.show()
            }
            _this.removeClass("hidden")
            _this.attr("aria-hidden", false)
            _this.removeAttr("hidden")
        }
        else {
            // If hide
            if (inlineShowHide) {
                _this.hide()
            }					
            _this.addClass("hidden")
            _this.attr("aria-hidden", true)
            _this.attr("hidden", true)
        }
    }

}