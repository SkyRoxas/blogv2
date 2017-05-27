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



<?php while($the_query->have_posts()) : $the_query->the_post(); ?>

  <div class ="list-item col-12 col-lg-4 col-md-6 col-sm-6 p-2">
      <div class ="view-mode container">
          <div class ="row">
              <div class ="field-title col-12 p-3">
                  <h3>
                    <?php the_category()?>
                    <a class = "article-link" href ="<?php the_permalink() ?>">
                      <?php the_title(); ?>
                    </a>
                  </h3>

              </div>
              <div class ="field-thumbnail col-12 p-0">
                <a href ="<?php the_permalink() ?>">
                  <?php  the_post_thumbnail('thumb-archive_01');?>
                </a>
              </div>
              <div class ="field col-12 p-2 d-flex justify-content-start align-items-center">
                <div class ="avatar">
                  <?php echo get_avatar(get_the_author_meta('ID'),'40');?>
                </div>
                <div class ="create p-3">
                  <?php the_time('Y-m-j'); ?>
                </div>
              </div>
          </div>
      </div>
  </div>

<?php endwhile; ?>





<?php wp_reset_postdata(); ?>
