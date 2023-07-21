import Image from "next/image";

const GameCard = (props) => {

  return (
    <div className="mt-4 max-w-[350px] md:max-w-[470px]">
      <Image
        className="w-full"
        src={props.img}
        alt={props.name}
        width={0}
        height={0}
        unoptimized={true}
        priority={true}
      />
      <div className="md:max-xl:text-lg text-ellipsis">
        <span className="block">{props.name}</span>
        <span>{props.price === 0 ? "Free" : props.price + "$"}</span>
      </div>
    </div>
  );
};
export default GameCard;