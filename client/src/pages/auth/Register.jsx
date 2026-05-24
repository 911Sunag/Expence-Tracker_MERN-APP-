
import { Link } from "react-router-dom";

import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../components/ui/Input";
import PrimaryButton from "../../components/ui/PrimaryButton";

import {
  User,
  Mail,
  Lock,
} from "lucide-react";

import registerImage from "../../assets/register.png";

const Register = () => {
  return (
    <AuthLayout
      image={registerImage}
      title="Create Account 🚀"
      subtitle="Join us and take control of your finances."
    >
      <div className="max-w-md w-full mx-auto">
        
        {/* LOGO */}
        <div className="mb-8">
          <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-purple-500 to-violet-600 flex items-center justify-center text-white text-2xl font-bold mb-6">
            $
          </div>

          <h1 className="text-4xl font-bold mb-3">
            Create Account 🚀
          </h1>

          <p className="text-gray-500">
            Join us and take control of your finances.
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-5">
          
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            icon={<User size={18} />}
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            icon={<Mail size={18} />}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Create a password"
            icon={<Lock size={18} />}
          />

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            icon={<Lock size={18} />}
          />

          {/* TERMS */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <input type="checkbox" />

            <p>
              I agree to the{" "}
              <span className="text-purple-600 font-medium cursor-pointer">
                Terms & Conditions
              </span>
            </p>
          </div>

          {/* BUTTON */}
          <PrimaryButton>
            Register
          </PrimaryButton>

          {/* LOGIN LINK */}
          <p className="text-center text-gray-500 text-sm">
            Already have an account?{" "}
            <Link
              to="/"
              className="text-purple-600 font-semibold"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Register;