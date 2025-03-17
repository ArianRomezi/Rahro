// const AdminPage = ({ data }) => {
//   return (
//     <div>
//       {data.data.length ? null : <p>اطلاعاتی موجود نیست</p>}

//       {data.data.map((i) => (
//         <div
//           key={i._id}
//           className=" flex justify-center flex-col border  border-style-solid rounded-lg p-5 m-4 bg-blue-200 shadow-lg shadow-blue-500/50"
//         >
//           <div className=" w-[100%] h-[70px] pb-5 flex justify-between content-center font-bold  text-blue-800 border-b-2 border-blue-400 mb-3 text-sm">
//             <h1 className="w-50%">نام و نام خانوادگی:</h1>
//             <span className="w-[50%] grid col-end-auto ">{i.name}</span>
//           </div>
//           <div className=" w-[100%] pb-4 flex justify-between content-center font-bold  text-blue-800 border-b-2 border-blue-400 mb-3">
//             <h1>سن:</h1>
//             <span>{i.age}</span>
//           </div>
//           <div className=" w-[100%] pb-4 flex justify-between content-center font-bold  text-blue-800 border-b-2 border-blue-400 mb-3">
//             <h1>سابقه بیماری:</h1>
//             <p className="w-[100%] h-[50px]">{i.desses}</p>
//           </div>
//           <div className=" w-[100%] pb-4 flex justify-between content-center font-bold  text-blue-800 border-b-2 border-blue-400 mb-3">
//             <h1>شماره:</h1>
//             <span>{i.number}</span>
//           </div>
//           <div className=" w-[100%] pb-4 flex justify-between content-center font-bold  text-blue-800 border-b-2 border-blue-400 mb-3">
//             <h1>آیدی تلگرام:</h1>
//             <span>{i.telegramId}</span>
//           </div>
//           <div className=" w-[100%] pb-4 flex justify-between content-center font-bold  text-blue-800 border-b-2 border-blue-400 mb-3">
//             <h1>ایمیل:</h1>
//             <span>{i.email}</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AdminPage;

const AdminPage = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto p-5">
      {data.length === 0 && (
        <p className="text-center text-gray-500">اطلاعاتی موجود نیست</p>
      )}

      {data.map((i) => (
        <div
          key={i._id}
          className="border border-white/20 rounded-xl p-6 mb-6 bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="border-b border-gray-300 pb-3 mb-3">
            <h1 className="font-bold text-[#EBEEED] text-sm mb-2 tracking-wide">
              نام و نام خانوادگی:
            </h1>
            <p className="text-[#CCD4D9] break-words">{i.name}</p>
          </div>

          <div className="border-b border-gray-300 pb-3 mb-3">
            <h1 className="font-bold text-[#EBEEED] text-sm mb-2 tracking-wide">
              سن:
            </h1>
            <p className="text-[#CCD4D9]">{i.age}</p>
          </div>

          <div className="border-b border-gray-300 pb-3 mb-3">
            <h1 className="font-bold text-[#EBEEED] text-sm mb-2 tracking-wide">
              ضعف های حرکتی:
            </h1>
            <p className="text-[#CCD4D9] break-words">{i.desses}</p>
          </div>

          <div className="border-b border-gray-300 pb-3 mb-3">
            <h1 className="font-bold text-[#EBEEED] text-sm mb-2 tracking-wide">
              شماره:
            </h1>
            <p className="text-[#CCD4D9]">{i.number}</p>
          </div>

          <div className="border-b border-gray-300 pb-3 mb-3">
            <h1 className="font-bold text-[#EBEEED] text-sm mb-2 tracking-wide">
              آیدی تلگرام:
            </h1>
            <p className="text-[#CCD4D9] break-words">{i.telegramId}</p>
          </div>

          <div>
            <h1 className="font-bold text-[#EBEEED] text-sm mb-2 tracking-wide">
              ایمیل:
            </h1>
            <p className="text-[#CCD4D9] break-all">{i.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPage;
