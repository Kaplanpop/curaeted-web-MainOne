
const CompanyInfoSection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="font-poppins text-5xl md:text-6xl text-white font-light mb-8 text-center">
            Curæted
          </h2>
          
          <img src="/lovable-uploads/32a591da-11d7-4261-9f86-14c23dc0bb12.png" alt="Curaeted Logo" className="w-full max-w-3xl mb-8" />
          
          <p className="font-roboto text-lg md:text-xl text-white max-w-2xl text-center mx-auto mb-8">
            Premium Iberico Products
          </p>
          
          <div className="space-y-2 text-center mb-10">
            {/* Company info content */}
          </div>
          
          <div className="flex flex-col items-center space-y-2 mb-10">
            {/* Additional company info */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfoSection;
