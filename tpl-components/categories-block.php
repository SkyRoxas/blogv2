<div class ="categories-block">
  <ul>
    <?php
          $categories = get_categories( array(
            'orderby' => 'name',
            'show_count' => true,
            'parent' => 0
          ));

          foreach ( $categories as $category ) {
            echo '<li><a href="' . get_category_link( $category->term_id ) . '" >' . $category->name . '</a></li>';

            $sub_categories = get_categories(array(
                    'orderby' => 'name',
                    'show_count' => true,
                    'parent' => $category->term_id,
                  ));

            foreach ( $sub_categories as $sub_category ) {
                    echo '<li><a href="' . get_category_link( $sub_category->term_id ) . '">' . $sub_category->name . '</a></li>';
                  }
          }
    ?>
  </ul>
</div>
