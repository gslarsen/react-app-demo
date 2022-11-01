import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-82346-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json(); // json() method also returns a promise, so another .then() req'd
      })
      .then((data) => {
        const meetups = [];

        for (const meetupId in data) {
          const meetup = {
            id: meetupId,
            ...data[meetupId]
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []); // second parameter to useEffect is array where you list all external values that useEffect relies on, EXCLUDING updating state functions in this component function (e.g. loadedMeetups); in this case, there are none. 

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

