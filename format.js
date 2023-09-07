function formatLikes(names) {
    var numLikes = names.length;
    if (numLikes === 0) {
        return "no one likes this";
    }
    else if (numLikes === 1) {
        return "".concat(names[0], " likes this");
    }
    else if (numLikes === 2) {
        return "".concat(names[0], " and ").concat(names[1], " like this");
    }
    else if (numLikes === 3) {
        return "".concat(names[0], ", ").concat(names[1], " and ").concat(names[2], " like this");
    }
    else {
        return "".concat(names[0], ", ").concat(names[1], " and ").concat(numLikes - 2, " others like this");
    }
}
// Test cases
console.log(formatLikes([]));
console.log(formatLikes(["Peter"]));
console.log(formatLikes(["Jacob", "Alex"]));
console.log(formatLikes(["Max", "John", "Mark"]));
console.log(formatLikes(["Alex", "Jacob", "Mark", "Max"]));
