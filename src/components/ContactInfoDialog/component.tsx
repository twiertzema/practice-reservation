import { Description, DialogProps } from "@headlessui/react";
import Button from "../Button";
import Dialog from "../Dialog";
import InputField from "../InputField";

const FORM_ID = "confirm-form";

export default function ContactInfoDialog({
  date,
  people,
  onSubmit,
  time,
  ...props
}: Omit<DialogProps, "onSubmit"> & {
  date: string;
  onSubmit: (formData: { name: string; phone: string }) => void;
  people: number;
  time: string;
}) {
  const dateObj = new Date(date);
  const formattedDate = new Intl.DateTimeFormat("en-US").format(dateObj);

  return (
    <Dialog {...props} title="Contact Details">
      <Description>
        You are making a reservation for {people} persons, on {formattedDate} at{" "}
        {time}.
      </Description>

      <form
        className="flex flex-col gap-4"
        id={FORM_ID}
        onSubmit={(e) => {
          e.preventDefault();

          const formData = new FormData(e.currentTarget);

          const name = formData.get("name");
          const phone = formData.get("phone");

          // Short-circuit instead of intelligent validation.
          if (name == null || phone == null) return;
          if (
            isNaN(people) ||
            typeof name !== "string" ||
            typeof phone !== "string"
          )
            return;

          onSubmit({ name, phone });
        }}
      >
        <InputField label="Name" name="name" />
        <InputField label="Phone number" name="phone" />
      </form>

      <Button form={FORM_ID} type="submit">
        Confirm reservation
      </Button>
    </Dialog>
  );
}
