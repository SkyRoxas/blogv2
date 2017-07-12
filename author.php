<?php get_header(); ?>

<?php //get_template_part('tpl-components/mychart') ?>

<div class = "GravatarApi container text-center">

  <div class ="wrap">

    <div class ="author-logo">
      <?php echo get_avatar(get_the_author_meta('ID'), '200'); ?>
    </div>

    <div class ='author-url'>
      <div class = ""><?php GravatarApi('urls') ?></div>
      </div>

    <div class ='autohr-name'>
      <?php GravatarApi('displayName') ?>
    </div>

    <div class ='author-description'>
        <?php GravatarApi('aboutMe') ?>
    </div>

  </div>
</div>

<?php  get_footer(); ?>
