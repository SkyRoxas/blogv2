<?php get_header(); ?>

<div id ="page" class ="region">
  <div id = "content" class ="pb-5">
    <?php get_template_part('tpl-components/nav_search') ?>
    
    <div class ="p-4">
      <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <!-- 回應式廣告 -->
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-5572684550404573"
           data-ad-slot="9648577086"
           data-ad-format="auto">
      </ins>
      <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>

    <?php if(have_posts()) :?>
      <?php get_template_part('tpl-components/archive_01') ?>
    <?php endif; ?>
  </div>
</div>

<?php  get_footer(); ?>
