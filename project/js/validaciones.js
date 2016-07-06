
function obtieneNombre(){
	var nombre=document.getElementById("miNombre");
	var decision2="";
	var alertas='<div class="alert alert-info alert-dismissable"> <button type="button" class="close"'; 
	alertas+='data-dismiss="alert" aria-hidden="true">×</button>';
    alertas+= nombre.value+'.</div>';
    var alertas2='<div class="alert alert-info alert-dismissable"> <button type="button" class="close"'; 
	alertas2+='data-dismiss="alert" aria-hidden="true">×</button>';

	var alertas3='<div class="alert alert-info alert-dismissable"> <button type="button" class="close"'; 
	alertas3+='data-dismiss="alert" aria-hidden="true">×</button>';
	var arreglo = document.getElementsByName("deporte");
	var deportesSelec="";
    var nombre2=$("#miNombre").val();
	for(var a=0; a<arreglo.length; a++){
		if(arreglo[a].checked){
			deportesSelec+=arreglo[a].value + ", ";
		}
	} 
	alertas2+= deportesSelec+'.</div>';
	document.getElementById("alertas").innerHTML =alertas;
	$("#alertasJquery").html(alertas);
	document.getElementById("alertaSelec").innerHTML=alertas2;


	$("#decision input:checked").each(function (){
		decision2+=$(this).val();

	});
	alertas3+= decision2+'.</div>';
	$("#alertadecision").html(alertas3);


}