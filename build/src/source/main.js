require.config({
    // urlArgs: "bust=" +  (new Date()).getTime()
});

require(['require', 'extra'], function(require, e){
    // var buildUrl = require.toUrl('../build.js');
    // console.log(buildUrl);

    document.querySelector('body').innerHTML = e.name + e.date;
});