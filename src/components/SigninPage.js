"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { ThreeDots } from "react-loader-spinner";

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signinHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    }); //در اینجا از ساین این نکیست آوف کمک گرفتیم

    setLoading(false);

    if (res.error) {
      toast.error(res.error);
    } else {
      //اینجا چون میخوایم بفرستیمش به یک صفحه دیگه باید از روتر استفاده بکنیم ولی باید توجه کرد که روتر باید از نویگیشن ایمپورت بشه
      router.push("/");
    }
  };

  // return (
  //   <div max-w-4xl mx-auto p-5>
  //     <h4>فرم ورود</h4>
  //     <form>
  //       <label>ایمیل:</label>
  //       <input
  //         type="text"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //       />
  //       <label>رمز عبور:</label>
  //       <input
  //         type="password"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //       />

  //       {loading ? (
  //         <div className="flex justify-center mt-6">
  //           <ThreeDots
  //             color="#304ffe"
  //             width="50"
  //             ariaLabel="three-dots-loading"
  //             visible={true}
  //             wrapperStyle={{ margin: "auto" }}
  //           />
  //         </div>
  //       ) : (
  //         <button type="submit" onClick={signinHandler}>
  //           ورود
  //         </button>
  //       )}
  //     </form>
  //     <p>
  //       حساب کاربری ندارید؟
  //       <Link href="/signup">ثبت نام</Link>
  //     </p>
  //     <Toaster />
  //   </div>
  // );
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1c262f] p-4">
      <div className="bg-white/10 shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#EBEEED] mb-4 text-center">
          ورود به حساب
        </h2>
        <form className="space-y-4" onSubmit={signinHandler}>
          <div>
            <label className="block text-sm font-medium text-[#EBEEED]">
              ایمیل:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/15 mt-1 block w-full p-2 border-2 border-solid border-white/20 rounded-lg focus:border-none "
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#EBEEED]">
              رمز عبور:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white/15 mt-1 block w-full p-2 border-2 border-solid border-white/20 rounded-lg focus:border-none "
              required
            />
          </div>
          <div className="flex justify-center">
            {loading ? (
              <ThreeDots
                color="#304ffe"
                width={50}
                ariaLabel="three-dots-loading"
              />
            ) : (
              <button
                type="submit"
                className="w-full bg-gradient-to-br from-[#EBEEED] to-[#CCD4D9] text-[#3C4855] py-2 rounded-lg"
              >
                ورود
              </button>
            )}
          </div>
        </form>
        <p className="text-center text-sm mt-4 text-[#EBEEED]">
          حساب کاربری ندارید؟
          <Link href="/signup" className="text-white/20 hover:underline">
            {" "}
            ثبت نام
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
}

export default SigninPage;
