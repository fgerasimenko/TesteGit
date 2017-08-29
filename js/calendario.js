var geocoder;
var map;
var marker;
var span;
var lat;
var long;
var data;
var today = new Date();
var year = today.getFullYear();
function carregarNoMapa(endereco) {
    geocoder.geocode({ 'address': endereco + ', Brasil', 'region': 'BR' }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                var lat = latitude;
                var long = longitude;

                var location = new google.maps.LatLng(latitude, longitude);
                    marker.setPosition(location);
                    map.setCenter(location);
                    map.setZoom(16);
			}
        }
    });
}
function initialize() {
    var latlng = new google.maps.LatLng(-23.1872551, -46.8970881);
    var options = {
        zoom: 8,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    map = new google.maps.Map(document.getElementById("map_canvas"), options);
 
    geocoder = new google.maps.Geocoder();
 
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
    });
 
    marker.setPosition(latlng);
}

 
$(document).ready(function () {
    //initialize();
    
});
function Limpar(){
	$('#Event').html('');
	$('#nulo').prop( "selected", true );
}
function Procurar(){
	var end = $('#Endereco').val();
	end = end.replace(/ /g,'+');
	carregarNoMapa(end);
}
function SalvarModal(){
          $('#toast').fadeIn("slow",function(){
          	$('#toast').fadeOut("slow",function(){
          		
      		});
        });
        $(span).append('<p>'+$('#horaEvent').val()+' '+$('#Endereco').val()+'</p>');
        Limpar();
}

$(function() {
	$('td').click(function(){
		span = $(this);
		var cur = $(this).children().attr('id');
		data = year+'-'+cur.substr(2,2)+'-'+$(this).children().attr('id').substr(0,2);
	});
	$('#jogo').on('shown.bs.modal', function () {
	  $('td').focus();
	  
	});
	$('#jogo').on('hidden.bs.modal', function () {
	  Limpar();
	  
	});
	$("#tipoEvent").change(function(){
		var html = '<div class="row"><input type="Date" id="dataEvent" class="form-control" value="'+data+'" required><input type="time" value="08:00" id="horaEvent" class="form-control" required></div><input type="text" id="Endereco" class="form-control" placeholder="Coloque o endereço aqui..." required><button name="Teste" id="Search" onclick="Procurar()" class="btn btn-default">Procurar Endereço</button><div id="map_canvas"</div>'
		if (($( "select option:selected" ).val() == '1') || ($( "select option:selected" ).val() == '0') || ($( "select option:selected" ).val() == '2')){
			//$('body').append('<input type="Date" id="dataEvent"><input type="time" id="horaEvent"><div id="localEvent"></div>');
			$('#Event').html(html);
			initialize();
		}else{
			$('#Event').html('<div class="row"><input type="text" id="tipo" class="form-control" placeholder="Tipo do Evento" maxlength="50" required></div>'+html);
		};
	});

});