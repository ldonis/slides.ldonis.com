<?php 

// Website info 
Config::set('info', [ 
    'description' => 'Slides for talks and workshops', 
    'name' => 'ldonis - slides', 
    'version' => '1.0', 
    'env' => 'dev'
]);


// Default section 
Router::connect('default','home');


// Plantillas 
Config::set('template', ['default' => 'ppt','home' => 'default']);


// Network
Config::set('network', ['www' => false]);


// Cache
Config::set('cache', false);