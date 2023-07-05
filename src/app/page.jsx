import GameCards from "./components/game-cards/GameCards";

async function getData() {
    try {
      // const site = 'https://cat-fact.herokuapp.com/facts';
      const res = await fetch('http://localhost:5177/api/Games/646097e5e7f9e1523d319f73');
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      return res.json();
    } catch (err) {
      console.log(err);
    }
  }
  
export default async function Home() {

  const data = await getData();
  console.log(data);

  return (
      <>
        <GameCards data={data} />
      </>
  );
}
