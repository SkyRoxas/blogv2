<?php

//thumbails
add_theme_support('post-thumbnails');

function add_custom_sizes()
{
    add_image_size('thumb-archive_01', 400, 250, array( 'center', 'center'));
}
add_action('after_setup_theme', 'add_custom_sizes');

//end for thumbails


//add javascrit scripts
function add_jquery()
{
    wp_enqueue_script('jquery', 'http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js');
    wp_enqueue_script('scrollClass', get_template_directory_uri() . '/dest/js/scrollClass.js');
}


function add_custom_scripts()
{
    wp_enqueue_script('entry', get_template_directory_uri().'/dest/js/entry.js');
    wp_localize_script('entry', 'template_directory_uri', array(get_template_directory_uri()));
}

add_action('wp_enqueue_scripts', 'add_jquery');
add_action('wp_enqueue_scripts', 'add_custom_scripts');

function folder_contents()
{
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
function bonze_widgets_init()
{
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

add_action('widgets_init', 'bonze_widgets_init');

//註冊bonze分類區塊
function register_bonze_archive_widget()
{
    register_widget('Bonze_Archive_Widget');
}

add_action('widgets_init', 'register_bonze_archive_widget');

class Bonze_Archive_Widget extends WP_Widget
{
    public function __construct()
    {
        $widget_options = array(
            'classname' => 'bonze_taxonomy_widget',
            'description' => '棒子分類小工具',
        );
        parent::__construct('bonze_taxonomy_widget', '棒子超屌分類', $widget_options);
    }

    public function widget($args, $instance)
    {
        wp_list_categories($args='');
    }

    public function form($instance)
    {
        wp_list_categories(array(
            'orderby'=>'modified',
            'order'=>'DESC',
            'show_count'=>true,
            'title_li'=>'',
        ));
    }
}




function ajax_ajaxLoop()
{
    // Handle request then generate response using WP_Ajax_Response

    $page = (isset($_GET['pageNumber'])) ? $_GET['pageNumber'] : 0;
    $queryKey = (isset($_GET['queryKey'])) ? $_GET['queryKey'] : 0;
    $queryValue = (isset($_GET['queryValue'])) ? $_GET['queryValue'] : 0;


    $arg =array(
      'post_type'                => 'post',
      'paged'                    => $page,
      'orderby'                  => 'date',
      'order'                    => 'DESC',
      'post_status'=> 'publish',
    );

    if ($queryKey) {
        $arg[$queryKey] = $queryValue;
    }

    $the_query = new WP_Query($arg);



    if ($the_query->have_posts()) {
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

add_action('wp_ajax_ajaxLoop', 'ajax_ajaxLoop');
add_action('wp_ajax_nopriv_ajaxLoop', 'ajax_ajaxLoop');


function GravatarApi($attributes = 'displayName')
{
    $mail = md5(strtolower(trim(get_the_author_meta('user_email'))));

    $str = file_get_contents('https://www.gravatar.com/'.$mail .'.php');
    $profile = unserialize($str);


    if (isset($profile['entry'][0][$attributes])) {
        $data = $profile['entry'][0][$attributes];
        //aboutMe
        if ($attributes == 'aboutMe') {
            echo nl2br($data);
            //urls
        } elseif ($attributes == 'urls') {
            if (is_array($profile) && isset($profile['entry'])) {
                foreach ($data as $key => $val) {
                    $tool;
                    //facebook
                    if (stripos($data[$key]['value'], $tool='facebook')) {
                        echo '<a class = "'.$tool.'" href ="'.$data[$key]['value'].'">'.$data[$key]['title'].'</a>';
                        //git
                    } elseif (stripos($data[$key]['value'], $tool='git')) {
                        echo '<a class = "'.$tool.'" href ="'.$data[$key]['value'].'">'.$data[$key]['title'].'</a>';
                        //other
                    } else {
                        echo '<a class = "'.$tool.'" href ="'.$data[$key]['value'].'">'.$data[$key]['title'].'</a>';
                    }
                }
            }
        } else {
            echo $data;
        }
    } else {
        if (is_user_logged_in()) {
            if ($attributes == 'aboutMe') {
                echo '
                  <a href ="https://zh-tw.gravatar.com/profiles/edit/#about-you">（編輯資料）</a>';
            }
        }
    }
}


// gravatar add class to img
add_filter('get_avatar', 'add_gravatar_class');

function add_gravatar_class($class)
{
    if (is_author()) {
        $class = str_replace('class="avatar', 'class="avatar pic-2 rounded-circle', $class);
    } else {
        $class = str_replace('class="avatar', 'class="avatar pic-2', $class);
    }
    return $class;
}
