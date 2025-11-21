import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Summary() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl mb-6 text-slate-900">
              Project Overview
            </h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              This project aims to build a <strong>web-based application</strong> that provides a 
              privacy-preserving, interpretable multi-disease classification framework for medical 
              imaging using <strong>Federated Learning (FL)</strong> and <strong>Explainable AI (XAI)</strong>.
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              The system enables <strong>collaborative training</strong> across multiple healthcare 
              institutions without data sharing, achieving high accuracy in disease detection while 
              providing visual explanations for clinical decision support.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              The framework is <strong>disease-agnostic</strong> and applicable to various imaging 
              modalities including <strong>MRI, CT, and X-ray</strong>.
            </p>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1587010580103-fd86b8ea14ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW1hZ2luZyUyMHhyYXl8ZW58MXx8fHwxNzYzNjI1MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Medical Imaging"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-cyan-500 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-500 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}