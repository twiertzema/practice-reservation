import { Description, DialogProps } from "@headlessui/react";
import { FormEventHandler } from "react";
import Dialog from "../Dialog";
import InputField from "../InputField";
import Button from "../Button";

export default function BookingDialog({
  onSubmit,
  ...props
}: Omit<DialogProps, "onSubmit"> & {
  onSubmit: FormEventHandler<HTMLFormElement>;
}) {
  return (
    <Dialog {...props} title="Book a table">
      <Description>
        This is where you'll add the details of your booking
      </Description>

      <form
        className="flex flex-col gap-4"
        id="booking-form"
        onSubmit={onSubmit}
      >
        <InputField
          label="People"
          min="1"
          name="people"
          type="number"
          defaultValue={1}
        />
        <InputField label="Date" name="date" type="date" />
        <InputField label="Time" name="time" type="time" />
      </form>

      <Button form="booking-form" type="submit">
        Book now
      </Button>
    </Dialog>
  );
}
