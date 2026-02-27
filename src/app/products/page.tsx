import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  {
    id: "coffee-product-1",
    name: "Ethiopia Yirgacheffe",
    category: "Single Origin",
    price: "150",
    image: "/upload/coffee-product-1-440x440.png",
    description: "Çiçeksi ve meyve aromaları ile öne çıkan eşsiz kahve.",
  },
  {
    id: "el-salvador-coffee",
    name: "El Salvador Blend",
    category: "Single Origin",
    price: "175",
    image: "/upload/el-salvador-coffee-440x440.png",
    description: "Karamel ve fındık notalarıyla dengeli bir içim.",
  },
  {
    id: "equator-coffee",
    name: "Equator Blend",
    category: "Blend",
    price: "160",
    image: "/upload/equator-coffee-440x440.png",
    description: "Tropikal meyve aromaları ile zengin bir tat profili.",
  },
  {
    id: "milk-chocolate-blend",
    name: "Milk Chocolate Blend",
    category: "Blend",
    price: "145",
    image: "/upload/milk-chocolate-blend-440x440.png",
    description: "Sütlü çikolata ve karamel notalarıyla kadifemsi bir tat.",
  },
  {
    id: "darkhorse-coffee",
    name: "Dark Horse Coffee",
    category: "Espresso",
    price: "165",
    image: "/upload/darkhorse-coffee-440x440.png",
    description: "Koyu kavrum, derin ve güçlü espresso karışımı.",
  },
  {
    id: "raimutin-natural",
    name: "Raimutin Natural",
    category: "Natural Process",
    price: "185",
    image: "/upload/raimutin-natural-440x440.png",
    description: "Doğal işlem yöntemiyle üretilmiş yoğun meyveli kahve.",
  },
  {
    id: "hario-tea-press",
    name: "Hario Tea Press",
    category: "Ekipman",
    price: "350",
    image: "/upload/Coffee-Image_Hario-Tea-Press_dbcc3335-ba56-4c5b-8ef0-84508a701881_540x-440x440.png",
    description: "Hem çay hem kahve için kullanılabilen premium demleme ekipmanı.",
  },
  {
    id: "moccamaster-jug",
    name: "Moccamaster Jug",
    category: "Ekipman",
    price: "450",
    image: "/upload/Moccamaster_Thermal-Jug_540x-1-440x440.png",
    description: "Termal şişe ile sıcaklığı uzun süre korur.",
  },
  {
    id: "drip-kettle",
    name: "Drip Kettle",
    category: "Ekipman",
    price: "280",
    image: "/upload/drip-kettle-440x440.png",
    description: "Pour-over yöntemi için hassas ısıtma kontrolü.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <div id="perspective">
        <Navbar />
        <div id="wrapper" className="hasbg transparent">
          <div id="page-content-wrapper" className="no-title">
            <div className="inner">
              <div className="inner-wrapper">
                <div className="sidebar-content fullwidth">
                  <div
                    data-elementor-type="wp-page"
                    data-elementor-id="products"
                    className="elementor custom-css-style"
                    data-elementor-settings="[]"
                  >
                    <div className="elementor-inner">
                      <div className="elementor-section-wrap">

                        {/* ── Hero Section — about sayfasıyla aynı yapı ── */}
                        <section
                          className="elementor-section elementor-top-section elementor-element elementor-element-4923803 elementor-section-stretched elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
                          data-id="4923803"
                          data-element_type="section"
                          data-settings='{"stretch_section":"section-stretched","background_background":"classic","craftcoffee_ext_is_background_parallax":"true","craftcoffee_ext_is_background_parallax_speed":{"unit":"px","size":0.8,"sizes":[]}}'
                        >
                          <img
                            src="/upload/aerial-view-of-various-coffee-P7X5ZDW-700x466.jpg"
                            alt=""
                            aria-hidden="true"
                            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, pointerEvents: "none" }}
                          />
                          <div className="elementor-background-overlay"></div>
                          <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-row">
                              <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-prod-hero-col"
                                data-id="prod-hero-col"
                                data-element_type="column"
                                data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                              >
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div
                                      className="elementor-element elementor-element-a5bf6ba elementor-widget__width-auto elementor-invisible elementor-widget elementor-widget-heading"
                                      data-id="a5bf6ba"
                                      data-element_type="widget"
                                      data-settings='{"craftcoffee_ext_is_fadeout_animation":"true","craftcoffee_ext_is_fadeout_animation_velocity":{"unit":"px","size":0.5,"sizes":[]},"_animation":"fadeIn","_animation_delay":200,"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation_direction":"up"}'
                                      data-widget_type="heading.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <h1 className="elementor-heading-title elementor-size-default">Tüm Ürünler</h1>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>

                        {/* ── Dekoratif ince şerit (diğer sayfalardaki gibi) ── */}
                        <section
                          className="elementor-section elementor-top-section elementor-element elementor-element-979fb6c elementor-section-stretched elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
                          data-id="979fb6c"
                          data-element_type="section"
                          data-settings='{"stretch_section":"section-stretched","background_background":"classic","craftcoffee_ext_is_background_parallax":"false"}'
                        >
                          <img src="/upload/bg-header-overlay-lg.png" alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, pointerEvents: "none" }} />
                          <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-row">
                              <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-prod-sep-col"
                                data-id="prod-sep-col"
                                data-element_type="column"
                                data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                              >
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div className="elementor-widget-container">
                                      <div className="elementor-spacer"><div className="elementor-spacer-inner"></div></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>

                        {/* ── Products Grid Section ── */}
                        <section
                          className="elementor-section elementor-top-section elementor-element elementor-element-prod-grid elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                          data-id="prod-grid"
                          data-element_type="section"
                          data-settings='{"craftcoffee_ext_is_background_parallax":"false"}'
                          style={{ padding: "80px 0" }}
                        >
                          <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-row">
                              <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-prod-grid-col"
                                data-id="prod-grid-col"
                                data-element_type="column"
                                data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                              >
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div
                                      className="elementor-element elementor-element-prod-list elementor-widget elementor-widget-text-editor"
                                      data-id="prod-list"
                                      data-element_type="widget"
                                      data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                                      data-widget_type="text-editor.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="woocommerce-grid-container">
                                          <div className="woocommerce columns-3">
                                            <ul className="products columns-3">
                                              {products.map((product) => (
                                                <li
                                                  key={product.id}
                                                  className="product type-product status-publish instock has-post-thumbnail purchasable product-type-simple"
                                                >
                                                  <a
                                                    href={`/products/${product.id}`}
                                                    className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
                                                  >
                                                    <img
                                                      src={product.image}
                                                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                                      alt={product.name}
                                                      loading="lazy"
                                                    />
                                                    <h2 className="woocommerce-loop-product__title">
                                                      {product.name}
                                                    </h2>
                                                    <span className="price">
                                                      <span className="woocommerce-Price-amount amount">
                                                        <bdi>
                                                          <span className="woocommerce-Price-currencySymbol">₺</span>
                                                          {product.price}
                                                        </bdi>
                                                      </span>
                                                    </span>
                                                  </a>
                                                  <a
                                                    href={`/products/${product.id}`}
                                                    className="button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                  >
                                                    Detaylar
                                                  </a>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
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
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
