// Setting modals' video src only when opened
// Setting them in body causes page to lag until all media is loaded
$("#videoRedeye1").on('hide.bs.modal', function () { $("#RedEyePhysics").attr('src', '') });
$("#videoRedeye1").on('shown.bs.modal', function () { $("#RedEyePhysics").attr('src', "https://drive.google.com/file/d/1eN2R-Palm3ZxZ9y6k3bgsn4xEUVx_eO7/preview") });
$("#videoRedeye2").on('hide.bs.modal', function () { $("#RedEyeRender").attr('src', '') });
$("#videoRedeye2").on('shown.bs.modal', function () { $("#RedEyeRender").attr('src', "https://drive.google.com/file/d/1Sp2kgVi2dbIFtnkX5YYiWoQLPNned_ik/preview") });
$("#videoAlita").on('hide.bs.modal', function () { $("#AlitaTrailer").attr('src', '') });
$("#videoAlita").on('shown.bs.modal', function () { $("#AlitaTrailer").attr('src', "https://www.youtube.com/embed/OPb1lIkBqQM") });
$("#videoSquareUp").on('hide.bs.modal', function () { $("#SquareUpTrailer").attr('src', '') });
$("#videoSquareUp").on('shown.bs.modal', function () { $("#SquareUpTrailer").attr('src', "https://www.youtube.com/embed/m_kOMQveAeQ") });
$("#videoUnthrone").on('hide.bs.modal', function () { $("#UnthoneTrailer").attr('src', '') });
$("#videoUnthrone").on('shown.bs.modal', function () { $("#UnthoneTrailer").attr('src', "https://www.youtube.com/embed/e50VrLzz9iE") });
$("#videoALBA1").on('hide.bs.modal', function () { $("#ALBA1Trailer").attr('src', '') });
$("#videoALBA1").on('shown.bs.modal', function () { $("#ALBA1Trailer").attr('src', "https://www.youtube.com/embed/1zKuvson0wY") });
$("#videoALBA2").on('hide.bs.modal', function () { $("#ALBA2Trailer").attr('src', '') });
$("#videoALBA2").on('shown.bs.modal', function () { $("#ALBA2Trailer").attr('src', "https://www.youtube.com/embed/R-CC0O0SMIA") });