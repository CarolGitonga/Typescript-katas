function rot13(text) {
    var result = [];
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        if (/^[a-zA-Z]$/.test(char)) {
            var offset = char.toLowerCase() === char ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            result.push(String.fromCharCode((char.charCodeAt(0) - offset + 13) % 26 + offset));
        }
        else {
            result.push(char);
        }
    }
    return result.join('');
}
// Example usage
var inputText = "Hello, World! This is a test 123.";
var cipheredText = rot13(inputText);
console.log(cipheredText);
