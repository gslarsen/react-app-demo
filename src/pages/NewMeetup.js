import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch("https://react-getting-started-82346-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      // history.push() pushes it onto the stack, so back button allows traveling back to previous page
      history.replace("/");
    });
  }

  return (
    <section>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  );
}

export default NewMeetupPage;
