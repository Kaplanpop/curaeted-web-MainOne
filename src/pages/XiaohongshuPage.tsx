
import { useTranslation } from 'react-i18next';

const XiaohongshuPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-poppins text-3xl md:text-4xl font-bold mb-8 text-center">
            Xiaohongshu Content
          </h1>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-lg text-gray-700 mb-6">
              This page is currently under development. It will feature our Xiaohongshu content in the future.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="aspect-square bg-gray-100 flex items-center justify-center rounded-lg">
                <span className="text-gray-400">Content coming soon</span>
              </div>
              <div className="aspect-square bg-gray-100 flex items-center justify-center rounded-lg">
                <span className="text-gray-400">Content coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XiaohongshuPage;
