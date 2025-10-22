db = db.getSiblingDB("cafeDB");

// ساخت یوزر
db.createUser({
  user: "appuser",
  pwd: "apppass",
  roles: [{ role: "readWrite", db: "cafeDB" }]
});

// وارد کردن محصولات
db.products.insertMany(
  [{
	id: 1,
	name: "کته جوجه زعفرانی",
	category: "Main",
	price: "۳۳۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "۲۰۰گرمفیله مرغ،۱۲۰گرم.برنج ایرانی،دورچین"
	}
},
{
	id: 2,
	name: "استیک مرغ",
	category: "Main",
	price: "۵۱۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "۲۵۰ تا ۳۰۰گرم فیله مرغ،سیب زمینی سرخ شده ،قارچ،هویج،کدو،کلم بروکلی"
	}
},
{
	id: 3,
	name: "کته کباب تابه ای",
	category: "Main",
	price: "۳۹۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "۱۵۰ گرم گوشت چرخ کرده ،۱۲۰ گرم برنج ایرانی،سس گوجه ،دورچین"
	}
},
{
	id:  4,
	name: "پیتزا چیکن ایتالیایی",
	category: "pizza",
	price: "۵۱۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "خمیر پیتزای ایتالیایی دست ساز ۳۲ سانتی متری ،فیله مرغ،قارچ،فلفل دلمه ای ، زیتون سیاه ،پنیرپیتزا، سس پیتزا"
	}
},
{
	id:  5,
	name: "پیتزا پپرونی ایتالیایی",
	category: "pizza",
	price: "۴۹۰۰۰۰",
	description: "  ",
	image: "/images/default.png",
	details: {
		"text": "خمیر پیتزای دست ساز ۳۲ سانتی متری ،پپرونی ۹۰٪،زیتون سیاه ، فلفل هالوپینو ،پنیرپیتزا،،سس گوجه "
	}
},
{
	id: 6,
	name: "پیتزا چانو ایتالیایی ",
	category: "pizza",
	price: "۶۰۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "خمیرپیتزا ایتالیایی ۳۲ سانتی متری ،گوشت فیله گوساله ،زیتون سیاه ،قارچ،پنیرپیتزا، سس گوجه"
	}
},
{
	id:  7,
	name: "پیتزا مارگاریتا ایتالیایی",
	category: "pizza",
	price: "۲۷۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "خمیر پیتزای ایتالیایی ۳۲ سانتی متری ،گوجه ، پنیرپیتزا"
	}
},
{
	id: 8,
	name: "برگرکلاسیک",
	category: "burger",
	price: "۴۵۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "یک عدد برگر دست ساز گوشت گوساله ۱۲۵ گرمی ،کاهو فرانسه ،پیاز کاراملی ، گوجه ، خیار شور ،نان باگت ، سیب زمینی سرخ شده "
	}
},
{
	id:  9,
	name: "زینگر",
	category: "burger",
	price: "۳۸۰۰۰۰",
	description: "  ",
	image: "/images/default.png",
	details: {
		"text": "فیله مرغ ۱۵۰ گرم ،پنیر گودا ،سس قارچ ، خیار شور ،گوجه،کاهو فرانسه،نان باگت ،سیب زمینی سرخ شده "
	}
},
{
	id:  10,
	name: "برگراسپشیال",
	category: "burger",
	price: "۵۵۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "یک عدد برگر دست ساز گوساله ۱۲۵ گرمی،بیکن گوشت ،قارچ،پنیر چدار،کاهو فرانسه،گوجه،خیارشور ، نان باگت ،سیب زمینی سرخ شده "
	}
},
{
	id:  11,
	name: "پاستاپنه چیکن آلفردو",
	category: "pasta",
	price: "۴۲۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "پاستا پنه ، فیله مرغ ۱۵۰گرم،سس قارچ،پنیر چدار،پنیر پارمسان ، بچه بلال"
	}
},
{
	id:  12,
	name: "پاستا چیکن پستو",
	category: "pasta",
	price: "۴۰۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "اسپاگتی،۱۵۰ گرم فیله مرغ، سس پستو ،پنیر پارمسان ، پنیر چدار ،بچه بلال "
	}
},
{
	id:  13,
	name: "پاستا بلونز ",
	category: "pasta",
	price: "۳۰۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "اسپاگتی،۱۵۰ گرم چرخ کرده ،سس گوجه ،گوجه گیلاسی"
	}
},
{
	id:  14,
	name: "دبل اسپرسو🔥",
	category: "espresso",
	price: "۱۱۵۰۰۰/۱۴۰۰۰۰",
	description: "اسپشیال/کامشیال",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  15,
	name: "آمریکانو🔥🧊",
	category: "espresso",
	price: "۱۱۵۰۰۰/۱۴۰۰۰۰",
	description: "اسپشیال/کامشیال",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  16,
	name: "اسپرسو تونیک🧊",
	category: "espresso",
	price: "۱۲۵۰۰۰/۱۵۰۰۰۰",
	description: "اسپشیال/کامشیال",
	image: "/images/default.png",
	details: {
		"text": "اسپرسو دبل ،آب تونیک"
	}
},
{
	id:  17,
	name: "رومانو🔥🧊",
	category: "espresso",
	price: "۱۲۵۰۰۰/۱۵۰۰۰۰",
	description: "اسپشیال/کامشیال",
	image: "/images/default.png",
	details: {
		"text": "دبل اسپرسو ،لیمو ترش"
	}
},
{
	id:  18,
	name: "اورنج اسپرسو🧊",
	category: "espresso",
	price: "۱۷۵۰۰۰/۲۰۰۰۰۰",
	description: "اسپشیال/کامشیال",
	image: "/images/default.png",
	details: {
		"text": "دبل اسپرسو،آب پرتقال"
	}
},
{
	id:  19,
	name: "فکو",
	category: "espresso",
	price: "۱۸۵۰۰۰/۲۱۰۰۰۰",
	description: "اسپشیال/کامشیال",
	image: "/images/default.png",
	details: {
		"text": "دبل اسپرسو،آب انبه"
	}
},
{
	id: 20,
	name: "یانگ🧊",
	category: "espresso",
	price: "۲۲۰۰۰۰/۲۵۵۰۰۰",
	description: "اسپشیال/کامشیال",
	image: "/images/default.png",
	details: {
		"text": "دبل اسپرسو،انار،لیمو،بلوبری،آب گاز دار"
	}
},
{
	id:  21,
	name: "لاته🧊🔥",
	category: "latte",
	price: "۱۵۵۰۰۰/۱۸۰۰۰۰",
	description: "اسپشیال/کامشیال",
	image: "/images/default.png",
	details: {
		"text": "دبل اسپرسو،شیر"
	}
},
{
	id:  22,
	name: "ماکیاتو🧊🔥",
	category: "latte",
	price: "۱۶۵۰۰۰/۱۹۰۰۰۰",
	description: "اسپشیال/کامشیال",
	image: "/images/default.png",
	details: {
		"text": "دبل اسپرسو ،شیر،سیروب"
	}
},
{
	id:  23,
	name: "کاپوچینو🔥",
	category: "latte",
	price: "۱۵۵۰۰۰/۱۸۰۰۰۰",
	description: "اسپشیال/کامشیال",
	image: "/images/default.png",
	details: {
		"text": "دبل اسپرسو،شیر با فم زیاد"
	}
},
{
	id:  24,
	name: "موکا🔥🧊",
	category: "latte",
	price: "۱۷۵۰۰۰/۱۹۵۰۰۰",
	description: "اسپشیال/کامشیال",
	image: "/images/default.png",
	details: {
		"text": "دبل اسپرسو،شیر با فم زیاد،سیروب شکلات"
	}
},
{
	id:  25,
	name: "آیس لاته پستو🧊",
	category: "latte",
	price: "۱۷۰۰۰۰/۱۹۵۰۰۰",
	description: "اسپشیال/کامشیال",
	image: "/images/default.png",
	details: {
		"text": "لاته،کرم پسته"
	}
},
{
	id:  26,
	name: "آیس لاته مانگو🧊",
	category: "latte",
	price: "۱۷۰۰۰۰/۱۹۵۰۰۰",
	description: "اسپشیال/کامشیال",
	image: "/images/default.png",
	details: {
		"text": "لاته،انبه"
	}
},
{
	id:  27,
	name: "آیس لاته بری 🧊",
	category: "latte",
	price: "۱۷۰۰۰۰/۱۹۵۰۰۰",
	description: "اسپشیال/کامشیال",
	image: "/images/default.png",
	details: {
		"text": "لاته، میوههای قرمز"
	}
},
{
	id:  28,
	name: "آیس لاته ترامیسو🧊",
	category: "latte",
	price: "۲۰۰۰۰۰/۲۲۵۰۰۰",
	description: "اسپشیال/کامشیال",
	image: "/images/default.png",
	details: {
		"text": "لاته،ترامیسو"
	}
},
{
	id:  29,
	name: "بیروو/breve",
	category: "latte",
	price: "۱۸۵۰۰۰/۲۱۰۰۰۰",
	description: "اسپشیال/کاشیال",
	image: "/images/default.png",
	details: {
		"text": "دبل اسپرسو،شیر،خامه"
	}
},
{
	id:  30,
	name: "کوکومینت🧊",
	category: "latte",
	price: "۱۹۵۰۰۰/۲۲۰۰۰۰",
	description: "اسپشیال/کامشیال",
	image: "/images/default.png",
	details: {
		"text": "دبل اسپرسو ،نعناع،نارگیل"
	}
},
{
	id:  31,
	name: "فانچین🧊",
	category: "latte",
	price: "۱۹۵۰۰۰/۲۲۰۰۰۰",
	description: "اسپشیال/کامشیال",
	image: "/images/default.png",
	details: {
		"text": "دبل اسپرسو،دارچین،فندق"
	}
},
{
	id:  32,
	name: "پیکسیداست🧊",
	category: "latte",
	price: "۱۹۵۰۰۰/۲۲۰۰۰۰",
	description: "اسپشیال/کامشیال",
	image: "/images/default.png",
	details: {
		"text": "دبل اسپرسو،نارگیل،شاه توت"
	}
},
{
	id:  33,
	name: "آفوگاتو پستو",
	category: "latte",
	price: "۱۹۵۰۰۰/۲۲۰۰۰۰",
	description: "اسپشیال/کامشیال",
	image: "/images/default.png",
	details: {
		"text": "دبل اسپرسو،بستنی،کرم پسته"
	}
},
{
	id:  34,
	name: "آفوگاتو مانگو ",
	category: "latte",
	price: "۱۹۵۰۰۰/۲۲۰۰۰۰",
	description: "اسپشیال/کامشیال",
	image: "/images/default.png",
	details: {
		"text": "دبل اسپرسو،بستنی،انبه"
	}
},
{
	id: 35,
	name: "چای",
	category: "Herbal",
	price: "۸۵۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  36,
	name: "چای زعفرانی",
	category: "Herbal",
	price: "۱۵۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  37,
	name: "دمنوش سرماخوردگی",
	category: "Herbal",
	price: "۱۱۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  38,
	name: "دمنوش ریلکسی",
	category: "Herbal",
	price: "۱۱۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  39,
	name: "چای ترش",
	category: "Herbal",
	price: "۱۱۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  40,
	name: "چای سبز",
	category: "Herbal",
	price: "۱۰۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  41,
	name: "هات چاکلت",
	category: "chocolate",
	price: "۱۷۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  42,
	name: "وایت چاکلت ",
	category: "chocolate",
	price: "۱۷۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  43,
	name: "ماسالا",
	category: "chocolate",
	price: "۱۷۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  44,
	name: "هات روز",
	category: "chocolate",
	price: "۱۸۵۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "وایت چاکلت، میوه قرمز"
	}
},
{
	id:  45,
	name: "هات پسته",
	category: "chocolate",
	price: "۲۰۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "وایت چاکلت ، کرم پسته"
	}
},
{
	id:  46,
	name: "هات وین ",
	category: "chocolate",
	price: "۲۳۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "وایت چاکلت،پودر پسته،زعفران،عسل،آجیل"
	}
},
{
	id:  47,
	name: "هات انبه دارچین",
	category: "chocolate",
	price: "۲۰۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "وایت چاکلت،انبه، دارچین"
	}
},
{
	id:  48,
	name: "سالاد سزار ",
	category: "Salad",
	price: "۳۲۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "۲۰۰ گرم فیله مرغ،کاهو پیچ، گوجه گیلاسی،زیتون سیاه،روغن زیتون، پنیر پارمسان،بچه بلال،سس سزار"
	}
},
{
	id:  49,
	name: "سیب زمینی سرخ شده",
	category: "Appetizer",
	price: "۱۵۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  50,
	name: "سیب زمینی ماشروم",
	category: "Appetizer",
	price: "۱۹۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "سیب زمینی،سس قارچ "
	}
},
{
	id:  51,
	name: "لیموناد",
	category: "mocktel",
	price: "۱۳۵۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": " "
	}
},
{
	id:  52,
	name: "موهیتو",
	category: "mocktel",
	price: "۱۵۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  53,
	name: "کامکس🧊🔥",
	category: "Brew",
	price: "۱۸۰۰۰۰",
	description: "\n",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  54,
	name: "فرنگی پرس",
	category: "Brew",
	price: "۱۵۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  55,
	name: "ترک🔥",
	category: "Brew",
	price: "۱۱۵۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  56,
	name: "کلدبرو🧊",
	category: "Brew",
	price: "۱۷۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  57,
	name: "تروپیکال برو🧊",
	category: "Brew",
	price: "۱۸۵۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "کلدبرو،میوههای استوایی"
	}
},
{
	id:  58,
	name: "بلادی برو🧊",
	category: "Brew",
	price: "۱۸۵۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "کلد برو ،میوههای قرمز"
	}
},
{
	id:  59,
	name: "بلک جکت برو🧊",
	category: "Brew",
	price: "۱۹۵۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "کلدبرو ، میوههای ملس،انرژی زا"
	}
},
{
	id:  60,
	name: "ماچالاته🧊🔥",
	category: "IceTea",
	price: "۲۰۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "پودرماچا، آبجوش،شیر"
	}
},
{
	id:  61,
	name: "اسپرولینا🧊🔥",
	category: "IceTea",
	price: "۲۱۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "پودر،اسپرولینا،آبجوش،شیر"
	}
},
{
	id: 62,
	name: "آیس ماچامانگو🧊",
	category: "IceTea",
	price: "۲۲۵۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "ماچا،شیر،انبه "
	}
},
{
	id:  63,
	name: "آیس ماچابری🧊",
	category: "IceTea",
	price: "۲۲۵۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "ماچا،شیر،میوههای قرمز"
	}
},
{
	id:  64,
	name: "آیس ماچا توت فرنگی",
	category: "IceTea",
	price: "۲۲۵۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "ماچا،شیر،توت فرنگی"
	}
},
{
	id:  65,
	name: "دوپامین اسپرولینا🧊",
	category: "IceTea",
	price: "۲۵۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "اسپرولینا،شیرفندق،انبه"
	}
},
{
	id:  66,
	name: "شیک نوتلا",
	category: "Shake",
	price: "۲۳۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "بستنی،نوتلا "
	}
},
{
	id:  67,
	name: "شیک بری",
	category: "Shake",
	price: "۲۵۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "بستنی ،میوههای قرمز"
	}
},
{
	id:  68,
	name: "شیک وی چاکلت💪🏽",
	category: "Shake",
	price: "۲۴۵۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "بستنی رژیمی،پودر وی شکلاتی"
	}
},
{
	id:  69,
	name: "شیک قهوه",
	category: "Shake",
	price: "۲۲۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "بستنی،اسپرسو"
	}
},
{
	id:  70,
	name: "شیک دوبی چاکلت",
	category: "Shake",
	price: "۲۷۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "بستنی پسته،شکلات تخته‌ای ،کرم پسته،رشته کاداییف"
	}
},
{
	id:  71,
	name: "گرین اپل",
	category: "smoothie",
	price: "۲۰۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "سیب سبز،کیوی"
	}
},
{
	id:  72,
	name: "تروپیکال",
	category: "smoothie",
	price: "۲۱۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "انبه،پشنفوروت ،موز"
	}
},
{
	id:  73,
	name: "رد دایمونت",
	category: "smoothie",
	price: "۱۹۵۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "میوههای قرمز"
	}
},
{
	id:  74,
	name: "هندوانه شاهتوت",
	category: "smoothie",
	price: "۲۰۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "هنوانه،شاهتوت"
	}
},
{
	id:  75,
	name: "چرچیل",
	category: "mocktel",
	price: "۱۳۵۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "لیمو،نمک"
	}
},
{
	id:  76,
	name: "رد موهیتو",
	category: "mocktel",
	price: "۱۷۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "موهیتو،توت فرنگی"
	}
},
{
	id:  77,
	name: "اورنج بری ",
	category: "mocktel",
	price: "۱۸۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "میوههای قرمز ،پرتقال،آب گازدار"
	}
},
{
	id:  78,
	name: "فشنکولادا",
	category: "mocktel",
	price: "۱۸۵۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "آناناس،نارگیل،فشنفوروت،آب گازدار"
	}
},
{
	id:  79,
	name: "مینت بری",
	category: "mocktel",
	price: "۱۸۰۰۰۰",
	description: "  ",
	image: "/images/default.png",
	details: {
		"text": "میوههای قرمز،نعناع،آی گازدار"
	}
},
{
	id:  80,
	name: "آبجوی کلاسیک ",
	category: "Bear",
	price: "۱۴۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  81,
	name: "لمون سالتی بییر ",
	category: "Bear",
	price: "۱۵۵۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "آبجو،لیمو، نمک"
	}
},
{
	id:  82,
	name: "اسپایسی بییر🌶️",
	category: "Bear",
	price: "۱۷۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "آیجو،چیزی،لیمو،نمک،سس مخصوص"
	}
},
{
	id:  83,
	name: "کلدبرو بییر",
	category: "Bear",
	price: "۱۹۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  84,
	name: "آیریش بییر",
	category: "Bear",
	price: "۱۵۵۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "آبجو،سیروب آیریش"
	}
},
{
	id:  85,
	name: "میوموسا",
	category: "Bear",
	price: "۱۶۵۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "آبجو،پرتقال،آب گازدار"
	}
},
{
	id:  86,
	name: "بلکبری",
	category: "Bear",
	price: "۱۷۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "آبجو،شاهتوت"
	}
},
{
	id:  87,
	name: "بییرفلوت",
	category: "Bear",
	price: "۱۷۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "آبجو،بستنی وانیل"
	}
},
{
	id:  88,
	name: "اپل اسپایس بری",
	category: "Bear",
	price: "۱۷۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "آبجو،سیب سبز،دارچین"
	}
},
{
	id: 89,
	name: "سرویس",
	category: "Bear",
	price: "۸۵۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "آجیل،بادام زمینی،"
	}
},
{
	id:  90,
	name: "پرده پلوی گوشت",
	category: "Main",
	price: "۴۸۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "برنج،گوشت رست شده،پیاز،زرشک،هویج،خمیر دستساز،دورچین"
	}
},
{
	id:  91,
	name: "پرده پلو مرغ",
	category: "Main",
	price: "۳۸۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "برنج،فیله مرغ،پیاز،هویج ،زرشک،خمیردستساز"
	}
},
{
	id: 92,
	name: "سالاد فصل",
	category: "Salad",
	price: "۱۰۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  93,
	name: "سالاد گاردن ",
	category: "Salad",
	price: "۲۸۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "کاهوپیچ،زیتون سیاه،سیب سبز،پرتقال،کیوی،توت فرنگی،عسل،بادام،سس مخصوص،لیمو ترش"
	}
},
{
	id:  94,
	name: "سالاد شیرازی",
	category: "Salad",
	price: "۷۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  95,
	name: "سوپ خامه",
	category: "Appetizer",
	price: "۱۱۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  96,
	name: "سوپ روز",
	category: "Appetizer",
	price: "۱۱۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  97,
	name: "دلمه",
	category: "Appetizer",
	price: "۱۸۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  98,
	name: "کشک بادمجان",
	category: "Appetizer",
	price: "۱۹۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  99,
	name: "چیکنرول",
	category: "Appetizer",
	price: "۲۴۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "فیله مرغ،قارچ،اسفناج،پنیرپیتزا"
	}
},
{
	id:  100,
	name: "میت رول",
	category: "Appetizer",
	price: "۲۶۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "خمیر دستساز،گوشت چرخ کرده،قارچ،اسفناج،پنیر پیتزا"
	}
},
{
	id:  101,
	name: "کیک بیسکویت",
	category: "Cake",
	price: "۱۲۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": ""
	}
},
{
	id:  102,
	name: "پیروتلا",
	category: "Cake",
	price: "۸۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "پیراشکی،نوتلا"
	}
},
{
	id:  103,
	name: "پیروپستو",
	category: "Cake",
	price: "۸۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "پیراشکی،کرم پسته "
	}
},
{
	id:  104,
	name: "کروسان اسپشیال",
	category: "Cake",
	price: "۲۶۰۰۰۰",
	description: "مناسب ۲نفر",
	image: "/images/default.png",
	details: {
		"text": "کروسان ،نوتلا،موز،توت فرنگی،پودرپسته"
	}
},
{
	id:  105,
	name: "کروسان شکلاتی",
	category: "Cake",
	price: "۱۵۰۰۰۰",
	description: " ",
	image: "/images/default.png",
	details: {
		"text": "کروسان،شکلات"
	}
},
{
	id:  106,
	name: "کروسان پنیر",
	category: "Cake",
	price: "۱۶۰۰۰۰",
	description: "برای ۲نفر",
	image: "/images/default.png",
	details: {
		"text": "کروسان ،پنیر،گوجه،خیار "
	}
}]
);
