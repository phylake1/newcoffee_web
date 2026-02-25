export default function Navbar() {
  return (
    <>
      {/* --- Mobile menu --- */}
      <a id="btn-close-mobile-menu" href="javascript:;"></a>
      <div className="mobile-menu-wrapper">
        <div className="mobile-menu-content">
          <div className="menu-main-menu-container">
            <ul id="mobile_main_menu" className="mobile-main-nav">
              <li className="menu-item current-menu-ancestor current-menu-parent menu-item-has-children">
                <a href="#">Home</a>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-home current-menu-item page_item page-item-4462 current_page_item">
                    <a href="/" aria-current="page">
                      Home 1
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Home 2</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Home 3</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Home 4</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Home 5</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Home 6</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Home 7</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Home 8</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Home 9</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children menu-item-10">
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="/menu">Menu</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">About Us 1</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">About Us 2</a>
                  </li>
                  <li className="menu-item">
                    <a href="/about">About Us 3</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Our Team</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Our Process</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Coffee Subscriptions</a>
                  </li>
                  <li className="menu-item">
                    <a href="/contact">Contact Us 1</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Contact Us 2</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Reservation</a>
                  </li>
                  <li className="menu-item">
                    <a href="/shop">Delivery</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Blog Grid</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Blog Grid No Space</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Blog Masonry</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Blog Metro No Space</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Blog Metro</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Blog Classic</a>
                  </li>
                  <li className="menu-item">
                    <a href="/blog">Blog List</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Blog Textual</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="#">Portfolio</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="#">Portfolio Classic</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Portfolio Grid</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Portfolio Grid Overlay</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Portfolio 3D Overlay</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Portfolio Contain</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Portfolio Masonry</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Portfolio Masonry Grid</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Portfolio Coverflow</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Portfolio Timeline Horizon</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Portfolio Timeline Vertical</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Video Grid</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Gallery Grid</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Gallery Masonry</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Gallery Justified</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Gallery Fullscreen</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="#">Sliders</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="#">Vertical Parallax Slider</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Animated Frame Slider</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">3D Room Slider</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Popout Slider</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Clip Path Slider</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Velo Slider</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Split Slick Slider</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Fullscreen Transition Slider</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Flip Slider</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Split Carousel Slider</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Mouse Driven Carousel</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Parallax Slider</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Zoom Slider</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Animated Slider</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Fade Up Slider</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Horizontal Slider</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Motion Reveal Slider</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- Desktop navbar --- */}
      <div id="elementor-header" className="main-menu-wrapper">
        <div
          data-elementor-type="wp-post"
          data-elementor-id="3099"
          className="elementor custom-css-style"
          data-elementor-settings="[]"
        >
          <div className="elementor-inner">
            <div className="elementor-section-wrap">
              <section
                className="elementor-section elementor-top-section elementor-element elementor-element-a216edb elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="a216edb"
                data-element_type="section"
                data-settings='{"craftcoffee_ext_is_background_parallax":"false"}'
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-row">
                    <div
                      className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-eb2db78 elementor-hidden-tablet elementor-hidden-phone"
                      data-id="eb2db78"
                      data-element_type="column"
                      data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                    >
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <div
                            className="elementor-element elementor-element-d6b5ce3 elementor-widget elementor-widget-craftcoffee-navigation-menu"
                            data-id="d6b5ce3"
                            data-element_type="widget"
                            data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                            data-widget_type="craftcoffee-navigation-menu.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="themegoods-navigation-wrapper menu_style1">
                                <div className="menu-main-menu-container">
                                  <ul id="nav_menu34" className="nav">
                                    <li className="menu-item current-menu-ancestor current-menu-parent menu-item-has-children">
                                      <a href="/">Anasayfa</a>
                                    </li>
                                    <li className="menu-item menu-item-has-children">
                                      <a href="/menu">Menu</a>
                                    </li>
                                    <li className="menu-item menu-item-has-children ">
                                      <a href="/about">Hakkımızda</a>
                                    </li>
                                    <li className="menu-item menu-item-has-children ">
                                      <a href="/contact">Iletisim</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-8dfe958"
                      data-id="8dfe958"
                      data-element_type="column"
                      data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                    >
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <div
                            className="elementor-element elementor-element-6f23744 elementor-absolute elementor-widget elementor-widget-image"
                            data-id="6f23744"
                            data-element_type="widget"
                            data-settings='{"_position":"absolute","craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                            data-widget_type="image.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="elementor-image">
                                <a href="/">
                                  <img
                                    width="180"
                                    height="180"
                                    src="/images/logo_white.png"
                                    className="attachment-full size-full"
                                    alt=""
                                    loading="lazy"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-b401b7a elementor-hidden-phone"
                      data-id="b401b7a"
                      data-element_type="column"
                      data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                    >
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <div
                            className="elementor-element elementor-element-9966067 elementor-widget__width-auto elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons"
                            data-id="9966067"
                            data-element_type="widget"
                            data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                            data-widget_type="social-icons.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="elementor-social-icons-wrapper elementor-grid">
                                <div className="elementor-grid-item">
                                  <a
                                    href="#"
                                    className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-4238c6b"
                                    target="_blank"
                                    style={{ fontSize: "25px" }}
                                  >
                                    <span className="elementor-screen-only">
                                      cart
                                    </span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 640 640"
                                      fill="white"
                                    >
                                      <path d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z" />
                                    </svg>
                                  </a>
                                </div>

                                <div className="elementor-grid-item">
                                  <a
                                    href="#"
                                    className="elementor-icon elementor-social-icon elementor-social-icon-yelp elementor-repeater-item-e0f5af3"
                                    target="_blank"
                                    style={{fontSize: "25px" }}
                                  >
                                    <span className="elementor-screen-only">
                                      user
                                    </span>

                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 640 640"
                                      fill="white"
                                      
                                    >
                                      <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" />
                                    </svg>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-9c9f0b7 elementor-widget__width-auto elementor-widget elementor-widget-craftcoffee-search"
                            data-id="9c9f0b7"
                            data-element_type="widget"
                            data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                            data-widget_type="craftcoffee-search.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="craftcoffee-search-icon">
                                <a
                                  data-open="tg_search_9c9f0b7"
                                  href="javascript:;"
                                >
                                  <i
                                    aria-hidden="true"
                                    className="fas fa-search"
                                  ></i>
                                </a>
                              </div>

                              <div
                                id="tg_search_9c9f0b7"
                                className="craftcoffee-search-wrapper"
                              >
                                <div className="craftcoffee-search-inner">
                                  <form
                                    id="tg_search_form_9c9f0b7"
                                    className="tg_search_form autocomplete_form"
                                    method="get"
                                    action="index.html"
                                    data-result="autocomplete_9c9f0b7"
                                    data-open="tg_search_9c9f0b7"
                                  >
                                    <div className="input-group">
                                      <input
                                        id="s"
                                        name="s"
                                        placeholder="Search for anything"
                                        autoComplete="off"
                                      />
                                      <span className="input-group-button">
                                        <button
                                          aria-label="Search for anything"
                                          type="submit"
                                        >
                                          <i
                                            aria-hidden="true"
                                            className="fas fa-search"
                                          ></i>
                                        </button>
                                      </span>
                                    </div>

                                    <br className="clear" />
                                    <div
                                      id="autocomplete_9c9f0b7"
                                      className="autocomplete"
                                      data-mousedown="false"
                                    ></div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-fcec661"
                      data-id="fcec661"
                      data-element_type="column"
                      data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                    >
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <div
                            className="elementor-element elementor-element-ff52274 elementor-align-center elementor-widget-tablet__width-auto elementor-hidden-phone elementor-widget elementor-widget-button"
                            data-id="ff52274"
                            data-element_type="widget"
                            data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                            data-widget_type="button.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="elementor-button-wrapper">
                                <a
                                  href="tel:234.567.3455"
                                  className="elementor-button-link elementor-button elementor-size-sm"
                                  role="button"
                                >
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">
                                      05542423107
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-element elementor-element-0b79fea elementor_mobile_nav elementor-widget__width-auto elementor-hidden-desktop elementor-view-default elementor-widget elementor-widget-icon"
                            data-id="0b79fea"
                            data-element_type="widget"
                            data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                            data-widget_type="icon.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="elementor-icon-wrapper">
                                <a className="elementor-icon" href="">
                                  {" "}
                                  <i
                                    aria-hidden="true"
                                    className="fas fa-ellipsis-v"
                                  ></i>{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="elementor-section elementor-top-section elementor-element elementor-element-3727a07 elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                data-id="3727a07"
                data-element_type="section"
                data-settings='{"stretch_section":"section-stretched","craftcoffee_ext_is_background_parallax":"false"}'
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-row">
                    <div
                      className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f260150"
                      data-id="f260150"
                      data-element_type="column"
                      data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                    >
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <div
                            className="elementor-element elementor-element-d00d5a2 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                            data-id="d00d5a2"
                            data-element_type="widget"
                            data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                            data-widget_type="divider.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="elementor-divider">
                                <span className="elementor-divider-separator">
                                  {" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
