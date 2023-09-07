function rot13(text: string): string {
    const result: string[] = [];

    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (/^[a-zA-Z]$/.test(char)) {
            const offset = char.toLowerCase() === char ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            result.push(String.fromCharCode((char.charCodeAt(0) - offset + 13) % 26 + offset));
        } else {
            result.push(char);
        }
    }

    return result.join('');
}

// Example usage
const inputText = "Hello, World! This is a test 123.";
const cipheredText = rot13(inputText);
console.log(cipheredText);
