var utmSrc = "/?utm_source=";
var utmMed = "&utm_medium=";
var utmCamp = "&utm_campaign=";
var theUtm;
//Create Link
function generate() {
    if($("#url-input").val().trim().length < 1) {
    alert("Please Enter a URL...");
    return; 
    } else {
        $("#generatorButton").hide();
        // text area input assigned to x
        x = document.getElementById("url-input").value;
        console.log("x " +  x);
        
        //Splits Up the x into individual entries and stores as urlsNoUtm   
        urlsNoUtm = x.split(" ");
        console.log("urlsNoUtm " + urlsNoUtm);
        console.log("Array Length " + urlsNoUtm.length)

        //Takes UTM options and stores as variables
        cSource = document.getElementById("campSource").value;
        console.log("cSource " + cSource);
        cMedium = document.getElementById("campMed").value;
        console.log("cMedium " + cMedium);
        cName = document.getElementById("campName").value;
        console.log("cName " + cName);
        //Encodes cNAME for URL
        var encodeURLcName = encodeURIComponent(cName);
        console.log(encodeURLcName); 
        // Created Hero Utm from Optional Fields
        theUtm = utmSrc + cSource + utmMed + cMedium + utmCamp + encodeURLcName;
        
        //Loops Array and appends Hero UTM
        urlsNoUtm.forEach(generatorFunction);
        function generatorFunction(item) {
            text = item + theUtm;
            console.log(text);
            document.getElementById("generated").innerHTML += text + "\n";
            $("#generated").show();
            $("#copyText").show();
        }

        }
    };

//Copy to Clipboard Fuction
function copyToClip() {
    if(($("#generated").val().trim().length < 1)){
        alert("The output is empty!");
        return;
    } else {
        var copyOutput = $("#generated");
        copyOutput.select();
        document.execCommand("copy");
    }
};
//Clears Options    
function clearOptions() {
    $("#campSource").val("");
    $("#campMed").val("");
    $("#campName").val("");
}
//Resets the Page
function reloadPage(){
    location.reload();
};