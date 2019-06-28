<div id="post-<?php the_ID(); ?>" <?php post_class("entry-box-wrap"); ?>>

      <!-- Contient les articles -->

        <div class="card mb-3 articleMain effect2" style=": 540px;">
            <div class="row no-gutters articleSection">
                <div class="col-md-4 articleImg">
                    <?php the_post_thumbnail(); ?>
                </div>
                <div class="col-md-8 card-body articleCard">
                    <div class="articleHeader">
                        <h1 class="card-title articleTitle"><?php the_title(); ?></h1>
                        <div class="articleLink">
                            <?php alchem_posted_on(); ?></a>
                        </div>
                    </div>
                    <p class="card-text articleText"><?php echo alchem_get_summary(); ?></p>
                    <a href="<?php the_permalink();?>" class="btn-normal"><?php _e('Afficher plus...','alchem');?></a>
                </div>
            </div>
        </div>

        <!-- </article> -->

 </div>