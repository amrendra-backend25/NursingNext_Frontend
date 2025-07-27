import { useState } from "react";
import "./BookRegister.css";
import WebinarForm from "./WebinarForm";
import bookstore from "/images/book/book_02.jpg";
import RegistrationClosed from "../RegistrationClosed/RegistrationClosed";

const BookRegister = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const [selectedFaculty1, setSelectedFaculty1] = useState({});
  const [selectedFaculty, setSelectedFaculty] = useState({});

  const openModal1 = () => {
    setSelectedFaculty1();
    setModalOpen1(true);
  };

  const closeModal1 = () => {
    setModalOpen1(false);
  };

  const openModal = () => {
    setSelectedFaculty();
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <section className="bookstore_section">
        <div className="container">
          <div className="bookstore_part">
            <div className="bookstore_left">
              <h2>
                Enroll in the WEBINAR & Get a Chance to win TH Next Decode Book!
              </h2>
              <h3>LUCKY DRAW AFTER WEBINAR</h3>
              <p>3 Lucky winners will get free TH Next Decode</p>
              {/* <div className="bookstore_btn" onClick={openModal}> */}
              <div className="bookstore_btn" onClick={openModal1}>
                <button>Stay Tuned!</button>
              </div>
            </div>
            <div className="bookstore_right">
              <img src={bookstore} alt="" />
            </div>
          </div>
          <RegistrationClosed
            isOpen={modalOpen1}
            onClose={closeModal1}
            person={selectedFaculty1}
          />
          <WebinarForm
            isOpen={modalOpen}
            onClose={closeModal}
            person={selectedFaculty}
          />
        </div>
      </section>
    </>
  );
};

export default BookRegister;
