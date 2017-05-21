<div class ="categories-block">
  <ul>
    <?php
          $args = array(
            'orderby' => 'name',
            'show_count' => true,
            'parent' => 0
          );


          $categories = get_categories( $args );


          foreach ( $categories as $category ) {
            echo '<li>
                    <a href="' . get_category_link( $category->term_id ) . '" >' . $category->name . '</a>
                  </li>';
            $sub_args = array(
                    'orderby' => 'name',
                    'show_count' => true,
                    'parent' => $category->term_id,
                  );
            $sub_categories = get_categories($sub_args);

            foreach ( $sub_categories as $sub_category ) {
                    echo '<li>
                            <a href="' . get_category_link( $sub_category->term_id ) . '">' . $sub_category->name . '</a>
                          </li>';
                  }
          }
    ?>
  </ul>
</div>
