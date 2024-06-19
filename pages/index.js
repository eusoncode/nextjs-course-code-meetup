import MeetupsList from '../components/meetups/MeetupList'

// Dummy data
const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Restaurant_in_The_Mus%C3%A9e_d%27Orsay.jpg/640px-Restaurant_in_The_Mus%C3%A9e_d%27Orsay.jpg',
    address: '1919 SW Edmonton, AB',
    description: 'This is our first meetup'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Restauracja_pod_Gigantami_06.JPG/640px-Restauracja_pod_Gigantami_06.JPG',
    address: '1916 SW Edmonton, AB',
    description: 'This is our first meetup'
}
];

export default function HomePage() {
  return <MeetupsList meetups={DUMMY_MEETUPS} />
}