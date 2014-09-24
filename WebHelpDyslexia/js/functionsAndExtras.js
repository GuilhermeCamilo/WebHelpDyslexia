var tam = 0; //Tamanho do regua de leitura
var controlid = 0; //controle para criação de id ao marcar texto

//substitui o que foi selecionado por um novo node
function replaceSelectionWithNode(node) 
{
	var range, html;
	if (window.getSelection && window.getSelection().getRangeAt) {
		range = window.getSelection().getRangeAt(0);
		range.deleteContents();
		range.insertNode(node);
	} else if (document.selection && document.selection.createRange) {
		range = document.selection.createRange();
		html = (node.nodeType == 3) ? node.data : node.outerHTML;
		range.pasteHTML(html);
	}
}

//transforma uma string em um json
function parseJSON(data) {
    return window.JSON && window.JSON.parse ? window.JSON.parse( data ) : (new Function("return " + data))(); 
}

//pega todos os ids de elementos no intervalo
function getAllBetween2(firstEl,lastEl)
{
	var firstElement = $(firstEl); // First Element
	var lastElement = $(lastEl); // Last Element
	var collection = new Array(); // Collection of Elements
	collection.push(firstElement.attr('id')); // Add First Element to Collection
	$(firstEl).nextAll().each(function(){ // Traverse all siblings
		var siblingID  = $(this).attr('id'); // Get Sibling ID
		if (siblingID != $(lastElement).attr('id')) { // If Sib is not LastElement
			collection.push($(this).attr('id')); // Add Sibling to Collection
		} else { // Else, if Sib is LastElement
			collection.push(lastElement.attr('id')); // Add Last Element to Collection
			return false; // Break Loop
		}
	});         
	return collection; // Return Collection
}

  //remove janela e marcações
 function removeHighLithAndScreens ()
 {
	var aux = parseInt(controlid);
	$("#webHelpDyslexia-blackUper").remove();
    $("#webHelpDyslexia-blackBotton").remove();
    $("#webHelpDyslexia-select-reader-size").val('');
    $("#webHelpDyslexia-text").remove();
	while(aux != 0)
	{
		var el = document.getElementById('webHelpDyslexia-colorir'+controlid);
		var cont = el.innerHTML;
		$('#webHelpDyslexia-colorir'+controlid).replaceWith(cont);
		aux = aux - 1;
		controlid = aux.toString();
	}
 }
 
 //remove os elementos que o plugin cria
 function removeElements ()
 {
	$("#webHelpDyslexia-blackUper").remove();
	$("#webHelpDyslexia-blackBotton").remove();
	$("#webHelpDyslexia-select-reader-size").val('');
	$("#webHelpDyslexia-text").remove();
 }

 // remove as divs utilizadas na regua de leitura
 function removeOnlyBlackTags ()
 {
	var div1 = document.getElementById('webHelpDyslexia-blackUper');
	var div2 = document.getElementById('webHelpDyslexia-blackBotton');
	div2.remove();
	div1.remove();
 }