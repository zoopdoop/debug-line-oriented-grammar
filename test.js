import { parser as newlineParser } from "./newline-example.js"
import { parser as newlineOrEofParser } from "./newline-or-eof-example.js"
import { parser as fixedParser } from "./fixed-example.js"

console.log("\n*** DEBUG PARSER EXAMPLES:")

console.log("works", newlineParser.parse("foo baz\n").toString())
console.log("works", newlineOrEofParser.parse("foo baz\n").toString())

console.log("fails", newlineParser.parse("foo baz").toString())
console.log("fails", newlineOrEofParser.parse("foo baz").toString())

console.log("\n*** FIXED PARSER EXAMPLES:")
console.log("works", fixedParser.parse("").toString())
console.log("works", fixedParser.parse("\n").toString())
console.log("works", fixedParser.parse("\n\n").toString())
console.log("works", fixedParser.parse("foo baz").toString())
console.log("works", fixedParser.parse("foo baz\n").toString())
console.log("works", fixedParser.parse("foo baz\nfoo bar").toString())
console.log("works", fixedParser.parse("foo baz\nfoo bar\n\n").toString())
