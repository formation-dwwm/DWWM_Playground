<?php 
   // section tagline
   global $allowedposttags,$alchem_home_animation;
   $section_hide    = absint(alchem_option('section_1_hide'));
   $content_model   = absint(alchem_option('section_1_model'));
   $section_id      = esc_attr(sanitize_title(alchem_option('section_1_id')));
   $section_color   = esc_attr(alchem_option('section_1_color'));
   $slogan_title    = wp_kses(alchem_option('section_1_slogan_title'), $allowedposttags);
   $slogan_content  = wp_kses(alchem_option('section_1_slogan_content'), $allowedposttags);
   $button_text     = esc_attr(alchem_option('section_1_button_text'));
   $button_link     = esc_attr(alchem_option('section_1_button_link'));
   $button_target   = esc_attr(alchem_option('section_1_button_target'),'_blank');
   $content_align   = esc_attr(alchem_option('section_1_content_align'),'right');
   $section_content = wp_kses(alchem_option('section_1_content'), $allowedposttags);
   $section_content = str_replace('\\\'','\'',$section_content);
   $section_content = str_replace('\\"','"',$section_content);
   
   $section_class = 'section magee-section alchem-home-section-1 alchem-home-style-0';
   if( alchem_option('section_1_parallax') == '1' )
   $section_class .= ' parallax-scrolling';
 ?>  
  <?php if( $section_hide != '1' ):?>
<section class="<?php echo $section_class;?>" id="<?php echo $section_id;?>">
  <div class="section-content" style="color:<?php echo $section_color;?>;">
  <div class="container">
  <?php if( $content_model == 0 ):?>
  <div class="<?php echo $alchem_home_animation;?>" data-animationduration="0.9" data-animationtype="fadeInRight" data-imageanimation="no">
    <div class="magee-promo-box" id="">
      <div class="promo-info">
        <h4 class="alchem_section_1_slogan_title"><?php echo $slogan_title;?></h4>
        <p class="alchem_section_1_slogan_content"><?php echo do_shortcode($slogan_content);?></p>
      </div>
       <?php if( $button_text != '' ){?>
      <div class="promo-action alchem_section_1_button_text"> <a href="<?php echo $button_link;?>" target="<?php echo $button_target;?>" class="btn-normal btn-lg"><i class="fa "></i> <?php echo $button_text;?></a></div>
      <?php }?>
    </div>
    </div>
 <?php else:?>
 <?php echo do_shortcode($section_content);?>
 <?php endif;?>
  </div>
  </div>
</section>
 <?php endif;?>