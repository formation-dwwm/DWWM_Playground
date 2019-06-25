<?php
function wpm_enqueue_styles(){
wp_enqueue_style( 'alchem', get_template_directory_uri() . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'wpm_enqueue_styles' );