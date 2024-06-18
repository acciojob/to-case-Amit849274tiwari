function toCase(str) {
 if (str.length === 0) {
        return '-';
    }
    return str.toLowerCase() + '-' + str.toUpperCase();
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
