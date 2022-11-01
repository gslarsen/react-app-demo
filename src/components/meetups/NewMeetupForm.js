import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm() {
  return (
    <Card>
      <form className={classes.form}>
        <p className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required />
        </p>
        <p className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" id="image" required />
        </p>
        <p className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required />
        </p>
        <p className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" rows="5"></textarea>
        </p>
        <p className={classes.actions}>
          <button>Add Meetup</button>
        </p>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
