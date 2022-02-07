import Hero from "../Hero/Hero"
import Lists from "../Lists/Lists"
import SearchForm from "../SearchForm/SearchForm"

const Home = () => {
    return (
        <container>
            <Hero />
            <SearchForm />
            <Lists />
        </container>
    )
}

export default Home;