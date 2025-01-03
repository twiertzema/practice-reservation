import {
  Button,
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogProps,
  DialogTitle,
} from "@headlessui/react";

export default function BookingDialog(props: DialogProps) {
  return (
    <Dialog {...props} className="z:50 relative">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 rounded-lg bg-white p-12 dark:bg-slate-800">
          <DialogTitle className="font-bold">Book a table</DialogTitle>
          <Description>
            This is where you'll add the details of your booking
          </Description>

          {/* TODO: Input fields (make component) */}

          <Button
            onClick={() => {
              console.log("Submit");
              props.onClose(false);
            }}
          >
            Book now
          </Button>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
