const fs = require('fs')
const util = require('util')
const md5 = require('md5')

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

let hashCss
let hashJs

const readCssFile = () => {
  return readFile('dist/styles.css', (err, data) => {
    if (err) console.log(err)
  })
}

const readJsFile = () => {
  return readFile('dist/index.js', (err, data) => {
    if (err) console.log(err)
  })
}

readCssFile()
  .then((data) => {
    hashCss = md5(data).slice(0, 16)
    console.log(hashCss)
  })
  .then(() => {
    readJsFile()
      .then((data) => {
        hashJs = md5(data).slice(0, 16)
        console.log(hashJs)
      })
      .then(() => {
        const versionObject = {
          css: hashCss,
          js: hashJs
        }

        writeFile('src/_data/version.json', JSON.stringify(versionObject), (err) => {
          if (err) throw err
          console.log('The file has been saved!')
        })
      })
      .then(() => {
        fs.rename('dist/styles.css', `dist/styles${hashCss}.css`, function(err) {
          if ( err ) return console.log('ERROR: ' + err)
          console.log(`dist/styles.css > dist/styles${hashCss}.css`)
        })

        fs.rename('dist/index.js', `dist/index${hashJs}.js`, function(err) {
          if ( err ) return console.log('ERROR: ' + err)
          console.log(`dist/index.js > dist/index${hashJs}.js`)
        })
      })
  })

