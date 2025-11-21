import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Brain, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

export function WelcomeDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome");
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("hasSeenWelcome", "true");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex justify-center mb-4"
          >
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
              <Brain className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <DialogTitle className="text-center text-2xl">
            Welcome to AI Disease Detection!
          </DialogTitle>
          <DialogDescription className="text-center pt-4">
            Experience the future of medical imaging with our privacy-preserving, explainable AI framework.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h4 className="text-sm text-slate-900">Privacy-First Approach</h4>
              <p className="text-sm text-slate-600">Your data never leaves your institution</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <h4 className="text-sm text-slate-900">Explainable Results</h4>
              <p className="text-sm text-slate-600">Visual explanations for every prediction</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-4">
          <Link to="/signup" onClick={() => setOpen(false)}>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Get Started Free
            </Button>
          </Link>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Explore Platform
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
