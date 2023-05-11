import {} from "react-native"
import SearchButton from "../../components/SearchButton"
import Categories from "../../components/Categories/Categories"
import CategoryPost from "../../components/Categories/CategoryPost"

const Home = () => {
  return (
    <>
      <SearchButton />
      <Categories />
      <CategoryPost />
    </>
  )
}

export default Home