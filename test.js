import { parser as newlineParser } from "./newline-example.js"
import { parser as newlineOrEofParser } from "./newline-or-eof-example.js"

console.log("works", newlineParser.parse("foo baz\n").toString())
console.log("works", newlineOrEofParser.parse("foo baz\n").toString())

console.log("fails", newlineParser.parse("foo baz").toString())
console.log("fails", newlineOrEofParser.parse("foo baz").toString())
