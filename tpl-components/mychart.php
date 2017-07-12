<?php
    wp_enqueue_script('mychart', get_template_directory_uri() . '/js/mychart.js');
 ?>

<?php
    wp_localize_script( 'myscripts', 'template_directory_uri', array(get_template_directory_uri()) );
 ?>
<div class ='test'></div>
