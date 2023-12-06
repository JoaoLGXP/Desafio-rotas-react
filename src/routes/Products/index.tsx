import './styles.css';
import { NavLink, Outlet } from 'react-router-dom';

export default function Products() {
    return (
        <main>
            <section id='myproject-products-section' className='myproject-container'>
                <div className='myproject-organizer-menus'>
                    <nav className='myproject-products-menus'>
                        <NavLink className={({ isActive }) => isActive ? "myproject-product myproject-active" : "myproject-product"}
                            to={"computers"}>
                            <p>Computadores</p>
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive ? "myproject-product myproject-active" : "myproject-product"}
                            to={"eletronics"}>
                            <p>Eletrônicos</p>
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive ? "myproject-product myproject-active" : "myproject-product"}
                            to={"books"}>
                            <p>Livros</p>
                        </NavLink>
                    </nav>
                    <Outlet />
                </div>
            </section>
        </main>
    );
}