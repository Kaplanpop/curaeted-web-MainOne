
const CompanyInfoSection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <img src="/lovable-uploads/32a591da-11d7-4261-9f86-14c23dc0bb12.png" alt="Curaeted Logo" className="w-full max-w-3xl mb-8" />
          
          <div className="space-y-2 text-center mb-10">
            <p className="text-lg">Extremadura, Spain</p>
            <p className="text-lg">info@curaeted.com</p>
          </div>
          
          <div className="flex flex-col items-center space-y-2 mb-10">
            <p className="text-sm text-gray-400">© 2024 Curæted. All rights reserved.</p>
            <p className="text-sm text-gray-400">Follow us on social media for updates and special offers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfoSection;
