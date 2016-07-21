require(['require', './extra'], function(require){
    // var buildUrl = require.toUrl('../build.js');
    // console.log(buildUrl);

    //调用
    var e = require('./extra'),
        p = require('prop');

    document.querySelector('body').innerHTML += p.name + ' ' + e.date;
});