import "./nav.css";

import { ImHome } from "react-icons/im";
import { CgNotes } from "react-icons/cg";

export const Nav =() =>
{

    return(
        <div>

<nav className="nav-bar">

<div className="nav-head"> <span className="eazy-clr">eazy</span>Note</div>


<div className="nav-components">
<a className="nav-links" to="/login" > <ImHome /> </a>
<a className="nav-links" to="/wishlist" ><CgNotes /></a>
<button className="login"  to="/cart" > Login</button>            

        </div>

</nav>

        </div>
    )
}