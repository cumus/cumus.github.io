// Custom collapsing cards interaction with jQuery

    var is_visible = [false, false, false];
    $(document).ready(function () {
        $("#box-1").click(function () {
            $("#box-text-1").slideToggle(600);
            if (is_visible[0] = !is_visible[0]) $("#box-icon-1").css("transform", "rotate(180deg)");
            else $("#box-icon-1").css("transform", "rotate(0deg)");
        });
        $("#box-2").click(function () {
            $("#box-text-2").slideToggle(600);
            if (is_visible[1] = !is_visible[1]) $("#box-icon-2").css("transform", "rotate(180deg)");
            else $("#box-icon-2").css("transform", "rotate(0deg)");
        });
        $("#box-3").click(function () {
            $("#box-text-3").slideToggle(600);
            if (is_visible[2] = !is_visible[2]) $("#box-icon-3").css("transform", "rotate(180deg)");
            else $("#box-icon-3").css("transform", "rotate(0deg)");
        });
    });