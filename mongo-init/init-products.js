db = db.getSiblingDB("cafeDB");

// ساخت یوزر
db.createUser({
  user: "appuser",
  pwd: "apppass",
  roles: [{ role: "readWrite", db: "cafeDB" }]
});

// وارد کردن محصولات
db.products.insertMany([
  {
    id: 1,
    name: "اسپرسو🔥",
    category: "espresso",
    price: "۴۵,۰۰۰ / ۵۵,۰۰۰ تومان",
    description: "کامرشیال / اسپشیالیتی",
    image: "/images/default.png",
    details: {
      text: "دانه قهوه تازه آسیاب شده، آب داغ"
    }
  },
  {
    id: 2,
    name: "آمریکانو",
    category: "espresso",
    price: "۵۰,۰۰۰ / ۶۰,۰۰۰ تومان",
    description: "اسپرسو رقیق شده با آب داغ",
    image: "/images/default.png",
    details: {
      text: "اسپرسو، آب داغ"
    }
  },
  {
    id: 3,
    name: "کن هیلو (Connielo)",
    category: "espresso",
    price: "۶۰,۰۰۰ / ۷۰,۰۰۰ تومان",
    description: "اسپرسو با خامه یا بستنی",
    image: "/images/default.png",
    details: {
      text: "اسپرسو، خامه یا بستنی"
    }
  },
  {
    id: 4,
    name: "اسپرسو تونیک",
    category: "espresso",
    price: "۷۰,۰۰۰ / ۸۰,۰۰۰ تومان",
    description: "اسپرسو روی تونیک خنک",
    image: "/images/default.png",
    details: {
      text: "اسپرسو، آب تونیک، یخ"
    }
  },
  {
    id: 5,
    name: "رومانو",
    category: "espresso",
    price: "۵۵,۰۰۰ / ۶۵,۰۰۰ تومان",
    description: "اسپرسو با لیموی تازه",
    image: "/images/default.png",
    details: {
      text: "اسپرسو، لیمو تازه"
    }
  },
  {
    id: 6,
    name: "اورنج اسپرسو",
    category: "espresso",
    price: "۷۵,۰۰۰ / ۸۵,۰۰۰ تومان",
    description: "اسپرسو با آب پرتقال تازه",
    image: "/images/default.png",
    details: {
      text: "اسپرسو، آب پرتقال طبیعی، یخ"
    }
  },
  {
    id: 7,
    name: "فکو",
    category: "espresso",
    price: "۸۰,۰۰۰ / ۹۰,۰۰۰ تومان",
    description: "ترکیب اسپرسو با طعم فندق و شیر",
    image: "/images/default.png",
    details: {
      text: "اسپرسو، شیر، سیروپ فندق"
    }
  },
  {
    id: 8,
    name: "یانگ",
    category: "espresso",
    price: "۸۵,۰۰۰ / ۹۵,۰۰۰ تومان",
    description: "اسپرسو با شیر نارگیل و طعم وانیل",
    image: "/images/default.png",
    details: {
      text: "اسپرسو، شیر نارگیل، وانیل"
    }
  },
    {
    id: 9,
    name: "ماکیاتو",
    category: "latte",
    price: "۷۵,۰۰۰ / ۸۵,۰۰۰ تومان",
    description: "اسپرسو با مقدار کمی شیر و کف شیر لطیف",
    image: "/images/default.png",
    details: {
      text: "اسپرسو، شیر"
    }
  },
  {
    id: 10,
    name: "لته",
    category: "latte",
    price: "۸۵,۰۰۰ / ۹۵,۰۰۰ تومان",
    description: "قهوه اسپرسو با شیر داغ و کف لطیف",
    image: "/images/default.png",
    details: {
      text: "اسپرسو، شیر"
    }
  },
  {
    id: 11,
    name: "کاپوچینو",
    category: "latte",
    price: "۸۵,۰۰۰ / ۹۵,۰۰۰ تومان",
    description: "اسپرسو با شیر کف دار و طعم کلاسیک",
    image: "/images/default.png",
    details: {
      text: "اسپرسو، شیر، کف شیر"
    }
  },
  {
    id: 12,
    name: "موکا",
    category: "latte",
    price: "۹۵,۰۰۰ / ۱۰۵,۰۰۰ تومان",
    description: "لته شکلاتی با اسپرسو و شیر",
    image: "/images/default.png",
    details: {
      text: "اسپرسو، شیر، شکلات"
    }
  },
  {
    id: 13,
    name: "آیس لته پستو",
    category: "latte",
    price: "۹۵,۰۰۰ / ۱۰۵,۰۰۰ تومان",
    description: "لته خنک با پستو و یخ",
    image: "/images/default.png",
    details: {
      text: "اسپرسو، شیر، پستو، یخ"
    }
  },
  {
    id: 14,
    name: "آیس لاته مانگو",
    category: "latte",
    price: "۹۵,۰۰۰ / ۱۰۵,۰۰۰ تومان",
    description: "لته خنک با طعم انبه و یخ",
    image: "/images/default.png",
    details: {
      text: "اسپرسو، شیر، مانگو، یخ"
    }
  },
  {
    id: 15,
    name: "آیس لاته بری",
    category: "latte",
    price: "۹۵,۰۰۰ / ۱۰۵,۰۰۰ تومان",
    description: "لته خنک با طعم توت و یخ",
    image: "/images/default.png",
    details: {
      text: "اسپرسو، شیر، بری، یخ"
    }
  },
  {
    id: 16,
    name: "آیس لاته ترامیسو",
    category: "latte",
    price: "۹۵,۰۰۰ / ۱۰۵,۰۰۰ تومان",
    description: "لته خنک با طعم ترامیسو و یخ",
    image: "/images/default.png",
    details: {
      text: "اسپرسو، شیر، ترامیسو، یخ"
    }
  },
  {
    id: 17,
    name: "دریم کوچ",
    category: "latte",
    price: "۹۰,۰۰۰ / ۱۰۰,۰۰۰ تومان",
    description: "لته کوچک و دلپذیر با طعم ملایم",
    image: "/images/default.png",
    details: {
      text: "اسپرسو، شیر"
    }
  },
  {
    id: 18,
    name: "برو Breve",
    category: "latte",
    price: "۹۵,۰۰۰ / ۱۰۵,۰۰۰ تومان",
    description: "لته با شیر نیمه خامه‌ای و اسپرسو",
    image: "/images/default.png",
    details: {
      text: "اسپرسو، شیر نیمه خامه‌ای"
    }
  },
  {
    id: 19,
    name: "وین",
    category: "latte",
    price: "۹۵,۰۰۰ / ۱۰۵,۰۰۰ تومان",
    description: "اسپرسو با آب، خامه و سس شکلات",
    image: "/images/default.png",
    details: {
      text: "اسپرسو، آب، خامه، سس شکلات"
    }
  },
  {
    id: 20,
    name: "کوکو مینت",
    category: "latte",
    price: "۹۵,۰۰۰ / ۱۰۵,۰۰۰ تومان",
    description: "لته با طعم نعناع و شکلات",
    image: "/images/default.png",
    details: {
      text: "اسپرسو، شیر، نعناع، شکلات"
    }
  },
  {
    id: 21,
    name: "فانچین",
    category: "latte",
    price: "۹۵,۰۰۰ / ۱۰۵,۰۰۰ تومان",
    description: "لته با طعم ویژه و دلچسب",
    image: "/images/default.png",
    details: {
      text: "اسپرسو، شیر، طعم ویژه"
    }
  },
  {
    id: 22,
    name: "پیکسی داست",
    category: "latte",
    price: "۹۵,۰۰۰ / ۱۰۵,۰۰۰ تومان",
    description: "لته جادویی با طعم ملایم و شیرین",
    image: "/images/default.png",
    details: {
      text: "اسپرسو، شیر، طعم ملایم"
    }
  },
  {
    id: 23,
    name: "آفوگاتو پستو",
    category: "latte",
    price: "۹۵,۰۰۰ / ۱۰۵,۰۰۰ تومان",
    description: "لته با طعم پستو و یک شات اسپرسو روی آن",
    image: "/images/default.png",
    details: {
      text: "اسپرسو، شیر، پستو، بستنی وانیلی"
    }
  },
  {
    id: 24,
    name: "آفوگاتو مانگو",
    category: "latte",
    price: "۹۵,۰۰۰ / ۱۰۵,۰۰۰ تومان",
    description: "لته با طعم مانگو و یک شات اسپرسو روی آن",
    image: "/images/default.png",
    details: {
      text: "اسپرسو، شیر، مانگو، بستنی وانیلی"
    }
  },
  {
    id: 25,
    name: "کمکس",
    category: "mocktel",
    price: "۷۰,۰۰۰ / ۸۰,۰۰۰ تومان",
    description: "قهوه سرد با عصاره طبیعی و طعم ملایم",
    image: "/images/default.png",
    details: {
      text: "آب، قهوه دم شده، یخ"
    }
  },
  {
    id: 26,
    name: "فرنچ پرس",
    category: "mocktel",
    price: "۷۰,۰۰۰ / ۸۰,۰۰۰ تومان",
    description: "قهوه دمی غلیظ و تازه با طعم کلاسیک",
    image: "/images/default.png",
    details: {
      text: "آب، قهوه تازه، یخ"
    }
  },
  {
    id: 27,
    name: "ترک",
    category: "mocktel",
    price: "۷۵,۰۰۰ / ۸۵,۰۰۰ تومان",
    description: "قهوه ترک با غلظت بالا و عطر اصیل",
    image: "/images/default.png",
    details: {
      text: "قهوه ترک، آب"
    }
  },
  {
    id: 28,
    name: "یونانی",
    category: "mocktel",
    price: "۷۵,۰۰۰ / ۸۵,۰۰۰ تومان",
    description: "قهوه یونانی با طعم غنی و سنتی",
    image: "/images/default.png",
    details: {
      text: "قهوه یونانی، آب"
    }
  },
  {
    id: 29,
    name: "کلابرو",
    category: "mocktel",
    price: "۸۰,۰۰۰ / ۹۰,۰۰۰ تومان",
    description: "نوشیدنی خنک و میوه‌ای با طعم خاص",
    image: "/images/default.png",
    details: {
      text: "آب، میوه، یخ"
    }
  },
  {
    id: 30,
    name: "تروپیکال برو",
    category: "mocktel",
    price: "۸۵,۰۰۰ / ۹۵,۰۰۰ تومان",
    description: "نوشیدنی گرمسیری و خنک با طعم میوه‌ای",
    image: "/images/default.png",
    details: {
      text: "آب، میوه‌های گرمسیری، یخ"
    }
  },
  {
    id: 31,
    name: "بلادی برو",
    category: "mocktel",
    price: "۸۵,۰۰۰ / ۹۵,۰۰۰ تومان",
    description: "نوشیدنی قرمز با ترکیب میوه‌های تازه و یخ",
    image: "/images/default.png",
    details: {
      text: "آب، توت فرنگی، یخ"
    }
  },
  {
    id: 32,
    name: "بلک جکت برو",
    category: "mocktel",
    price: "۹۰,۰۰۰ / ۱۰۰,۰۰۰ تومان",
    description: "نوشیدنی قوی و تیره با طعم قهوه و شکلات",
    image: "/images/default.png",
    details: {
      text: "قهوه، شکلات، آب"
    }
  }
  
]);
