import { HomeContent } from "../components/HomeContent"

export const Home = () => {
    return (
        <main className='container'>
            <HomeContent/>
            <p className='comsText'>Laisser un commentaire</p>
            <div className='container justify-center'>
                <p className='boxComs'>Commentaires</p>
            </div>
        </main>
    )
}