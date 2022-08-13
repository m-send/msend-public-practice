/*
|---------------------------------------------------------------------------------------
|     //\\       //\\         //\\      \\    //
|    //   \\    //  \\       //  \\      \\  //  
|   //     \\  //    \\     //====\\     //  \\
|  //       \\//      \\   //      \\   //    \\
|---------------------------------------------------------------------------------------
| The purpose of this application is to apply Ceaser Cipher logic to a simple web form.
| This means that when a key is chosen it will correspond to the number of letters of 
| the alphabet that each character will cycle through (in order).
|
| For example, if a key of 2 is chosen, "Hello" will become "Jgnnq". In practice, this  
| offers very little security but the concept remains interesting.
|
| The encoding logic should follow these steps in general:
|     1. User selects a value between 1-25 as the cipher key.
|     2. User enters text into input and hits the "Encode" button.
|     3. Validation and core logic occurrs.
|     4. Output of encoded text appears on the screen.
|                       ---------------------------------
|                       ---------------------------------
|   Issues:
|       1.White Space will output "b"
|       2.Submission of specialChar or numbers needs to be disabled (e.g !"£$%^") √
|       3.If the newChar > alphabet.length the value is dropped. 
|            e.g y = 25 + index = 2 --> dropped value as 27 > alphabet.length (25) √
---------------------------------------------------------------------------------------
*/

//ENCODING LOGIC

//Variable Store
var key ;
var textToEncode ;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0123456789]/;
var outputTextArray = [];
var outputText;


//Checks if key input is valid i.e between 1 and 25. If valid, stores the INT in KEY
function keyCheck() {
    if ($("#key-for-encode").val() > 25 || $("#key-for-encode").val() < 1) {
        alert("The key has to be a number between 1 and 25");
        return false;
    } else {
        key = $("#key-for-encode").val();
        return true
    }
};

function specialCharCheck() {
    if (specialChars.test($("#txt-to-encode").val()) == true) {
    alert("Text Cannot Contain any Special Characters or Numbers")
    return false;
    } else return true;
};

function textEncode() {

    textToEncode = $("#txt-to-encode").val();
    let textArray = textToEncode.split("");
    for (let i = 0; i < textArray.length; i++) {
        let textArrayIndexed = textArray[i];
        let index = alphabet.indexOf(textArrayIndexed);
        index = parseInt(index);
        key = parseInt(key)
        var newChar = alphabet[index + key];
        outputTextArray.push(newChar);
        outputText = outputTextArray.join("");
    }
};

//The encoding functionality
function encode() {
    if ( keyCheck() == true && specialCharCheck() == true) {
    textEncode();
    $("#encodeOutput").html("Output = " + outputText);  
    $("#encodeKey").html("The Key = " + key);
    $("#encode-button").hide();  
    $("#cheekyCZ").show();
}

};
 

    

