import Link from "next/link";

const NavigatePages = (props) => {
  const currentPage = parseInt(props.currentPage);

  return (
    <>
      <ul className="flex justify-center space-x-3">
        <li>
          <Link 
            className={currentPage === 1 ? "hidden" : "block"}
            href={`http://localhost:3000/games/${currentPage - 1}`}>
            Previous
          </Link>
        </li>
        <li><Link href="http://localhost:3000/games/1">1</Link></li>
        <li><Link href="http://localhost:3000/games/2">2</Link></li>
        <li><Link href="http://localhost:3000/games/3">3</Link></li>
        <li><Link href="http://localhost:3000/games/4">4</Link></li>
        <li><Link href="http://localhost:3000/games/5">5</Link></li>
        <li>...</li>
        <li><Link href="http://localhost:3000/games/2306">2306</Link></li>
        <li>
          <Link className={currentPage === 2306 ? "hidden" : "block"}
            href={`http://localhost:3000/games/${currentPage === 2306 ? 2306 : currentPage + 1}`}>
            Next
          </Link>
        </li>
      </ul>
    </>
  );
};
export default NavigatePages;