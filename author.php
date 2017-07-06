<?php get_header(); ?>

<?php get_template_part('tpl-components/mychart') ?>

    <div class ="container">
      <div class ='wrap row p-5'>
        <div class ="">
          <?php echo get_avatar(get_the_author_meta('ID'), '200'); ?>
        </div>
        <div class ="col d-flex flex-column justify-content-center p-5">
          <div class =""><?php GravatarApi('displayName') ?></div>
          <div class = ""><?php GravatarApi('urls') ?></div>
        </div>
      </div>
      <div class ="row p-5">
        <?php GravatarApi('aboutMe') ?>
      </div>
    </div>
<?php  get_footer(); ?>
