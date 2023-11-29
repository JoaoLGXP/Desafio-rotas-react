import './styles.css';
import homeIcon from '../../assets/home.svg';

export default function Header() {
    return (
        <header>
            <div className='myproject-header-container myproject-container'>
                <nav className='myproject-menus'>
                    <p className='myproject-menus-item'>Início</p>
                    <p className='myproject-menus-item'>Produtos</p>
                    <p className='myproject-menus-item'>Sobre nós</p>
                </nav>
                <div className='myproject-home-icon'>
                    <img src={homeIcon} alt="Home" />
                </div>
            </div>
        </header>
    );
}