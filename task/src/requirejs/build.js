var requirejs = require( "requirejs" ),
    config = {
        baseUrl: 'source',
        name: 'main',
        out: '../../dist/source.js'
    };
requirejs.optimize(config, function(res){
    console.log('build ok!');
}, function(err){
    console.log('error', err);
});