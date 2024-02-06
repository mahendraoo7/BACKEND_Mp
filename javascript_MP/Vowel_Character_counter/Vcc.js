function countVowels() {
    
    var inputString = document.getElementById("inputString").value;

    var lowercaseString = inputString.toLowerCase();

    var vowels = ['a', 'e', 'i', 'o', 'u'];

    var vowelCount = 0;

    for (var i = 0; i < lowercaseString.length; i++) {
        if (vowels.includes(lowercaseString[i])) {
            vowelCount++;
        }
    }

    document.getElementById("result").innerHTML = "Number of vowels: " + vowelCount;
}
