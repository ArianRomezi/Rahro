"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signupHandler = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      toast.error("رمز و تکرار آن برابر نیست");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    setLoading(false);

    if (res.status === 201) {
      //اینجا چون میخوایم بفرستیمش به یک صفحه دیگه باید از روتر استفاده بکنیم ولی باید توجه کرد که روتر باید از نویگیشن ایمپورت بشه
      router.push("/signin");
    } else {
      toast.error(data.error);
    }
  };

  //   return (
  //     <div className="max-w-4xl mx-auto p-5">
  //       <h4>فرم ثبت نام</h4>
  //       <form>
  //         <label>ایمیل:</label>
  //         <input
  //           type="text"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //         />
  //         <label>رمز عبور:</label>
  //         <input
  //           type="password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //         />
  //         <label>تکرار رمز عبور:</label>
  //         <input
  //           type="password"
  //           value={rePassword}
  //           onChange={(e) => setRePassword(e.target.value)}
  //         />
  //         {loading ? (
  //           <div className="flex justify-center mt-6">
  //             <ThreeDots
  //               color="#304ffe"
  //               width="50"
  //               ariaLabel="three-dots-loading"
  //               visible={true}
  //               wrapperStyle={{ margin: "auto" }}
  //             />
  //           </div>
  //         ) : (
  //           <button type="submit" onClick={signupHandler}>
  //             ثبت نام
  //           </button>
  //         )}
  //       </form>
  //       <p>
  //         حساب کاربری دارید؟
  //         <Link href="/signin">ورود</Link>
  //       </p>
  //       <Toaster />
  //     </div>
  //   );
  // }
  return (
    <div className="min-h-screen flex items-center justify-centerbg-[#1c262f] p-5">
      <div className="bg-white/10 rounded-lg shadow-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-[#EBEEED] mb-6">
          ثبت‌نام
        </h2>
        <form onSubmit={signupHandler} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#EBEEED]">
              ایمیل
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" bg-white/15 mt-1 block w-full px-4 py-2 border-solid border-white/20 rounded-lg focus:border-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#EBEEED]">
              رمز عبور
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" bg-white/15 mt-1 block w-full px-4 py-2 border-solid border-white/20 rounded-lg focus:border-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#EBEEED]">
              تکرار رمز عبور
            </label>
            <input
              type="password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              className=" bg-white/15 mt-1 block w-full px-4 py-2 border-solid border-white/20 rounded-lg focus:border-none"
              required
            />
          </div>
          <div>
            {loading ? (
              <div className="flex justify-center mt-4">
                <ThreeDots color="#304ffe" width={50} />
              </div>
            ) : (
              <button
                type="submit"
                className="w-full bg-gradient-to-br from-[#EBEEED] to-[#CCD4D9] text-[#3C4855] py-2 rounded-lg "
              >
                ثبت‌نام
              </button>
            )}
          </div>
        </form>
        <p className="text-center text-sm text-[#EBEEED] mt-4">
          حساب کاربری دارید؟
          <Link href="/signin" className="text-white/20 hover:underline ml-1">
            {" "}
            ورود
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
}

export default SignupPage;
