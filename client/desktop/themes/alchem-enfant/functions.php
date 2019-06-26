<?php
function wpm_enqueue_styles(){
wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'wpm_enqueue_styles' );

// Ajoute le CSS et le JavaScript pour utiliser Bootstrap
// function enqueue_bootstrap() {
//     wp_enqueue_style('bootstrap-css', get_stylesheet_directory_uri() . 'plugins/bootstrap/css/bootstrap.css' );
   
//     // Ces deux lignes ne sont utiles que si vous utilisez les fonctionnalites JavaScript
//     wp_enqueue_script('jquery');
//     wp_enqueue_script('bootstrap-js', get_stylesheet_directory_uri() . '/bootstrap/js/bootstrap.min.js', 'jquery' );
//   }
//   add_action( 'wp_enqueue_scripts', 'enqueue_bootstrap' );
