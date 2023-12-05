import './styles.css';
import Header from '../../components/Header';
import Computers from './Product/Computers';

export default function Products() {
    return (
        <>
            <Header />
            <main>
                <section id='myproject-products-section' className='myproject-container'>
                    <div className='temporario'>
                        <nav className='myproject-products-menus'>
                            <p className='myproject-product'>Computadores</p>
                            <p className='myproject-product'>Eletrônicos</p>
                            <p className='myproject-product'>Livros</p>
                        </nav>
                        <Computers />
                    </div>

                </section>
            </main>
        </>
    );
}