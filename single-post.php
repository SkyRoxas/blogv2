<?php  get_header(); ?>
<div id ="banner" class ="region">
  <?php get_template_part('tpl-components/imageblock_01') ?>
</div>
<div id ="page" class ="region">
  <div id = "content">
      <?php
if ( function_exists('yoast_breadcrumb') ) {
yoast_breadcrumb('<div id="breadcrumbs">','</div>');
}
?>
      <?php the_content(); ?>
  </div>
</div>
<div id="bottom">
    <?php get_template_part('tpl-components/categories-block') ?>
</div>
<?php  get_footer(); ?>
