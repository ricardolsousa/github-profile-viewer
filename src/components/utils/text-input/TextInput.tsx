type TextInputProps = {
  value: string | number;
  onChange: (data: any) => void;
  placeholder?: string;
  classes?: any;
  styles?: any;
};

const TextInput = ({
  styles,
  classes,
  placeholder,
  value,
  onChange,
}: TextInputProps) => {
  return (
    <input
      type="text"
      style={styles}
      className={classes}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
