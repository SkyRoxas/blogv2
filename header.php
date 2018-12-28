<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="google-site-verification" content="yhBuqVh7SS4Qt-xokxqXjxQBHxb9U2FOUS10r_tpNxE" />
  <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <script>
    (adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: "ca-pub-5572684550404573",
      enable_page_level_ads: true
    });
  </script>
  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-71309743-1', 'auto');
  ga('send', 'pageview');

</script>
  <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/styles/css/style.css">
  <?php do_action('wp_head');?>
  <title><?php wp_title(); ?></title>
</head>
<body class ="<?php is_home() ? print'front' : print 'not-front'; ?>">

<header id="header">
  <div class ='region-wrapper p-2'>
    <div class ='info-wrapper'>
      <a class ="name" href="<?php bloginfo("url"); ?>">Bonze</a>
      <div class = "description">一群棒子的技術 Blog</div>
    </div>
    <?php wp_nav_menu(array( 'theme_location' => 'header-menu','container_class' => 'header-menu' )); ?>
    <div class="container"><?php get_template_part('tpl-components/header-nav') ?></div>
  </div>
</header>

<?php if (!is_author()): ?>
  <div id ="banner" class ="region">
    <?php get_template_part('tpl-components/block--imageblock__01') ?>

    <?php if (is_home()): ?>
      <?php get_template_part('tpl-components/block--textblock__front') ?>
    <?php elseif (is_single()):?>
      <?php get_template_part('tpl-components/block--textblock__single') ?>
    <?php endif; ?>
</div>
<?php endif; ?>
