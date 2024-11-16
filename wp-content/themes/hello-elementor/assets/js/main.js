const mainScript = () => {
  const SCRIPT = {};
    const lenis = new Lenis()
gsap.registerPlugin(ScrollTrigger);
gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
const viewport = {
  w: window.innerWidth,
  h: window.innerHeight
}
lenis.on("scroll", function (inst) {
  if (inst.scroll > $(".header").height() * 0.75) {
    // console.log(inst.direction)
    if (inst.direction >= 1) {
      $(".header").addClass("on-hide");
    } else if(inst.direction<=-1 ) {
      $(".header").removeClass("on-hide");
    }
    $(".header").addClass("on-scroll");
  } else {
    $(".header").removeClass("on-scroll");
    $(".header").removeClass("on-hide");
  }
});

  function setupImgReveal(wralEl, innerEl, scrollParams = {
    trigger: wralEl,
    start: 'top top+=65%',
    once: true,
  }, dur = 1.2, delay = .1) {
    if (!scrollParams) {
    }
    $(wralEl).css({
        'overflow': 'hidden',
        'background-color': 'transparent',
        'pointer-events': 'none',
    })
    $(innerEl).css({
        'clip-path': 'polygon(-1% 102%, -1% var(--col-1), 25% var(--col-1), 25% 102%, 25% var(--col-2), 50% var(--col-2), 50% 102%, 50% var(--col-3), 75% var(--col-3), 75% 102%, 75% var(--col-4), 101% var(--col-4), 101% 102%)',
        '--col-1': '100%',
        '--col-2': '100%',
        '--col-3': '100%',
        '--col-4': '100%',
    })
    
    let tlImg = gsap.timeline({
        scrollTrigger: scrollParams,
        onComplete() {

        }
    })
    tlImg
    .from($(innerEl).find('img').get(0), {scale: 1.4, duration: dur, ease: 'power1.out'})
    .to(innerEl, {'--col-1': '0%', duration: dur, ease: 'power1.out'}, '<=0')
    .to(innerEl, {'--col-2': '0%', duration: dur - delay, ease: 'power1.out'}, `<=${delay}`)
    .to(innerEl, {'--col-3': '0%', duration: dur - delay * 2, ease: 'power1.out'}, `<=${delay}`)
    .to(innerEl, {'--col-4': '0%', duration: dur - delay * 3, ease: 'power1.out'}, `<=${delay}`)
  }
  const parseRem = (input) => {
    return (input / 10) * parseFloat($("html").css("font-size"));
  };
  const colapSection=(classNameTop, classNameBottom)=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${classNameBottom}`,
        start: `top bottom`,
        end: 'top top',
        scrub: .2,
      }
    });

    tl.to(`.${classNameTop}`, { opacity:0,transformOrigin: 'top',scale:.8, duration: 1, ease: 'none' })
  }
 SCRIPT.homeScript = () => {
  colapSection('home-intro-wrap', 'home-room-wrap')
  colapSection('home-room-sticky', 'home-price-wrap')
  colapSection('home-testi', 'home-blog-wrap')
  function homeBasket3d(){
    const canvas = document.querySelector('#home-hero-canvas');
    const scene = new THREE.Scene();
    const textureLoader = new THREE.TextureLoader();
    // const gui = new dat.GUI();
    
    const gemoetry = new THREE.SphereBufferGeometry(.75, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      metalness: .7,
      roughness: 0.2,
      normalMap: textureLoader.load('/wp-content/themes/hello-elementor/assets/images/basketball.png'),
      color: new THREE.Color(0xff8c00)
    });
    const sphere = new THREE.Mesh(gemoetry, material);
    scene.add(sphere);
    
    /** Add some light. */
    const pointLight1 = new THREE.PointLight(0xffffff, 0.1);
    pointLight1.position.set(0, 3, 4);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0xff0000, 10);
    pointLight2.position.set(0, 1, -1);
    scene.add(pointLight2);
    const pointLight3 = new THREE.PointLight(0xffd000, 7);
    pointLight3.position.set(0.1, -3, -1);
    scene.add(pointLight3);
    
    /** Set the sizes based on the window size. */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    
    window.addEventListener('resize', () => {
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight
    
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()
    
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    });
    
    /** Place the camera. */
    const camera = new THREE.PerspectiveCamera(100, sizes.width / sizes.height, 0.1, 100);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 2;
    scene.add(camera);
    
    /** Render the scene. */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    /** Animate the sphere. */
    let mouseX = 0,
        mouseY = 0,
        targetX = 0,
        targetY = 0;
    const windowHalfX = window.innerWidth / 2,
          windowHalfY = window.innerHeight / 2;
    
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX - windowHalfX;
      mouseY = e.clientY - windowHalfY;
    });
    
    window.addEventListener('scroll', (e) => {
      sphere.position.y = window.scrollY * .001;
    });
    
    const clock = new THREE.Clock();
    // Variables for scroll interaction
    // let scrollY = 0;
    
    // Listen for scroll event
    // window.addEventListener('scroll', () => {
    //   scrollY = window.scrollY; // Update scrollY with the current scroll position
    // });
    
    const tick = () => {
      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;
    
      const elapsedTime = clock.getElapsedTime();
    
      // Update rotation based on time and mouse position
      sphere.rotation.y = 3 * elapsedTime;
      sphere.rotation.x += .13 * (targetY - sphere.rotation.x);
      sphere.rotation.y += .3 * (targetX - sphere.rotation.y);
      sphere.position.z += -.2 * (targetY - sphere.rotation.x);
    
      // Update position based on scroll
      // sphere.position.y = scrollY * 0.00005; // Adjust this multiplier to control speed of movement
      
      renderer.render(scene, camera);
    
      window.requestAnimationFrame(tick);
    };
    tick();
    
    }
    homeBasket3d()
    function homeIntro(){
      let tlTrigger = new gsap.timeline({
        scrollTrigger: {
          trigger: '.home-intro',
          start: 'top bottom+=50%',
          end: 'bottom top',
          once: true,
          onEnter: () => {
            setup();
          },
        }
      })
      function setup(){
       $('.home-intro-item').on('mouseenter', function(){
        $('.home-intro-item').removeClass('active');
        $(this).addClass('active');
       })
      }
    }
    homeIntro();
    function homeRoom(){
      let tlTrigger = new gsap.timeline({
        scrollTrigger: {
          trigger: '.home-room',
          start: 'top bottom+=50%',
          end: 'bottom top',
          once: true,
          onEnter: () => {
            setup();
          },
        }
      })
      function setup(){
        setupImgReveal('.home-room-sticky-item-over', '.home-room-sticky-over-img')
        setupImgReveal('.home-room-child-img-wrap', '.home-room-child-img')
        let allchild = $('.home-room-sticky-inner').children();
        let totalWidth = 0
        allchild.each((idx, el) => {
            let width = $(el).outerWidth(true);
            totalWidth += width
        })
        let distance = totalWidth - $('.home-room-sticky').width();
        let prgoDistance = $('.loc-offi-prog-line').width() - $('.loc-offi-prog-line-inner').width();
        this.tlHorScroll = gsap.timeline({
            scrollTrigger: {
                trigger: '.home-room-sticky-wrap',
                start:'top top+=10%',
                end: 'bottom bottom',
                scrub: true,
            },
        })
        this.tlHorScroll
        .to('.home-room-sticky-inner', {x: -distance, duration: 1, ease: 'none'})
        .to('.loc-offi-prog-line-inner', {x: prgoDistance, duration: 1, ease: 'none'}, 0)
      }
    }
    homeRoom();
    var swiperPrice = new Swiper(".home-price-inner", {
      slidesPerView: 2,
      spaceBetween: parseRem(20),
  
      breakpoints: {
        767: {
          slidesPerView: 4,
          spaceBetween: parseRem(20),
        },
        991: {
          slidesPerView: 4,
          spaceBetween: parseRem(24),
        },
      },
    });
    var swiperBlog = new Swiper(".home-blog-main", {
      slidesPerView: 2,
      spaceBetween: parseRem(20),
  
      breakpoints: {
        767: {
          slidesPerView: 4,
          spaceBetween: parseRem(20),
        },
        991: {
          slidesPerView: 4,
          spaceBetween: parseRem(24),
        },
      },
    });
$('.home-price-item').each((idx, el) => {
  let height = $(el).find('.home-price-item-sub').outerHeight();
  $(el).find('.home-price-item-inner').css('transform', `translateY(${height}px)`)
})
}
(function($) {
  // globalScript();
const pageName = $(".main").attr("name-space");
      if (pageName) {
        SCRIPT[`${pageName}Script`]();
      }
})(jQuery);
}
window.onload = mainScript;