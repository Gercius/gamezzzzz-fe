import GameCard from "../game-card/GameCard";
import NavigatePages from "../NavigatePages";

const GameCards = (props) => {

  return (
    <div className="pl-5 pr-5">
      <div>
        <NavigatePages currentPage={props.currentPage} />
      </div>
      <div>
        {/* Searchbar */}
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 lg:gap-8 justify-items-center">
        {props.data.map(game => (
          <GameCard 
            key={game.id}
            img={game['Header image']}
            name={game.Name}
            price={game.Price}
          />
        ))}
      </div>
      <div>
        <NavigatePages currentPage={props.currentPage} />
      </div>
    </div>
  );
};
export default GameCards;