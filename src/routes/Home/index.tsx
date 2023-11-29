import './styles.css';
import Header from '../../components/Header';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <section id='myproject-home-section' className='myproject-container'>
                    <h1>Bem-vindos!</h1>
                </section>
            </main>
        </>
    );
}