import GameCard from "../game-card/GameCard";
import NavigatePages from "../NavigatePages";

const GameCards = (props) => {

  return (
    <div className="text-gray-100 w-full">
      <div>
        {/* Implement 30/60/90 games per page selection option */}
      </div>
      <div className="grid grid-cols-3">
        {props.data.map(game => (
          <GameCard 
            key={game.id}
            img={game.image}
            name={game.gameName}
          />
        ))}
      </div>
      <div className="flex justify-center space-x-5">
        <button>Previous</button>
        <NavigatePages setCurrentPage={props.currentPage} />
        <button>Next</button>
      </div>
    </div>
  );
};
export default GameCards;