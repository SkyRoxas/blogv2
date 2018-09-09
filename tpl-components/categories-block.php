<div class ="categories-block container pt-5 pb-5">
  <ul class ="categories-list">
    <?php
          $categories = get_categories(array(
            'orderby' => 'name',
            'parent' => 0
          ));

          foreach ($categories as $category) {
              echo '<li class ="categories-item mb-3">';
              echo '<a class ="categories-link" href="' . get_category_link($category->term_id) . '" >' . $category->name . '</a>';
              echo '<div class ="wrap">';
              $sub_categories = get_categories(array(
                    'orderby' => 'name',
                    'parent' => $category->term_id,
                  ));
              echo "<ul class ='categories-list row'>";
              foreach ($sub_categories as $sub_category) {
                  echo '<li class ="categories-item col-lg-2 col-md-2 col-sm-4 col-6 p-1">
                              <a class ="categories-link rounded" href ="' . get_category_link($sub_category->term_id) . '">
                                <div class ="d-flex justify-content-center align-items-center">' . $sub_category->name . '</div>
                                <img src = "' . get_bloginfo('template_url') . '/images/square.jpg">
                                <div class="count">('.$sub_category->category_count.')</div>
                              </a>
                            </li>';
              }

              echo "</ul></div>";
              echo "</li>";
          }
    ?>
  </ul>
</div>
