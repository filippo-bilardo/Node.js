$('body').append('<button id="openDevTools">Show DevTools</button>');
$('#openDevTools').click(function () {
  nw.Window.get().showDevTools();
});

// mostra il contenuto della directory corrente
$('body').append('<button id="showDir">Read Files</button>');
$('body').append('<div><output id="contents"></output></div></br>');
$('#showDir').click(function () {
  const fs = require('fs');
  const data = fs.readdirSync('.');
  $('#contents').html(data.join('<br>'));
});


//Aggiungo l'elemento div "gestione_alunni"
$('body').append('<div id="gestione_alunni"></div>');
//Aggiungo l'elemento select "alunni_presenti" all'interno del div "gestione_alunni"
$('#gestione_alunni').append('<select id="alunni_presenti" multiple size="10"></select>');
//Aggiungo tre alunni all'interno del select "alunni_presenti"
$('#alunni_presenti').append('<option>Alunno 1</option>');
$('#alunni_presenti').append('<option>Alunno 2</option>');
$('#alunni_presenti').append('<option>Alunno 3</option>');
//Aggiungo l'elemento select "alunni_assenti" all'interno del div "gestione_alunni"
$('#gestione_alunni').append('<select id="alunni_assenti" multiple size="10"></select>');
//imposto la larghezza dei select "alunni_presenti" e "alunni_assenti"
$('#alunni_presenti').css('width', '200px');
$('#alunni_assenti').css('width', '200px');

//Aggiungo l'elemento button "assenti" all'interno del div "gestione_alunni"
$('#gestione_alunni').append('<button id="assenti">Assenti</button>');
//Aggiungo l'elemento button "prsenti" all'interno del div "gestione_alunni"
$('#gestione_alunni').append('<button id="presenti">Presenti</button>');
//Aggiungo l'elemento button "salva" all'interno del div "gestione_alunni"
$('#gestione_alunni').append('<button id="salva">Salva</button>');
//Aggiungo l'elemento button "carica" all'interno del div "gestione_alunni"
$('#gestione_alunni').append('<button id="carica">Carica</button>');
//Evento click sul bottone "Assenti" 
// che sposta gli elementi selezionati da alunni_presenti a alunni_assenti
$('#assenti').click(function () {
  $('#alunni_presenti option:selected').appendTo('#alunni_assenti');
});
//Evento click sul bottone "Presenti"
// che sposta gli elementi selezionati da alunni_assenti a alunni_presenti
$('#presenti').click(function () {
  $('#alunni_assenti option:selected').appendTo('#alunni_presenti');
});
//Evento click sul bottone "Salva" 
// che salva in formato json il contenuto di alunni_presenti in un file alunni_presenti.txt
$('#salva').click(function () {
  const fs = require('fs');
  const data = $('#alunni_presenti').children().map(function () {
    return $(this).text();
  }).get();
  fs.writeFileSync('alunni_presenti.txt', JSON.stringify(data));
});
//Evento click sul bottone "Carica"
// che carica il contenuto del file alunni_presenti.txt in alunni_presenti
$('#carica').click(function () {
  const fs = require('fs');
  const data = fs.readFileSync('alunni_presenti.txt');
  $('#alunni_presenti').empty();
  JSON.parse(data).forEach(function (item) {
    $('#alunni_presenti').append('<option>' + item + '</option>');
  });
});