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

                        {/* ── Hero Section ── */}
                        <section
                          className="elementor-section elementor-top-section elementor-element elementor-element-prod-hero elementor-section-stretched elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
                          data-id="prod-hero"
                          data-element_type="section"
                          data-settings='{"stretch_section":"section-stretched","background_background":"classic","craftcoffee_ext_is_background_parallax":"false"}'
                          style={{ backgroundImage: "url(/upload/aerial-view-of-various-coffee-P7X5ZDW-700x466.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
                        >
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
                                      className="elementor-element elementor-element-prod-h3 elementor-widget elementor-widget-heading"
                                      data-id="prod-h3"
                                      data-element_type="widget"
                                      data-settings='{"craftcoffee_ext_is_smoove":"true","craftcoffee_ext_smoove_disable":"769","craftcoffee_ext_smoove_duration":1000,"craftcoffee_ext_smoove_scalex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_scaley":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatey":{"unit":"px","size":100,"sizes":[]},"craftcoffee_ext_is_fadeout_animation":"true","craftcoffee_ext_is_fadeout_animation_velocity":{"unit":"px","size":0.3,"sizes":[]},"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_smoove_rotatex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_rotatey":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_rotatez":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatez":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_skewx":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_skewy":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_perspective":{"unit":"px","size":1000,"sizes":[]},"craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation_direction":"up"}'
                                      data-widget_type="heading.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <h3 className="elementor-heading-title elementor-size-default">Tüm Ürünler</h3>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-element elementor-element-prod-h1 elementor-widget elementor-widget-heading"
                                      data-id="prod-h1"
                                      data-element_type="widget"
                                      data-settings='{"craftcoffee_ext_is_smoove":"true","craftcoffee_ext_smoove_disable":"769","craftcoffee_ext_smoove_duration":1000,"craftcoffee_ext_smoove_scalex":{"unit":"px","size":2,"sizes":[]},"craftcoffee_ext_smoove_scaley":{"unit":"px","size":2,"sizes":[]},"craftcoffee_ext_is_fadeout_animation":"true","craftcoffee_ext_is_fadeout_animation_direction":"down","craftcoffee_ext_is_fadeout_animation_velocity":{"unit":"px","size":0.5,"sizes":[]},"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_smoove_rotatex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_rotatey":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_rotatez":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatey":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatez":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_skewx":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_skewy":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_perspective":{"unit":"px","size":1000,"sizes":[]},"craftcoffee_ext_is_infinite":"false"}'
                                      data-widget_type="heading.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <h1 className="elementor-heading-title elementor-size-default">Products</h1>
                                      </div>
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
                                        <div className="woocommerce">
                                          <ul className="products columns-3">
                                            {products.map((product) => (
                                              <li
                                                key={product.id}
                                                className="product type-product post-status-publish"
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
                                                  <span
                                                    className="woocommerce-loop-category__title"
                                                    style={{
                                                      fontSize: "12px",
                                                      letterSpacing: "2px",
                                                      textTransform: "uppercase",
                                                      color: "#c8a97e",
                                                      display: "block",
                                                      marginTop: "20px",
                                                      marginBottom: "6px",
                                                    }}
                                                  >
                                                    {product.category}
                                                  </span>
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
                                                  className="button add_to_cart_button"
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
