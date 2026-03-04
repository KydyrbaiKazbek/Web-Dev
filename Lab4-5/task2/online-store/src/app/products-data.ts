import { Category } from './category.model';
import { Product } from './product.model';

export const categories: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Headphones' },
  { id: 4, name: 'Tablets' },
  { id: 5, name: 'Favorite' },
  {id:6, name: 'Cart' },
];

export const productsList: Product[] = [
  // ── SMARTPHONES ──
  {
    id: 1, categoryId: 1, likes: 0,
    name: 'iPhone 15 Pro',
    description: 'Titanium design, A17 Pro chip, powerful camera system.',
    price: 549990, rating: 4.8,
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708',
    images: [
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-seryi-113134444/'
  },
  {
    id: 2, categoryId: 1, likes: 0,
    name: 'Samsung Galaxy S24 Ultra',
    description: 'AI-powered smartphone with 200MP camera and S-Pen.',
    price: 629990, rating: 4.9,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/kz/2401/gallery/kz-galaxy-s24-ultra-s928-sm-s928bzkgskz-thumb-539573052',
    images: [
      'https://images.samsung.com/is/image/samsung/p6pim/kz/2401/gallery/kz-galaxy-s24-ultra-s928-sm-s928bzkgskz-thumb-539573052',
      'https://images.samsung.com/is/image/samsung/p6pim/kz/2401/gallery/kz-galaxy-s24-ultra-s928-sm-s928bztgskz-thumb-539573057',
      'https://images.samsung.com/is/image/samsung/p6pim/kz/2401/gallery/kz-galaxy-s24-ultra-s928-sm-s928bzagskz-thumb-539573047'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-12-256gb-seryi-116043556/'
  },
  {
    id: 3, categoryId: 1, likes: 0,
    name: 'Google Pixel 8 Pro',
    description: 'The best Android experience with advanced Google AI.',
    price: 480000, rating: 4.7,
    image: 'https://lh3.googleusercontent.com/GnCJMhEbJp0Y8sSQJv5CpGl4K5Kp7Q_Z4l7k5lKpZ2Y0U5Q5Q5Q5Q5Q5Q5Q5Q5Q=w1000',
    images: [
      'https://store.google.com/us/category/phones?hl=en-US',
      'https://lh3.googleusercontent.com/GnCJMhEbJp0Y8sSQJv5CpGl4K5Kp7Q_Z4l7k5lKpZ2Y0U5Q5Q5Q5Q5Q5Q5Q5Q=w1000',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500'
    ],
    link: 'https://kaspi.kz/shop/p/google-pixel-8-pro-12-128gb-goluboi-113849988/'
  },
  {
    id: 4, categoryId: 1, likes: 0,
    name: 'Xiaomi 14 Ultra',
    description: 'Leica professional optical lens, Snapdragon 8 Gen 3.',
    price: 599990, rating: 4.6,
    image: 'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-14-ultra/pc/m1.png',
    images: [
      'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-14-ultra/pc/m1.png',
      'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-14-ultra/pc/m2.png',
      'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-14-ultra/pc/m3.png'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-14-ultra-16-512gb-chernyi-118221300/'
  },
  {
    id: 5, categoryId: 1, likes: 0,
    name: 'OnePlus 12',
    description: 'Smooth and fast performance with Hasselblad camera.',
    price: 410000, rating: 4.5,
    image: 'https://oasis.opstatics.com/content/dam/oasis/page/2023/global/products/12/specs/Green-pc.png',
    images: [
      'https://oasis.opstatics.com/content/dam/oasis/page/2023/global/products/12/specs/Green-pc.png',
      'https://oasis.opstatics.com/content/dam/oasis/page/2023/global/products/12/specs/Black-pc.png',
      'https://oasis.opstatics.com/content/dam/oasis/page/2023/global/products/12/gallery/gallery-2.png'
    ],
    link: 'https://kaspi.kz/shop/p/oneplus-12-16-512gb-zelenyi-116345453/'
  },

  // ── LAPTOPS ──
  {
    id: 6, categoryId: 2, likes: 0,
    name: 'MacBook Air M3',
    description: 'Supercharged by M3 chip, thin and light design.',
    price: 649990, rating: 4.9,
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665',
    images: [
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-starlight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-spacegray-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665'
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-3-8-gb-ssd-256-gb-macos-mryn3-117462057/'
  },
  {
    id: 7, categoryId: 2, likes: 0,
    name: 'ASUS ROG Zephyrus G14',
    description: 'Powerful gaming laptop with AniMe Matrix display.',
    price: 850000, rating: 4.8,
    image: 'https://dlcdnwebimgs.asus.com/gain/BE6B0CE9-B9B8-487C-9D84-427F49DBDF27/w1000/h732',
    images: [
      'https://dlcdnwebimgs.asus.com/gain/BE6B0CE9-B9B8-487C-9D84-427F49DBDF27/w1000/h732',
      'https://dlcdnwebimgs.asus.com/gain/4E8C53F4-1D8D-4957-9C3E-4F7E9E9F9F9F/w1000/h732',
      'https://dlcdnwebimgs.asus.com/gain/7E7F9F9F-9F9F-9F9F-9F9F-9F9F9F9F9F9F/w1000/h732'
    ],
    link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-seryi-106560029/'
  },
  {
    id: 8, categoryId: 2, likes: 0,
    name: 'Dell XPS 15',
    description: 'Stunning InfinityEdge display and high performance.',
    price: 950000, rating: 4.7,
    image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/media-gallery/black/notebook-xps-15-9530-t-black-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402',
    images: [
      'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/media-gallery/black/notebook-xps-15-9530-t-black-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402',
      'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/media-gallery/black/notebook-xps-15-9530-t-black-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402',
      'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/media-gallery/black/notebook-xps-15-9530-t-black-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402'
    ],
    link: 'https://kaspi.kz/shop/p/dell-xps-15-9530-110826978/'
  },
  {
    id: 9, categoryId: 2, likes: 0,
    name: 'Lenovo Legion 5 Pro',
    description: 'Best-in-class gaming performance and thermal cooling.',
    price: 720000, rating: 4.8,
    image: 'https://p3-ofp.static.pub/ShareResource/na/subseries/hero/lenovo-laptop-legion-5-pro-16-gen-8-amd-hero.png',
    images: [
      'https://p3-ofp.static.pub/ShareResource/na/subseries/hero/lenovo-laptop-legion-5-pro-16-gen-8-amd-hero.png',
      'https://p1-ofp.static.pub/fes/cms/2022/09/01/2a43e1c5iu0b1c0s8zvp8k8oebp3nf327682.png',
      'https://p3-ofp.static.pub/fes/cms/2022/08/29/vvzg2e22xhh4l7y8ygz20yjk3o9r5j327682.png'
    ],
    link: 'https://kaspi.kz/shop/p/lenovo-legion-5-pro-105553535/'
  },
  {
    id: 10, categoryId: 2, likes: 0,
    name: 'HP Spectre x360',
    description: 'Premium 2-in-1 convertible laptop with touch screen.',
    price: 780000, rating: 4.6,
    image: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lookup/c08221861.png',
    images: [
      'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lookup/c08221861.png',
      'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lookup/c08221862.png',
      'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lookup/c08221863.png'
    ],
    link: 'https://kaspi.kz/shop/p/hp-spectre-x360-14-107050011/'
  },

  // ── HEADPHONES ──
  {
    id: 11, categoryId: 3, likes: 0,
    name: 'AirPods Pro 2',
    description: 'Active Noise Cancellation and personalized Spatial Audio.',
    price: 125000, rating: 4.9,
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361',
    images: [
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361'
    ],
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-113371404/'
  },
  {
    id: 12, categoryId: 3, likes: 0,
    name: 'Sony WH-1000XM5',
    description: 'Industry-leading noise canceling and superior sound quality.',
    price: 185000, rating: 4.8,
    image: 'https://www.sony.com/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320',
    images: [
      'https://www.sony.com/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320',
      'https://www.sony.com/image/7e9d89c2a0e4f4b3b3b3b3b3b3b3b3b3?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320',
      'https://www.sony.com/image/9e9d89c2a0e4f4b3b3b3b3b3b3b3b3b3?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320'
    ],
    link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105221447/'
  },
  {
    id: 13, categoryId: 3, likes: 0,
    name: 'Bose QuietComfort Ultra',
    description: 'World-class noise cancellation with spatialized audio.',
    price: 210000, rating: 4.7,
    image: 'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_ultra_headphones/product_silo_images/QCU_HP_Black_hero_001.png/jcr:content/renditions/cq5dam.web.1000.1000.png',
    images: [
      'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_ultra_headphones/product_silo_images/QCU_HP_Black_hero_001.png/jcr:content/renditions/cq5dam.web.1000.1000.png',
      'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_ultra_headphones/product_silo_images/QCU_HP_Black_hero_002.png/jcr:content/renditions/cq5dam.web.1000.1000.png',
      'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_ultra_headphones/product_silo_images/QCU_HP_White_hero_001.png/jcr:content/renditions/cq5dam.web.1000.1000.png'
    ],
    link: 'https://kaspi.kz/shop/p/bose-quietcomfort-ultra-chernyi-113540056/'
  },
  {
    id: 14, categoryId: 3, likes: 0,
    name: 'Marshall Major IV',
    description: 'Iconic headphones with 80+ hours of wireless playtime.',
    price: 75000, rating: 4.8,
    image: 'https://www.marshallheadphones.com/dw/image/v2/BBBM_PRD/on/demandware.static/-/Sites-marshall-master-catalog/default/dw9e7b8f9a/images/large/1005939_Major_IV_Black_Front.png?sw=800&sh=800&sm=fit',
    images: [
      'https://www.marshallheadphones.com/dw/image/v2/BBBM_PRD/on/demandware.static/-/Sites-marshall-master-catalog/default/dw9e7b8f9a/images/large/1005939_Major_IV_Black_Front.png?sw=800&sh=800&sm=fit',
      'https://www.marshallheadphones.com/dw/image/v2/BBBM_PRD/on/demandware.static/-/Sites-marshall-master-catalog/default/dw9e7b8f9a/images/large/1005939_Major_IV_Black_Side.png?sw=800&sh=800&sm=fit',
      'https://www.marshallheadphones.com/dw/image/v2/BBBM_PRD/on/demandware.static/-/Sites-marshall-master-catalog/default/dw9e7b8f9a/images/large/1005939_Major_IV_Black_Back.png?sw=800&sh=800&sm=fit'
    ],
    link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-101150646/'
  },
  {
    id: 15, categoryId: 3, likes: 0,
    name: 'Beats Studio Pro',
    description: 'Fully custom acoustic platform with Lossless audio.',
    price: 160000, rating: 4.6,
    image: 'https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studio-pro/pdp/studio-pro-black-carousel-1.jpg.large.2x.jpg',
    images: [
      'https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studio-pro/pdp/studio-pro-black-carousel-1.jpg.large.2x.jpg',
      'https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studio-pro/pdp/studio-pro-black-carousel-2.jpg.large.2x.jpg',
      'https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studio-pro/pdp/studio-pro-black-carousel-3.jpg.large.2x.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/beats-studio-pro-chernyi-112282494/'
  },

  // ── TABLETS ──
  {
    id: 16, categoryId: 4, likes: 0,
    name: 'iPad Pro M2',
    description: 'Powerful M2 chip, Liquid Retina display, Pro cameras.',
    price: 449990, rating: 4.9,
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-13-select-wifi-spacegray-202210?wid=940&hei=1112&fmt=png-alpha&.v=1664411207154',
    images: [
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-13-select-wifi-spacegray-202210?wid=940&hei=1112&fmt=png-alpha&.v=1664411207154',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-13-select-wifi-silver-202210?wid=940&hei=1112&fmt=png-alpha&.v=1664411207154',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-11-select-wifi-spacegray-202210?wid=940&hei=1112&fmt=png-alpha&.v=1664411207154'
    ],
    link: 'https://kaspi.kz/shop/p/apple-ipad-pro-2022-11-serebrianyi-107148530/'
  },
  {
    id: 17, categoryId: 4, likes: 0,
    name: 'Samsung Galaxy Tab S9 Ultra',
    description: 'Large 14.6 inch AMOLED display with S-Pen included.',
    price: 580000, rating: 4.8,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/kz/2307/gallery/kz-galaxy-tab-s9-ultra-x910-sm-x910nzaaskz-thumb-537167696',
    images: [
      'https://images.samsung.com/is/image/samsung/p6pim/kz/2307/gallery/kz-galaxy-tab-s9-ultra-x910-sm-x910nzaaskz-thumb-537167696',
      'https://images.samsung.com/is/image/samsung/p6pim/kz/2307/gallery/kz-galaxy-tab-s9-ultra-x910-sm-x910nzeaskz-thumb-537167701',
      'https://images.samsung.com/is/image/samsung/p6pim/kz/2307/gallery/kz-galaxy-tab-s9-ultra-x910-sm-x910nzaaskz-thumb-537167698'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-ultra-112270381/'
  },
  {
    id: 18, categoryId: 4, likes: 0,
    name: 'Xiaomi Pad 6',
    description: 'High performance display for work and entertainment.',
    price: 175000, rating: 4.7,
    image: 'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-pad-6/pc/f1.png',
    images: [
      'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-pad-6/pc/f1.png',
      'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-pad-6/pc/f2.png',
      'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-pad-6/pc/f3.png'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-8-seryi-111162590/'
  },
  {
    id: 19, categoryId: 4, likes: 0,
    name: 'iPad Air M2',
    description: 'Powerful, colorful, and versatile tablet experience.',
    price: 340000, rating: 4.8,
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-wifi-blue-202405?wid=940&hei=1112&fmt=png-alpha&.v=1714603683182',
    images: [
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-wifi-blue-202405?wid=940&hei=1112&fmt=png-alpha&.v=1714603683182',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-wifi-purple-202405?wid=940&hei=1112&fmt=png-alpha&.v=1714603683182',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-wifi-starlight-202405?wid=940&hei=1112&fmt=png-alpha&.v=1714603683182'
    ],
    link: 'https://kaspi.kz/shop/p/apple-ipad-air-2024-11-seryi-119641434/'
  },
  {
    id: 20, categoryId: 4, likes: 0,
    name: 'Microsoft Surface Pro 9',
    description: 'The power of a laptop with the flexibility of a tablet.',
    price: 520000, rating: 4.5,
    image: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OXfL?ver=e640&q=90&m=6&h=600&w=600&b=%23FFFFFF&f=jpg&o=f&aim=true',
    images: [
      'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OXfL?ver=e640&q=90&m=6&h=600&w=600&b=%23FFFFFF&f=jpg&o=f&aim=true',
      'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OXRB?ver=3e5c&q=90&m=6&h=600&w=600&b=%23FFFFFF&f=jpg&o=f&aim=true',
      'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OXfM?ver=9e14&q=90&m=6&h=600&w=600&b=%23FFFFFF&f=jpg&o=f&aim=true'
    ],
    link: 'https://kaspi.kz/shop/p/microsoft-surface-pro-9-seryi-107738222/'
  }
];
