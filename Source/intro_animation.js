// Starting animation using jQuery
// 800 + 800 + 700 + 725 = 3025ms

$("#pic").fadeTo(800, 1, function () {
    $("#name").fadeTo(300, 1, function () {
        $("#role").delay(200).fadeTo(300, 1, function () {
            $("#separator").fadeTo(1400, 1);
            $("#Projects").delay(300).fadeTo(250, 1);
            $("#About-Me").delay(375).fadeTo(250, 1);
            $("#Contact").delay(450).fadeTo(250, 1, function () {
                $("#Github").delay(300).fadeTo(250, 1);
                $("#LinkedIn").delay(375).fadeTo(250, 1);
                $("#CV").delay(450).fadeTo(250, 1);
                $("#email").delay(525).fadeTo(250, 1);
            });
        });
    });
});