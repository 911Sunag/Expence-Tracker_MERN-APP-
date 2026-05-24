import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../components/ui/Input";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/ui/PrimaryButton";

import { Mail, Lock } from "lucide-react";

import loginImage from "../../assets/login.png";

const Login = () => {
  return (
    <AuthLayout
      image={loginImage}
      title="Welcome Back 👋"
      subtitle="Login to continue managing your expenses."
    >
      <div className="max-w-md w-full mx-auto">
        <div className="mb-8">
          <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-purple-500 to-violet-600 flex items-center justify-center text-white text-2xl font-bold mb-6">
            $
          </div>

          <h1 className="text-4xl font-bold mb-3">Welcome Back 👋</h1>

          <p className="text-gray-500">
            Login to continue managing your expenses.
          </p>
        </div>

        <form className="space-y-5">
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            icon={<Mail size={18} />}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            icon={<Lock size={18} />}
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-500">
              <input type="checkbox" />
              Remember me
            </label>

            <button type="button" className="text-purple-600 font-medium">
              Forgot password?
            </button>
          </div>

          <PrimaryButton>Login</PrimaryButton>
        </form>
        <p className="text-center text-gray-500 text-sm mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-purple-600 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
