// Funktion um die Zahlen des Buttons zu nehmen
function openBahnsteig(abstand,minAbstand,maxabstand,hoehe,minHoehe,maxHoehe){
    this.abstand = abstand;
    this.minAbstand = minAbstand;
    this.maxabstand = maxabstand;
    this.hoehe = hoehe;
    this.minHoehe = minHoehe;
    this.maxHoehe = maxHoehe;
    saveToLocalStorage(abstand,minAbstand,maxabstand,hoehe,minHoehe,maxHoehe);
    location.href = "./bahnsteig/bahnsteig.html"; // Ensure this path is correct
}

// Funktion um die Zahlen in den local Storage zu packen
function saveToLocalStorage(abstand,minAbstand,maxAbstand,hoehe,minHoehe,maxHoehe){
    // Clearen des Storage
    localStorage.clear();
    // Daten in den lokalen Speicher stecken
    localStorage.setItem("übergebeneDaten", JSON.stringify({abstand,minAbstand,maxAbstand,hoehe,minHoehe,maxHoehe}));
    // Überprüfen ob es "übergebeneDaten" im lokalen Speicher gibt
    if(localStorage.getItem("übergebeneDaten")){
        // Wenn Ja dann ausgabe der Daten in der Konsole
        console.log(`Erfolgreich gespeichert. Daten: ${abstand}, ${minAbstand}, ${maxAbstand}, ${hoehe}, ${minHoehe}, ${maxHoehe}`);
        // Wenn nicht dann ausgabe eines Fehlers in der Konsole
    }else{
        console.log("Fehler! Daten nicht im lokal Storage gespeichert");
    }
}
