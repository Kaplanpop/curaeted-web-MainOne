
import Footer from "../Footer";

const CompanyInfoSection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          <div className="w-full flex flex-col items-center">
            <img 
              src="/lovable-uploads/4f850fd3-ddef-479a-a5ac-9171210e93f5.png" 
              alt="Curæted Logo" 
              className="w-40 h-40 mb-8"
            />
            
            <div className="space-y-2 text-center mb-10">
              {/* Company info content */}
            </div>
            
            <div className="flex flex-col items-center space-y-2 mb-10">
              {/* Additional company info */}
            </div>
          </div>
          
          <div className="w-full mt-8">
            <Footer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfoSection;
