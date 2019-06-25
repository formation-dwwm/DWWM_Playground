<?php
/**
 * Template Name: Blog List Style 4
 *
 * @package Alchem
 * @since Alchem 1.0
 */
get_header(); 
global  $alchem_page_meta,$alchem_blog_style, $alchem_css_class;
$detect  = new Mobile_Detect;
$sidebar ='none';
$enable_page_title_bar     = alchem_option('enable_page_title_bar');
$page_title_bg_parallax    = esc_attr(alchem_option('page_title_bg_parallax'));
$page_title_bg_parallax    = $page_title_bg_parallax=="yes"?"parallax-scrolling":"";
$page_title_align          = esc_attr(alchem_option('page_title_align'));
$display_breadcrumb        = esc_attr(alchem_option('display_breadcrumb'));
$breadcrumbs_on_mobile     = esc_attr(alchem_option('breadcrumbs_on_mobile_devices'));
$breadcrumb_menu_prefix    = esc_attr(alchem_option('breadcrumb_menu_prefix'));
$breadcrumb_menu_separator = esc_attr(alchem_option('breadcrumb_menu_separator'));
//$sidebar                   = isset($alchem_page_meta['page_layout'])?$alchem_page_meta['page_layout']:'none';
$left_sidebar              = esc_attr(alchem_option('left_sidebar_blog_archive'));
$right_sidebar             = esc_attr(alchem_option('right_sidebar_blog_archive'));
if( $left_sidebar !='' )
$sidebar ='left';
if( $right_sidebar !='' )
$sidebar ='right';
if( $left_sidebar !='' && $right_sidebar !='' )
$sidebar ='both';



$display_image             = alchem_option('archive_display_image');
$slider_banner = isset($alchem_page_meta['slider_banner'])?$alchem_page_meta['slider_banner']:'';
$enable_page_title_bar = (isset($alchem_page_meta['display_title_bar']) && $alchem_page_meta['display_title_bar']!='' )?$alchem_page_meta['display_title_bar']:$enable_page_title_bar;

?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
<?php //alchem_get_page_slider( $slider_banner );?>
<?php if( $enable_page_title_bar == 'yes' ):?>
<section class="page-title-bar title-<?php echo $page_title_align;?> no-subtitle <?php echo $page_title_bg_parallax;?>">
            <div class="container alchem_enable_page_title_bar">
                <hgroup class="page-title text-light">
                  <?php if(is_home()):?>
                    <h1 class="alchem_blog_title"><?php echo esc_attr(alchem_option('blog_title'));?></h1>
                    <?php if(alchem_option('blog_subtitle')):?>
                    <h3 class="alchem_blog_subtitle"><?php echo esc_attr(alchem_option('blog_subtitle'));?></h3>
                    <?php endif;?>
                 <?php else:?>
                    <h1><?php single_cat_title();?></h1>
                 <?php endif;?>   
                </hgroup>
                <?php if( $display_breadcrumb == 'yes' && !$detect->isMobile()):?>
                <?php alchem_get_breadcrumb(array("before"=>"<div class='breadcrumb-nav text-light alchem_display_breadcrumb'>".$breadcrumb_menu_prefix,"after"=>"</div>","show_browse"=>false,"separator"=>$breadcrumb_menu_separator));?>
                <?php endif;?>
                <?php if( $breadcrumbs_on_mobile == 'yes' && $detect->isMobile()):?>
                <?php alchem_get_breadcrumb(array("before"=>"<div class='breadcrumb-nav text-light alchem_display_breadcrumb'>".$breadcrumb_menu_prefix,"after"=>"</div>","show_browse"=>false,"separator"=>$breadcrumb_menu_separator));?>
                <?php endif;?>
                <div class="clearfix"></div>            
            </div>
        </section>
<?php endif;?>
 <div class="post-wrap">
            <div class="container">
                <div class="post-inner row <?php echo alchem_get_content_class($sidebar);?>">
                        <div class="col-main">
                       
                       
                       <div class="blog-timeline-wrap">
                                    <div class="blog-timeline-icon">
                                        <i class="fa fa-comments"></i>
                                    </div>
                                    <div class="blog-timeline-inner">
                                        <div class="blog-timeline-line"></div>
                                        <div class="blog-list-wrap blog-timeline clearfix">
                                            
                <?php
			
             if ( have_posts() ) :
			   ?>
             <?php while ( have_posts() ) : the_post(); 
			 if( $i % 2 == 0 )
			        $position = 'left';
				else
				    $position = 'right';
			 
			 
			 ?>
                                            <div class="entry-box-wrap timeline-<?php echo $position;?>">
                                                <article class="entry-box">
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
                                                    <div class="entry-main">
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
                                                    </div>
                                                </article>
                                            </div>
                                            
                                            <?php $i++; endwhile; // end of the loop. ?>
											<?php endif;?>
                                        </div>
                                    </div>
                                    
                                </div>
          
                         <div class="clear"></div>
                          <?php alchem_paging_nav('echo'); ?>
                        </div>
                        <?php if( $sidebar == 'left' || $sidebar == 'both'  ): ?>
       <div class="col-aside-left">
                        <aside class="blog-side left text-left">
                            <div class="widget-area">
                            <?php get_sidebar('archiveleft');?>
                            </div>
                        </aside>
                    </div>
            <?php endif; ?>
            <?php if( $sidebar == 'right' || $sidebar == 'both'  ): ?>        
                    <div class="col-aside-right">
                        <div class="widget-area">
                           <?php get_sidebar('archiveright');?>
                            </div>
                    </div>
             <?php endif; ?>
                    </div>
                </div>
            </div>
      </article>
<?php get_footer(); ?>