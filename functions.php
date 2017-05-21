<?php

add_theme_support( 'post-thumbnails');



function add_custom_sizes() {
    add_image_size( 'thumb-archive_01', 400, 250, array( 'center', 'center') );
}
add_action('after_setup_theme','add_custom_sizes');






function add_scripts() {
  wp_enqueue_script('masonryHeight', get_template_directory_uri() . '/js/masonryHeight.js',array('jquery'),'1.7');
  wp_enqueue_script('dragscroll', get_template_directory_uri() . '/js/dragscroll.js');
}

  add_action( 'wp_enqueue_scripts', 'add_scripts' );

/**
* Register our sidebars and widgetized areas.
*
*/
function bonze_widgets_init() {
    if (function_exists('register_sidebar')) {
        register_sidebar(array(
            'name' => '棒子小工具區塊',
            'id'   => 'bonze-widget',
            'description'   => '不然你想看到啥',
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget'  => '</div>',
            'before_title'  => '<h4>',
            'after_title'   => '</h4>'
        ));
    }
}

add_action( 'widgets_init', 'bonze_widgets_init' );

//註冊bonze分類區塊
function register_bonze_archive_widget() {
    register_widget( 'Bonze_Archive_Widget' );
}

add_action( 'widgets_init', 'register_bonze_archive_widget' );

class Bonze_Archive_Widget extends WP_Widget {
    function __construct() {
        $widget_options = array(
            'classname' => 'bonze_taxonomy_widget',
            'description' => '棒子分類小工具',
        );
        parent::__construct( 'bonze_taxonomy_widget', '棒子超屌分類', $widget_options );
    }

    public function widget( $args, $instance ) {
        wp_list_categories($args='');
    }

    public function form( $instance ) {
        wp_list_categories(array(
            'orderby'=>'modified',
            'order'=>'DESC',
            'show_count'=>true,
            'title_li'=>'',
        ));
    }
}
?>
