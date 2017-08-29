var jog
function limparJogador(){
	$('#NomeJogador').val('');
	$('#NumbJogador').val('');
}
function alterNumb(id){
	jog = $(document.getElementById(id)).parent().parent();
	var num = jog.children('td').eq(1).text();
	$('#txNumb').val(num);
	$('#SaveNumb').click(function(){
		jog.children('td').eq(1).text($('#txNumb').val());
	})
}
function SalvarModal(){
	$('#toast').fadeIn("slow",function(){
      	$('#toast').fadeOut("slow",function(){
      		
  		});
    });
}
function addJogador(){
	var uri=$('.posicoes option:selected').val()+$('#NumbJogador').val();
	$('#roster').append('<tr id="'+uri+'"><td>'+$('#NomeJogador').val()+'</td><td>'+$('#NumbJogador').val()+'</td><td>'+$('.posicoes option:selected').val()+'</td><td>Ativo</td><td><button id="ativ'+uri+'" type="button" class="btn btn-light ativar" data-toggle="modal" data-target="#modal1">Ativar/Inativar</button><button id="numb'+uri+'" type="button" class="btn btn-light numero" data-toggle="modal" data-target="#modal2" onClick="alterNumb(this.id)">Mudar Número</button><button id="pos'+uri+'" type="button" class="btn btn-light posicao" data-toggle="modal" data-target="#modal3">Mudar Posição</button></td></tr>');
	SalvarModal();
}

function alterPosicao(){

}
function alterAtivo(){

}
$(function(){
	
    	$('#modal1').on('shown.bs.modal', function () {
		  $('.ativar').focus();
		});
		$('#modal2').on('shown.bs.modal', function () {
		  $('.numero').focus();
		});
		$('#modal23').on('shown.bs.modal', function () {
		  $('.posicao').focus();
		});
		$('#modal4').on('shown.bs.modal', function () {
		  $('#add').focus();
		});
		$('input[name=time]').click(function(){
			if ($('input[name=time]:checked').val() == "1")
			{
				$('select.posicoes').html('<option value="DT">DT</option><option value="DE">DE</option><option value="OLB">OLB</option><option value="MLB">MLB</option><option value="SS">SS</option><option value="FS">FS</option><option value="CB">CB</option>');
			}else if($('input[name=time]:checked').val() == "0"){
				$('select.posicoes').html('<option value="QB">QB</option><option value="RB">RB</option><option value="FB">FB</option><option value="TE">TE</option><option value="WR">WR</option><option value="OT">OT</option><option value="G">G</option><option value="C">C</option>');
			}else if($('input[name=time]:checked').val() == "2"){
				$('select.posicoes').html('<option value="Retornador">KR/PR</option><option value="Holder">Holder</option><option value="LS">Long Snapper</option><option value="K">Kicker</option><option value="P">Punter</option></select>');
			}
		})
		
});