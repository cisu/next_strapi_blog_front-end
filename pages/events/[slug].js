import React from "react";
import Layout from "../../components/Layout";
import { API_URL } from "@config/index";

const EventPage = ({ evt }) => {
  return (
    <Layout>
      <h1>{evt.name}</h1>
    </Layout>
  );
};


export async function getStaticPaths() {

  const res = await fetch(`${API_URL}/api/events`)

  const events = await res.json()

  const paths = events.events.map(evt => ({params: {slug: evt.slug}}))

  return {
    paths,
    fallback: 'blocking'
  }

}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);

  const events = await res.json();

  return {
    props: { evt: events.evt[0] },
  };
}


// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/events/${slug}`);

//   const events = await res.json();

//   return {
//     props: { evt: events.evt[0] },
//   };
// }

export default EventPage;
