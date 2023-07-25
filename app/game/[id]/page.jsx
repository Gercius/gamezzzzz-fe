import GameInfoPage from "../../../components/game/GameInfoPage";
import getGameData from "../../../lib/getGameData";

const GamePage = async ({ params }) => {

  const gameData = await getGameData(params.id);

  return (
    <div>
      <GameInfoPage gameData={gameData} />
    </div>
  );
};
export default GamePage;