import GameCards from "../../components/game-cards/GameCards";
import getPageData from "../../lib/getPageData";

async function GamesPage() {

  const data = await getPageData(1, 30);

  return (
      <>
        <GameCards data={data} currentPage={1} />
      </>
  );
}

export default GamesPage;
