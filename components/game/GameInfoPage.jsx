import Image from "next/image";

const GameInfoPage = (props) => {

  const screenshots = props.gameData.Screenshots.split(",");

  return (
    <div>
      <div>{props.gameData.Name}</div>
      {/* <div>
        {screenshots.map(ss => (
          <Image
            className="w-1/4 h-auto"
            width={0}
            height={0} 
            key={ss} 
            src={ss} 
            alt={`${props.gameData.Name} gameplay screenshot`}
            unoptimized={true}
            priority={true}
          />
        ))}
      </div> */}
    </div>
  );
};
export default GameInfoPage;