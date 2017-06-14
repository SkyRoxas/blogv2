<div class ='block--textblock__front block--textblock__01'>
  <div class ="wrap d-flex justify-content-center align-items-center">
    <div class ="container p-3">
      <?php the_time('Y-m-j'); ?>
      <h1><?php the_title(); ?></h1>
      <?php echo get_avatar(get_the_author_meta('ID'),'160'); ?>
      <?php the_author_meta('ID') ?>
      <?php GravatarApi() ?>
     </div>
  </div>
</div>
