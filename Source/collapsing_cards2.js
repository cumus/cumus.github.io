// Custom collapsing cards interaction - Projects

const card_count = 15;
const time_step = 500;

// Icon rotation toggle
const is_visible = [];
for (let i = 1; i <= card_count; i++) {

    is_visible[i - 1] = [false, false, false];

    // Main Box
    $("#box-1-p" + i).click(function () {
        $("#box-text-1-p" + i).slideToggle(time_step);
        if (is_visible[i - 1][0] = !is_visible[i - 1][0]) $("#box-icon-1-p" + i).css("transform", "rotate(180deg)");
        else $("#box-icon-1-p" + i).css("transform", "rotate(0deg)");
    });

    // Contributions
    $("#box-2-p" + i).click(function () {
        $("#box-text-2-p" + i).slideToggle(time_step);
        if (is_visible[i - 1][1] = !is_visible[i - 1][1]) $("#box-icon-2-p" + i).css("transform", "rotate(180deg)");
        else $("#box-icon-2-p" + i).css("transform", "rotate(0deg)");
    });

    // Challenges
    $("#box-3-p" + i).click(function () {
        $("#box-text-3-p" + i).slideToggle(time_step);
        if (is_visible[i - 1][2] = !is_visible[i - 1][2]) $("#box-icon-3-p" + i).css("transform", "rotate(180deg)");
        else $("#box-icon-3-p" + i).css("transform", "rotate(0deg)");
    });
}