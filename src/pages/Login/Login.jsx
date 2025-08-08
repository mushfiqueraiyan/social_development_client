import React, { use, useState } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { login, setUser, googleLogin } = use(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();

  const from = location.state?.from || "/";
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData.entries());

    login(email, password)
      .then((res) => {
        setUser(res.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        setUser(res.user);
        toast.success("Logged In Successfully");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-green-100 px-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
            Login to Your Account
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-green-600">
              <Mail className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="Email"
                className="w-full outline-none"
                name="email"
              />
            </div>

            <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-green-600">
              <Lock className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="Password"
                className="w-full outline-none"
                name="password"
              />
            </div>

            <button
              type="submit"
              className="btn w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold transition"
            >
              Login
            </button>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>

          <div className="my-6 text-center text-gray-500 text-sm">or</div>

          <button
            onClick={handleGoogleLogin}
            className="btn w-full flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 py-2 rounded-md transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to={"/registration"}
              state={{ from }}
              className="text-green-700 hover:underline font-medium"
            >
              Register now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
