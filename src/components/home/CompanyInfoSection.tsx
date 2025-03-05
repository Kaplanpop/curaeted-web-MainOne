
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
            
            <div className="space-y-4 text-center mb-8">
              <h2 className="text-3xl font-light text-white font-poppins">Curæted</h2>
              <p className="text-white font-roboto">Bringing the finest Iberico products to China</p>
              <p className="text-white text-sm font-roboto">Room 214 Level 2, Building 1, 155 Fengxiang Rd, Baoshan, Shanghai, PRC</p>
              <p className="text-white text-sm font-roboto">Email: jose.campon@curaetedchina</p>
            </div>
            
            <Footer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfoSection;
