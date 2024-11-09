// Stellt sicher das der Code erst ausgeführt wird, wenn das Dokument vollständig geladen ist
document.addEventListener("DOMContentLoaded", (event) => {
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
  console.log(
    `Erfolgreich abgeholt. Daten: ${abstand}, ${minAbstand}, ${maxAbstand}, ${hoehe}, ${minHoehe}, ${maxHoehe}`
  );
  // Setzten des Titels der Seite auf den Entsprechenden Bahnsteighöhe
  document.getElementById(
    "titlebahnsteig"
  ).textContent = `Bahnsteigberechnung ${hoehe} mm`;
  // Setzen der Überschrift auf den entsprechenden Wert der Höhe
  document.getElementById(
    "überschriftBahnsteig"
  ).textContent = `Bahnsteigberechnung ${hoehe} mm`;
  // Setzten der Label SollAbststand und Sollhöhe auf die entsprechenden Werte
  document.getElementById(
    "labelAbstand"
  ).textContent = `Sollabstand = ${abstand} mm`; // Sollabstand
  document.getElementById("labelHoehe").textContent = `Sollhoehe = ${hoehe} mm`; // Sollhoehe

  function berechnenAbstand() {
    // Try Block für den Abstand
    try {
      // holen des InputFeldes
      const inputAbstand = document.getElementById("inputAbstand").value;
      // Wenn die Eingabe eine Zahl ist
      if (!isNaN(inputAbstand)) {
        // Wenn die Eingabe größer als minAbstand und kleiner maxAbstand ist:
        if (inputAbstand >= minAbstand && inputAbstand <= maxAbstand) {
          // Wenn die Eingabe kleiner als SollAbstand ist dann Gleis weg vom Bahnsteig
          if (inputAbstand < abstand) {
            // Ergebniss = abstand - eingabe
            let ergebniss = abstand - inputAbstand;
            window.alert(`Das Gleis muss um ${ergebniss} mm weg vom Bahnsteig`);
            // leeren des Input Feldes
            document.getElementById("inputAbstand").value = "";
          }
          // Wenn die Eingabe größer als der SollAbstand ist Gleis zum Bahnsteig
          else if (inputAbstand > abstand) {
            // ergebniss = Eingabe - sollabstand
            let ergebniss = inputAbstand - abstand;
            window.alert(`Das Gleis muss um ${ergebniss} mm weg vom Bahnsteig`);
            // Leeren des InputFeldes
            document.getElementById("inputAbstand").value = "";
          }
          // Wenn die Eingabe Genau der Sollabstand ist
          else {
            window.alert("Das Gleis liegt in der Richtung genau auf <0mm>");
            document.getElementById("inputAbstand").value = "";
          }
        }
        // Wenn die Eingabe größer oder kleiner als die Mindestwerte sind
        else {
          window.alert("Achtung IHP Verletzt!");
          document.getElementById("inputAbstand").value = "";
        }
        // Wenn die Eingabe keine Zahl ist
      } else {
          window.alert("Bitte eine Zahl eingeben!");
          document.getElementById("inputAbstand").value = "";
          
      }
    } catch {
      console.log("Falsche eingabe!");
    }
  }

  // Weiter mit der function berechnenHoehe
  // Dann noch eine funktion hinzufügen die die 1665 mm - 718 mm = 947 mm (Fahrkante)
  // und dann weiter wenn ich mit dem Disto 936 mm messe (947mm(Fahrkantenwert) - 936mm(gemessener Wert))
  // dies implementieren in die App

  // Make the function globally accessible
  window.berechnenAbstand = berechnenAbstand;
});
