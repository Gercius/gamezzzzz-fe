const NavigatePages = (props) => {
  const currentPage = parseInt(props.currentPage);

  return (
    <div>
      <br />
      <ul className="flex justify-center space-x-3">
          <a 
          className={currentPage === 1 ? "hidden" : "block"}
          href={`http://localhost:3000/games/${currentPage - 1}`}>
          <li>Previous</li>
        </a>
        <a href="http://localhost:3000/games/1"><li>1</li></a>
        <a href="http://localhost:3000/games/2"><li>2</li></a>
        <a href="http://localhost:3000/games/3"><li>3</li></a>
        <a href="http://localhost:3000/games/4"><li>4</li></a>
        <a href="http://localhost:3000/games/5"><li>5</li></a>
        <span>...</span>
        <a href="http://localhost:3000/games/2306"><li>2306</li></a>
        <a className={currentPage === 2306 ? "hidden" : "block"}
          href={`http://localhost:3000/games/${currentPage === 2306 ? 2306 : currentPage + 1}`}>
          <li>Next</li>
        </a>
      </ul>
    </div>
    
  );
};
export default NavigatePages;