import Image from "next/image";
import Link from "next/link";

const GameCard = (props) => {

  return (
    <div className="mt-4 max-w-[375px]">
      <Link href={`/game/${props.id}`}>
        <Image
          className="w-full"
          src={props.img}
          alt={props.name}
          width={0}
          height={0}
          unoptimized={true}
          priority={true}
        />
      </Link>
      <div className="md:max-xl:text-lg text-ellipsis">
        <span className="block">{props.name}</span>
        <span>{props.price === 0 ? "Free" : props.price + "$"}</span>
      </div>
    </div>
  );
};
export default GameCard;