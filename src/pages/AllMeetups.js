import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  // Use localStorage.setObj(key, value) to save an array or object
  Storage.prototype.setObj = function (key, obj) {
    return this.setItem(key, JSON.stringify(obj));
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-82346-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json(); // json() method also returns a promise, so another .then() req'd; json() converts the json to a plain js object
      })
      .then((data) => {
        const meetups = [];

        for (const meetupId in data) {
          const meetup = {
            id: meetupId,
            ...data[meetupId],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []); // second parameter to useEffect is array where you list all external values that useEffect relies on, EXCLUDING updating state functions in this component function (e.g. loadedMeetups); in this case, there are none, so it runs the associated fn in the first parameter once upon first page load.

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
