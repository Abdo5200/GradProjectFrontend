import { Shield, Brain, Network, ScanEye, Zap, Lock } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

export function NewFeatures() {
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const features = [
    {
      icon: Shield,
      title: "Privacy-Preserving",
      description: "Federated Learning enables collaborative training across healthcare institutions without sharing sensitive patient data.",
      color: "bg-blue-100 text-blue-600",
      details: "Our federated learning approach ensures that patient data never leaves the healthcare institution. Only model updates are shared, maintaining complete data sovereignty and compliance with healthcare regulations like HIPAA and GDPR."
    },
    {
      icon: Brain,
      title: "Explainable AI",
      description: "Visual explanations and interpretability features provide clinical decision support and build trust in AI predictions.",
      color: "bg-purple-100 text-purple-600",
      details: "Advanced XAI techniques like Grad-CAM and attention mechanisms highlight regions of interest in medical images, helping clinicians understand and validate AI predictions for better patient outcomes."
    },
    {
      icon: Network,
      title: "Collaborative Training",
      description: "Multiple institutions can contribute to model improvement while maintaining complete data sovereignty.",
      color: "bg-green-100 text-green-600",
      details: "Our system allows hospitals and research centers worldwide to collaborate on model training without compromising patient privacy, leading to more robust and generalizable AI models."
    },
    {
      icon: ScanEye,
      title: "Multi-Disease Detection",
      description: "Disease-agnostic framework capable of detecting multiple conditions from various medical imaging modalities.",
      color: "bg-orange-100 text-orange-600",
      details: "The framework supports detection of multiple diseases across different imaging types, from pneumonia in chest X-rays to tumors in MRI scans, providing comprehensive diagnostic support."
    },
    {
      icon: Zap,
      title: "High Accuracy",
      description: "State-of-the-art deep learning models achieve exceptional accuracy in disease classification and detection.",
      color: "bg-yellow-100 text-yellow-600",
      details: "Leveraging advanced neural network architectures and transfer learning, our models achieve accuracy rates comparable to expert radiologists while processing images in seconds."
    },
    {
      icon: Lock,
      title: "Secure & Compliant",
      description: "Built with healthcare data privacy regulations in mind, ensuring compliance with medical data standards.",
      color: "bg-red-100 text-red-600",
      details: "End-to-end encryption, secure aggregation protocols, and compliance with international healthcare standards ensure your data and models are protected at every step."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4 text-slate-900">
            Powerful Features
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our framework combines cutting-edge AI technology with privacy-first principles to revolutionize medical imaging analysis
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedFeature(feature)}
              >
                <Card className="border-slate-200 hover:shadow-lg transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <motion.div
                      className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-xl mb-3 text-slate-900">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={!!selectedFeature} onOpenChange={() => setSelectedFeature(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              {selectedFeature && (
                <>
                  <div className={`w-10 h-10 ${selectedFeature.color} rounded-xl flex items-center justify-center`}>
                    <selectedFeature.icon className="w-5 h-5" />
                  </div>
                  {selectedFeature.title}
                </>
              )}
            </DialogTitle>
            <DialogDescription className="pt-4">
              {selectedFeature?.details}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}
