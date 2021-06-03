const gulp = require('gulp')
const { series, parallel } = require('gulp')


const { appHtml, appCSS, appJS, appIMG } = require('./gulpTasks/app')

const { depsCSS, depsFonts } = require('./gulpTasks/deps')

const { monitorarArquivos, servidor } = require('./gulpTasks/server')

module.exports.default = series (
    parallel(
        series(appHtml, appCSS, appIMG, appJS),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)