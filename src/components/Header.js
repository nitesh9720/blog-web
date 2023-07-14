import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="flex m-2 p-4 text-2xl bg-blue-100">
        <div>
          <img
            className="w-12"
            src={
              "data:image/png;base64,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"
            }
          />
        </div>
        <div className="ml-3">
          <ul className="flex space-x-10">
            <li className="hover:bg-blue-500"><Link to={"/"}>Home</Link></li>
            <li className="hover:bg-blue-500"><Link to={"/about"}>About</Link></li>
            <li className="hover:bg-blue-500"><Link to={"/contact"}>Contact Us</Link></li>
            <li className="hover:bg-blue-500"><Link to={"/compose"}>Compose</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
