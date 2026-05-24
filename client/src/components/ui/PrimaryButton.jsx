

const PrimaryButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`w-full bg-linear-to-r from-purple-500 to-violet-600 hover:opacity-90 text-white py-3 rounded-xl font-semibold transition-all cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;