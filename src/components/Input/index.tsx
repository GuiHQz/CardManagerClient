import * as style from "./styles";

interface InputProps {
  type: string;
  name?: string;
  value?: string;
  title?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
}

export const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  title,
  placeholder,
  onChange,
}) => {
  return (
    <style.Container>
      {type === "text" ? (
        <label className="twin-input">
          <h3>
            <span>{title}:</span>
          </h3>
          <style.TextInput
            type="text"
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
        </label>
      ) : (
        <label className="twin-input">
          <h3>
            <span>{title}:</span>
          </h3>
          <style.NumberInput
            type="number"
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
        </label>
      )}
    </style.Container>
  );
};
