import MeetupDetails from '../../components/meetups/MeetupDetails';


// export default function MeetupDetail() {
//   return (
//     <MeetupDetails
//       image='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Restaurant_in_The_Mus%C3%A9e_d%27Orsay.jpg/640px-Restaurant_in_The_Mus%C3%A9e_d%27Orsay.jpg'
//       title='First Meetup'
//       address='Some Street 5, Some city'
//       description='This is a first meetup'
//     />
//   );
// };

export default function MeetupDetail(props) {
  return (
    <MeetupDetails meetupData={props.meetupData} />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId:'m1',
        }
      },
      {
        params: {
          meetupId: 'm2',
        }
      }
    ]
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  // fetch data from an API

  return {
    props: {
      meetupData: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Restaurant_in_The_Mus%C3%A9e_d%27Orsay.jpg/640px-Restaurant_in_The_Mus%C3%A9e_d%27Orsay.jpg',
        id: meetupId,
        title: 'First Meetup',
        address: 'Some Street 5, Some City',
        description:'This is a first meetup'
      }
    }
  };
}