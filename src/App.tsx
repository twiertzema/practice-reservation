import { useState } from "react";
import "./App.css";
import BookingDialog from "./components/BookingDialog";
import Button from "./components/Button";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <main className="flex size-full items-center justify-center">
        <Button onClick={() => setIsOpen(true)}>Book a table</Button>
      </main>

      <BookingDialog
        onClose={() => setIsOpen(false)}
        onSubmit={(e) => {
          console.log(new FormData(e.currentTarget));
          setIsOpen(false);
        }}
        open={isOpen}
      />
    </>
  );
}

export default App;
