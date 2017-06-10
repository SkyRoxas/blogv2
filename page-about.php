<?php  get_header(); ?>

<div id ="page" class ="region p-lg-5 p-md-5 p-sm-5 p-2">
  <div id = "content" class ="container p-lg-5 p-md-5 p-sm-5 p-4" style ="background:#ffffff;">
      <?php get_template_part('tpl-components/nav_breadcrumb') ?>
      <article>
        <?php the_content(); ?>
        <?php if (comments_open() || get_comments_number()) {
          comments_template();
        } ?>
      </article>
  </div>
</div>
<?php  get_footer(); ?>
