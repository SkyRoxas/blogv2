
<div class ="categories-block">
  <ul>
    <?php
          $categories = get_categories( array(
            'orderby' => 'name',
            'show_count' => true,
            'parent' => 0
          ));

          foreach ( $categories as $category ) {
            echo '<li><a href="' . get_category_link( $category->term_id ) . '" >' . $category->name . '</a>';
            echo '<div class ="container-fluid">';
            $sub_categories = get_categories(array(
                    'orderby' => 'name',
                    'show_count' => true,
                    'parent' => $category->term_id,
                  ));
echo "<ul class ='row justify-content-center'>";
            foreach ( $sub_categories as $sub_category ) {
                      echo '<li class ="col-3" style ="display:block">
                              <a href ="' . get_category_link( $sub_category->term_id ) . '" style ="display:block;background:rgba(0,0,0,0.2)">
                                <span>' . $sub_category->name . '</span>
                                <img src = "' . get_bloginfo('template_url') . '/images/square.jpg" width ="100%">
                              </a>
                            </li>';
                  }
            echo "</ul></div>";
            echo "</li>";
          }
    ?>
  </ul>
</div>
