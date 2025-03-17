"use client";

import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const InformationPage = () => {
  const router = useRouter();

  const [information, setInformation] = useState({
    name: "",
    age: "",
    desses: "",
    number: "",
    telegramId: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInformation({ ...information, [name]: value });
  };

  const submitHandler = async () => {
    setLoading(true);

    const res = await fetch("/api/information", {
      method: "POST",
      body: JSON.stringify(information),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    setLoading(false);

    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.massage);
      setInformation({
        name: "",
        age: "",
        desses: "",
        number: "",
        telegramId: "",
        email: "",
      });
      router.push("/");
    }
  };

  return (
    <div className="w-full md:w-[1000px] h-auto p-4 md:p-7 rounded-lg md:bg-white/10 md:shadow-md mx-auto">
      <h1 className="w-full h-10 bg-white/10 rounded-xl text-center flex items-center justify-center font-bold mb-8 text-[#EBEEED]">
        فرم ثبت نام:
      </h1>
      <form>
        <div className="space-y-4">
          <div className="w-full flex flex-col md:flex-row items-center gap-2">
            <label className="font-bold text-sm w-full md:w-1/4 text-[#EBEEED]">
              نام و نام خانوادگی:
            </label>
            <input
              type="text"
              placeholder="نام خود را وارد کنید"
              name="name"
              value={information.name}
              onChange={changeHandler}
              className="w-full bg-white/15  text-[#EBEEED] md:w-3/4 border-2 border-solid border-white/20 rounded-lg p-2 focus:pr-2 transition-all duration-300 focus:border-none text-sm font-bold"
            />
          </div>

          <div className="w-full flex flex-col md:flex-row items-center gap-2">
            <label className="font-bold text-sm w-full md:w-1/4 text-[#EBEEED]">
              سن :
            </label>
            <input
              type="number"
              placeholder="عدد وارد کنید"
              name="age"
              value={information.age}
              onChange={changeHandler}
              className="w-full bg-white/15 text-[#EBEEED] md:w-3/4 border-2 border-solid border-white/20 rounded-lg p-2 focus:pr-2 transition-all duration-300 focus:border-none text-sm font-bold"
            />
          </div>

          <div className="w-full flex flex-col md:flex-row items-start gap-2">
            <label className="font-bold text-sm w-full md:w-1/4 text-[#EBEEED]">
              ضعف های حرکتی :
            </label>
            <textarea
              name="desses"
              value={information.desses}
              onChange={changeHandler}
              className="w-full bg-white/15 text-[#EBEEED] md:w-3/4 h-[100px] border-2 border-solid border-white/20 rounded-lg p-2 focus:pr-2 transition-all duration-300 focus:border-none text-sm font-bold"
            />
          </div>

          <div className="w-full flex flex-col md:flex-row items-center gap-2">
            <label className="font-bold text-sm w-full md:w-1/4 text-[#EBEEED]">
              تلفن همراه :
            </label>
            <input
              type="number"
              placeholder="مثال:09123456789"
              name="number"
              value={information.number}
              onChange={changeHandler}
              className="w-full bg-white/15 text-[#EBEEED] md:w-3/4 border-2 border-solid border-white/20 rounded-lg p-2 focus:pr-2 transition-all duration-300 focus:border-none text-sm font-bold"
            />
          </div>

          <div className="w-full flex flex-col md:flex-row items-center gap-2">
            <label className="font-bold text-sm w-full md:w-1/4 text-[#EBEEED]">
              آیدی تلگرام :
            </label>
            <input
              type="text"
              placeholder="اختیاری"
              name="telegramId"
              value={information.telegramId}
              onChange={changeHandler}
              className="w-full bg-white/15 text-[#EBEEED] md:w-3/4 border-2 border-solid border-white/20 rounded-lg p-2 focus:pr-2 transition-all duration-300 focus:border-none text-sm font-bold"
            />
          </div>

          <div className="w-full flex flex-col md:flex-row items-center gap-2">
            <label className="font-bold text-sm w-full md:w-1/4 text-[#EBEEED]">
              ایمیل :
            </label>
            <input
              type="email"
              placeholder="اختیاری"
              name="email"
              value={information.email}
              onChange={changeHandler}
              className="w-full bg-white/15 text-[#EBEEED] md:w-3/4 border-2 border-solid border-white/20 rounded-lg p-2 focus:pr-2 transition-all duration-300 focus:border-none text-sm font-bold"
            />
          </div>
        </div>
        <Toaster />
        {loading ? (
          <div className="flex justify-center mt-6">
            <ThreeDots
              color="#304ffe"
              width="50"
              ariaLabel="three-dots-loading"
              visible={true}
              wrapperStyle={{ margin: "auto" }}
            />
          </div>
        ) : (
          <button
            onClick={submitHandler}
            className="w-full md:w-[40%] p-2 flex justify-center items-center rounded-lg font-bold text-sm bg-gradient-to-br from-[#EBEEED] to-[#CCD4D9] text-[#3C4855] mt-8 md:mr-[30%] md:ml-[30%] hover:scale-105 transition-all"
            type="submit"
          >
            ثبت اطلاعات
          </button>
        )}
      </form>
    </div>
  );
};
export default InformationPage;
