import GameCard from "../game-card/GameCard";
import NavigatePages from "../NavigatePages";

const GameCards = (props) => {

  return (
    <div className="text-gray-100">
      <div className="flex justify-center">
        <NavigatePages currentPage={props.currentPage} />
      </div>
      <div>
        {/* Implement 30/60/90 games per page selection option */}
      </div>
      <div className="grid grid-cols-3">
        {props.data.map(game => (
          <GameCard 
            key={game.id}
            img={game['Header image']}
            name={game.Name}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <NavigatePages currentPage={props.currentPage} />
      </div>
    </div>
  );
};
export default GameCards;