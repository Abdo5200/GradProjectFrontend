import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Brain, Mail, Lock, User } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { signup } from "../services/api";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Role } from "../types/auth";

export function SignupPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState<Role>(Role.USER);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      ...Object.fromEntries(formData.entries()),
      role,
    };
    try {
      await signup(data);
      toast.success("Account created successfully!");
      navigate("/login");
    } catch (error) {
      toast.error("Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-300/20 rounded-full blur-3xl"
        animate={{
          y: [0, 40, 0],
          x: [0, -25, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white hover:text-blue-100 transition-colors"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
            >
              <Brain className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-2xl">AI Disease Detection</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white rounded-2xl shadow-2xl p-8"
        >
          <div className="mb-8 text-center">
            <h1 className="text-3xl mb-2 text-slate-900">Create Account</h1>
            <p className="text-slate-600">
              Sign up to start using AI Disease Detection
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="space-y-2"
            >
              <Label htmlFor="firstName" className="text-slate-900">
                First Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  className="pl-10 h-11"
                  name="firstName"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-2"
            >
              <Label htmlFor="lastName" className="text-slate-900">
                Last Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  className="pl-10 h-11"
                  name="lastName"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="space-y-2"
            >
              <Label htmlFor="email" className="text-slate-900">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="pl-10 h-11"
                  name="email"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="space-y-2"
            >
              <Label htmlFor="password" className="text-slate-900">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10 h-11"
                  name="password"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="space-y-2"
            >
              <Label htmlFor="confirm-password" className="text-slate-900">
                Confirm Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10 h-11"
                  name="confirmPassword"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="space-y-2"
            >
              <Label htmlFor="role" className="text-slate-900">
                Role
              </Label>
              <Select
                required
                value={role}
                onValueChange={(value) => setRole(value as Role)}
              >
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={Role.USER}>User</SelectItem>
                  <SelectItem value={Role.ADMIN}>Admin</SelectItem>
                  <SelectItem value={Role.DOCTOR}>Doctor</SelectItem>
                  <SelectItem value={Role.PATIENT}>Patient</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </motion.div>
          </form>

          <div className="mt-6 text-center">
            <span className="text-slate-600">Already have an account? </span>
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Sign in
            </Link>
          </div>
        </motion.div>

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-white hover:text-blue-100 text-sm transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
