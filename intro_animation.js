// Starting animation using jQuery
// 100 + 2200 + 1500 = 3800ms

$("#pic").delay(100).fadeTo(1200, 1, function () {
    $("#name").fadeTo(500, 1, function () {
        $("#role").fadeTo(500, 1, function () {
            $("#separator").fadeTo(1400, 1);
            $("#Projects").delay(200).fadeTo(300, 1, function () {
                $("#About-Me").fadeTo(300, 1, function () {
                    $("#Contact").fadeTo(300, 1, function () {
                        $("#Github").fadeTo(300, 1);
                        $("#LinkedIn").fadeTo(350, 1);
                        $("#CV").fadeTo(400, 1);
                    });
                });
            });
        });
    });
});