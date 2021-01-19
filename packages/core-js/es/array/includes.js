require('../../modules/es.array.includes');
var entryUnbind = require('../../internals/entry-unbind');

// REVIEW[epic=includes,seq=2] 从global取includes方法
module.exports = entryUnbind('Array', 'includes');
