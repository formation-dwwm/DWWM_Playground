<?php
// section recent-works
   global $allowedposttags,$alchem_home_animation;
   $section_hide    = absint(alchem_option('section_3_hide'));
   $content_model   = absint(alchem_option('section_3_model'));
   $section_id      = esc_attr(sanitize_title(alchem_option('section_3_id')));
   $section_title   = wp_kses(alchem_option('section_3_title'), $allowedposttags);
   $sub_title       = wp_kses(alchem_option('section_3_sub_title'), $allowedposttags);
   $section_color   = esc_attr(alchem_option('section_3_color'));
   $section_content = wp_kses(alchem_option('section_3_content'), $allowedposttags);
   $button_text     = esc_attr(alchem_option('section_3_button_text'));
   $button_link     = esc_url(alchem_option('section_3_button_link'));
   $button_target   = esc_attr(alchem_option('section_3_button_target'),'_blank');
   
   $columns         = absint(alchem_option('section_3_columns'));
   $col             = $columns>0?12/$columns:4;
   $section_content = str_replace('\\\'','\'',$section_content);
   $section_content = str_replace('\\"','"',$section_content);
   
   $section_class = 'section magee-section alchem-home-section-3 alchem-home-style-0';
   if( alchem_option('section_3_parallax') == '1' )
   $section_class .= ' parallax-scrolling';
 ?> 
 <?php if( $section_hide != '1' ):?>
<section class="<?php echo $section_class;?>" id="<?php echo $section_id;?>">
<div class="section-content" style="color:<?php echo $section_color;?>;">
<div class="container alchem_section_3_model">
<?php if( $content_model == 0 ):?>
<?php if( $section_title != '' ):?>
    <h2 style="text-align: center" class="section-title alchem_section_3_title"><?php echo $section_title;?></h2>
    <div class="divider divider-border center" id="" style="margin-top: 30px;margin-bottom:50px;width:80px;">
      <div class="divider-inner primary" style="border-bottom-width:3px;"></div>
    </div>
<?php endif;?>
 <?php if( $sub_title != '' ):?>
    <div class="section-subtitle alchem_section_3_sub_title"><?php echo do_shortcode($sub_title);?></div>
      <div style="height: 60px;"></div>
      <?php endif;?>
 <?php
	 $works_item = '';
	 $works_str  = '';
	 $animationtype = array('fadeInLeft','fadeInDown','fadeInRight','fadeInLeft','fadeInUp','fadeInRight','fadeInDown','fadeInDown');
	 for( $j=0; $j<8; $j++ ){
	   
	  $image     =  esc_url(alchem_option('section_3_image_'.$j));
	  $link      =  esc_url(alchem_option('section_3_link_'.$j));
	  $target    =  esc_attr(alchem_option('section_3_target_'.$j));

	  if( $image !='' ):
	  $k = $j+1;
	  if( $link == "" ){
	  $work_inner = '<a href="'.$image.'" rel="portfolio-image"><img src="'.$image.'" class="feature-img">
                                                        <div class="img-overlay dark">
                                                            <div class="img-overlay-container">
                                                                <div class="img-overlay-content">
                                                                </div>
                                                            </div>
                                                        </div>
														</a>';
	  }else{
	  $work_inner = '<a target="'.$target.'" href="'.$link.'">
                                                        <img src="'.$image.'" class="feature-img">
                                                        <div class="img-overlay dark">
                                                            <div class="img-overlay-container">
                                                                <div class="img-overlay-content">
                                                                    <i class="fa fa-link"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>';
													
	  }
	  
	  $works_item .= '<div class="col-sm-6 col-md-'.$col.'">
	  <div class="'.$alchem_home_animation.'" data-animationduration="0.9" data-animationtype="'.$animationtype[$j].'" data-imageanimation="no">
<div class="img-frame rounded alchem_section_3_image_'.$j.'"><div class="img-box figcaption-middle text-center fade-in ">'.$work_inner.'</div></div></div>
</div>';
      $k = $j+1;
	  if( $k % $columns == 0 ){
	        $works_str .= '<div class="row">'.$works_item.'</div>';
	        $works_item = '';
	   }

    endif;
	
	 }
if( $works_item != '' ){
		    $works_str .= '<div class="row">'.$works_item.'</div>';
	      
		   }
	 echo $works_str;
	  ?>

<?php if( $button_text != '' ){?>
<div style="text-align:center;padding-top:60px;" class="alchem_section_3_button_text"><a href="<?php echo $button_link;?>" style="color: #676767;border-color: #676767;border-width: 2px;" target="<?php echo $button_target;?>" class=" magee-btn-normal btn-md btn-line btn-light" ><?php echo $button_text;?></a></div>
<?php }?>

<?php else:?>
 <?php echo do_shortcode($section_content);?>
 <?php endif;?>
</div></div>  </section>
<?php endif;?>