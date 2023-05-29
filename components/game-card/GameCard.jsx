import Image from "next/image";


const GameCard = () => {
  return (
    <div className="m-10 max-w-[300px]">
      <span>Name</span>
      <Image alt="image" width={300} height={300} src="https://cdn.akamai.steamstatic.com/steam/apps/20200/header.jpg?t=1640121033" />
    </div>
  )
}
export default GameCard