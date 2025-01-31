
import toast from "react-hot-toast";
import { useAuth } from "../../Hooks";
import { useState } from "react";

const LoginAdmin = () => {
  const { login, isLoading, user } = useAuth();
  console.log(user);
  console.log(isLoading);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    toast.promise(login(form.email, form.password), {
      loading: "Logging in...",
      success: "Logged in successfully",
      error: "Invalid email or password",
    });
  };


  return (
    <>
      <div className="flex flex-col items-center mt-10 w-[90%] mx-auto md:w-[500px]">
        <h3 className="">For Admin Use Only</h3>
        {user && <p>Welcome {user?.name}</p>}
         <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full mt-10">
          <input
            type="text"
            placeholder="Email"
            className="border-1 border-gray-300 rounded-md p-2"
            name="email"
            value={form.email}


            onChange={handleChange}


          />
          <input
            type="password"
            placeholder="Password"
            className="border-1 border-gray-300 rounded-md p-2"
            name="password"
            value={form.password}
            onChange={handleChange}

          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-red-700 text-white p-2 rounded-xl"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>




    </>
  );
};

export default LoginAdmin;
