import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "New Coffee",
  description: "Premium Coffee Shop Experience",
  icons: {
    icon: "/images/logo_white.png",
  },
};

const cssFiles = [
  "/css/reset.css",
  "/css/wordpress.css",
  "/css/style.css",
  "/css/modulobox.css",
  "/css/left-align-menu.css",
  "/css/font-awesome.min.css",
  "/css/themify-icons.css",
  "/css/tooltipster.css",
  "/js/plugins/loftloader/assets/css/loftloader.min.css",
  "/js/plugins/elementor/assets/lib/animations/animations.min.css",
  "/js/plugins/elementor/assets/css/frontend-legacy.min.css",
  "/js/plugins/elementor/assets/css/frontend.min.css",
  "/js/plugins/craftcoffee-elementor/assets/css/swiper.css",
  "/js/plugins/craftcoffee-elementor/assets/css/justifiedGallery.css",
  "/js/plugins/craftcoffee-elementor/assets/css/flickity.css",
  "/js/plugins/craftcoffee-elementor/assets/css/owl.theme.default.min.css",
  "/js/plugins/craftcoffee-elementor/assets/css/switchery.css",
  "/js/plugins/craftcoffee-elementor/assets/css/craftcoffee-elementor.css",
  "/js/plugins/craftcoffee-elementor/assets/css/craftcoffee-elementor-responsive.css",
  "/css/responsive.css",
  "/js/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css",
  "/js/plugins/elementor/assets/lib/font-awesome/css/brands.min.css",
  "/js/plugins/elementor/assets/lib/font-awesome/css/solid.min.css",
  "/css/custom-css.min.css",
  "/css/nextjs-fixes.css",   // ← en son: override için
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" data-menu="leftalign">
      <head>
        {cssFiles.map((href) => (
          <link key={href} rel="stylesheet" href={href} type="text/css" media="all" />
        ))}
      </head>
      <body
        data-rsssl="1"
        className="home theme-craftcoffee menu-transparent lightbox-black leftalign loftloader-lite-enabled elementor-default elementor-kit-6338 elementor-page elementor-page-4462"
      >
        {/* Loftloader - tüm sayfalarda ortak */}
        <div id="loftloader-wrapper" className="pl-imgloading" data-show-close-time="15000" data-max-load-time="0">
          <div className="loader-inner">
            <div id="loader">
              <div className="imgloading-container">
                <span style={{ backgroundImage: "url(/upload/logo_white.png)" }}></span>
              </div>
              <img data-no-lazy="1" className="skip-lazy" alt="loader image" src="/upload/logo_white.png" />
            </div>
          </div>
          <div className="loader-section section-fade"></div>
          <div className="loader-close-button" style={{ display: "none" }}>
            <span className="screen-reader-text">Close</span>
          </div>
        </div>
        {children}

        {/* elementor config - JS dosyalarından önce tanımlanmalı */}
        <Script id="elementor-config" strategy="beforeInteractive">{`
          var elementorFrontendConfig = {
            environmentMode: { edit: false, wpPreview: false },
            i18n: {
              shareOnFacebook: "Share on Facebook",
              shareOnTwitter: "Share on Twitter",
              pinIt: "Pin it",
              download: "Download",
              downloadImage: "Download image",
              fullscreen: "Fullscreen",
              zoom: "Zoom",
              share: "Share",
              playVideo: "Play Video",
              previous: "Previous",
              next: "Next",
              close: "Close",
            },
            is_rtl: false,
            breakpoints: { xs: 0, sm: 480, md: 768, lg: 1025, xl: 1440, xxl: 1600 },
            version: "3.0.11",
            is_static: false,
            legacyMode: { elementWrappers: true },
            urls: { assets: "/js/plugins/elementor/assets/" },
            settings: { page: [], editorPreferences: [] },
            kit: {
              global_image_lightbox: "yes",
              lightbox_enable_counter: "yes",
              lightbox_enable_fullscreen: "yes",
              lightbox_enable_zoom: "yes",
              lightbox_enable_share: "yes",
              lightbox_title_src: "title",
              lightbox_description_src: "description",
            },
            post: { id: 4462, title: "Craft Coffee", excerpt: "", featuredImage: false },
          };

          var craftcoffeeParams = {
            menulayout: 'leftalign',
            fixedmenu: 0,
            headercontent: 'elementor',
            topbar: 0,
            lightboxthumbnails: '',
            footerreveal: 0,
          };
        `}</Script>

        <Script src="/js/jquery.js" strategy="beforeInteractive" />
        <Script src="/js/plugins/craftcoffee-elementor/assets/js/flickity.pkgd.js" strategy="beforeInteractive" />
        <Script src="/js/plugins/craftcoffee-elementor/assets/js/craftcoffee-elementor.js" strategy="beforeInteractive" />
        <Script src="/js/plugins/craftcoffee-plugins.js" strategy="beforeInteractive" />
        <Script src="/js/plugins/elementor/assets/js/frontend.min.js" strategy="beforeInteractive" />

        {/* Tüm diğer JS'ler */}
        <Script src="/js/plugins/craftcoffee-elementor/assets/js/tweenmax.min.js" strategy="afterInteractive" />
        <Script src="/js/ui/core.min.js" strategy="afterInteractive" />
        <Script src="/js/imagesloaded.min.js" strategy="afterInteractive" />
        <Script src="/js/masonry.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/craftcoffee-elementor/assets/js/jquery.lazy.js" strategy="afterInteractive" />
        <Script src="/js/plugins/craftcoffee-elementor/assets/js/modulobox.js" strategy="afterInteractive" />
        <Script src="/js/plugins/craftcoffee-elementor/assets/js/velocity.js" strategy="afterInteractive" />
        <Script src="/js/plugins/craftcoffee-elementor/assets/js/velocity.ui.js" strategy="afterInteractive" />
        <Script src="/js/plugins/craftcoffee-elementor/assets/js/anime.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/craftcoffee-elementor/assets/js/jquery.mousewheel.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/craftcoffee-elementor/assets/js/momentum-slider.js" strategy="afterInteractive" />
        <Script src="/js/plugins/craftcoffee-elementor/assets/js/slick.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/craftcoffee-elementor/assets/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/craftcoffee-elementor/assets/js/jquery.parallax-scroll.js" strategy="afterInteractive" />
        <Script src="/js/plugins/craftcoffee-elementor/assets/js/jquery.smoove.js" strategy="afterInteractive" />
        <Script src="/js/plugins/craftcoffee-elementor/assets/js/parallax.js" strategy="afterInteractive" />
        <Script src="/js/plugins/craftcoffee-elementor/assets/js/jarallax.js" strategy="afterInteractive" />
        <Script src="/js/plugins/craftcoffee-elementor/assets/js/jquery.sticky-kit.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/jquery-stellar.js" strategy="afterInteractive" />
        <Script src="/js/plugins/jquery-tooltipster.js" strategy="afterInteractive" />
        <Script src="/js/plugins/loftloader/assets/js/loftloader.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/elementor/assets/js/frontend-modules.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/elementor/assets/lib/dialog/dialog.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/elementor/assets/lib/waypoints/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/elementor/assets/lib/swiper/swiper.min.js" strategy="afterInteractive" />
        {/* craftcoffee-custom.js en sonda yüklenir: ModuloBox, stellar, sticky-kit, tooltipster bağımlılıkları hazır */}
        <Script src="/js/plugins/craftcoffee-custom.js" strategy="afterInteractive" />

        <Script id="webfont-init" strategy="afterInteractive">{`
          if (typeof WebFont !== 'undefined') {
            WebFont.load({ google: { families: ["Roboto:400","Oswald:500"] } });
          }
        `}</Script>

        {/* Ana init script */}
        <Script id="init-fixes" strategy="afterInteractive">{`
          (function() {
            var _scrollListenerAdded = false;

            // Tüm bağımlılıkların yüklenmesini bekle (polling)
            function waitForDeps(cb, maxMs) {
              var start = Date.now();
              function check() {
                if (
                  typeof jQuery !== 'undefined' &&
                  typeof jQuery.fn.smoove !== 'undefined' &&
                  typeof elementorFrontend !== 'undefined'
                ) {
                  cb();
                } else if (Date.now() - start < (maxMs || 5000)) {
                  setTimeout(check, 100);
                } else {
                  // Zaman aşımı - mevcut olanlarla devam et
                  cb();
                }
              }
              check();
            }

            function initAll() {
              // 1. Navbar görünür yap
              var hdr = document.getElementById('elementor-header');
              if (hdr) {
                hdr.classList.add('visible');
                hdr.style.opacity = '1';
                hdr.style.visibility = 'visible';
              }

              // 2. Loftloader kapat
              var ldr = document.getElementById('loftloader-wrapper');
              if (ldr) ldr.style.display = 'none';

              // 3. Slider: slide'lara is-loaded ekle
              document.querySelectorAll('.slider-parallax-wrapper .slide')
                .forEach(function(s) { s.classList.add('is-loaded'); });

              // 4. Gallery görünür yap
              document.querySelectorAll('.horizontal-gallery-cell-img').forEach(function(img) {
                img.style.opacity = '1';
                img.style.transition = 'none';
              });

              // 5. Scroll to top - scroll bazlı göster/gizle
              var goTop = document.getElementById('go-to-top');
              if (goTop) {
                goTop.onclick = function(e) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  return false;
                };
              }

              // 6. Scroll event (tek seferlik)
              if (!_scrollListenerAdded) {
                _scrollListenerAdded = true;
                window.addEventListener('scroll', function() {
                  // Navbar
                  var hdr = document.getElementById('elementor-header');
                  if (hdr) {
                    if (window.scrollY > 100) {
                      hdr.style.setProperty('opacity', '0', 'important');
                      hdr.style.setProperty('visibility', 'hidden', 'important');
                      hdr.style.pointerEvents = 'none';
                    } else {
                      hdr.style.setProperty('opacity', '1', 'important');
                      hdr.style.setProperty('visibility', 'visible', 'important');
                      hdr.style.pointerEvents = '';
                    }
                  }
                  // Go-to-top
                  var goTop = document.getElementById('go-to-top');
                  if (goTop) {
                    if (window.scrollY > 300) {
                      goTop.classList.add('visible');
                    } else {
                      goTop.classList.remove('visible');
                    }
                  }
                }, { passive: true });
              }

              // 7. Elementor hooks + scroll animasyonları (bağımlılıklar hazır olunca)
              waitForDeps(function() {
                if (typeof jQuery === 'undefined' || typeof elementorFrontend === 'undefined') return;

                // Tüm widget hookları tetikle (gallery dahil - craftcoffee-elementor.js data-navigation okur)
                jQuery('.elementor-widget').each(function() {
                  var el = jQuery(this);
                  var widgetType = el.attr('data-widget_type');
                  if (!widgetType) return;
                  try { elementorFrontend.hooks.doAction('frontend/element_ready/global', el, jQuery); } catch(e) {}
                  try { elementorFrontend.hooks.doAction('frontend/element_ready/' + widgetType, el, jQuery); } catch(e) {}
                });

                // Search butonunu doğrudan başlat (hook sistemine ek olarak güvenli fallback)
                jQuery('.craftcoffee-search-icon a[data-open]').off('click.nxsearch').on('click.nxsearch', function(e) {
                  e.preventDefault();
                  var openDiv = jQuery(this).attr('data-open');
                  jQuery('#' + openDiv).addClass('active');
                  jQuery('body').addClass('elementor-no-overflow').addClass('elementor-search-activate');
                  setTimeout(function() { jQuery('#' + openDiv).find('input#s').trigger('focus'); }, 300);
                  return false;
                });
                jQuery('.craftcoffee-search-wrapper').off('click.nxsearchclose').on('click.nxsearchclose', function() {
                  var formInput = jQuery(this).find('input#s');
                  if (!formInput.hasClass('visible')) {
                    jQuery(this).removeClass('active');
                    jQuery('body').removeClass('elementor-no-overflow').removeClass('elementor-search-activate');
                  }
                });
                jQuery(document).off('keyup.nxsearch').on('keyup.nxsearch', function(e) {
                  if (e.key === 'Escape') {
                    jQuery('.craftcoffee-search-wrapper').removeClass('active');
                    jQuery('body').removeClass('elementor-no-overflow').removeClass('elementor-search-activate');
                  }
                });

                // Flickity
                setTimeout(function() {
                  if (typeof Flickity === 'undefined') return;
                  document.querySelectorAll('.horizontal-gallery-wrapper.flickity-enabled').forEach(function(g) {
                    try {
                      var flkty = Flickity.data(g);
                      if (flkty) { flkty.resize(); }
                      g.querySelectorAll('.horizontal-gallery-cell-img').forEach(function(img) { img.style.opacity = '1'; });
                    } catch(e) {}
                  });
                  document.querySelectorAll('.horizontal-gallery-wrapper:not(.flickity-enabled)').forEach(function(g) {
                    try {
                      new Flickity(g, { freeScroll: false, contain: true, prevNextButtons: true, pageDots: false, cellAlign: 'left', wrapAround: false, lazyLoad: false, imagesLoaded: true });
                      g.querySelectorAll('.horizontal-gallery-cell-img').forEach(function(img) { img.style.opacity = '1'; });
                    } catch(e) {}
                  });
                }, 200);
              }, 4000);
            }

            // DOMContentLoaded ve load her ikisinde de çalıştır
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initAll);
            } else {
              initAll();
            }
            window.addEventListener('load', initAll);
          })();
        `}</Script>
      </body>
    </html>
  );
}
