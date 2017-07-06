<?php
    wp_enqueue_script('myscripts', get_template_directory_uri() . '/js/myscripts.js');
 ?>

<?php
    wp_localize_script( 'myscripts', 'template_directory_uri', array(get_template_directory_uri()) );
 ?>
<div class ='test'></div>
