
const Input = ({
  label,
  type = "text",
  placeholder,
  icon,
  ...props
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-700">
        {label}
      </label>

      <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 bg-white focus-within:border-brand-purple transition-all">
        {icon && <span className="text-gray-400">{icon}</span>}

        <input
          type={type}
          placeholder={placeholder}
          className="w-full outline-none bg-transparent text-sm"
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;