<?php

//thumbails
add_theme_support( 'post-thumbnails');

function add_custom_sizes() {
    add_image_size( 'thumb-archive_01', 400, 250, array( 'center', 'center') );
}
add_action('after_setup_theme','add_custom_sizes');

//end for thumbails


//add javascrit scripts
function add_jquery(){
  wp_enqueue_script('jquery', 'http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js');
}

add_action( 'wp_enqueue_scripts', 'add_jquery' );

function add_custom_scripts() {
  wp_enqueue_script('masonryHeight', get_template_directory_uri() . '/js/masonryHeight.js');
  wp_enqueue_script('dragcover', get_template_directory_uri() . '/js/imageHeight.js');
  wp_enqueue_script('dragscroll', get_template_directory_uri() . '/js/dragscroll.js');
  wp_enqueue_script('mobileTaxonomy', get_template_directory_uri() . '/js/mobileTaxonomy.js');
  wp_enqueue_script('ajaxLoop', get_template_directory_uri() . '/js/ajaxLoop.js');
  //wp_enqueue_script('wpAjax', get_template_directory_uri() . '/js/wpAjax.js');
}

add_action( 'wp_enqueue_scripts', 'add_custom_scripts' );

//end javascrit scripts



function folder_contents() {

$folderPath = $_POST['path'] ;
$files = array_diff(scandir($path), array('.', '..'));
print_r($files);
return $files;

die();
}

add_action('wp_ajax_folder_contents', 'folder_contents');
add_action('wp_ajax_nopriv_folder_contents', 'folder_contents');



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




function ajax_ajaxLoop() {
    // Handle request then generate response using WP_Ajax_Response

    $page = (isset($_GET['pageNumber'])) ? $_GET['pageNumber'] : 0;
    $catId = (isset($_GET['catId'])) ? $_GET['catId'] : 0;

    $the_query = new WP_Query(
      array(
        'post_type'                => 'post',
        'cat'                      => $catId,
        'paged'                    => $page,
        'orderby'                  => 'post_date',
        'order' => 'DESC'
      )
    );

    if ( $the_query->have_posts() ) {
      while ($the_query->have_posts()) {
        $the_query->the_post();

        get_template_part('tpl-components/loopHandler');

      }
      wp_reset_postdata();
    } else {
      echo "
            <script>
              (function($){
                $(document).ready(function(){
                  $('.ajax-button .buttonValue').remove();
                })
              })(jQuery)
            </script>
           ";
    }

    // Don't forget to stop execution afterward.
    wp_die();
}

add_action( 'wp_ajax_ajaxLoop', 'ajax_ajaxLoop' );
add_action( 'wp_ajax_nopriv_ajaxLoop', 'ajax_ajaxLoop' );

?>
