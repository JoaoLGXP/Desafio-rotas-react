import './styles.css';
import Header from '../../components/Header';

export default function NotFound() {
    return (
        <>
            <Header />
            <main>
                <section id='myproject-notfound-section' className='myproject-container'>
                    <h1>Não encontrado!</h1>
                </section>
            </main>
        </>
    );
}