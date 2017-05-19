<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <!-- include boostrap 4 cdn -->
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
  <!--<script type="text/javascript" src="https://cdn.rawgit.com/asvd/dragscroll/master/dragscroll.js"></script>-->

  <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/styles/css/style.css">
  <?php do_action('wp_head');?>
  <title><?php wp_title(); ?></title>
</head>
<script src="https://use.typekit.net/znw8cer.js"></script>
<script>try{Typekit.load({ async: true });}catch(e){}</script>
<body class ="<?php is_home() ? print'front' : print 'not-front'; ?>">



<header id ="header" class ="p-2">
  <!--<img class ="logo" src="<?php bloginfo('template_url'); ?>/images/logo.png">-->
  <div class ='info-wrapper'>
    <a class ="name" href="<?php bloginfo("url"); ?>">Bonze</a>
    <div class = "description">一群棒子的技術 Blog</div>
  </div>
  <div class ='region-wrapper'>
    <?php wp_nav_menu( array( 'theme_location' => 'header-menu','container_class' => 'header-menu' ) ); ?>
  </div>
</header>
