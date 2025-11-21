import { Link } from "react-router";
import { Brain } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-slate-900">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg">AI Disease Detection</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-700 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-slate-700 hover:text-blue-600 transition-colors">
              How It Works
            </a>
            <a href="#modalities" className="text-slate-700 hover:text-blue-600 transition-colors">
              Modalities
            </a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
            <Link to="/login" className="text-slate-700 hover:text-blue-600 transition-colors">
              Log In
            </Link>
            <Link to="/signup">
              <Button className="bg-blue-600 hover:bg-blue-700 cursor-pointer">
                Sign Up
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}