var defaultEncoding
/* istanbul ignore next */

defaultEncoding = 'utf-8'

if (process.version) {
  var pVersionMajor = parseInt(process.version.split('.')[0].slice(1), 10)
  if(pVersionMajor >= 6)
    defaultEncoding = 'binary'
} 
module.exports = defaultEncoding
