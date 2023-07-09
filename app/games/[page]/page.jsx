
import GameCards from "../../../components/game-cards/GameCards";
import getPageData from "../../../lib/getPageData";

async function GamesPage({ params }) {

  const data = await getPageData(params.page, 30);

  return (
      <>
        <GameCards data={data} currentPage={params.page} />
      </>
  );
}

export default GamesPage;
