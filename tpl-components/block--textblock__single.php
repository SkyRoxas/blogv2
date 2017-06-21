<div class ='block--textblock__front block--textblock__01'>
  <div class ="wrap d-flex justify-content-center align-items-center">
    <div class ="container p-3">
      <div class ='wrap'>
        <div><?php the_time('Y-m-j'); ?></div>
        <h1 class ="fontSizeAuto"><?php the_title(); ?></h1>
      </div>
      <div class ="avatar row pt-lg-5 pb-2">
        <div class ="wrap col-2 pl-3 pr-3">
          <div><?php echo get_avatar(get_the_author_meta('ID'), '140'); ?></div>
        </div>
        <div class ="wrap col">
          <div><?php GravatarApi('displayName') ?></div>
          <div class ="d-lg-block d-md-block d-none pt-1 pb-1"><?php GravatarApi('aboutMe') ?></div>
          <div class = "pt-3"><?php GravatarApi('urls') ?></div>
        </div>
     </div>
    </div>
  </div>
</div>
