// import AdminPage from "@/components/AdminPage";
// import Information from "@/models/Information";
// import User from "@/models/User";
// import connectDB from "@/utils/connectDB";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
// import { redirect } from "next/navigation";

// const Admin = async () => {
//   await connectDB();
//   const res = await fetch("http://localhost:3000/api/information", {
//     cache: "no-store",
//   });

//   const data = await res.json();

//   const session = await getServerSession(authOptions);

//   if (!session) redirect("/signin");

//   const user = await User.findOne({ email: session.user.email });

//   if (user.role !== "ADMIN") redirect("/");

//   return <AdminPage data={data} />;
// };

// export default Admin;
import AdminPage from "@/components/AdminPage";
import Information from "@/models/Information";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Admin = async () => {
  // اتصال به دیتابیس
  await connectDB();

  // بررسی احراز هویت
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  // دریافت اطلاعات کاربر و بررسی نقش
  const user = await User.findOne({ email: session.user.email }).select("role");
  if (!user || user.role !== "ADMIN") redirect("/");

  // دریافت اطلاعات فرم‌ها از دیتابیس
  const data = await Information.find();

  return <AdminPage data={data} />;
};

export default Admin;
