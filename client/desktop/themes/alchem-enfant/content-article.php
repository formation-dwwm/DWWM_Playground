<?php  
 $display_image = alchem_option('archive_display_image');
 ?>
<div id="post-<?php the_ID(); ?>" <?php post_class("entry-box-wrap"); ?>>
  <!-- <article class="entry-box"> -->
    <?php if (  $display_image == 'yes' && has_post_thumbnail() ) : ?>
      <div class="feature-img-box">
          <div class="img-box figcaption-middle text-center from-top fade-in">
              <a href="<?php the_permalink();?>">
                  <?php the_post_thumbnail();  ?>
                  <div class="img-overlay">
                      <div class="img-overlay-container">
                          <div class="img-overlay-content">
                              <i class="fa fa-link"></i>
                          </div>
                      </div>                                                        
                  </div>
              </a>
          </div>                                                 
      </div>
      <?php endif;?>

      <!-- Contient les articles -->
      <!-- <div class="entry-main">
          <div class="entry-header">
              <a href="<?php the_permalink();?>"><h1 class="entry-title"><?php the_title();?></h1></a>
              <?php alchem_posted_on();?>
          </div>
          <div class="entry-summary">
              <?php echo alchem_get_summary();?>
          </div>
          <div class="entry-footer">
              <a href="<?php the_permalink();?>" class="btn-normal"><?php _e('Read More','alchem');?> &gt;&gt;</a>
          </div>
      </div> -->
      <?php
        $articleTitle = "Title de l'article";
        $articleLink ="https://via.placeholder.com/200/09f...";
        $articleLinkUrl = "#";
        $articleImg = "https://via.placeholder.com/200/09f/fff.png";
        $articleImgAlt = "...";
        $articleText = "Et bestiis potest deinde natos animadverti bestiis ab natos ea si cum non videamur cogitatione bestiis quoddam animi se aliquem si esset non quod ad ut non et evidentius earum est amicitia ut animadverti virtutis similis illa orta amicitia magis quod ut mihi esset similis si quale cum similis a.";
        $articleTag = "Tag";
      ?>

      <div class="card mb-3 articleMain" style=": 540px;">
            <div class="row no-gutters articleSection">
                <div class="col-md-4 articleImg">
                    <img src=<?php echo($articleImg); ?> class="card-img" alt=<?php echo($articleImgAlt); ?>>
                </div>
                <div class="col-md-8">
                    <div class="card-body articleCard">
                        <h5 class="card-title articleTitle"><?php echo($articleTitle); ?></h5>
                        <div class="articleLink">
                            <a href="<?php echo($articleLinkUrl); ?>" ><?php echo($articleLink); ?></a>
                        </div>
                        <br />
                        <input type="button" class="btn btn-light btnTag" value=<?php echo($articleTag); ?> />
                        <input type="button" class="btn btn-light btnTag" value=<?php echo($articleTag); ?> />
                        <input type="button" class="btn btn-light btnTag" value=<?php echo($articleTag); ?> />
                        <p class="card-text articleText"><?php echo($articleText); ?></p>
                        <a href="<?php the_permalink();?>" class="btn-normal"><?php _e('Read More','alchem');?> &gt;&gt;</a>
                    </div>
                </div>
            </div>
            <div class="row no-gutters articleSection">
                <div class="col-md-4 articleImg">
                    <img src=<?php echo($articleImg); ?> class="card-img" alt=<?php echo($articleImgAlt); ?>>
                </div>
                <div class="col-md-8">
                    <div class="card-body articleCard">
                        <h5 class="card-title articleTitle"><?php echo($articleTitle); ?></h5>
                        <div class="articleLink">
                            <a href="<?php echo($articleLinkUrl); ?>" ><?php echo($articleLink); ?></a>
                        </div>
                        <br />
                        <input type="button" class="btn btn-light btnTag" value=<?php echo($articleTag); ?>/>
                        <input type="button" class="btn btn-light btnTag" value=<?php echo($articleTag); ?>/>
                        <input type="button" class="btn btn-light btnTag" value=<?php echo($articleTag); ?>/>
                        <p class="card-text articleText"><?php echo($articleText); ?></p>
                        <a href="<?php the_permalink();?>" class="btn-normal"><?php _e('Read More','alchem');?> &gt;&gt;</a>
                    </div>
                </div>
            </div>

            
        </div>

  <!-- </article> -->
 </div>