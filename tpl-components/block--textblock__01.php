<div class ='block--textblock__01'>
  <div class ="wrap container p-5">
    <div class ='web-info row justify-content-center align-items-center'>
      <img id ="logo" src="<?php bloginfo('template_url'); ?>/images/logo.png">
      <div>
        <h1><a class ="name" href="<?php bloginfo("url"); ?>">Bonze</a></h1>
        <div class = "description">一群棒子的技術 Blog</div>
      </div>
   </div>
      <!--about query-->
      <?php
          $about_Query = new WP_query(
            array(
              'post_type' => 'page',
              'name' => 'about'
            )
          );
       ?>
       <?php if ($about_Query->have_posts()):?>
         <?php while ($about_Query->have_posts()):$about_Query->the_post() ?>
           <?php $content = the_content(); ?>
           <?php echo remove_images($content); ?>
         <?php endwhile; ?>
       <?php endif; ?>
      <!--end about query-->
  </div>
</div>
