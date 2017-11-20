$(document).ready (function () {
$("button").click (function () {
var lugar = $("#lugar").val ();

$.getJSON ({
url: "https://maps.googleapis.com/maps/api/geocode/json",
data: {
sensor: false,
address: lugar
},
success: function (resp, estado, http) {
$("#resposta").html ("<b>Endereço</b>: " +
resp.results[0].formatted_address + "<br/>" +
"<b>Latitude</b>: " +
resp.results[0].geometry.location.lat + "<br/>" +
"<b>Longitude</b>: " +
resp.results[0].geometry.location.lng + "<br/>" +
"<b>Estado</b>: " + estado + "<br/>" +
"<b>HTTP.status</b>: " + http.status);
}
});
});
});	