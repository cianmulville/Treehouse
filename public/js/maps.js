var marker;
var map;
$("#link1").click(function(){
    changeMarkerPos(53.335104, -6.244741);
});

$("#link2").click(function(){
    changeMarkerPos(33.888001, 35.523497);
});
function initMap() {

    var styles = [{
        stylers: [{
            saturation: 0
        }]
    }];

    var styledMap = new google.maps.StyledMapType(styles, {
        name: "Styled Map"
    });

    var mapProp = {
        center: new google.maps.LatLng(3.165659, 101.611416),
        zoom: 17,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        overviewMapControl: false,
        rotateControl: true,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map"), mapProp);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style')

    marker = new google.maps.Marker({
        position: new google.maps.LatLng(53.335104, -6.244741),
        animation: google.maps.Animation.DROP
    });

    marker.setMap(map);
    map.panTo(marker.position);

    google.maps.event.addListener(marker, "click", function () {

    });
    $()
}

function changeMarkerPos(lat, lon){
    myLatLng = new google.maps.LatLng(lat, lon)
    marker.setPosition(myLatLng);
    map.panTo(myLatLng);
}