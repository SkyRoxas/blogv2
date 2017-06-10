<?php get_header(); ?>

<div id ="page" class ="region">
  <div id = "content" class ="pb-5">
    <?php get_template_part('tpl-components/nav_search') ?>
    <?php if(have_posts()) :?>
      <?php get_template_part('tpl-components/archive_01') ?>
    <?php endif; ?>
  </div>
</div>

<?php  get_footer(); ?>
