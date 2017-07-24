<div class ="ajax-button">
    <?php

      wp_enqueue_script('ajaxLoop');

      $ajaxLoading_key = 0;
      $ajaxLoading_value = 0;

      if( is_category() ){
        $ajaxLoading_key = 'cat';
        $ajaxLoading_value = get_cat_ID( single_term_title("", false) );
      }
      if ( is_search() ) {
        $ajaxLoading_key = 's';
        $ajaxLoading_value = get_search_query();
      }
      if( is_author() ){
        $ajaxLoading_key = 'author';
        $ajaxLoading_value = get_the_author();
      }
     ?>
     <script type="text/javascript">
       var $buttonValue = 'Load More';
       var $pageNumber = 1;
       var $ajaxLoading_key = '<?php echo $ajaxLoading_key; ?>';
       var $ajaxLoading_value = '<?php echo $ajaxLoading_value; ?>';
     </script>
</div>
