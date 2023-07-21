import Sidebar from "../../components/sidebar/Sidebar";

const GamesLayout = ({children}) => {
  return (
    <div className="sm:flex">
      <div className="hidden sm:block">
        <Sidebar />
      </div>
      <div className="mx-auto">
        {children}
      </div>
    </div>
  );
};
export default GamesLayout;