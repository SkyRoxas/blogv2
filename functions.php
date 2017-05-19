<?php

add_theme_support( 'post-thumbnails');

//add_image_size( 'custom-size', 300, 300, true );

function add_custom_sizes() {
    add_image_size( 'thumb-archive_01', 400, 250, array( 'center', 'center') );
}
add_action('after_setup_theme','add_custom_sizes');






function add_scripts() {
  wp_enqueue_script('masonryHeight', get_template_directory_uri() . '/js/masonryHeight.js',array('jquery'),'1.7');
  wp_enqueue_script('dragscroll', get_template_directory_uri() . '/js/dragscroll.js');
}

  add_action( 'wp_enqueue_scripts', 'add_scripts' );

?>
