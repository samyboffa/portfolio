import React, { useState } from "react";

const ContactIcon = () => {
  const [opened, setopened] = useState(false);
  return (
    <div className="contactIcon">
      <div
        className={`d-flex flex-column contactList ${
          opened ? "openedContact" : "closedContact"
        }`}
      >
        <a
          href="mailto:samigharsallah01@gmail.com"
          className="contactContainer pointer"
        >
          <img src="/icons/mail.png" alt="contact" />
        </a>
        <a className="contactContainer pointer" href="tel:+21654857558">
          <img src="/icons/phone.png" alt="contact" />
        </a>
        <a
          className="contactContainer pointer"
          href="whatsapp://send?phone=+21654857558"
        >
          <img src="/icons/whatsapp.png" alt="contact" />
        </a>
        <a
          className="contactContainer pointer"
          href="skype:live:samygharsallah?call"
        >
          <img src="/icons/skype.png" alt="contact" />
        </a>
      </div>
      <div
        className={`contactContainer  pointer mt-2 ${
          opened ? "border-transparent" : "pulsed"
        }`}
        onClick={() => setopened(!opened)}
      >
        <img src="/icons/contact.png" alt="contact" />
      </div>
    </div>
  );
};

export default ContactIcon;
