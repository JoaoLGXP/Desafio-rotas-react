import './styles.css';
import homeIcon from '../../assets/home.svg';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className='myproject-header-container myproject-container'>
                <nav className='myproject-menus'>
                    <NavLink className={({ isActive }) => isActive ? "myproject-menus-item myproject-active" : "myproject-menus-item"}
                        to={"/home"}>
                        <p>Início</p>
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? "myproject-menus-item myproject-active" : "myproject-menus-item"}
                        to={"/products"}>
                        <p>Produtos</p>
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? "myproject-menus-item myproject-active" : "myproject-menus-item"}
                        to={"/about"}>
                        <p>Sobre nós</p>
                    </NavLink>
                </nav>
                <div className='myproject-home-icon'>
                    <Link to='/home'>
                        <img src={homeIcon} alt="Home" />
                    </Link>
                </div>
            </div>
        </header>
    );
}