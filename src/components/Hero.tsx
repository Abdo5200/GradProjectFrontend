import { Brain, Shield, Eye } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800 text-white">
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwQUklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzY5ODQ2OHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Medical AI Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <div className="flex justify-center gap-4 mb-8">
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">
              <Brain className="w-8 h-8" />
            </div>
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">
              <Shield className="w-8 h-8" />
            </div>
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">
              <Eye className="w-8 h-8" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            AI-Powered Multi-Disease Detection
          </h1>
          
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Privacy-Preserving, Interpretable Medical Imaging Analysis
          </p>
          
          <p className="text-lg text-blue-200 mb-10 max-w-2xl mx-auto">
            Collaborative healthcare AI that protects patient privacy while delivering accurate, explainable diagnostic insights
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white hover:text-blue-900 w-full sm:w-auto">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </div>
  );
}