<?php
/**
 * The template for displaying footer.
 *
 * @package HelloElementor
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$footer_nav_menu = wp_nav_menu( [
	'theme_location' => 'menu-2',
	'fallback_cb' => false,
	'container' => false,
	'echo' => false,
] );
?>
<footer >
	<!-- <?php if ( $footer_nav_menu ) : ?>
		<nav class="site-navigation" aria-label="<?php echo esc_attr__( 'Footer menu', 'hello-elementor' ); ?>">
			<?php
			// PHPCS - escaped by WordPress with "wp_nav_menu"
			echo $footer_nav_menu; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			?>
		</nav>
	<?php endif; ?> -->
	<div class="footer-wrap">
		<section class="footer">
			<div class="container">
				<h2 class="heading h2 footer-title txt-white">Footer</h2>
			</div>
		</section>
	</div>

</footer>
