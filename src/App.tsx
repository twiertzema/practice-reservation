import { Button } from "@headlessui/react";
import { useState } from "react";
import BookingDialog from "./components/BookingDialog";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Book a table</Button>

      <BookingDialog onClose={() => setIsOpen(false)} open={isOpen} />
    </>
  );
}

export default App;
