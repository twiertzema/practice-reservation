import { Field, Input, InputProps, Label } from "@headlessui/react";
import { useState } from "react";

interface InputFieldProps extends Pick<InputProps, "name" | "type"> {
  label: string;
}

export default function InputField({ label, name, type }: InputFieldProps) {
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <Field
      className="flex gap-2 rounded bg-slate-500 p-4 hover:outline"
      style={{
        outlineStyle: inputFocus ? "solid" : undefined,
      }}
    >
      <Label>{label}</Label>
      <Input
        className="bg-transparent focus:outline-none"
        name={name}
        onBlur={() => setInputFocus(false)}
        onFocus={() => setInputFocus(true)}
        type={type ?? "text"}
      />
    </Field>
  );
}
