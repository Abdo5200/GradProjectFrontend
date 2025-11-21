import { Shield, Brain, Network, Activity, Eye, Globe } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Privacy-Preserving",
      description: "Federated Learning ensures patient data never leaves the hospital, maintaining complete privacy compliance.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Eye,
      title: "Explainable AI",
      description: "Visual explanations and interpretable results help clinicians understand and trust AI decisions.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Network,
      title: "Collaborative Training",
      description: "Multiple healthcare institutions can train models together without sharing sensitive data.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Activity,
      title: "High Accuracy",
      description: "Maintains diagnostic accuracy while preserving privacy through advanced federated algorithms.",
      color: "bg-cyan-100 text-cyan-600"
    },
    {
      icon: Globe,
      title: "Disease-Agnostic",
      description: "Framework works across multiple disease types and medical imaging modalities.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Brain,
      title: "Clinical Decision Support",
      description: "Provides actionable insights that assist healthcare professionals in making informed decisions.",
      color: "bg-pink-100 text-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-6 text-slate-900">
            Key Features
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive solution addressing the core challenges in medical AI deployment
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className={`p-3 ${feature.color} rounded-lg w-fit mb-4`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
