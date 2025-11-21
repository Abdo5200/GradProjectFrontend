import { Brain, Github, Mail, BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-6 h-6 text-cyan-400" />
              <span className="text-xl text-white">MedAI</span>
            </div>
            <p className="text-slate-400">
              Privacy-preserving, interpretable medical imaging analysis powered by Federated Learning and Explainable AI.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Project</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">Research Paper</a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">Team</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Connect</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
                <span>GitHub Repository</span>
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>Contact Us</span>
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <BookOpen className="w-5 h-5" />
                <span>Documentation</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>© 2024 AI Disease Detection Project. Graduation Project - Healthcare AI & Privacy.</p>
        </div>
      </div>
    </footer>
  );
}
