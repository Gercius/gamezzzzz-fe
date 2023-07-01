// "use client";

import GameCards from "./components/game-cards/GameCards";
// import { useState, useEffect } from "react";

async function getData() {
  const site = 'https://localhost:7150/api/Games/646097e5e7f9e1523d319f73';
  // const site = 'https://cat-fact.herokuapp.com/facts';
  // const site = 'https://cat-fact.herokuapp.com/facts/58e00b5f0aac31001185ed24';

  const res = await fetch(site);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

// const getStuff = async () => {
//   // const response = await fetch('https://cat-fact.herokuapp.com/facts/58e00b5f0aac31001185ed24');
//   // const response = await fetch("https://cat-fact.herokuapp.com/facts");
//   const response = await fetch('https://127.0.0.1:7150/api/Games/646097e5e7f9e1523d319f73');

//   return response.json();
// };

export default async function Home() {

const data = await getData();

if(isLoading) return <div>Loading...</div>;
if(isError) return <div>{error}</div>;

console.log(data);

  return (
      <>
        {/* <GameCards data={data} /> */}
        <div>
          <p className="text-white">kekw</p>
          <p></p>
        </div>
      </>
  );
}
