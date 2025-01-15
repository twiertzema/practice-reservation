import { useState } from "react";
import "./App.css";
import BookingDialog from "./components/BookingDialog";
import Button from "./components/Button";
import ContactInfoDialog from "./components/ContactInfoDialog";

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const [people, setPeople] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <>
      <main className="flex size-full items-center justify-center">
        <Button onClick={() => setIsBookingOpen(true)}>Book a table</Button>
      </main>

      <BookingDialog
        onClose={() => setIsBookingOpen(false)}
        onSubmit={(formData) => {
          // Stash the form data for the contact info dialog.
          setPeople(formData.people);
          setDate(formData.date);
          setTime(formData.time);

          // Progress to the contact info dialog.
          setIsBookingOpen(false);
          setIsContactOpen(true);
        }}
        open={isBookingOpen}
      />

      <ContactInfoDialog
        date={date}
        onClose={() => setIsContactOpen(false)}
        onSubmit={({ name, phone }) => {
          console.log("Booking details:", {
            people,
            date,
            time,
            name,
            phone,
          });
        }}
        open={isContactOpen}
        people={people}
        time={time}
      />
    </>
  );
}

export default App;
