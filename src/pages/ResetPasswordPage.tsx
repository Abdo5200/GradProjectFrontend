import { Link, useNavigate, useSearchParams } from "react-router";
import { Brain, Lock, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { resetPassword } from "../services/api";

export function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const tokenParam = searchParams.get("token");
    if (!tokenParam) {
      toast.error("Invalid reset link", {
        description: "Please request a new password reset link",
      });
      navigate("/forgot-password");
    } else {
      setToken(tokenParam);
    }
  }, [searchParams, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords don't match", {
        description: "Please make sure both passwords are identical",
      });
      return;
    }

    if (password.length < 6) {
      toast.error("Password too short", {
        description: "Password must be at least 6 characters",
      });
      return;
    }

    if (!token) {
      toast.error("Invalid reset token");
      return;
    }

    setLoading(true);

    try {
      const response = await resetPassword(token, password);
      toast.success("Password reset successful!", {
        description: response.message || "You can now sign in with your new password",
      });
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      toast.error("Failed to reset password", {
        description: error instanceof Error ? error.message : "Please try again or request a new reset link",
      });
    } finally {
      setLoading(false);
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
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4"
            >
              <CheckCircle className="w-8 h-8 text-blue-600" />
            </motion.div>
            <h1 className="text-3xl mb-2 text-slate-900">Reset Password</h1>
            <p className="text-slate-600">Enter your new password below</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-2"
            >
              <Label htmlFor="password" className="text-slate-900">
                New Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10 h-11"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
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
              <Label htmlFor="confirm-password" className="text-slate-900">
                Confirm New Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10 h-11"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="bg-blue-50 border border-blue-200 rounded-lg p-4"
            >
              <p className="text-sm text-slate-900 mb-2">
                Password must contain:
              </p>
              <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
                <li>At least 8 characters</li>
                <li>One uppercase letter</li>
                <li>One lowercase letter</li>
              </ul>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white"
                disabled={loading}
              >
                {loading ? "Resetting..." : "Reset Password"}
              </Button>
            </motion.div>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Back to Sign In
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
