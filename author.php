<?php get_header(); ?>

<?php //get_template_part('tpl-components/mychart')?>
<div id="page" class="region">
  <div class="GravatarApi">
    <div class="container">
      <div class="wrap d-flex justify-content-center align-items-center flex-wrap">
      <div class="img-wrap m-3">
        <div class ="author-logo">
          <?php echo get_avatar(get_the_author_meta('ID'), '200'); ?>
        </div>
      </div>

      <div class="info-wrap m-3">
        <div class ='author-url'>
          <div class = ""><?php GravatarApi('urls') ?></div>
          </div>

        <div class ='autohr-name'>
          <?php GravatarApi('displayName') ?>
        </div>

        <div class ='author-description'>
            <?php GravatarApi('aboutMe') ?>
        </div>

        <div class="posts-count my-2">
          這傢伙已經寫了 <?php echo number_format_i18n(get_the_author_posts()); ?> 篇文章囉
        </div>
      </div>
      </div>
    </div>
  </div>
  <div class="list-wrap py-3">
    <div class="container">
      <?php
        $args = array(
          'numberposts' => -1 // 全撈
        );

        $lastposts = get_posts($args);
    
        if ($lastposts) {
            foreach ($lastposts as $post) :
            setup_postdata($post); ?>
                <h3 class="mb-3"><a href="<?php the_permalink(); ?>"><?php the_title(); ?> - <?php echo $post->post_date; ?></a></h3>
            <?php
            endforeach;
            wp_reset_postdata();
        }
      ?>
    </div>

  </div>
</div>


<?php  get_footer(); ?>
