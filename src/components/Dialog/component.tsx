import {
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Dialog as HeadlessDialog,
  DialogProps as HeadlessDialogProps,
} from "@headlessui/react";
import { ReactNode } from "react";

interface DialogProps extends HeadlessDialogProps {
  children: ReactNode;
  title: string;
}

export default function Dialog({
  children,
  title,
  ...dialogProps
}: DialogProps) {
  return (
    <HeadlessDialog {...dialogProps} className="z:50 relative">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 rounded-lg bg-white p-12 dark:bg-slate-800">
          <DialogTitle className="font-bold">{title}</DialogTitle>

          {children}
        </DialogPanel>
      </div>
    </HeadlessDialog>
  );
}
