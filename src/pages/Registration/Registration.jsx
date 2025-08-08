import React, { use, useState } from "react";
import { Mail, Lock, User, Image, LogIn } from "lucide-react";
import { AuthContext } from "../../context/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Registration = () => {
  const [error, setError] = useState("");

  const { setUser, googleLogin, createWithEmail } = use(AuthContext);

  const location = useLocation();

  const from = location.state?.from || "/";
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...restData } = Object.fromEntries(
      formData.entries()
    );

    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (!uppercaseRegex.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }

    if (!lowercaseRegex.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }

    createWithEmail(email, password)
      .then((res) => {
        const profileInfo = {
          displayName: formData.get("name"),
          photoURL: formData.get("profile"),
        };

        updateProfile(auth.currentUser, profileInfo)
          .then(() => {})
          .catch((err) => {
            setError(err.message);
          });
        toast.success("Account created successfully");
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
        toast.success("Account created successfully");
        setUser(res.user);
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
            Create Your Account
          </h2>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-green-600">
              <User className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full outline-none"
                name="name"
                required
              />
            </div>

            <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-green-600">
              <Image className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Profile Image URL"
                className="w-full outline-none"
                name="profile"
              />
            </div>

            <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-green-600">
              <Mail className="w-5 h-5 text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="Email"
                className="w-full outline-none"
                name="email"
                required
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
              className=" btn w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold transition"
            >
              Register
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
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-green-700 hover:underline font-medium"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
