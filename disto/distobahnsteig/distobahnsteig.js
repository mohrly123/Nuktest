const abstandMitDisto = 947
const achsAbstand = 1665

function berechnungAbstandDisto(){
    try{
        // Eingabe im Input Feld
        const input = document.getElementById("inputDisto").value;
        // Prüfen ob die Eingabe eine Zahl ist
        if(!isNaN(input)){
            // Wenn die Eingabe ein Zahl ist dann
            // Wenn die Eingabe kleiner als der Sollwert ist dann Gleis Weg vom Bahnsteig
            if(input < abstandMitDisto){
                let ergebnisDistoBahnsteig = abstandMitDisto - input;
                window.alert(`Das Gleis muss um ${ergebnisDistoBahnsteig} mm weg vom Bahnsteig!`);
                document.getElementById("inputDisto").value = "";
            }
            // Wenn die Eingabe größer als der Sollwert ist Gleis zum Bahnsteig
            else if(input > abstandMitDisto){
                let ergebnisDistoBahnsteig = input - abstandMitDisto;
                window.alert(`Das Gleis muss um ${ergebnisDistoBahnsteig} mm zum Bahnsteig!`);
                document.getElementById("inputDisto").value = "";
            }
            else{
                window.alert("Verschiebung = 0mm");
                document.getElementById("inputDisto").value = "";
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
