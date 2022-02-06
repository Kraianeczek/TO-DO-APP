import Hero from "../Hero/Hero"
import List from "../List/List"
import SearchForm from "../SearchForm/SearchForm"

const Home = () => {
    return (
        <container>
            <Hero />
            <SearchForm />
            <List />
        </container>
    )
}

export default Home;