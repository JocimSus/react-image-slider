import car1 from "./assets/car-1.jpg";
import car2 from "./assets/car-2.jpg";
import car3 from "./assets/car-3.jpg";
import car4 from "./assets/car-4.jpg";
import car5 from "./assets/car-5.jpg";

import ImageSlider from "./components/ImageSlider";

const images = [car1, car2, car3, car4, car5];

const App = () => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "16 / 10",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={images} />;
    </div>
  );
};

export default App;
