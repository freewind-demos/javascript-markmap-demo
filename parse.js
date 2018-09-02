const fs = require('fs')
const parse = require('markmap/parse.markdown')
const transform = require('markmap/transform.headings')

const text = fs.readFileSync('javascript.md', 'utf-8')

const headings = parse(text)
const root = transform(headings)

console.log(root)

fs.writeFileSync('javascript.json', JSON.stringify(root))