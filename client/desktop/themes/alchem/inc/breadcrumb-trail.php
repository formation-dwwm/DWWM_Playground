<?php
/**
* Plugin Name: Breadcrumb Trail
* Plugin URI: http://themehybrid.com/plugins/breadcrumb-trail
* Description: A smart breadcrumb menu plugin embedded with <a href="http://schema.org">Schema.org</a> microdata that can handle variations in site structure more accurately than any other breadcrumb plugin for WordPress. Insert into your theme with the <code>breadcrumb_trail()</code> template tag.
* Version: 0.6.1
* Author: Justin Tadlock
* Author URI: http://justintadlock.com
* Text Domain: breadcrumb-trail
* Domain Path: /languages
*/
/* Extra check in case the script is being loaded by a theme. */
if ( !function_exists( 'alchem_breadcrumb_trail' ) )
require_once( 'breadcrumbs.php' );
