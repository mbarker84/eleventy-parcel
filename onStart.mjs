import { writeFile } from 'fs'

const versionObject = {
  css: '',
  js: '',
}

writeFile('src/_data/version.json', JSON.stringify(versionObject), (err) => {
  if (err) throw err
  console.log(`${versionObject} > src/_data/version.json`)
})
