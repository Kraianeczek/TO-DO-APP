import { useSelector } from "react-redux";

const searchString = useSelector(state => state.cards.title);

const changer = (a, b) => {
    a.toLowerCase().includes(b.toLowerCase())
}


// const changer = (change.cards.title, change.searchString) => {
//     cards.title.toLowerCase().includes(searchString.toLowerCase()
// }

export default changer;