// Stellt sicher das der Code erst ausgeführt wird, wenn das Dokument vollständig geladen ist
document.addEventListener('DOMContentLoaded', (event) => {
// übernehmen der Daten aus dem lokalen Speicher und in der Variable "abgeholteDaten speichern"
const abgeholteDaten = JSON.parse(localStorage.getItem("übergebeneDaten"));
// Umwandeln der Daten in die entsprechenden Werte
let abstand = abgeholteDaten.abstand;
let minAbstand = abgeholteDaten.minAbstand;
let maxAbstand = abgeholteDaten.maxAbstand;
let hoehe = abgeholteDaten.hoehe;
let minHoehe = abgeholteDaten.minHoehe;
let maxHoehe = abgeholteDaten.maxHoehe;
// Ausgabe der Daten in der Konsole
console.log(`Erfolgreich abgeholt. Daten: ${abstand}, ${minAbstand}, ${maxAbstand}, ${hoehe}, ${minHoehe}, ${maxHoehe}`);
// Setzten des Titels der Seite auf den Entsprechenden Bahnsteighöhe
document.getElementById("titlebahnsteig").textContent = `Bahnsteigberechnung ${hoehe} mm`;
// Setzen der Überschrift auf den entsprechenden Wert der Höhe
document.getElementById("überschriftBahnsteig").textContent = `Bahnsteigberechnung ${hoehe} mm`;
// Setzten der Label SollAbststand und Sollhöhe auf die entsprechenden Werte
document.getElementById("labelAbstand").textContent = `Sollabstand = ${abstand} mm`; // Sollabstand   
document.getElementById("labelHoehe").textContent = `Sollhoehe = ${hoehe} mm` // Sollhoehe    




});