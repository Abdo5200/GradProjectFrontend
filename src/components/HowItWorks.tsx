import { Upload, Network, Eye, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Upload Medical Images",
      description: "Healthcare institutions upload medical imaging data (MRI, CT, X-ray) securely to their local nodes."
    },
    {
      number: "02",
      icon: Network,
      title: "Federated Training",
      description: "Models are trained locally on each institution's data, with only model updates shared - never the raw data."
    },
    {
      number: "03",
      icon: Eye,
      title: "AI Analysis & XAI",
      description: "The trained model analyzes images and provides visual explanations highlighting regions of interest."
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Clinical Decision Support",
      description: "Get accurate disease predictions with interpretable results to support clinical decision-making."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4 text-slate-900">
            How It Works
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A simple, secure workflow that protects patient privacy while delivering accurate results
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-6xl text-blue-100 mb-4"
              >
                {step.number}
              </motion.div>
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              <h3 className="text-xl mb-3 text-slate-900">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated connection lines */}
        <div className="hidden lg:block relative mt-8">
          <svg className="w-full h-24" viewBox="0 0 1200 100">
            <motion.path
              d="M 100 50 L 400 50 M 500 50 L 700 50 M 800 50 L 1100 50"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
