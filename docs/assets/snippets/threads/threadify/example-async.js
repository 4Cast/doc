// PROJECT/backend/modules/db/index.js// @param params Method parameters// @param [done] optional, returns two parameters: error, resultsexports.helloWorld = function( params, done ){    if ( params && params.name )    {        // Send results        setTimeout(function(){            done(null, "Hello " + params.name);        }, 5000 );    } else {        // Send an error        setTimeout(function(){            var err = {code:2347, type:'exception', message:'Name parameter is missing.'}            done(err);        }, 5000 );    }};