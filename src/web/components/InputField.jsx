const InputField = (props) => {
  const {
    inputLabel,
    type,
    className,
    placeholder,
    inputName,
    value,
    onChange,
    maxLength,
  } = props;

  return (
    <>
      <label>{inputLabel}</label>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        name={inputName}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
    </>
  );
};

export default InputField;
