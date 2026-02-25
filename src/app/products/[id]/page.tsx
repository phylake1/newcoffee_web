import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Tüm ürün verileri — kullanıcı sonradan düzenleyecek
const products: Record<string, {
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  image: string;
  gallery: string[];
  description: string;
  details: string[];
  weight?: string;
  origin?: string;
  roast?: string;
}> = {
  "coffee-product-1": {
    name: "Ethiopia Yirgacheffe",
    category: "Single Origin",
    price: "150",
    image: "/upload/coffee-product-1-440x440.png",
    gallery: [
      "/upload/coffee-product-1-440x440.png",
      "/upload/coffee-product-1-300x300.png",
    ],
    description:
      "Etiyopya'nın Yirgacheffe bölgesinden özenle toplanmış bu kahve, çiçeksi bergamot ve taze limon aromaları ile benzersiz bir içim deneyimi sunar. Yüksek rakımda yetişen arabica çekirdekleri, su ile işlem yöntemiyle işlenerek temiz ve parlak bir tat profili kazanır.",
    details: [
      "Menşei: Etiyopya, Yirgacheffe",
      "Rakım: 1800-2200 m",
      "İşlem: Yıkanmış",
      "Tasting: Bergamot, Limon, Çiçek",
    ],
    weight: "250g",
    origin: "Etiyopya",
    roast: "Açık Kavrum",
  },
  "el-salvador-coffee": {
    name: "El Salvador Blend",
    category: "Single Origin",
    price: "175",
    image: "/upload/el-salvador-coffee-440x440.png",
    gallery: [
      "/upload/el-salvador-coffee-440x440.png",
      "/upload/el-salvador-coffee-300x300.png",
    ],
    description:
      "El Salvador'ın volcanic topraklarında yetişen bu kahve, karamel tatlılığı ve fındık notalarının mükemmel dengesiyle öne çıkar. Yumuşak asidite yapısıyla her gün içilebilecek, rahatlatıcı bir fincan vaat eder.",
    details: [
      "Menşei: El Salvador",
      "Rakım: 1200-1600 m",
      "İşlem: Honey Process",
      "Tasting: Karamel, Fındık, Şeker",
    ],
    weight: "250g",
    origin: "El Salvador",
    roast: "Orta Kavrum",
  },
  "equator-coffee": {
    name: "Equator Blend",
    category: "Blend",
    price: "160",
    image: "/upload/equator-coffee-440x440.png",
    gallery: ["/upload/equator-coffee-440x440.png"],
    description:
      "Ekvator bölgesindeki farklı çiftliklerden seçilmiş çekirdeklerin özenli harmanıyla oluşturulmuş bu blend, tropikal meyve aromaları ve tatlı bitişiyle sizi uzak ülkelere götürür.",
    details: [
      "Menşei: Guatemala & Kolombiya",
      "İşlem: Yıkanmış",
      "Tasting: Mango, Ananas, Şeker kamışı",
    ],
    weight: "250g",
    origin: "Guatemala & Kolombiya",
    roast: "Açık-Orta Kavrum",
  },
  "milk-chocolate-blend": {
    name: "Milk Chocolate Blend",
    category: "Blend",
    price: "145",
    image: "/upload/milk-chocolate-blend-440x440.png",
    gallery: ["/upload/milk-chocolate-blend-440x440.png"],
    description:
      "Sütlü çikolata ve karamel notaları ön planda olan bu blend, kadifemsi yapısıyla sütle mükemmel uyum sağlar. Latte ve cappuccino için ideal bir espresso tabanı oluşturur.",
    details: [
      "Menşei: Brezilya & Honduras",
      "İşlem: Doğal",
      "Tasting: Sütlü çikolata, Karamel, Fındık ezmesi",
    ],
    weight: "250g",
    origin: "Brezilya & Honduras",
    roast: "Orta-Koyu Kavrum",
  },
  "darkhorse-coffee": {
    name: "Dark Horse Coffee",
    category: "Espresso",
    price: "165",
    image: "/upload/darkhorse-coffee-440x440.png",
    gallery: ["/upload/darkhorse-coffee-440x440.png"],
    description:
      "İtalyan espresso geleneğinden ilham alan bu koyu kavrum, güçlü gövdesi ve zengin krema katmanıyla gerçek bir espresso tutkununa hitap eder. Acı çikolata ve kuru meyve notalarıyla uzun bitişi vardır.",
    details: [
      "Menşei: Etiyopya & Brezilya",
      "İşlem: Natural & Washed harman",
      "Tasting: Acı çikolata, İncir, Derin tütün",
    ],
    weight: "250g",
    origin: "Etiyopya & Brezilya",
    roast: "Koyu Kavrum",
  },
  "raimutin-natural": {
    name: "Raimutin Natural",
    category: "Natural Process",
    price: "185",
    image: "/upload/raimutin-natural-440x440.png",
    gallery: ["/upload/raimutin-natural-440x440.png"],
    description:
      "Doğal işlem yöntemiyle güneşte kurutulan bu spesiyal lot, olgunlaşmış meyvelerin yoğun ve tatlı aromalarını özümsemiştir. Her yudumda çilek reçeli, kuru üzüm ve şeker kamışı hissedersiniz.",
    details: [
      "Menşei: Etiyopya, Guji",
      "Rakım: 2000-2200 m",
      "İşlem: Natural (güneşte kurutma)",
      "Tasting: Çilek, Kuru üzüm, Çiçek balı",
    ],
    weight: "250g",
    origin: "Etiyopya, Guji",
    roast: "Açık Kavrum",
  },
  "hario-tea-press": {
    name: "Hario Tea Press",
    category: "Ekipman",
    price: "350",
    image: "/upload/Coffee-Image_Hario-Tea-Press_dbcc3335-ba56-4c5b-8ef0-84508a701881_540x-440x440.png",
    gallery: [
      "/upload/Coffee-Image_Hario-Tea-Press_dbcc3335-ba56-4c5b-8ef0-84508a701881_540x-440x440.png",
      "/upload/Coffee-Image_Hario-Tea-Press_dbcc3335-ba56-4c5b-8ef0-84508a701881_540x.png",
    ],
    description:
      "Hario'nun ikonik cam tasarımı; hem çay hem de pour-over kahve için kullanılabilen çok yönlü bir demleme ekipmanıdır. Isıya dayanıklı borosilikat cam ve paslanmaz çelik filtresiyle uzun yıllar kullanım sunar.",
    details: [
      "Malzeme: Borosilikat cam + paslanmaz çelik",
      "Kapasite: 450 ml",
      "Kullanım: Çay / Kahve",
      "Temizlik: Bulaşık makinesinde yıkanabilir",
    ],
    weight: "450ml",
    origin: "Japonya",
  },
  "moccamaster-jug": {
    name: "Moccamaster Thermal Jug",
    category: "Ekipman",
    price: "450",
    image: "/upload/Moccamaster_Thermal-Jug_540x-1-440x440.png",
    gallery: [
      "/upload/Moccamaster_Thermal-Jug_540x-1-440x440.png",
      "/upload/Moccamaster_Thermal-Jug_540x-1.png",
    ],
    description:
      "Moccamaster'ın premium termal şişesi; demlenen kahvenin sıcaklığını 100 dakikaya kadar korur. Şık tasarımı ve dayanıklı yapısıyla hem ofis hem ev kullanımına uygundur.",
    details: [
      "Kapasite: 1.25 litre",
      "Sıcaklık koruma: 100 dakika",
      "Malzeme: Çift cidarlı paslanmaz çelik",
      "Uyumluluk: Tüm Moccamaster modelleri",
    ],
    weight: "1.25L",
    origin: "Hollanda",
  },
  "drip-kettle": {
    name: "Drip Kettle",
    category: "Ekipman",
    price: "280",
    image: "/upload/drip-kettle-440x440.png",
    gallery: ["/upload/drip-kettle-440x440.png"],
    description:
      "İnce boru ağzıyla mükemmel kontrollü su akışı sağlayan bu kettle, pour-over ve chemex demleme yöntemleri için vazgeçilmezdir. Mat siyah kaplaması ve ergonomik tutamacıyla hem şık hem fonksiyoneldir.",
    details: [
      "Kapasite: 600 ml",
      "Malzeme: Paslanmaz çelik",
      "Ağız: İnce boru (gooseneck)",
      "Isıtıcı uyumlu: Evet",
    ],
    weight: "600ml",
    origin: "Japonya",
  },
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products[id];

  // Ürün bulunamazsa anlamlı bir fallback
  if (!product) {
    return (
      <>
        <div id="perspective">
          <Navbar />
          <div id="wrapper" className="hasbg transparent">
            <div id="page-content-wrapper" className="no-title">
              <div className="inner" style={{ padding: "200px 40px", textAlign: "center" }}>
                <h2 style={{ color: "#fff", fontFamily: "Oswald, sans-serif", fontSize: "32px" }}>
                  Ürün bulunamadı.
                </h2>
                <a
                  href="/products"
                  style={{
                    display: "inline-block",
                    marginTop: "24px",
                    color: "#c8a97e",
                    textDecoration: "underline",
                    fontSize: "16px",
                  }}
                >
                  ← Tüm Ürünlere Dön
                </a>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }

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
                    data-elementor-id={`product-${id}`}
                    className="elementor custom-css-style"
                    data-elementor-settings="[]"
                  >
                    <div className="elementor-inner">
                      <div className="elementor-section-wrap">

                        {/* ── Hero / Breadcrumb Section ── */}
                        <section
                          className="elementor-section elementor-top-section elementor-element elementor-element-pd-hero elementor-section-stretched elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
                          data-id="pd-hero"
                          data-element_type="section"
                          data-settings='{"stretch_section":"section-stretched","background_background":"classic","craftcoffee_ext_is_background_parallax":"false"}'
                          style={{
                            backgroundImage: "url(/upload/aerial-view-of-various-coffee-P7X5ZDW-700x466.jpg)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        >
                          <div className="elementor-background-overlay"></div>
                          <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-row">
                              <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-pd-hero-col"
                                data-id="pd-hero-col"
                                data-element_type="column"
                                data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                              >
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div
                                      className="elementor-element elementor-widget elementor-widget-heading"
                                      data-element_type="widget"
                                      data-settings='{"craftcoffee_ext_is_smoove":"true","craftcoffee_ext_smoove_disable":"769","craftcoffee_ext_smoove_duration":1000,"craftcoffee_ext_smoove_scalex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_scaley":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatey":{"unit":"px","size":100,"sizes":[]},"craftcoffee_ext_is_fadeout_animation":"true","craftcoffee_ext_is_fadeout_animation_velocity":{"unit":"px","size":0.3,"sizes":[]},"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_smoove_rotatex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_rotatey":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_rotatez":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatez":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_skewx":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_skewy":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_perspective":{"unit":"px","size":1000,"sizes":[]},"craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation_direction":"up"}'
                                      data-widget_type="heading.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <h3 className="elementor-heading-title elementor-size-default">{product.category}</h3>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-element elementor-widget elementor-widget-heading"
                                      data-element_type="widget"
                                      data-settings='{"craftcoffee_ext_is_smoove":"true","craftcoffee_ext_smoove_disable":"769","craftcoffee_ext_smoove_duration":1000,"craftcoffee_ext_smoove_scalex":{"unit":"px","size":2,"sizes":[]},"craftcoffee_ext_smoove_scaley":{"unit":"px","size":2,"sizes":[]},"craftcoffee_ext_is_fadeout_animation":"true","craftcoffee_ext_is_fadeout_animation_direction":"down","craftcoffee_ext_is_fadeout_animation_velocity":{"unit":"px","size":0.5,"sizes":[]},"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_smoove_rotatex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_rotatey":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_rotatez":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatey":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatez":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_skewx":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_skewy":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_perspective":{"unit":"px","size":1000,"sizes":[]},"craftcoffee_ext_is_infinite":"false"}'
                                      data-widget_type="heading.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <h1 className="elementor-heading-title elementor-size-default">{product.name}</h1>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>

                        {/* ── Product Detail Content ── */}
                        <section
                          className="elementor-section elementor-top-section elementor-element elementor-element-pd-content elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                          data-id="pd-content"
                          data-element_type="section"
                          data-settings='{"craftcoffee_ext_is_background_parallax":"false"}'
                          style={{ padding: "80px 0" }}
                        >
                          <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-row">

                              {/* Left: Product Image */}
                              <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-pd-img-col"
                                data-id="pd-img-col"
                                data-element_type="column"
                                data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                              >
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div
                                      className="elementor-element elementor-widget elementor-widget-image"
                                      data-element_type="widget"
                                      data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                                      data-widget_type="image.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="elementor-image">
                                          <div className="woocommerce">
                                            <div
                                              className="woocommerce-product-gallery"
                                              style={{
                                                background: "#1a1a1a",
                                                borderRadius: "4px",
                                                overflow: "hidden",
                                                textAlign: "center",
                                                padding: "40px",
                                              }}
                                            >
                                              <img
                                                src={product.image}
                                                alt={product.name}
                                                style={{
                                                  maxWidth: "100%",
                                                  height: "auto",
                                                  maxHeight: "480px",
                                                  objectFit: "contain",
                                                  display: "block",
                                                  margin: "0 auto",
                                                }}
                                              />
                                              {/* Thumbnail gallery */}
                                              {product.gallery.length > 1 && (
                                                <div
                                                  style={{
                                                    display: "flex",
                                                    gap: "12px",
                                                    justifyContent: "center",
                                                    marginTop: "20px",
                                                  }}
                                                >
                                                  {product.gallery.map((img, i) => (
                                                    <img
                                                      key={i}
                                                      src={img}
                                                      alt={`${product.name} ${i + 1}`}
                                                      style={{
                                                        width: "70px",
                                                        height: "70px",
                                                        objectFit: "cover",
                                                        borderRadius: "2px",
                                                        border: i === 0 ? "2px solid #c8a97e" : "2px solid #333",
                                                        cursor: "pointer",
                                                        opacity: i === 0 ? 1 : 0.6,
                                                      }}
                                                    />
                                                  ))}
                                                </div>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Right: Product Info */}
                              <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-pd-info-col"
                                data-id="pd-info-col"
                                data-element_type="column"
                                data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                              >
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div
                                      className="elementor-element elementor-widget elementor-widget-text-editor"
                                      data-element_type="widget"
                                      data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                                      data-widget_type="text-editor.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div
                                          className="woocommerce"
                                          style={{ paddingLeft: "40px" }}
                                        >
                                          {/* Category */}
                                          <p
                                            className="posted_in"
                                            style={{
                                              fontSize: "12px",
                                              letterSpacing: "3px",
                                              textTransform: "uppercase",
                                              color: "#c8a97e",
                                              marginBottom: "16px",
                                            }}
                                          >
                                            {product.category}
                                          </p>

                                          {/* Title */}
                                          <h1
                                            className="product_title entry-title"
                                            style={{
                                              fontFamily: "Oswald, sans-serif",
                                              fontSize: "42px",
                                              fontWeight: 500,
                                              color: "#fff",
                                              marginBottom: "20px",
                                              lineHeight: 1.1,
                                            }}
                                          >
                                            {product.name}
                                          </h1>

                                          {/* Price */}
                                          <p
                                            className="price"
                                            style={{ marginBottom: "28px" }}
                                          >
                                            <span className="woocommerce-Price-amount amount">
                                              <bdi>
                                                <span className="woocommerce-Price-currencySymbol">₺</span>
                                                {product.price}
                                              </bdi>
                                            </span>
                                            {product.originalPrice && (
                                              <del style={{ marginLeft: "12px", opacity: 0.5 }}>
                                                <span className="woocommerce-Price-amount amount">
                                                  <bdi>
                                                    <span className="woocommerce-Price-currencySymbol">₺</span>
                                                    {product.originalPrice}
                                                  </bdi>
                                                </span>
                                              </del>
                                            )}
                                          </p>

                                          {/* Description */}
                                          <div
                                            className="woocommerce-product-details__short-description"
                                            style={{ marginBottom: "36px" }}
                                          >
                                            <p style={{ lineHeight: 1.8, color: "rgba(255,255,255,0.75)" }}>
                                              {product.description}
                                            </p>
                                          </div>

                                          {/* Attributes */}
                                          <div style={{ marginBottom: "36px" }}>
                                            {product.weight && (
                                              <div
                                                style={{
                                                  display: "flex",
                                                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                                                  padding: "10px 0",
                                                  color: "rgba(255,255,255,0.6)",
                                                  fontSize: "14px",
                                                }}
                                              >
                                                <span style={{ width: "140px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1px", fontSize: "11px" }}>Miktar</span>
                                                <span style={{ color: "#fff" }}>{product.weight}</span>
                                              </div>
                                            )}
                                            {product.origin && (
                                              <div
                                                style={{
                                                  display: "flex",
                                                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                                                  padding: "10px 0",
                                                  color: "rgba(255,255,255,0.6)",
                                                  fontSize: "14px",
                                                }}
                                              >
                                                <span style={{ width: "140px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1px", fontSize: "11px" }}>Menşei</span>
                                                <span style={{ color: "#fff" }}>{product.origin}</span>
                                              </div>
                                            )}
                                            {product.roast && (
                                              <div
                                                style={{
                                                  display: "flex",
                                                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                                                  padding: "10px 0",
                                                  color: "rgba(255,255,255,0.6)",
                                                  fontSize: "14px",
                                                }}
                                              >
                                                <span style={{ width: "140px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1px", fontSize: "11px" }}>Kavrum</span>
                                                <span style={{ color: "#fff" }}>{product.roast}</span>
                                              </div>
                                            )}
                                          </div>

                                          {/* CTA Buttons */}
                                          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
                                            <a
                                              href="/contact"
                                              className="elementor-button-link elementor-button elementor-size-sm"
                                              role="button"
                                              style={{ display: "inline-block" }}
                                            >
                                              <span className="elementor-button-content-wrapper">
                                                <span className="elementor-button-text">Sipariş Ver</span>
                                              </span>
                                            </a>
                                            <a
                                              href="/products"
                                              style={{
                                                display: "inline-block",
                                                color: "rgba(255,255,255,0.5)",
                                                fontSize: "13px",
                                                letterSpacing: "1px",
                                                textDecoration: "none",
                                                textTransform: "uppercase",
                                                transition: "color 0.3s",
                                              }}
                                            >
                                              ← Tüm Ürünler
                                            </a>
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

                        {/* ── Product Details / Tabs Section ── */}
                        <section
                          className="elementor-section elementor-top-section elementor-element elementor-element-pd-tabs elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                          data-id="pd-tabs"
                          data-element_type="section"
                          data-settings='{"craftcoffee_ext_is_background_parallax":"false"}'
                          style={{
                            padding: "60px 0 80px",
                            borderTop: "1px solid rgba(255,255,255,0.08)",
                          }}
                        >
                          <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-row">
                              <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-pd-tabs-col"
                                data-id="pd-tabs-col"
                                data-element_type="column"
                                data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                              >
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div
                                      className="elementor-element elementor-widget elementor-widget-text-editor"
                                      data-element_type="widget"
                                      data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                                      data-widget_type="text-editor.default"
                                    >
                                      <div className="elementor-widget-container">
                                        <div className="woocommerce-tabs">
                                          <h2
                                            style={{
                                              fontFamily: "Oswald, sans-serif",
                                              fontSize: "22px",
                                              fontWeight: 500,
                                              color: "#fff",
                                              marginBottom: "32px",
                                              letterSpacing: "2px",
                                              textTransform: "uppercase",
                                            }}
                                          >
                                            Ürün Detayları
                                          </h2>
                                          <ul
                                            style={{
                                              listStyle: "none",
                                              padding: 0,
                                              margin: 0,
                                              display: "grid",
                                              gridTemplateColumns: "1fr 1fr",
                                              gap: "16px",
                                            }}
                                          >
                                            {product.details.map((detail, i) => (
                                              <li
                                                key={i}
                                                style={{
                                                  padding: "16px 20px",
                                                  background: "rgba(255,255,255,0.04)",
                                                  borderLeft: "3px solid #c8a97e",
                                                  color: "rgba(255,255,255,0.8)",
                                                  fontSize: "14px",
                                                  lineHeight: 1.6,
                                                }}
                                              >
                                                {detail}
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
