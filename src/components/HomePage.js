import Link from "next/link";
import { RiAdminLine } from "react-icons/ri";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#3a4b5c] to-[#1c262f] text-[#EBEEED] px-6 py-10">
      <Link href="/admin">
        <button className="fixed top-4 left-4 bg-white/20 backdrop-blur-md p-3 rounded-full shadow-lg transition-all hover:bg-white/30 hover:scale-110">
          <RiAdminLine size={24} className="text-[#EBEEED]" />
        </button>
      </Link>

      <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide mb-6 text-white drop-shadow-lg">
        رَهرو
      </h1>

      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl max-w-2xl text-center border border-white/20 hover:shadow-2xl transition-all">
        <p className="text-lg md:text-xl font-semibold leading-relaxed">
          <span className="font-extrabold text-white">رَهرو</span>، مجموعه ای با
          هدف ساخت مسیری برای پیشرفت ، بهبود و درک بهتر حرکت است. رَهرو در
          راستای این هدف، با استفاده از ساده ترین روش ها، چه در محیط خانه و چه
          محیط ورزشی، تلاش  بر بهبود درد های مزمن مفصلی، ضعف های عضلانی و تقویت
          فاکتور های آمادگی جسمانی برای افزایش کیفیت حرکت شما خواهد داشت.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-xs md:max-w-lg mt-10">
        <Link href="/information" className="w-full">
          <button className="w-full bg-gradient-to-br from-[#EBEEED] to-[#CCD4D9] text-[#3C4855] px-8 py-4 rounded-xl shadow-lg text-lg font-bold uppercase tracking-wide transition-all hover:scale-105 hover:shadow-2xl hover:from-[#5E7389] hover:to-[#3A4B5C] active:scale-100">
            فرم ثبت نام
          </button>
        </Link>
        <Link href="/" className="w-full">
          <button className="w-full bg-gradient-to-br from-[#EBEEED] to-[#CCD4D9] text-[#3C4855] px-8 py-4 rounded-xl shadow-lg text-lg font-bold uppercase tracking-wide transition-all hover:scale-105 hover:shadow-2xl hover:from-[#6B7E94] hover:to-[#4E6276] active:scale-100">
            پرداخت هزینه
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
