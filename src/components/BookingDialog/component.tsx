import { Description, DialogProps } from "@headlessui/react";
import Button from "../Button";
import Dialog from "../Dialog";
import InputField from "../InputField";

const FORM_ID = "booking-form";

export default function BookingDialog({
  onSubmit,
  ...props
}: Omit<DialogProps, "onSubmit"> & {
  onSubmit: (formData: { date: string; people: number; time: string }) => void;
}) {
  return (
    <Dialog {...props} title="Book a table">
      <Description>
        This is where you'll add the details of your booking
      </Description>

      <form
        className="flex flex-col gap-4"
        id={FORM_ID}
        onSubmit={(e) => {
          e.preventDefault();

          const formData = new FormData(e.currentTarget);

          const people = Number(formData.get("people"));
          const date = formData.get("date");
          const time = formData.get("time");

          // Short-circuit instead of intelligent validation.
          if (date == null || time == null) return;
          if (
            isNaN(people) ||
            typeof date !== "string" ||
            typeof time !== "string"
          )
            return;

          onSubmit({
            date,
            people,
            time,
          });
        }}
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

      <Button form={FORM_ID} type="submit">
        Book now
      </Button>
    </Dialog>
  );
}
