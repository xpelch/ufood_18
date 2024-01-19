import { Link } from "react-router-dom";

const Navigation: React.FC = () => {    
    return (
        <nav>
             <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/restaurant">Restaurant</Link>
                </li>
                <li>
                    <Link to="/user">User Profile</Link>
                </li> 
              
            </ul>
        </nav>
    )
}

export default Navigation;