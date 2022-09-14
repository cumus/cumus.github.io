// Custom collapsing cards interaction with jQuery

var time_step = 500;
var is_visible = [
    [false, false, false], 
    [false, false, false], 
    [false, false, false], 
    [false, false, false], 
    [false, false, false], 
    [false, false, false], 
    [false, false, false], 
    [false, false, false], 
    [false, false, false], 
    [false, false, false], 
    [false, false, false], 
    [false, false, false]];

for (let i = 1; i <= 13; i++) {

    $("#box-1-p" + i).click(function () {
        $("#box-text-1-p" + i).slideToggle(time_step);
        if (is_visible[i-1][0] = !is_visible[i-1][0]) $("#box-icon-1-p" + i).css("transform", "rotate(180deg)");
        else $("#box-icon-1-p" + i).css("transform", "rotate(0deg)");
    });
    
    $("#box-icon-1-p" + i).click(function () {
        $("#box-text-1-p" + i).slideToggle(time_step);
        if (is_visible[i-1][0] = !is_visible[i-1][0]) $("#box-icon-1-p" + i).css("transform", "rotate(180deg)");
        else $("#box-icon-1-p" + i).css("transform", "rotate(0deg)");
    });
    
    $("#box-2-p" + i).click(function () {
        $("#box-text-2-p" + i).slideToggle(time_step);
        if (is_visible[i-1][1] = !is_visible[i-1][1]) $("#box-icon-2-p" + i).css("transform", "rotate(180deg)");
        else $("#box-icon-2-p" + i).css("transform", "rotate(0deg)");
    });
    
    $("#box-3-p" + i).click(function () {
        $("#box-text-3-p" + i).slideToggle(time_step);
        if (is_visible[i-1][2] = !is_visible[i-1][2]) $("#box-icon-3-p" + i).css("transform", "rotate(180deg)");
        else $("#box-icon-3-p" + i).css("transform", "rotate(0deg)");
    });
}