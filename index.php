<?php get_header(); ?>


<div id ="banner" class ="region">
  <?php get_template_part('tpl-components/imageblock_01') ?>
</div>

<div id ="page" class ="region">
  <div id = "content">
    <?php if(have_posts()) :?>
      <?php get_template_part('tpl-components/archive_01') ?>
    <?php endif; ?>
  </div>
</div>

<?php  get_footer(); ?>
