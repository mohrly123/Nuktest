const abstandMitDisto = 947;
const achsAbstand = 1665;
const letztenZweiMessungen = [];
let ergebnisDistoBahnsteig;

function berechnungAbstandDisto(){
    try{
        // Eingabe im Input Feld
        const input = document.getElementById("inputDisto").value;
        // Prüfen ob die Eingabe eine Zahl ist
        if(!isNaN(input)){
            // Wenn die Eingabe ein Zahl ist dann
            // Wenn die Eingabe kleiner als der Sollwert ist dann Gleis Weg vom Bahnsteig
            if(input < abstandMitDisto){
                ergebnisDistoBahnsteig = `${abstandMitDisto - input} mm weg vom Bahnsteig`;
                window.alert(`Das Gleis muss um ${abstandMitDisto - input} mm weg vom Bahnsteig!`);
                messungenSammeln();
                document.getElementById("inputDisto").value = "";
            }
            // Wenn die Eingabe größer als der Sollwert ist Gleis zum Bahnsteig
            else if(input > abstandMitDisto){
                ergebnisDistoBahnsteig = `${input - abstandMitDisto} mm zum Bahnsteig`;
                window.alert(`Das Gleis muss um ${input - abstandMitDisto} mm zum Bahnsteig!`);
                messungenSammeln();
                document.getElementById("inputDisto").value = "";
            }
            else{
                window.alert("Verschiebung = 0mm");
                document.getElementById("inputDisto").value = "";
                messungenSammeln()
            }
        }
        else{
            window.alert("Eingabe muss eine Zahl sein!");
            console.error("Achtung eingabe muss eine Zahl sein!");
        }
    }
    catch{
        console.log("Achtung Fehler im Try Block der berechnenAbstand Funktion")
    }
}

// Die lezten 2 Messungen in dem Array Speichern
// Das ergebnis der letzten berechnung nehmen und in das Array packen
function messungenSammeln(){
    try{
        // Wenn die länge des Array unter 2 ist
        if (letztenZweiMessungen.length < 2){
            letztenZweiMessungen.push(ergebnisDistoBahnsteig);
        }
        // Wenn die Länge des Arrays 2 oder mehr ist soll der erste Eintrag gelöscht werden
        else if(letztenZweiMessungen.length >= 2){
            letztenZweiMessungen.shift();
            letztenZweiMessungen.push(ergebnisDistoBahnsteig);
        }
        // Update the HTML element with the array values
        document.getElementById("ergebnisanzeigendisto").innerText = "Die Letzten 2 Messungen: (" + letztenZweiMessungen.map(value => value).join(", ") + ")";
        console.log(letztenZweiMessungen);
    }
    catch{
        console.log("Error im try Block der Function messungenSammeln.");
    }
}

// Ideen:

// Eingaben werden in einem Array gespeichert und die letzten 2 angezeigt
