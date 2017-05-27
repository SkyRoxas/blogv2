<div class ="archive_01 container">
    <div class ='wrap row flex-lg-column flex-md-column flex-sm-column masonry dragscroll'>
      <?php while(have_posts()) : the_post(); ?>
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
      <div class ="ajax-bottom">ajax-bottom</div>
    </div>

    <div class ="dragImg">
      <img class ="dragImg" src="<?php bloginfo('template_url'); ?>/images/ezgif.com-reverse.gif">
    </div>
</div>
