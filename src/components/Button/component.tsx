import { ButtonProps, Button as HeadlessButton } from "@headlessui/react";

export default function Button(props: ButtonProps) {
  return <HeadlessButton {...props} className="bg-blue-500" />;
}
