function MinWindowSubstring(strArr) {
    var min = null;
    var n = strArr[0];
    var k = strArr[1];
    for (var i = 0; i < n.length; i++) {
        for (var j = i + 1; j <= n.length; j++) {
            var sub = n.slice(i, j);
            if (checkK(sub, k)) {
                if (min === null || sub.length < min.length) {
                    min = sub;
                }
            }
        }
    }
    return min;
}

function checkK(sub, k) {
    var h = k.split('');
    for (var i = 0; i < sub.length; i++) {
        var char = sub[i];
        var index = h.indexOf(char);
        if (index > -1) {
            h.splice(index, 1);
        }
    }
    if (h.length === 0) {
        return true;
    } else {
        return false;
    }
}


console.log(MinWindowSubstring(["aaabaaddae", "aad"])); // aabd
console.log(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"])); // aksfaje

// =======================================================================================================================

function HTMLElements(str) {
    let openingTags = str.match(/<\w+>/g)
    let closingTags = str.match(/(<\/\w+>)/g).reverse();
    let strObj = {
        '<div>': '</div>',
        '<p>': '</p>',
        '<i>': '</i>',
        '<p>': '</p>',
        '<em>': '</em>',
        '<b>': '</b>',
    };

    // There might not be the same number of opening and closing tags
    const max = Math.max(openingTags.length, closingTags.length);

    for (let i = 0; i < max; i++) {
        if (strObj[openingTags[i]] !== closingTags[i]) {
            return (openingTags[i] || closingTags[i]).replace(/<|>/g, '');
        }
    }

    return true;
}

function demo(str) {
    const res = HTMLElements(str);
    console.log(str, '\t--> ', res);
}

demo("<div><b><p>hello world</p></b></div>"); // "div" (closing a `div` with a `p`)


// =======================================================================================================================

// =======================================================================================================================function ArrayChallenge(arr) { 
function ArrayChallenge(arr) {
    const firstEl = arr[0];
    const newArr = arr.splice(0, firstEl);
    return arr.concat(newArr).toString().replaceAll(',', '');

}

console.log(ArrayChallenge([4, 3, 4, 3, 1, 2]));
// === === === === === === === === === === === === === === === === === === === === === === === === === === === =