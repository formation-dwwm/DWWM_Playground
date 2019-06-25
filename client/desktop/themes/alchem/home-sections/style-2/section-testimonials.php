<?php
  // section testimonials 
  
   global $allowedposttags,$alchem_home_animation;
   $section_hide    = absint(alchem_option('section_7_hide'));
   $content_model   = absint(alchem_option('section_7_model'));
   $section_id      = esc_attr(sanitize_title(alchem_option('section_7_id')));
   $section_color   = esc_attr(alchem_option('section_7_color'));
   $section_title   = wp_kses(alchem_option('section_7_title'), $allowedposttags);
   $sub_title       = wp_kses(alchem_option('section_7_sub_title'), $allowedposttags);
   $section_content = wp_kses(alchem_option('section_7_content'), $allowedposttags);
   $columns         = absint(alchem_option('section_7_columns'));
   $col             = $columns>0?12/$columns:4;
   $section_content = str_replace('\\\'','\'',$section_content);
   $section_content = str_replace('\\"','"',$section_content);
   
   $section_class = 'section magee-section alchem-home-section-7 alchem-home-style-2';
   if( alchem_option('section_7_parallax') == '1' )
   $section_class .= ' parallax-scrolling';
 ?> 
 <?php if( $section_hide != '1' ):?> 
 <section class="<?php echo $section_class;?>" id="<?php echo $section_id;?>">
  <div class="section-content" style="color:<?php echo $section_color;?>;">
  <div class="container alchem_section_7_model">
  <?php if( $content_model == 0 ):?>
  <?php if( $section_title != '' ):?>
    <h2 class="section-title alchem_section_7_title"><?php echo $section_title;?></h2>
    <div class="section-subtitle alchem_section_7_sub_title"><?php echo do_shortcode($sub_title);?></div>
    <div style="height: 60px;"></div>
    <?php endif;?>
     <?php
	 $testimonial   = '';
	 $testimonials  = '';
	 $animationtype = array('fadeIn','fadeIn','fadeIn','fadeIn','fadeIn','fadeIn');
	 for( $j=0; $j<6; $j++ ){
	   
	  $avatar      =  esc_url(alchem_option('section_7_avatar_'.$j));
	  $name        =  esc_attr(alchem_option('section_7_name_'.$j));
	  $byline      =  esc_attr(alchem_option('section_7_byline_'.$j));
	  $description = wp_kses(alchem_option('section_7_desc_'.$j), $allowedposttags);
	  
	  if( $description != '' ):
	  $image = '';
	  if( $avatar != '' )
	  $image = '<img src="'.$avatar.'" style="width: 150px; display: inline-block;" class="img-circle">';
	  
		
$testimonial   .= '<div class="col-md-'.$col.'">
<div class="'.$alchem_home_animation.'" data-animationduration="0.9" data-animationtype="'.$animationtype[$j].'" data-imageanimation="no">
  <div class="magee-alert" role="alert">
    <p style="text-align: center;" class="alchem_section_7_avatar_'.$j.'">'.$image.'</p>
    <div style="color: #666666;font-family: \'Dancing Script\'; text-align: center;font-size: 20px; padding-left: 10%; padding-right: 10%;" class="alchem_section_7_desc_'.$j.'">'.do_shortcode($description).'</div>
    <div style="height: 40px;"></div>
    <div style="color: #666666; font-size: 14px; font-weight: bold; text-align: center;" class="alchem_section_7_name_'.$j.'">'.$name.'</div>
    <div style="color: #666666; ;text-align: center;" class="alchem_section_7_byline_'.$j.'">'.$byline.'</div>
  </div>
  </div>
</div>';

		
		$m = $j+1;
	  if( $m % $columns == 0 ){
	        $testimonials .= '<div class="row">'.$testimonial.'</div>';
	        $testimonial   = '';
	   }
	
	   endif;
	 }
	 if( $testimonial != '' ){
		    $testimonials .= '<div class="row">'.$testimonial.'</div>';
	      
		   }
		
	 echo $testimonials;
	  ?>      
    <?php else:?>
 <?php echo do_shortcode($section_content);?>
 <?php endif;?>
  </div>
  </div>
</section>
<?php endif;?>