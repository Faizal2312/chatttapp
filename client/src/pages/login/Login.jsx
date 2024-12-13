const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96  mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500">ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input w-full h-10 input-bordered"
            />
          </div>
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-200 my-2 inline-block"
          >
            Don't have an account?
          </a>
          <div>
            <button className="btn btn-block btn-md">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

//Starter code for this file
// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96  mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login
//           <span className="text-blue-500">ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">password</span>
//             </label>
//             <input
//               type="text"
//               placeholder="password"
//               className="input w-full h-10 input-bordered"
//             />
//           </div>
//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-200 my-2 inline-block"
//           >
//             Don't have an account?
//           </a>
//           <div>
//             <button className="btn btn-block btn-md">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
