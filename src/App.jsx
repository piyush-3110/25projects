import ImageSlider from "./Components/ImageSlider/ImageSlider";
import StarRating from "./Components/Star/StarRating";

function App() {
  return (
    <>
      {/* <StarRating noOfStars={10} />  */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={5} />
    </>
  );
}

export default App;
