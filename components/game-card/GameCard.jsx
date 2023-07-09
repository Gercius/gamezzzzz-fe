import Image from "next/image";


const GameCard = (props) => {
  return (
    <div className="m-10 max-w-[350px] justify-self-center">
      <span>{props.name}</span>
      <Image
        src={props.img}
        alt={props.name}
        width={0}
        height={0}
        style={{width: '100%', height: 'auto'}}
        unoptimized={true}
        priority={true}
      />
    </div>
  );
};
export default GameCard;  