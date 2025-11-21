import { Link } from "react-router";
import { Brain, Home } from "lucide-react";
import { Button } from "../components/ui/button";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800 flex items-center justify-center p-4">
      <div className="text-center text-white">
        <div className="flex justify-center mb-6">
          <Brain className="w-20 h-20" />
        </div>
        <h1 className="text-6xl mb-4">404</h1>
        <h2 className="text-3xl mb-4">Page Not Found</h2>
        <p className="text-xl text-blue-200 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
