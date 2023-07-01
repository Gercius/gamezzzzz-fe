// "use client";

// import { useState, useEffect } from "react";
import GameCard from "../game-card/GameCard";


const GameCards = (props) => {
  // const [stuff, setStuff] = useState([
  //   {
  //     "id": 1,
  //     "name": "one",
  //     "img": "https://cdn.akamai.steamstatic.com/steam/apps/655370/header.jpg?t=1617500526"
  //   },
  //   {
  //     "id": 2,
  //     "name": "two",
  //     "img": "https://cdn.akamai.steamstatic.com/steam/apps/655370/header.jpg?t=1617500526"
  //   },
  //   {
  //     "id": 3,
  //     "name": "three",
  //     "img": "https://cdn.akamai.steamstatic.com/steam/apps/655370/header.jpg?t=1617500526"
  //   },
  //   {
  //     "id": 4,
  //     "name": "three",
  //     "img": "https://cdn.akamai.steamstatic.com/steam/apps/655370/header.jpg?t=1617500526"
  //   },
  //   {
  //     "id": 5,
  //     "name": "three",
  //     "img": "https://cdn.akamai.steamstatic.com/steam/apps/655370/header.jpg?t=1617500526"
  //   },
  //   {
  //     "id": 6,
  //     "name": "three",
  //     "img": "https://cdn.akamai.steamstatic.com/steam/apps/655370/header.jpg?t=1617500526"
  //   },
  // ]);


  console.log(props.data);
  // console.log(props.data);

  return (
    <div className="text-gray-100 w-full">
      <div className="grid grid-cols-3">
        {/* {stuff.map((item) => (
          <GameCard
            key={item.id}
            name={item.name}
            img={item.img}
          />
          ))} */}
      </div>
      <div>
        {/* {
          props.data.map(fact => (
            <div key={crypto.randomUUID()}>
              <p>{fact.text}</p>
            </div>
          ))
        } */}
        {/* <p>{props.data.text}</p> */}
        <p>{props.data.price}</p>
      </div>
    </div>
  );
};
export default GameCards;