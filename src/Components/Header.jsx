import { Link } from "react-router-dom";
function Header() {

    return (

        <div className="bg-red-400 flex gap-10 text-2xl text-white cursor-pointer">
            <h1 className="p-4 "><Link to='/'>List of Students</Link></h1>
            <h1 className="p-4 "><Link to='/Favorites'>Favourit Students</Link></h1>
        </div>
    );
}

export default Header; 