<?php 

// Ajouter la prise en charge des images mises en avant
add_theme_support( 'post-thumbnails' );

// Ajouter automatiquement le titre du site dans l'en-tête du site
add_theme_support( 'title-tag' );


/**
 * Enqueue scripts and styles.
 */
function custom_theme_script() {
    wp_enqueue_style( 'imprimeries_vincent-style', get_stylesheet_uri() );
    
    wp_enqueue_script('jquery'); 
    
    // Custom ressources
	wp_enqueue_script( 'custom_js', get_template_directory_uri() . '/assets/js/custom.js');
	wp_enqueue_style( 'custom_css', get_template_directory_uri() . '/assets/css/style.css' );
    
    
}
add_action( 'wp_enqueue_scripts', 'custom_theme_script' );