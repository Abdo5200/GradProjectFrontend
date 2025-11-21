import { Brain } from "lucide-react";
import { Link } from "react-router";

export function NewFooter() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl text-white">AI Disease Detection</span>
            </div>
            <p className="text-slate-400 max-w-md">
              Privacy-preserving, interpretable medical imaging analysis powered by Federated Learning and Explainable AI.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#modalities" className="hover:text-blue-400 transition-colors">Modalities</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Account</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="hover:text-blue-400 transition-colors">Log In</Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-blue-400 transition-colors">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>© 2024 AI Disease Detection. Graduation Project - Healthcare AI & Privacy.</p>
        </div>
      </div>
    </footer>
  );
}
