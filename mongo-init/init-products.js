db = db.getSiblingDB("cafeDB");

db.createUser({
  user: "appuser",
  pwd: "apppass",
  roles: [{ role: "readWrite", db: "cafeDB" }]
});

db.products.insertMany([
  {
    id: 1,
    name: "اسپرسو🔥",
    category: "espresso",
    price: "۴۵,۰۰۰ / ۵۵,۰۰۰ تومان",
    description: "کامرشیال / اسپشیالیتی",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "دانه قهوه تازه آسیاب شده، آب داغ",
      زمان_تهیه: "۲-۳ دقیقه",
      کالری: "۵ کالری در هر شات"
    }
  },
  {
    id: 2,
    name: "آمریکانو",
    category: "espresso",
    price: "۵۰,۰۰۰ / ۶۰,۰۰۰ تومان",
    description: "اسپرسو رقیق شده با آب داغ",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "اسپرسو، آب داغ",
      زمان_تهیه: "۳-۴ دقیقه",
      کالری: "۱۰ کالری"
    }
  },
  {
    id: 3,
    name: "کن هیلو (Connielo)",
    category: "espresso",
    price: "۶۰,۰۰۰ / ۷۰,۰۰۰ تومان",
    description: "اسپرسو با خامه یا بستنی",
    image: "https://images.unsplash.com/photo-1598218455098-69f4b501d5f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "اسپرسو، خامه یا بستنی",
      زمان_تهیه: "۳-۵ دقیقه",
      کالری: "۱۲۰ کالری"
    }
  },
  {
    id: 4,
    name: "اسپرسو تونیک",
    category: "espresso",
    price: "۷۰,۰۰۰ / ۸۰,۰۰۰ تومان",
    description: "اسپرسو روی تونیک خنک",
    image: "https://images.unsplash.com/photo-1604908177617-47b9b34cba8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "اسپرسو، آب تونیک، یخ",
      زمان_تهیه: "۲-۳ دقیقه",
      کالری: "۲۰ کالری"
    }
  },
  {
    id: 5,
    name: "رومانو",
    category: "espresso",
    price: "۵۵,۰۰۰ / ۶۵,۰۰۰ تومان",
    description: "اسپرسو با لیموی تازه",
    image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "اسپرسو، لیمو تازه",
      زمان_تهیه: "۲-۳ دقیقه",
      کالری: "۵ کالری"
    }
  },
  {
    id: 6,
    name: "اورنج اسپرسو",
    category: "espresso",
    price: "۷۵,۰۰۰ / ۸۵,۰۰۰ تومان",
    description: "اسپرسو با آب پرتقال تازه",
    image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "اسپرسو، آب پرتقال طبیعی، یخ",
      زمان_تهیه: "۳-۴ دقیقه",
      کالری: "۴۰ کالری"
    }
  },
  {
    id: 7,
    name: "فکو",
    category: "espresso",
    price: "۸۰,۰۰۰ / ۹۰,۰۰۰ تومان",
    description: "ترکیب اسپرسو با طعم فندق و شیر",
    image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "اسپرسو، شیر، سیروپ فندق",
      زمان_تهیه: "۴-۵ دقیقه",
      کالری: "۹۰ کالری"
    }
  },
  {
    id: 8,
    name: "یانگ",
    category: "espresso",
    price: "۸۵,۰۰۰ / ۹۵,۰۰۰ تومان",
    description: "اسپرسو با شیر نارگیل و طعم وانیل",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "اسپرسو، شیر نارگیل، وانیل",
      زمان_تهیه: "۴-۵ دقیقه",
      کالری: "۸۵ کالری"
    }
  },
    {
    id: 9,
    name: "ماکیاتو",
    category: "latte",
    price: "۷۵,۰۰۰ / ۸۵,۰۰۰ تومان",
    description: "اسپرسو با مقدار کمی شیر و کف شیر لطیف",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "اسپرسو، شیر",
      زمان_تهیه: "۳-۴ دقیقه",
      کالری: "۶۰ کالری"
    }
  },
  {
    id: 10,
    name: "لته",
    category: "latte",
    price: "۸۵,۰۰۰ / ۹۵,۰۰۰ تومان",
    description: "قهوه اسپرسو با شیر داغ و کف لطیف",
    image: "https://images.unsplash.com/photo-1581592445520-4a5b5c407b5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "اسپرسو، شیر",
      زمان_تهیه: "۴-۵ دقیقه",
      کالری: "۱۲۰ کالری"
    }
  },
  {
    id: 11,
    name: "کاپوچینو",
    category: "latte",
    price: "۸۵,۰۰۰ / ۹۵,۰۰۰ تومان",
    description: "اسپرسو با شیر کف دار و طعم کلاسیک",
    image: "https://images.unsplash.com/photo-1589307000076-8d1a1f4c5f2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "اسپرسو، شیر، کف شیر",
      زمان_تهیه: "۴-۵ دقیقه",
      کالری: "۱۱۰ کالری"
    }
  },
  {
    id: 12,
    name: "موکا",
    category: "latte",
    price: "۹۵,۰۰۰ / ۱۰۵,۰۰۰ تومان",
    description: "لته شکلاتی با اسپرسو و شیر",
    image: "https://images.unsplash.com/photo-1570968915860-13f2d5a6a06f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "اسپرسو، شیر، شکلات",
      زمان_تهیه: "۵ دقیقه",
      کالری: "۱۸۰ کالری"
    }
  },
  {
    id: 13,
    name: "آیس لته پستو",
    category: "latte",
    price: "۹۵,۰۰۰ / ۱۰۵,۰۰۰ تومان",
    description: "لته خنک با پستو و یخ",
    image: "https://images.unsplash.com/photo-1604908177520-299eb56c49c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "اسپرسو، شیر، پستو، یخ",
      زمان_تهیه: "۳-۴ دقیقه",
      کالری: "۱۴۰ کالری"
    }
  },
  {
    id: 14,
    name: "آیس لاته مانگو",
    category: "latte",
    price: "۹۵,۰۰۰ / ۱۰۵,۰۰۰ تومان",
    description: "لته خنک با طعم انبه و یخ",
    image: "https://images.unsplash.com/photo-1590080875800-1b84d8bb8f2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "اسپرسو، شیر، مانگو، یخ",
      زمان_تهیه: "۳-۴ دقیقه",
      کالری: "۱۳۰ کالری"
    }
  },
  {
    id: 15,
    name: "آیس لاته بری",
    category: "latte",
    price: "۹۵,۰۰۰ / ۱۰۵,۰۰۰ تومان",
    description: "لته خنک با طعم توت و یخ",
    image: "https://images.unsplash.com/photo-1611078481033-dfb2b9f3e958?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "اسپرسو، شیر، بری، یخ",
      زمان_تهیه: "۳-۴ دقیقه",
      کالری: "۱۳۰ کالری"
    }
  },
  {
    id: 16,
    name: "آیس لاته ترامیسو",
    category: "latte",
    price: "۹۵,۰۰۰ / ۱۰۵,۰۰۰ تومان",
    description: "لته خنک با طعم ترامیسو و یخ",
    image: "https://images.unsplash.com/photo-1625662099244-2e61c1a0b8a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "اسپرسو، شیر، ترامیسو، یخ",
      زمان_تهیه: "۳-۴ دقیقه",
      کالری: "۱۴۰ کالری"
    }
  },
  {
    id: 17,
    name: "دریم کوچ",
    category: "latte",
    price: "۹۰,۰۰۰ / ۱۰۰,۰۰۰ تومان",
    description: "لته کوچک و دلپذیر با طعم ملایم",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "اسپرسو، شیر",
      زمان_تهیه: "۳ دقیقه",
      کالری: "۱۱۰ کالری"
    }
  },
  {
    id: 18,
    name: "برو Breve",
    category: "latte",
    price: "۹۵,۰۰۰ / ۱۰۵,۰۰۰ تومان",
    description: "لته با شیر نیمه خامه‌ای و اسپرسو",
    image: "https://images.unsplash.com/photo-1582719478250-7f2c6b9dfd42?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "اسپرسو، شیر نیمه خامه‌ای",
      زمان_تهیه: "۴ دقیقه",
      کالری: "۱۵۰ کالری"
    }
  },
  {
    id: 19,
    name: "وین",
    category: "latte",
    price: "۹۵,۰۰۰ / ۱۰۵,۰۰۰ تومان",
    description: "اسپرسو با آب، خامه و سس شکلات",
    image: "https://images.unsplash.com/photo-1617196031425-43c4b3d1c2d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "اسپرسو، آب، خامه، سس شکلات",
      زمان_تهیه: "۴ دقیقه",
      کالری: "۱۷۰ کالری"
    }
  },
  {
    id: 20,
    name: "کوکو مینت",
    category: "latte",
    price: "۹۵,۰۰۰ / ۱۰۵,۰۰۰ تومان",
    description: "لته با طعم نعناع و شکلات",
    image: "https://images.unsplash.com/photo-1601924582975-0c8f5a92df5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "اسپرسو، شیر، نعناع، شکلات",
      زمان_تهیه: "۴ دقیقه",
      کالری: "۱۵۰ کالری"
    }
  },
  {
    id: 21,
    name: "فانچین",
    category: "latte",
    price: "۹۵,۰۰۰ / ۱۰۵,۰۰۰ تومان",
    description: "لته با طعم ویژه و دلچسب",
    image: "https://images.unsplash.com/photo-1580657014106-659f5d0fdd2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "اسپرسو، شیر، طعم ویژه",
      زمان_تهیه: "۴ دقیقه",
      کالری: "۱۴۰ کالری"
    }
  },
  {
    id: 22,
    name: "پیکسی داست",
    category: "latte",
    price: "۹۵,۰۰۰ / ۱۰۵,۰۰۰ تومان",
    description: "لته جادویی با طعم ملایم و شیرین",
    image: "https://images.unsplash.com/photo-1600566752491-9bbf2e3f9a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "اسپرسو، شیر، طعم ملایم",
      زمان_تهیه: "۴ دقیقه",
      کالری: "۱۴۰ کالری"
    }
  },
  {
    id: 23,
    name: "آفوگاتو پستو",
    category: "latte",
    price: "۹۵,۰۰۰ / ۱۰۵,۰۰۰ تومان",
    description: "لته با طعم پستو و یک شات اسپرسو روی آن",
    image: "https://images.unsplash.com/photo-1617691800050-7f9b0f3e5d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "اسپرسو، شیر، پستو، بستنی وانیلی",
      زمان_تهیه: "۴-۵ دقیقه",
      کالری: "۲۲۰ کالری"
    }
  },
  {
    id: 24,
    name: "آفوگاتو مانگو",
    category: "latte",
    price: "۹۵,۰۰۰ / ۱۰۵,۰۰۰ تومان",
    description: "لته با طعم مانگو و یک شات اسپرسو روی آن",
    image: "https://images.unsplash.com/photo-1617691800080-1a2c0c1e6d2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "اسپرسو، شیر، مانگو، بستنی وانیلی",
      زمان_تهیه: "۴-۵ دقیقه",
      کالری: "۲۲۰ کالری"
    }
  },
  {
    id: 25,
    name: "کمکس",
    category: "mocktel",
    price: "۷۰,۰۰۰ / ۸۰,۰۰۰ تومان",
    description: "قهوه سرد با عصاره طبیعی و طعم ملایم",
    image: "https://images.unsplash.com/photo-1572451473031-6bdb091a028d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "آب، قهوه دم شده، یخ",
      زمان_تهیه: "۵ دقیقه",
      کالری: "۱۰ کالری"
    }
  },
  {
    id: 26,
    name: "فرنچ پرس",
    category: "mocktel",
    price: "۷۰,۰۰۰ / ۸۰,۰۰۰ تومان",
    description: "قهوه دمی غلیظ و تازه با طعم کلاسیک",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "آب، قهوه تازه، یخ",
      زمان_تهیه: "۴-۵ دقیقه",
      کالری: "۱۰ کالری"
    }
  },
  {
    id: 27,
    name: "ترک",
    category: "mocktel",
    price: "۷۵,۰۰۰ / ۸۵,۰۰۰ تومان",
    description: "قهوه ترک با غلظت بالا و عطر اصیل",
    image: "https://images.unsplash.com/photo-1602629965404-c1d6f7c64f7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "قهوه ترک، آب",
      زمان_تهیه: "۵ دقیقه",
      کالری: "۱۵ کالری"
    }
  },
  {
    id: 28,
    name: "یونانی",
    category: "mocktel",
    price: "۷۵,۰۰۰ / ۸۵,۰۰۰ تومان",
    description: "قهوه یونانی با طعم غنی و سنتی",
    image: "https://images.unsplash.com/photo-1601981171211-2ecb8e27f5f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "قهوه یونانی، آب",
      زمان_تهیه: "۵ دقیقه",
      کالری: "۱۵ کالری"
    }
  },
  {
    id: 29,
    name: "کلابرو",
    category: "mocktel",
    price: "۸۰,۰۰۰ / ۹۰,۰۰۰ تومان",
    description: "نوشیدنی خنک و میوه‌ای با طعم خاص",
    image: "https://images.unsplash.com/photo-1606312611533-62fdd1b2b1c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "آب، میوه، یخ",
      زمان_تهیه: "۳-۴ دقیقه",
      کالری: "۸۰ کالری"
    }
  },
  {
    id: 30,
    name: "تروپیکال برو",
    category: "mocktel",
    price: "۸۵,۰۰۰ / ۹۵,۰۰۰ تومان",
    description: "نوشیدنی گرمسیری و خنک با طعم میوه‌ای",
    image: "https://images.unsplash.com/photo-1582719478250-7f2c6b9dfd42?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "آب، میوه‌های گرمسیری، یخ",
      زمان_تهیه: "۴ دقیقه",
      کالری: "۹۰ کالری"
    }
  },
  {
    id: 31,
    name: "بلادی برو",
    category: "mocktel",
    price: "۸۵,۰۰۰ / ۹۵,۰۰۰ تومان",
    description: "نوشیدنی قرمز با ترکیب میوه‌های تازه و یخ",
    image: "https://images.unsplash.com/photo-1617691800080-1a2c0c1e6d2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "آب، توت فرنگی، یخ",
      زمان_تهیه: "۳-۴ دقیقه",
      کالری: "۹۰ کالری"
    }
  },
  {
    id: 32,
    name: "بلک جکت برو",
    category: "mocktel",
    price: "۹۰,۰۰۰ / ۱۰۰,۰۰۰ تومان",
    description: "نوشیدنی قوی و تیره با طعم قهوه و شکلات",
    image: "https://images.unsplash.com/photo-1601924582975-0c8f5a92df5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    details: {
      مواد: "قهوه، شکلات، آب",
      زمان_تهیه: "۴-۵ دقیقه",
      کالری: "۱۱۰ کالری"
    }
  }
  
]);
