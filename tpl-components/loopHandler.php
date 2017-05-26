<?php
// Our include
define('blogv2', false);
require_once('../../../../wp-load.php');

// Our variables
$numPosts = (isset($_GET['numPosts'])) ? $_GET['numPosts'] : 0;
$page = (isset($_GET['pageNumber'])) ? $_GET['pageNumber'] : 0;

$args = array(
  'post_type'                => 'post',
  'paged'                    => $page,
  // 'posts_per_page'           => $posts_per_page,
  // 'offset'                   => $offset + ($posts_per_page*$page),
  // 'order'                    => $order,
  // 'orderby'                  => $orderby,
  // 'post_status'              => $post_status,
  // 'ignore_sticky_posts'      => true,

);

$the_query = new WP_Query( $args );
?>

<?php if (($the_query->have_posts())): ?>
  <?php while(have_posts()) : the_post(); ?>
  <?php endwhile ?>
<?php endif; ?>



<?php
// The Loop
// if ( $the_query->have_posts() ) {
//     while ( $the_query->have_posts() ) {
//         $the_query->the_post();
//         echo '<li>' . get_the_title() . '</li>';
//     }
// }
?>



<?php wp_reset_postdata(); ?>
