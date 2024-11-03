<?php

/**
 * The template for displaying header.
 *
 * @package HelloElementor
 */

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}
$site_name = get_bloginfo('name');
$tagline   = get_bloginfo('description', 'display');
$header_nav_menu = wp_nav_menu([
	'theme_location' => 'menu-1',
	'fallback_cb' => false,
	'container' => false,
	'echo' => false,
]);
?>

<header class="header transition-4">
	<section class="header-wrap">
		<div class="container ">
			<div class="header-inner">
			<div class="header-logo">
				<div class="header-logo-inner">
				<img src="/wp-content/uploads/2024/11/logo.jpg" alt="" class="img-basic">
				</div>
			</div>
			<div class="header-menu">
				<a href="" class=" txt-link header-menu-item hover-un">
					<span class="txt txt-20">Giới thiệu</span>
					<div class="line line-hover">
						<div class="line-inner line-inner-hover"></div>
					</div>
				</a>
				<a href="" class=" txt-link header-menu-item hover-un">
					<span class="txt txt-20">Khóa tập </span>
					<div class="line line-hover">
						<div class="line-inner line-inner-hover"></div>
					</div>
				</a>
				<a href="" class=" txt-link header-menu-item hover-un">
					<span class="txt txt-20">Blog</span>
					<div class="line line-hover">
						<div class="line-inner line-inner-hover"></div>
					</div>
				</a>
			</div>
			<div class="header-cta ">
				<a href="/" class="txt-link btn btn-md">
					<span class="txt txt-18 transition-4">Đăng ký ngay</span>
					<div class="btn-bg "></div>
					<div class="header-cta-arrow btn-arrow">
					<div class="  grid-11 btn-arrow-inner">
						<div class="btn-arrow-main  child-11 transition-4">
							<div class="ic-embed">
							<svg width="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_2643_3494)">
									<path d="M1.3335 8H14.6668" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" />
									<path d="M10 3.3335L14.6667 8.00016L10 12.6668" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square" />
								</g>
								<defs>
									<clipPath id="clip0_2643_3494">
										<rect width="16" height="16" fill="white" />
									</clipPath>
								</defs>
							</svg>
							</div>
						</div>
						<div class="btn-arrow-clone transition-4 child-11">
							<div class="ic-embed">
							<svg width="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_2643_3494)">
									<path d="M1.3335 8H14.6668" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" />
									<path d="M10 3.3335L14.6667 8.00016L10 12.6668" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square" />
								</g>
								<defs>
									<clipPath id="clip0_2643_3494">
										<rect width="16" height="16" fill="white" />
									</clipPath>
								</defs>
							</svg>
							</div>
						</div>
					</div>
					</div>
				</a>
			</div>
			</div>
		</div>
	</section>
</header>