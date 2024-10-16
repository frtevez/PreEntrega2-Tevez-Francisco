import { useEffect } from 'react'
import './Home.css'

const Home = () => {

    useEffect(() => { document.title = "Home - Euphonia" }, [])

    return (
        <section id='home'>
            <h1 id='home-title'>Where the right sounds converge</h1>
            <img src="https://get.wallhere.com/photo/black-musical-instrument-technology-synthesizer-Synthpop-2560x1600-px-electronic-instrument-musical-keyboard-electronic-keyboard-analog-synthesizer-545336.jpg" alt="home background" />
        </section>
    )
}
export default Home