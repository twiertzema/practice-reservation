import {
  Button,
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogProps,
  DialogTitle,
} from "@headlessui/react";
import { FormEventHandler } from "react";
import InputField from "../InputField";

export default function BookingDialog({
  onSubmit,
  ...props
}: Omit<DialogProps, "onSubmit"> & {
  onSubmit: FormEventHandler<HTMLFormElement>;
}) {
  return (
    <Dialog {...props} className="z:50 relative">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 rounded-lg bg-white p-12 dark:bg-slate-800">
          <DialogTitle className="font-bold">Book a table</DialogTitle>
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

          <Button className="bg-blue-500" form="booking-form" type="submit">
            Book now
          </Button>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
