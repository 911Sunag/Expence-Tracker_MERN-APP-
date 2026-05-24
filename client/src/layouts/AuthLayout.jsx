
const AuthLayout = ({ children, image, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-[#f7f7fb] flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-[40px] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2">
        
        {/* LEFT */}
        <div className="p-10 lg:p-16 flex flex-col justify-center">
          {children}
        </div>

        {/* RIGHT */}
        <div className="hidden lg:flex items-center justify-center bg-[#faf8ff] p-10 relative">
          <div className="max-w-md">
            <img
              src={image}
              alt="auth"
              className="w-full object-contain mb-8"
            />

            <h2 className="text-3xl font-bold mb-4 text-brand-dark">
              {title}
            </h2>

            <p className="text-gray-500 mb-8">
              {subtitle}
            </p>

            <div className="space-y-4">
              <Feature text="Track your expenses" />
              <Feature text="Manage your budgets" />
              <Feature text="Achieve financial goals" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Feature = ({ text }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 rounded-full border-2 border-purple-500 flex items-center justify-center">
        <div className="w-2 h-2 bg-purple-500 rounded-full" />
      </div>

      <p className="text-gray-600">{text}</p>
    </div>
  );
};

export default AuthLayout;