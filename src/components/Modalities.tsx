import { Scan, Activity, X } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion } from "motion/react";

export function Modalities() {
  const modalities = [
    {
      icon: Scan,
      title: "MRI Scans",
      description: "Magnetic Resonance Imaging"
    },
    {
      icon: Activity,
      title: "CT Scans",
      description: "Computed Tomography"
    },
    {
      icon: X,
      title: "X-Ray Images",
      description: "Radiographic Imaging"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="modalities" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4 text-slate-900">
            Supported Imaging Modalities
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Disease-agnostic framework compatible with multiple medical imaging types
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {modalities.map((modality, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="border-slate-200 hover:shadow-lg transition-all">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className="flex justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                        <modality.icon className="w-8 h-8" />
                      </div>
                    </motion.div>
                    <h3 className="text-xl mb-2 text-slate-900">{modality.title}</h3>
                    <p className="text-slate-600">{modality.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
