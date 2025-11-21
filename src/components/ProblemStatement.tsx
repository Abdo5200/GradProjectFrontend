import { AlertCircle, Lock, Box, FileQuestion } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function ProblemStatement() {
  const challenges = [
    {
      icon: Lock,
      title: "Privacy Regulations",
      description: "Medical imaging data is inherently distributed across hospitals and cannot be centralized due to privacy regulations."
    },
    {
      icon: Box,
      title: "Black Box Models",
      description: "Current deep learning models achieve high accuracy but operate as 'black boxes,' limiting clinical adoption."
    },
    {
      icon: AlertCircle,
      title: "Data Heterogeneity",
      description: "Data heterogeneity across institutions creates barriers to deploying AI in real-world healthcare settings."
    },
    {
      icon: FileQuestion,
      title: "Lack of Interpretability",
      description: "Lack of trustworthy explanations prevents clinicians from confidently using AI diagnostic tools."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-6 text-slate-900">
            The Problem We're Solving
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            There's a critical need for a unified framework that ensures data privacy, 
            maintains diagnostic accuracy, and provides trustworthy explanations across 
            multiple disease types.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {challenges.map((challenge, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-100 text-red-600 rounded-lg shrink-0">
                    <challenge.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-slate-900">{challenge.title}</h3>
                    <p className="text-slate-600">{challenge.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
