// Custom collapsing cards interaction - AboutMe

const card_count = 5;
const time_step = 600;

// Icon rotation toggle
const is_visible = [];
for (let i = 1; i <= card_count; i++) {
    is_visible[i - 1] = false;
    $("#box-" + i).click(function () {
        $("#box-text-" + i).slideToggle(time_step);
        if (is_visible[i - 1] = !is_visible[i - 1]) $("#box-icon-" + i).css("transform", "rotate(180deg)");
        else $("#box-icon-" + i).css("transform", "rotate(0deg)");
    });
}