<?php  get_header(); ?>
<div id ="banner" class ="region">
  <?php get_template_part('tpl-components/imageblock_01') ?>
</div>
<div id ="page" class ="region">
  <div id = "content">
      <div id="widgetized-area">
    <?php if (function_exists('dynamic_sidebar') && dynamic_sidebar('bonze-widget')) : else : ?>
        <div class="pre-widget">
            <p><strong>棒子小工具區塊</strong></p>
            <p>你如果看到這個可能怪怪的喔</p>
        </div>
    <?php endif; ?>
    </div>
    <?php if(have_posts()) :?>
      <?php get_template_part('tpl-components/archive_01') ?>
    <?php endif; ?>
  </div>
</div>
<?php  get_footer(); ?>
