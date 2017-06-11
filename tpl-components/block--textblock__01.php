<div class ='block--textblock__01'>
  <div class ="wrap d-flex align-items-center">
    <div class ="container p-3">

      <!-- web info -->
      <?php if(is_home()): ?>
        <div class ='web-info row flex-nowrap justify-content-center align-items-center p-2'>
          <img id ="logo" src="<?php bloginfo('template_url'); ?>/images/logo.png">
          <div class ="web-description p-2">
            <h1><a class ="name" href="<?php bloginfo("url"); ?>">Bonze</a></h1>
            <div class = "description">一群棒子的技術 Blog</div>
          </div>
       </div>
      <!-- end web info -->

      <!--avatar list-->
      <div class ="avatar-list">
        <ul class ="row flex-nowrap justify-content-center">
          <?php
          $user_query = new WP_User_Query( array( 'role__not_in' => 'Subscriber' ) );

          if ( ! empty( $user_query->results ) ) {
            foreach ( $user_query->results as $user ) {
                 echo '<li class ="p-1">';
                 echo get_avatar($user->ID,'40');
                 echo '</li>';
               }
             }
          ?>
        </ul>
      </div>
      <!--end avatar list-->

      <!-- about query-->
      <div class ="about-content d-flex justify-content-center">
        <?php
            $about_Query = new WP_query(
              array(
                'post_type' => 'page',
                'name' => 'about',
                'has_published_posts' => 'true'
              )
            );
         ?>
         <?php if ($about_Query->have_posts()):?>
           <?php while ($about_Query->have_posts()):$about_Query->the_post() ?>
             <div class ="field-content">
               <?php
                  $content = get_the_content();
                  $content = preg_replace("/<img[^>]+\>/i", "(image) ", $content);
                  echo $content;
                ?>
             </div>
           <?php endwhile; ?>
         <?php endif; ?>
       </div>
       <!-- end about query-->

       <?php endif; ?>
     </div>
  </div>
</div>
