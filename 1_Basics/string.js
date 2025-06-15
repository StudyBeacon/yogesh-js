const name= "Yogesh"
const age= 21

console.log(`Hello my name is ${name} and I'm ${age} years old`);


const homeTown= new String('Damak')
console.log(`from ${homeTown}`);

console.log(homeTown[0]);
console.log(homeTown.__proto__);
console.log(homeTown.length);
console.log(homeTown.toUpperCase());
console.log(homeTown.charAt(4));
console.log(homeTown.indexOf('k'));


const newString = homeTown.substring(0,4)
console.log(newString);

const anotherString= homeTown.slice(-2,4)
console.log(anotherString);

const newString_1 = "   Yogesh   "
console.log(newString_1);
console.log(newString_1.trim());
// A new string representing str stripped of whitespace from both its beginning and end.
//  Whitespace is defined as white space characters plus line terminators.

const url = "https://yogeshrai.com/yogesh%20rai"

console.log(url.replace('%20','-'))
console.log(url.includes('suman'));


//  JavaScript String Methods (A–Z)
// Method	Description
// anchor()	Wraps string in <a name="..."> (⚠️ Deprecated)
// at(index)	Returns character at specified index (supports negative index)
// big()	Wraps string in <big> (⚠️ Deprecated)
// blink()	Wraps string in <blink> (⚠️ Deprecated, not supported)
// bold()	Wraps string in <b>
// charAt(index)	Returns the character at specified position
// charCodeAt(index)	Returns Unicode of character at specified position
// codePointAt(index)	Returns Unicode code point (works for emoji, special chars)
// concat(str1, str2, ...)	Combines two or more strings
// endsWith(str)	Checks if string ends with the given substring
// fixed()	Wraps string in <tt> (⚠️ Deprecated)
// fontcolor(color)	Wraps string in <font color="..."> (⚠️ Deprecated)
// fontsize(size)	Wraps string in <font size="..."> (⚠️ Deprecated)
// includes(substr)	Returns true if string contains the given substring
// indexOf(substr)	Returns the index of first occurrence of substring
// italics()	Wraps string in <i>
// lastIndexOf(substr)	Returns the last index of substring
// link(url)	Wraps string in <a href="...">
// localeCompare()	Compares two strings based on locale
// match(regex)	Returns match result for a regex
// matchAll(regex)	Returns all matches (ES2020+)
// normalize()	Normalizes Unicode text
// padEnd(targetLength, padStr)	Pads string at the end to desired length
// padStart(targetLength, padStr)	Pads string at the beginning
// repeat(count)	Repeats the string multiple times
// replace(str or regex, replacement)	Replaces part of string
// replaceAll(str or regex, replacement)	Replaces all matches (ES2021+)
// search(regex)	Searches string using regex, returns index
// slice(start, end)	Extracts a part of the string
// small()	Wraps string in <small> (⚠️ Deprecated)
// split(separator)	Splits string into array of substrings
// startsWith(substr)	Checks if string starts with substring
// strike()	Wraps string in <strike> (⚠️ Deprecated)
// sub()	Wraps string in <sub> (subscript)
// substr(start, length)	Extracts part of string (⚠️ Deprecated)
// substring(start, end)	Returns a substring between two indexes
// sup()	Wraps string in <sup> (superscript)
// toLocaleLowerCase()	Converts to lowercase (based on locale)
// toLocaleUpperCase()	Converts to uppercase (based on locale)
// toLowerCase()	Converts to lowercase
// toString()	Returns string itself (used internally)
// toUpperCase()	Converts to uppercase
// trim()	Removes whitespace from both ends
// trimEnd() / trimRight()	Removes whitespace from end
// trimStart() / trimLeft()	Removes whitespace from start
// valueOf()	Returns the primitive string value
// ✅ Commonly Used Ones to Remember:

//     charAt(), slice(), substring(), substr() (⚠️ old)

//     includes(), startsWith(), endsWith()

//     toUpperCase(), toLowerCase()

//     trim(), split(), replace(), padStart(), repeat()

