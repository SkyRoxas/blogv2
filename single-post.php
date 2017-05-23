<?php  get_header(); ?>
<div id ="banner" class ="region">
  <?php get_template_part('tpl-components/imageblock_01') ?>
</div>
<div id ="page" class ="region p-lg-5 p-md-5 p-sm-5 p-2">
  <div id = "content" class ="container p-lg-5 p-md-5 p-sm-5 p-4" style ="background:#ffffff;">
      <?php get_template_part('tpl-components/breadcrumb') ?>
      <article>
        <?php the_content(); ?>
      </article>
  </div>
</div>
<div id="bottom">
    <?php get_template_part('tpl-components/categories-block') ?>
</div>
<?php  get_footer(); ?>
