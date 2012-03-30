// requirejs configuration
require.config({
    baseUrl: '.',
    paths: {
        order: 'lib/order',
        jquery: '../src/libs/jquery/jquery-1.7.2.min'
    }

});

require(['jquery'], function($) {

});
