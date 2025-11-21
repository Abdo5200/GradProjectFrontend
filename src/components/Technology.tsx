import { Server, Layers, Scan, Database } from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Technology() {
  const technologies = [
    {
      icon: Server,
      title: "Federated Learning",
      description: "Decentralized machine learning that trains models across multiple institutions without centralizing data."
    },
    {
      icon: Layers,
      title: "Explainable AI (XAI)",
      description: "Advanced interpretability techniques that provide visual explanations for model predictions."
    },
    {
      icon: Scan,
      title: "Multi-Modal Imaging",
      description: "Support for MRI, CT, and X-ray imaging modalities for comprehensive disease detection."
    },
    {
      icon: Database,
      title: "Web-Based Platform",
      description: "Accessible, user-friendly interface for healthcare professionals to interact with the system."
    }
  ];

  const imagingTypes = ["MRI", "CT Scan", "X-Ray", "Multi-Disease", "Real-Time Analysis"];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-6 text-slate-900">
            Technology Stack
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Built on cutting-edge AI and privacy-preserving technologies
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {imagingTypes.map((type, index) => (
              <Badge key={index} variant="secondary" className="text-sm px-4 py-2">
                {type}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758653500620-1c9fd03f3d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNzIwNDAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Hospital Technology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            {technologies.map((tech, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg shrink-0">
                  <tech.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-slate-900">{tech.title}</h3>
                  <p className="text-slate-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl mb-4">
            Revolutionizing Healthcare AI
          </h3>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Combining privacy, accuracy, and interpretability to create trustworthy AI systems for medical diagnosis
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl mb-2">100%</div>
              <div className="text-blue-200">Privacy Protected</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl mb-2">∞</div>
              <div className="text-blue-200">Disease Types</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl mb-2">3+</div>
              <div className="text-blue-200">Imaging Modalities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
