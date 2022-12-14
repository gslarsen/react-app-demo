import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeatupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem {...meetup} key={meetup.id} />
      ))}
    </ul>
  );
}

export default MeatupList;
