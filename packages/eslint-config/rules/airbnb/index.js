const { defineConfig } = require('eslint/config')

module.exports = defineConfig([
    require('./best-practices'),
    require('./errors'),
    require('./es6'),
    require('./imports'),
    require('./node'),
    require('./strict'),
    require('./style'),
    require('./variables'),
])
