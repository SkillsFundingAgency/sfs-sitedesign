

/**********
* ALLOCATION STATEMENTS FILTERS AND CHECKBOXES (JavaScript)
* **********/

// jQuery (START)
$(document).ready(function() {
        
    function reset() {
        $(".hide").removeClass("hide"); 
        $(".tab").addClass("hide");
        $("#view-all").addClass("hide");
    }

    $('a.impact-link').click(function() {
        $('.impact-link.active').removeClass('active');
        $(this).addClass('active');
    })

    $("#new-statement-alert").click(function() {
        reset();
        $(".new").removeClass("hide"); 
        $('input:checkbox').removeAttr('checked');
        $("#view-all").removeClass("hide");
    });

    $("#updated-statement-alert").click(function() {
        reset();
        $(".updated").removeClass("hide"); 
        $('input:checkbox').removeAttr('checked');
        $("#view-all").removeClass("hide");
    });

   
    $("#filter-2018 , #filter-2017,#filter-2019,#filter-2020 ,#filter-2021,#filter-2022, #filter-traineeships ,#filter-19-traineeships,#filter-nonlevy, #filter-adult , #filter-carryin , #filter-loans").click(function() {
        reset();
        $(".active").removeClass("active"); 
    
        if($('#filter-2018').prop('checked') == false && $('#filter-2017').prop('checked') == false && $('#filter-2019').prop('checked') == false && $('#filter-2020').prop('checked') == false && $('#filter-2021').prop('checked') == false &&$('#filter-2022').prop('checked') == false && $('#filter-traineeships').prop('checked') == false&& $('#filter-19-traineeships').prop('checked') == false && $('#filter-adult').prop('checked') == false && $('#filter-carryin').prop('checked') == false && $('#filter-loans').prop('checked') == false&& $('#filter-nonlevy').prop('checked') == false) {
            $(".hide").removeClass("hide"); 
        }
        else {
            if ($('#filter-2018').is(':checked')) {
                $(".2018").removeClass("hide"); 
            }
            if ($('#filter-2017').is(':checked')) {
                $(".2017").removeClass("hide"); 
            }
            if ($('#filter-2019').is(':checked')) {
                $(".2019").removeClass("hide"); 
            }
            if ($('#filter-2020').is(':checked')) {
                $(".2020").removeClass("hide"); 
            }
            if ($('#filter-2021').is(':checked')) {
                $(".2021").removeClass("hide"); 
            }
            if ($('#filter-2022').is(':checked')) {
                $(".2022").removeClass("hide"); 
            }
            if ($('#filter-traineeships').is(':checked')) {
                $(".traineeships").removeClass("hide"); 
            }
            if ($('#filter-19-traineeships').is(':checked')) {
                $(".19traineeships").removeClass("hide"); 
            }
            if ($('#filter-adult').is(':checked')) {
                $(".adult").removeClass("hide"); 
            }
            if ($('#filter-carryin').is(':checked')) {
                $(".carryin").removeClass("hide"); 
            }
            if ($('#filter-loans').is(':checked')) {
                $(".loans").removeClass("hide"); 
            }
            if ($('#filter-nonlevy').is(':checked')) {
                $(".nonlevy").removeClass("hide");
             
            }
            $("#view-all").removeClass("hide");
        }
    });
});
// jQuery (END)
