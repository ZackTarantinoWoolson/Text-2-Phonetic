const nato_arr = [
    ["A", "Alfa"], ["B", "Bravo"], ["C", "Charlie"], ["D", "Delta"], ["E", "Echo"], ["F", "Foxtro"], ["G", "Golf"], ["H", "Hotel"], ["I", "India"], ["J", "Juliett"], ["K", "Kilo"], ["L", "Lima"], ["M", "Mike"], ["N", "Novemeber"], ["O", "Oscar"], ["P", "Papa"], ["Q", "Quebec"], ["R", "Romeo"], ["S", "Sierra"], ["T", "Tango"], ["U", "Uniform"], ["V", "Victor"], ["W", "Whiskey"], ["X", "Xray"], ["Y", "Yankee"], ["Z", "Zulu"], [".", "Stop"], [",", "Comma"], ["1", "One"], ["2", "Two"], ["3", "Three"], ["4", "Four"], ["5", "Five"], ["6", "Six"], ["7", "Seven"], ["8", "Eight"], ["9", "Nine"], ["0", "Zero"]
]

function edValueKeyPress() {
    var edValue = document.getElementById("en_text");
    var lblValue = document.getElementById("lblValue");
    var s = edValue.value.toUpperCase();

    console.log(s.length)
    var arrayOfCharacters = s.split('');

    console.log(arrayOfCharacters)
    
    for (var i = 0; i < arrayOfCharacters.length; i++) {
    
        var nato_txt = isIteminArray(arrayOfCharacters[i])

        if (nato_txt === undefined) {
            lblValue.innerText = "The text box contains: " + arrayOfCharacters[i];
        }
        else if (nato_txt !== undefined) {
            console.log("in else")
            lblValue.innerText = "The text box contains: " + nato_txt;
        }
    }
}

function isIteminArray(item) {
    // console.log(item)
    for (var i = 0; i < nato_arr.length; i++) {
        if (nato_arr[i][0] == item) {
            // console.log(nato_arr[i][1])
            return nato_arr[i][1]
        }
    }
}