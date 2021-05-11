import {ExternalTokenizer} from "lezer"
import {
  newline as newlineToken, eof
} from "./newline-or-eof-example.terms.js"

const newline = 10, carriageReturn = 13

export const newlines = new ExternalTokenizer((input, token, stack) => {
  let next = input.get(token.start)
  if (next < 0) {
    token.accept(eof, token.start)
  } else if (next === newline || next === carriageReturn) {
    token.accept(newlineToken, token.start + 1)
  }
}, {contextual: true, fallback: false})
