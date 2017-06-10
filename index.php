<?php get_header(); ?>

<div id ="page" class ="region">
  <div id = "content" class ="pb-5">
    <?php get_template_part('tpl-components/nav_search') ?>
    <?php if(have_posts()) :?>
      <?php get_template_part('tpl-components/archive_01') ?>
    <?php endif; ?>
  </div>
</div>

<div id="bottom">
    <!--<?php dynamic_sidebar('bonze-widget') ?>-->
    <?php get_template_part('tpl-components/categories-block') ?>
</div>


<?php  get_footer(); ?>
