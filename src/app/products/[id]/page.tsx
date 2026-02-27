import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products: Record<string, {
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  image: string;
  gallery: string[];
  description: string;
  longDescription: string;
  details: string[];
  weight?: string;
  origin?: string;
  roast?: string;
  brewTips?: string[];
  whyLove?: string[];
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
      "Etiyopya'nın Yirgacheffe bölgesinden özenle toplanmış bu kahve, çiçeksi bergamot ve taze limon aromaları ile benzersiz bir içim deneyimi sunar.",
    longDescription:
      "Yirgacheffe, dünya kahve haritasında özel bir yere sahiptir. 1800-2200 metre yükseklikte, volkanik topraklarda yetişen bu arabica çekirdekleri, doğanın en saf hediyelerinden biridir. Yıkanmış işlem yöntemiyle üretilen bu kahve, parlak asidite yapısı ve uzun bitişiyle filter kahve tutkunlarının vazgeçilmezi haline gelmiştir. Her demleme seansında farklı nüanslar keşfedeceksiniz.",
    details: [
      "Menşei: Etiyopya, Yirgacheffe",
      "Rakım: 1800–2200 m",
      "İşlem: Yıkanmış (Washed)",
      "Tasting: Bergamot, Limon, Çiçek",
      "Çekim: Orta–İnce",
      "Demleme: Filter, Pour-over, Chemex",
    ],
    weight: "250g",
    origin: "Etiyopya",
    roast: "Açık Kavrum",
    brewTips: [
      "V60 veya Chemex ile 93°C sıcaklıkta demlemeniz çiçeksi notaları ön plana çıkarır.",
      "Öğütme: orta-ince; kahve/su oranı 1:15 önerilir.",
      "Bloom süresi: 30 saniye — bu süre aromaları açığa çıkarmak için kritiktir.",
    ],
    whyLove: [
      "Dünyanın en tanınan single origin kahvelerinden biri",
      "Temiz, parlak ve kompleks bir tat profili",
      "Sütlü içeceklerde bile belirgin çiçeksi aroma",
    ],
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
      "El Salvador'ın volcanic topraklarında yetişen bu kahve, karamel tatlılığı ve fındık notalarının mükemmel dengesiyle her gün içilebilecek bir fincan vaat eder.",
    longDescription:
      "El Salvador, Central America'nın en kaliteli kahve üreticilerinden biri olarak öne çıkmaktadır. Honey process (bal işlem) yöntemiyle üretilen bu lot, meyveli kabuğun çekirdeğe olan tatlılığını aktarır. Yumuşak asidite ve dolgun gövdesiyle sabahları yanınızda olmak için biçilmiş kaftandır. Sütle de sade de içilebilen çok yönlü bir profil sunar.",
    details: [
      "Menşei: El Salvador, Santa Ana",
      "Rakım: 1200–1600 m",
      "İşlem: Honey Process",
      "Tasting: Karamel, Fındık, Elma şekeri",
      "Çekim: Orta",
      "Demleme: Filter, Espresso, French Press",
    ],
    weight: "250g",
    origin: "El Salvador",
    roast: "Orta Kavrum",
    brewTips: [
      "French Press ile 4 dakika demleme fındık notalarını güçlendirir.",
      "Espresso olarak 92°C, 25 saniye — karamel tatlılığı öne çıkar.",
      "Soğuk demleme (cold brew) için 12 saat bekletilmesi önerilir.",
    ],
    whyLove: [
      "Her gün içilebilecek dengeli ve pürüzsüz yapı",
      "Sütlü içecekler için mükemmel uyum",
      "Karamel ve fındık notalarıyla rahatlatıcı içim deneyimi",
    ],
  },
  "equator-coffee": {
    name: "Equator Blend",
    category: "Blend",
    price: "160",
    image: "/upload/equator-coffee-440x440.png",
    gallery: ["/upload/equator-coffee-440x440.png"],
    description:
      "Ekvator bölgesindeki farklı çiftliklerden seçilmiş çekirdeklerin özenli harmanıyla oluşturulan bu blend, tropikal meyve aromaları ve tatlı bitişiyle sizi uzak ülkelere götürür.",
    longDescription:
      "Equator Blend, iki büyük kahve üreticisi olan Guatemala ve Kolombiya'nın en iyi çiftliklerinden gelen çekirdeklerin hassas harmanıdır. Guatemala'nın derin gövdesi, Kolombiya'nın parlak meyveli asidite yapısıyla birleşerek karmaşık ama dengeli bir profil oluşturur. Her partide aynı kalite deneyimini sağlamak için kavrumlar özenle test edilmektedir.",
    details: [
      "Menşei: Guatemala & Kolombiya",
      "Rakım: 1400–1800 m",
      "İşlem: Yıkanmış (Washed)",
      "Tasting: Mango, Ananas, Şeker kamışı",
      "Çekim: Orta",
      "Demleme: Filter, Pour-over, AeroPress",
    ],
    weight: "250g",
    origin: "Guatemala & Kolombiya",
    roast: "Açık–Orta Kavrum",
    brewTips: [
      "AeroPress ile kısa demleme meyve notalarını parlak tutar.",
      "93°C sıcaklık ve 1:14 oranı için dengeli bir içim önerilir.",
      "Soğuk demleme: 8 saat buzlu su ile tropikal meyve aromaları patlar.",
    ],
    whyLove: [
      "İki ülkenin en iyisini tek kup'ta buluşturan blend",
      "Tropikal ve ferahlatıcı tat profili",
      "Hem filter hem espresso yöntemlerine uygun çok yönlülük",
    ],
  },
  "milk-chocolate-blend": {
    name: "Milk Chocolate Blend",
    category: "Blend",
    price: "145",
    image: "/upload/milk-chocolate-blend-440x440.png",
    gallery: ["/upload/milk-chocolate-blend-440x440.png"],
    description:
      "Sütlü çikolata ve karamel notaları ön planda olan bu blend, kadifemsi yapısıyla sütle mükemmel uyum sağlar. Latte ve cappuccino için ideal bir espresso tabanı oluşturur.",
    longDescription:
      "Milk Chocolate Blend, sütlü kahve içeceklerini sevenler için tasarlanmış bir karışımdır. Brezilya'nın doğal işlem yöntemiyle üretilen pürüzsüz çekirdekleri, Honduras'ın dengeli asidite yapısıyla buluştuğunda ortaya çıkan sonuç; her yudumda hissedilen sütlü çikolata ve karamel sarmasıdır. Flat white, latte ve cappuccino'nun vazgeçilmezi olan bu blend, eve barista deneyimi taşır.",
    details: [
      "Menşei: Brezilya & Honduras",
      "Rakım: 900–1400 m",
      "İşlem: Natural & Honey",
      "Tasting: Sütlü çikolata, Karamel, Fındık ezmesi",
      "Çekim: Orta–Kalın",
      "Demleme: Espresso, Moka Pot, French Press",
    ],
    weight: "250g",
    origin: "Brezilya & Honduras",
    roast: "Orta–Koyu Kavrum",
    brewTips: [
      "Espresso: 91°C, 27–30 saniye, kadifemsi krem tabakası oluşur.",
      "Moka Pot'ta düşük ateşte yavaş demleme en iyi sonucu verir.",
      "Flat white için ideal: sütle muhteşem bir harmoni sağlar.",
    ],
    whyLove: [
      "Sütlü içecekler için özel olarak tasarlanmış denge",
      "Çikolata ve karamel notalarıyla rahatlatıcı bir deneyim",
      "Düşük asidite — hassas midelere uygun",
    ],
  },
  "darkhorse-coffee": {
    name: "Dark Horse Coffee",
    category: "Espresso",
    price: "165",
    image: "/upload/darkhorse-coffee-440x440.png",
    gallery: ["/upload/darkhorse-coffee-440x440.png"],
    description:
      "İtalyan espresso geleneğinden ilham alan bu koyu kavrum, güçlü gövdesi ve zengin krema katmanıyla gerçek bir espresso tutkununa hitap eder.",
    longDescription:
      "Dark Horse Coffee, adını hak eden bir karanlık at: ilk bakışta sert görünen bu koyu kavrum, içildiğinde şaşırtıcı derinlik ve kompleksite sunar. Etiyopya'nın meyveli doğal lots'u ile Brezilya'nın yoğun gövdeli çekirdeklerinin harmanı olan bu blend, acı çikolata, kuru incir ve derin bir dumanlı bitiş sunar. Doble espresso veya americano olarak içildiğinde en iyi formunu bulur.",
    details: [
      "Menşei: Etiyopya & Brezilya",
      "Rakım: 1000–1800 m",
      "İşlem: Natural & Washed harman",
      "Tasting: Acı çikolata, İncir, Derin tütün",
      "Çekim: İnce (espresso)",
      "Demleme: Espresso, Moka Pot",
    ],
    weight: "250g",
    origin: "Etiyopya & Brezilya",
    roast: "Koyu Kavrum",
    brewTips: [
      "Espresso: 90°C, 25–28 saniye — güçlü ve yoğun krem tabakası.",
      "Ristretto olarak deneyin: yoğun şeker ve çikolata notaları patlar.",
      "Buzlu americano için mükemmel bir temel oluşturur.",
    ],
    whyLove: [
      "Güçlü espresso severler için biçilmiş kaftan",
      "Kompleks ve derin bir tat deneyimi",
      "Siyah kahve kültürünü seven herkesin rafında olması gereken blend",
    ],
  },
  "raimutin-natural": {
    name: "Raimutin Natural",
    category: "Natural Process",
    price: "185",
    image: "/upload/raimutin-natural-440x440.png",
    gallery: ["/upload/raimutin-natural-440x440.png"],
    description:
      "Doğal işlem yöntemiyle güneşte kurutulan bu spesiyal lot, olgunlaşmış meyvelerin yoğun ve tatlı aromalarını özümsemiştir.",
    longDescription:
      "Raimutin Natural, Etiyopya'nın Guji bölgesinde 2000-2200 metre rakımda yetişen nadir bir spesiyal lot'tur. Çekirdekler hasat edildikten sonra kabuğuyla birlikte güneşte 4-6 hafta kurutulur; bu süreçte meyvenin tüm şeker ve aromaları çekirdeğe nüfuz eder. Sonuç olarak ortaya çıkan kahve; çilek reçeli, kuru üzüm ve taze çiçek balının bir araya geldiği olağanüstü bir profil sunar. Spesiyal kahve dünyasına giriş için ideal bir başlangıç noktası.",
    details: [
      "Menşei: Etiyopya, Guji",
      "Rakım: 2000–2200 m",
      "İşlem: Natural (güneşte 4–6 hafta kurutma)",
      "Tasting: Çilek, Kuru üzüm, Çiçek balı",
      "Çekim: Orta",
      "Demleme: Filter, Pour-over, AeroPress",
    ],
    weight: "250g",
    origin: "Etiyopya, Guji",
    roast: "Açık Kavrum",
    brewTips: [
      "V60'ta 30 sn bloom ile başlayın; meyveli aromalar açığa çıkar.",
      "94°C sıcaklık ve 1:16 oranı çilek notalarını öne çıkarır.",
      "Soğuk demleme: 10 saat — yaz aylarında nefes kesen bir içecek.",
    ],
    whyLove: [
      "Natural process'in en arı örneği — olağanüstü meyve yoğunluğu",
      "Guji bölgesinin nadir ve izlenebilir bir lotu",
      "Şeker ilavesine gerek duyurmayan doğal tatlılık",
    ],
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
      "Hario'nun ikonik cam tasarımı; hem çay hem de pour-over kahve için kullanılabilen çok yönlü bir demleme ekipmanıdır.",
    longDescription:
      "Hario, 1921'den bu yana Japonya'dan dünyaya kaliteli cam ekipman ihraç etmektedir. Tea Press, bu köklü markanın hem çay hem kahve dünyasına kattığı zarif bir üründür. Isıya dayanıklı borosilikat camı, çay yapraklarını veya kahve telvesini kolayca süzen paslanmaz çelik filtresiyle birleşince ortaya hem estetik hem de işlevsel bir ürün çıkar. Masanızda sergilemeye değer bir tasarım parçası.",
    details: [
      "Malzeme: Borosilikat cam + paslanmaz çelik",
      "Kapasite: 450 ml",
      "Kullanım: Çay / Kahve / Bitki çayı",
      "Isı dayanımı: 120°C'ye kadar",
      "Temizlik: Bulaşık makinesinde yıkanabilir",
      "Menşei: Japonya",
    ],
    weight: "450ml",
    origin: "Japonya",
    brewTips: [
      "Kahve için: orta öğütme, 93°C su, 3–4 dakika demleme.",
      "Çay için: yeşil çayı 70°C, siyah çayı 95°C ile demlemenizi öneririz.",
      "Filtresi kolayca çıkarıldığı için birden fazla kullanıma hazırdır.",
    ],
    whyLove: [
      "Tek ekipmanla hem çay hem kahve deneyimi",
      "Japon mühendisliğinin estetik ve işlevselliği",
      "Misafirlerinize etkileyici bir sunum için ideal",
    ],
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
      "Moccamaster'ın premium termal şişesi; demlenen kahvenin sıcaklığını 100 dakikaya kadar korur.",
    longDescription:
      "Hollanda'da üretilen Moccamaster ekipmanları, 1969'dan bu yana kahve dünyasının simgesi haline gelmiştir. Bu termal şişe, Moccamaster'ın mühendislik anlayışını en saf haliyle yansıtır: çift cidarlı paslanmaz çelik yapısı sıcaklığı 100 dakika boyunca korurken, geniş ağzı kolay doldurma ve temizleme imkânı sunar. 1.25 litrelik kapasitesiyle 8–10 kişilik ofis ortamları veya büyük kahve demleme seansları için biçilmiş kaftandır.",
    details: [
      "Kapasite: 1.25 litre (8–10 porsiyon)",
      "Sıcaklık koruma: 100 dakika",
      "Malzeme: Çift cidarlı paslanmaz çelik",
      "Uyumluluk: Tüm Moccamaster modelleri",
      "Temizlik: El yıkama önerilir",
      "Menşei: Hollanda",
    ],
    weight: "1.25L",
    origin: "Hollanda",
    brewTips: [
      "Kullanmadan önce şişeyi sıcak suyla ısıtın — sıcaklık koruması artar.",
      "Moccamaster KBGT veya KB modelleriyle mükemmel uyum sağlar.",
      "İçerisine buz ve soğuk kahve koyarak cold brew servis kabı olarak kullanabilirsiniz.",
    ],
    whyLove: [
      "Hollanda mühendisliğinin dayanıklılığı — ömür boyu garanti",
      "Kahveyi taze tutan 100 dakika sıcaklık koruması",
      "Hem evde hem ofiste kullanıma uygun büyük kapasite",
    ],
  },
  "drip-kettle": {
    name: "Drip Kettle",
    category: "Ekipman",
    price: "280",
    image: "/upload/drip-kettle-440x440.png",
    gallery: ["/upload/drip-kettle-440x440.png"],
    description:
      "İnce boru ağzıyla mükemmel kontrollü su akışı sağlayan bu kettle, pour-over ve chemex demleme yöntemleri için vazgeçilmezdir.",
    longDescription:
      "Pour-over kahvenin sırrı, su akışındaki kontroldür. Drip Kettle'ın gooseneck (kaz boynu) ağzı, suyu tam istediğiniz noktaya, istediğiniz hızda dökmenizi sağlar. Bu kontrol; bloom sürecini yönetmenize, kahve katmanını eşit ıslatmanıza ve dolayısıyla her demleme seansında tutarlı sonuçlar almanıza olanak tanır. Mat siyah kaplaması ve ergonomik tutamacıyla mutfak tezgahınızın en şık aksesuarı olacak.",
    details: [
      "Kapasite: 600 ml",
      "Malzeme: Paslanmaz çelik (mat siyah kaplama)",
      "Ağız tipi: Gooseneck (ince boru)",
      "Isıtıcı uyumlu: Evet (indüksiyon dahil)",
      "Ergonomik: Dengeli tutamaç",
      "Menşei: Japonya",
    ],
    weight: "600ml",
    origin: "Japonya",
    brewTips: [
      "Bloom için: önce kahvenin iki katı su dökün, 30 saniye bekleyin.",
      "Dairesel hareketlerle yavaşça dökün — eşit ekstraksiyon için kritik.",
      "Su sıcaklığı: 90–96°C arası (açık kavrum için yüksek, koyu için düşük).",
    ],
    whyLove: [
      "Pour-over kalitesini bir üst seviyeye taşıyan hassas kontrol",
      "Japon tasarımının sadeliği ve kalıcı dayanıklılığı",
      "Her demleme seansını tutarlı ve ritüele dönüştürür",
    ],
  },
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products[id];

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
                  style={{ display: "inline-block", marginTop: "24px", color: "#c8a97e", textDecoration: "underline", fontSize: "16px" }}
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

                        {/* ── Hero Section — products sayfasıyla aynı yapı ── */}
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
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-pd-hero-col"
                                data-id="pd-hero-col"
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
                                        <h1 className="elementor-heading-title elementor-size-default">{product.name}</h1>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>

                        {/* ── Dekoratif ince şerit ── */}
                        <section
                          className="elementor-section elementor-top-section elementor-element elementor-element-979fb6c elementor-section-stretched elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
                          data-id="979fb6c"
                          data-element_type="section"
                          data-settings='{"stretch_section":"section-stretched","background_background":"classic","craftcoffee_ext_is_background_parallax":"false"}'
                        >
                          <img src="/upload/bg-header-overlay-lg.png" alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, pointerEvents: "none" }} />
                          <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-row">
                              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-pd-sep-col" data-element_type="column">
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

                        {/* ── Ürün Detay İçerik ── */}
                        <section
                          className="elementor-section elementor-top-section elementor-element elementor-element-pd-content elementor-section-boxed"
                          data-id="pd-content"
                          data-element_type="section"
                          style={{ padding: "80px 0", background: "#fff" }}
                        >
                          <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-row">

                              {/* Sol: Ürün Görseli */}
                              <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element"
                                data-element_type="column"
                              >
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-widget elementor-widget-image" data-element_type="widget">
                                      <div className="elementor-widget-container">
                                        <div className="elementor-image">
                                          <div
                                            className="woocommerce-product-gallery"
                                            style={{
                                              background: "#f4f0eb",
                                              borderRadius: "4px",
                                              overflow: "hidden",
                                              textAlign: "center",
                                              padding: "48px",
                                            }}
                                          >
                                            <img
                                              src={product.image}
                                              alt={product.name}
                                              style={{
                                                maxWidth: "100%",
                                                height: "auto",
                                                maxHeight: "460px",
                                                objectFit: "contain",
                                                display: "block",
                                                margin: "0 auto",
                                              }}
                                            />
                                            {product.gallery.length > 1 && (
                                              <div
                                                style={{
                                                  display: "flex",
                                                  gap: "12px",
                                                  justifyContent: "center",
                                                  marginTop: "24px",
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
                                                      border: i === 0 ? "2px solid #c8a97e" : "2px solid #ddd",
                                                      cursor: "pointer",
                                                      opacity: i === 0 ? 1 : 0.65,
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

                              {/* Sağ: Ürün Bilgisi */}
                              <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element"
                                data-element_type="column"
                              >
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap">
                                    <div className="elementor-element elementor-widget elementor-widget-text-editor" data-element_type="widget">
                                      <div className="elementor-widget-container">
                                        <div style={{ paddingLeft: "40px" }}>

                                          {/* Kategori */}
                                          <p
                                            style={{
                                              fontSize: "11px",
                                              letterSpacing: "3px",
                                              textTransform: "uppercase",
                                              color: "#c8a97e",
                                              marginBottom: "12px",
                                              fontWeight: 600,
                                            }}
                                          >
                                            {product.category}
                                          </p>

                                          {/* Başlık */}
                                          <h1
                                            className="product_title entry-title"
                                            style={{
                                              fontFamily: "Oswald, sans-serif",
                                              fontSize: "40px",
                                              fontWeight: 500,
                                              color: "#1a1a1a",
                                              marginBottom: "16px",
                                              lineHeight: 1.1,
                                            }}
                                          >
                                            {product.name}
                                          </h1>

                                          {/* Fiyat */}
                                          <p
                                            style={{
                                              fontSize: "28px",
                                              fontWeight: 600,
                                              color: "#1a1a1a",
                                              marginBottom: "24px",
                                            }}
                                          >
                                            <span>₺{product.price}</span>
                                            {product.originalPrice && (
                                              <del style={{ marginLeft: "12px", fontSize: "18px", color: "#999" }}>
                                                ₺{product.originalPrice}
                                              </del>
                                            )}
                                          </p>

                                          {/* Açıklama */}
                                          <p
                                            style={{
                                              lineHeight: 1.8,
                                              color: "#444",
                                              fontSize: "15px",
                                              marginBottom: "32px",
                                              borderBottom: "1px solid #eee",
                                              paddingBottom: "28px",
                                            }}
                                          >
                                            {product.description}
                                          </p>

                                          {/* Nitelikler tablosu */}
                                          <div style={{ marginBottom: "32px" }}>
                                            {product.weight && (
                                              <div style={{ display: "flex", borderBottom: "1px solid #eee", padding: "10px 0" }}>
                                                <span style={{ width: "140px", color: "#999", textTransform: "uppercase", letterSpacing: "1px", fontSize: "11px", fontWeight: 600 }}>Miktar</span>
                                                <span style={{ color: "#1a1a1a", fontSize: "14px" }}>{product.weight}</span>
                                              </div>
                                            )}
                                            {product.origin && (
                                              <div style={{ display: "flex", borderBottom: "1px solid #eee", padding: "10px 0" }}>
                                                <span style={{ width: "140px", color: "#999", textTransform: "uppercase", letterSpacing: "1px", fontSize: "11px", fontWeight: 600 }}>Menşei</span>
                                                <span style={{ color: "#1a1a1a", fontSize: "14px" }}>{product.origin}</span>
                                              </div>
                                            )}
                                            {product.roast && (
                                              <div style={{ display: "flex", borderBottom: "1px solid #eee", padding: "10px 0" }}>
                                                <span style={{ width: "140px", color: "#999", textTransform: "uppercase", letterSpacing: "1px", fontSize: "11px", fontWeight: 600 }}>Kavrum</span>
                                                <span style={{ color: "#1a1a1a", fontSize: "14px" }}>{product.roast}</span>
                                              </div>
                                            )}
                                          </div>

                                          {/* CTA Butonları */}
                                          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
                                            <a
                                              href="/contact"
                                              className="elementor-button-link elementor-button elementor-size-sm"
                                              role="button"
                                            >
                                              <span className="elementor-button-content-wrapper">
                                                <span className="elementor-button-text">Sipariş Ver</span>
                                              </span>
                                            </a>
                                            <a
                                              href="/products"
                                              style={{
                                                display: "inline-block",
                                                color: "#888",
                                                fontSize: "13px",
                                                letterSpacing: "1px",
                                                textDecoration: "none",
                                                textTransform: "uppercase",
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

                        {/* ── Uzun Açıklama + Detaylar ── */}
                        <section
                          style={{ padding: "72px 0", background: "#faf8f5", borderTop: "1px solid #ede8e0" }}
                        >
                          <div className="elementor-container elementor-column-gap-default">
                            <div className="elementor-row">

                              {/* Sol: Hikaye */}
                              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element" data-element_type="column">
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap" style={{ paddingRight: "40px" }}>
                                    <p
                                      style={{
                                        fontSize: "11px",
                                        letterSpacing: "3px",
                                        textTransform: "uppercase",
                                        color: "#c8a97e",
                                        marginBottom: "16px",
                                        fontWeight: 600,
                                      }}
                                    >
                                      Ürün Hakkında
                                    </p>
                                    <h2
                                      style={{
                                        fontFamily: "Oswald, sans-serif",
                                        fontSize: "28px",
                                        fontWeight: 500,
                                        color: "#1a1a1a",
                                        marginBottom: "20px",
                                        lineHeight: 1.2,
                                      }}
                                    >
                                      {product.name}
                                    </h2>
                                    <p style={{ lineHeight: 1.9, color: "#555", fontSize: "15px", marginBottom: "32px" }}>
                                      {product.longDescription}
                                    </p>

                                    {/* Neden seveceksiniz */}
                                    {product.whyLove && (
                                      <div>
                                        <p
                                          style={{
                                            fontSize: "11px",
                                            letterSpacing: "3px",
                                            textTransform: "uppercase",
                                            color: "#c8a97e",
                                            marginBottom: "16px",
                                            fontWeight: 600,
                                          }}
                                        >
                                          Neden Bu Ürünü Seveceksiniz?
                                        </p>
                                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                          {product.whyLove.map((item, i) => (
                                            <li
                                              key={i}
                                              style={{
                                                display: "flex",
                                                alignItems: "flex-start",
                                                gap: "12px",
                                                marginBottom: "12px",
                                                color: "#333",
                                                fontSize: "14px",
                                                lineHeight: 1.6,
                                              }}
                                            >
                                              <span style={{ color: "#c8a97e", fontWeight: 700, flexShrink: 0, marginTop: "2px" }}>✓</span>
                                              {item}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>

                              {/* Sağ: Teknik Detaylar + Demleme */}
                              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element" data-element_type="column">
                                <div className="elementor-column-wrap elementor-element-populated">
                                  <div className="elementor-widget-wrap" style={{ paddingLeft: "40px" }}>

                                    {/* Ürün Detayları */}
                                    <p
                                      style={{
                                        fontSize: "11px",
                                        letterSpacing: "3px",
                                        textTransform: "uppercase",
                                        color: "#c8a97e",
                                        marginBottom: "16px",
                                        fontWeight: 600,
                                      }}
                                    >
                                      Ürün Detayları
                                    </p>
                                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px" }}>
                                      {product.details.map((detail, i) => (
                                        <li
                                          key={i}
                                          style={{
                                            padding: "12px 16px",
                                            background: i % 2 === 0 ? "#fff" : "#f4f0eb",
                                            color: "#333",
                                            fontSize: "14px",
                                            lineHeight: 1.5,
                                            borderLeft: "3px solid #c8a97e",
                                          }}
                                        >
                                          {detail}
                                        </li>
                                      ))}
                                    </ul>

                                    {/* Demleme / Kullanım Önerileri */}
                                    {product.brewTips && (
                                      <div>
                                        <p
                                          style={{
                                            fontSize: "11px",
                                            letterSpacing: "3px",
                                            textTransform: "uppercase",
                                            color: "#c8a97e",
                                            marginBottom: "16px",
                                            fontWeight: 600,
                                          }}
                                        >
                                          {product.category === "Ekipman" ? "Kullanım İpuçları" : "Demleme Önerileri"}
                                        </p>
                                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                          {product.brewTips.map((tip, i) => (
                                            <li
                                              key={i}
                                              style={{
                                                display: "flex",
                                                gap: "14px",
                                                marginBottom: "16px",
                                                alignItems: "flex-start",
                                              }}
                                            >
                                              <span
                                                style={{
                                                  background: "#c8a97e",
                                                  color: "#fff",
                                                  width: "22px",
                                                  height: "22px",
                                                  borderRadius: "50%",
                                                  display: "flex",
                                                  alignItems: "center",
                                                  justifyContent: "center",
                                                  fontSize: "11px",
                                                  fontWeight: 700,
                                                  flexShrink: 0,
                                                  marginTop: "1px",
                                                }}
                                              >
                                                {i + 1}
                                              </span>
                                              <span style={{ color: "#444", fontSize: "14px", lineHeight: 1.7 }}>{tip}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}

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
