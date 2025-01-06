import { Field, Input, InputProps, Label } from "@headlessui/react";
import { useState } from "react";

interface InputFieldProps extends InputProps {
  label: string;
}

export default function InputField({ label, ...inputProps }: InputFieldProps) {
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <Field
      className="flex items-baseline gap-4 rounded bg-slate-500 p-4 hover:outline"
      style={{
        outlineStyle: inputFocus ? "solid" : undefined,
      }}
    >
      <Label className="text-sm italic">{label}</Label>
      <Input
        {...inputProps}
        className="flex-grow bg-transparent focus:outline-none"
        onBlur={() => setInputFocus(false)}
        onFocus={() => setInputFocus(true)}
        type={inputProps?.type ?? "text"}
      />
    </Field>
  );
}
