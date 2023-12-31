function formatLikes(names: string[]): string {
    const numLikes = names.length;

    if (numLikes === 0) {
        return "no one likes this";
    } else if (numLikes === 1) {
        return `${names[0]} likes this`;
    } else if (numLikes === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (numLikes === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
        return `${names[0]}, ${names[1]} and ${numLikes - 2} others like this`;
    }
}

// Test cases
console.log(formatLikes([]));
console.log(formatLikes(["Peter"]));
console.log(formatLikes(["Jacob", "Alex"]));
console.log(formatLikes(["Max", "John", "Mark"]));
console.log(formatLikes(["Alex", "Jacob", "Mark", "Max"]));
