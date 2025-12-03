import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import {
  Brain,
  Upload,
  Image as ImageIcon,
  Loader2,
  CheckCircle,
  XCircle,
  LogOut,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Progress } from "../components/ui/progress";
import { useAuth } from "../context/AuthContext";

export function ImageAnalysisPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Please login to access this page");
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = async () => {
    await logout();
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload an image file");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target?.result as string);
      setAnalysisComplete(false);
      setAnalysisResults(null);
      toast.success("Image uploaded successfully!");
    };
    reader.readAsDataURL(file);
  };

  const handleAnalyze = () => {
    if (!selectedImage) {
      toast.error("Please upload an image first");
      return;
    }

    setIsAnalyzing(true);
    setAnalysisComplete(false);

    // Simulate analysis with mock results
    setTimeout(() => {
      const mockResults = {
        predictions: [
          { disease: "Normal", confidence: 92.5 },
          { disease: "Pneumonia", confidence: 4.2 },
          { disease: "COVID-19", confidence: 2.1 },
          { disease: "Tuberculosis", confidence: 1.2 },
        ],
        modalityDetected: "X-Ray",
        processingTime: "2.3s",
        modelConfidence: "High",
      };
      setAnalysisResults(mockResults);
      setIsAnalyzing(false);
      setAnalysisComplete(true);
      toast.success("Analysis complete!");
    }, 3000);
  };

  const handleReset = () => {
    setSelectedImage(null);
    setAnalysisComplete(false);
    setAnalysisResults(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-white hover:text-blue-100 transition-colors"
          >
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl">AI Disease Detection</span>
          </Link>
          <Button
            variant="ghost"
            className="text-white hover:text-blue-100 hover:bg-white/10 cursor-pointer"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl text-white mb-2">Medical Image Analysis</h1>
            <p className="text-blue-100">
              Upload a medical image for AI-powered disease detection
            </p>
          </div>

          {/* Upload Area */}
          <Card className="bg-white p-8 mb-6">
            <AnimatePresence mode="wait">
              {!selectedImage ? (
                <motion.div
                  key="upload"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
                    dragActive
                      ? "border-blue-500 bg-blue-50"
                      : "border-slate-300 hover:border-blue-400 hover:bg-slate-50"
                  }`}
                >
                  <Upload className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-xl text-slate-900 mb-2">
                    Drop your medical image here
                  </h3>
                  <p className="text-slate-600 mb-4">
                    or click to browse (MRI, CT, X-Ray supported)
                  </p>
                  <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileInput}
                  />
                  <Button
                    type="button"
                    onClick={() =>
                      document.getElementById("fileInput")?.click()
                    }
                    className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                  >
                    <ImageIcon className="w-4 h-4 mr-2" />
                    Select Image
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="space-y-4"
                >
                  <div className="relative rounded-xl overflow-hidden bg-slate-100">
                    <img
                      src={selectedImage}
                      alt="Selected medical scan"
                      className="w-full h-auto max-h-96 object-contain mx-auto"
                    />
                  </div>
                  <div className="flex gap-3 mt-6">
                    <Button
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white h-12 cursor-pointer"
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Brain className="w-4 h-4 mr-2" />
                          Analyze Image
                        </>
                      )}
                    </Button>
                    <Button
                      onClick={handleReset}
                      disabled={isAnalyzing}
                      variant="outline"
                      className="h-12 cursor-pointer"
                    >
                      <XCircle className="w-4 h-4 mr-2" />
                      Clear
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>

          {/* Analysis Progress */}
          <AnimatePresence>
            {isAnalyzing && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Card className="bg-white p-6 mb-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
                      <span className="text-slate-900">
                        Processing image with AI model...
                      </span>
                    </div>
                    <Progress value={66} className="h-2" />
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-slate-600">Preprocessing</div>
                        <div className="text-green-600 flex items-center justify-center gap-1 mt-1">
                          <CheckCircle className="w-4 h-4" />
                          Complete
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-slate-600">AI Analysis</div>
                        <div className="text-blue-600 flex items-center justify-center gap-1 mt-1">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Processing
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-slate-600">Generating Report</div>
                        <div className="text-slate-400 mt-1">Pending</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results */}
          <AnimatePresence>
            {analysisComplete && analysisResults && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Card className="bg-white p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl text-slate-900">
                        Analysis Results
                      </h2>
                      <p className="text-slate-600">
                        {analysisResults.modalityDetected} • Processed in{" "}
                        {analysisResults.processingTime}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-slate-900 mb-3">Disease Predictions</h3>
                    {analysisResults.predictions.map(
                      (pred: any, index: number) => (
                        <motion.div
                          key={pred.disease}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-slate-900">
                              {pred.disease}
                            </span>
                            <span
                              className={`${
                                pred.confidence > 50
                                  ? "text-green-600"
                                  : "text-slate-600"
                              }`}
                            >
                              {pred.confidence.toFixed(1)}%
                            </span>
                          </div>
                          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${pred.confidence}%` }}
                              transition={{
                                delay: index * 0.1 + 0.2,
                                duration: 0.6,
                              }}
                              className={`h-full ${
                                pred.confidence > 50
                                  ? "bg-green-500"
                                  : "bg-slate-400"
                              }`}
                            />
                          </div>
                        </motion.div>
                      )
                    )}
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-slate-700">
                      <strong className="text-slate-900">Note:</strong> This is
                      an AI-assisted analysis for educational and research
                      purposes. Always consult with qualified healthcare
                      professionals for medical diagnosis.
                    </p>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
