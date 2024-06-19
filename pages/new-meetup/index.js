import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function HomePage() {

  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}