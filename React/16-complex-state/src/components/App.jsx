
import React, { useState } from "react";

function App() {
    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
    });

    function updateContact(event) {
        const { name, value } = event.target;

        setContact((prevContact) => {
            if (name === "fName") {
                return {
                    fName: value,
                    lName: prevContact.lName,
                    email: prevContact.email
                };
            }
            else if (name === "lName") {
                return {
                    fName: prevContact.fName,
                    lName: value,
                    email: prevContact.email
                };
            }
            else if (name === "email") {
                return {
                    fName: prevContact.fName,
                    lName: prevContact.lName,
                    email: value
                };
            }
        });
    }

    return (
        <div className="container">
            <h1>
                Hello {contact.fName} {contact.lName}
            </h1>
            <p>{contact.email}</p>
            <form>
                <input name="fName" placeholder="First Name" onChange={updateContact} value={contact.fName} />
                <input name="lName" placeholder="Last Name" onChange={updateContact} value={contact.lName} />
                <input name="email" placeholder="Email" onChange={updateContact} value={contact.email} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;
