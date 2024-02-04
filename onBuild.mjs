import { rename } from 'fs'
import { readFile, writeFile } from 'fs/promises'
import md5 from 'md5'

let hashCss
let hashJs

const readCssFile = () => {
  return readFile('dist/css/styles.css', (err, data) => {
    if (err) console.log(err)
    return data
  })
}

const readJsFile = () => {
  return readFile('dist/js/index.js', (err, data) => {
    if (err) console.log(err)
    return data
  })
}

const writeVersions = () => {
  const versionObject = {
    css: hashCss,
    js: hashJs,
  }

  return writeFile(
    'src/_data/version.json',
    JSON.stringify(versionObject),
    (err) => {
      if (err) throw err
      console.log('The file has been saved!')
    }
  )
}

const renameCSS = () => {
  return rename(
    'dist/css/styles.css',
    `dist/css/styles${hashCss}.css`,
    function (err) {
      if (err) return console.log('ERROR: ' + err)
      console.log(`dist/css/styles.css > dist/css/styles${hashCss}.css`)
    }
  )
}

const renameJS = () => {
  return rename(
    'dist/js/index.js',
    `dist/js/index${hashJs}.js`,
    function (err) {
      if (err) return console.log('ERROR: ' + err)
      console.log(`dist/js/index.js > dist/js/index${hashJs}.js`)
    }
  )
}

const setVersionVariables = (cssFileContent, jsFileContent) => {
  return new Promise((resolve) => {
    hashCss = md5(cssFileContent).slice(0, 16)
    hashJs = md5(jsFileContent).slice(0, 16)
    resolve()
  })
}

async function hashContent() {
  const cssFileContent = await readCssFile()
  const jsFileContent = await readJsFile()

  await setVersionVariables(cssFileContent, jsFileContent)
  await writeVersions()
  await renameCSS()
  await renameJS()
  console.log('Files versioned')
}

hashContent()
