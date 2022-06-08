import Link from 'next/link';
import Layout from "@components/Layout";
import EventItem from "@components/EventItem";
import { API_URL } from "@config/index";

export default function Home({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.events.length === 0 && <h3>No events to Show</h3>}

      {events?.events?.slice(0,3)?.map((evt) => (
        <EventItem key={evt.id} evt={evt}/>
      ))}


      {events?.events?.length > 0 && (<Link href='/events'>
        <a className='btn-secondary'>View All</a>
      </Link>)}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);

  const events = await res.json();

  return {
    props: { events },
    revalidate: 30,
  };
}
