import { useEffect } from "react";
import About from "./Components/About";
import Header from "./Components/Header";
import Weather from "./Components/Weather";

import WeatherImg1 from "./Assets/Images/Weather1.jpg";
import WeatherImg2 from "./Assets/Images/Weather2.jpg";
import WeatherImg3 from "./Assets/Images/Weather3.jpg";
import WeatherImg4 from "./Assets/Images/Weather4.jpg";
import WeatherImg5 from "./Assets/Images/Weather5.jpg";
import WeatherImg6 from "./Assets/Images/Weather6.jpg";
import WeatherImg7 from "./Assets/Images/Weather7.jpg";
import WeatherImg8 from "./Assets/Images/Weather8.jpg";
import WeatherImg9 from "./Assets/Images/Weather9.jpg";
import WeatherImg10 from "./Assets/Images/Weather10.jpg";

function App() {
  useEffect(() => {
    const images = [
      WeatherImg1,
      WeatherImg2,
      WeatherImg3,
      WeatherImg4,
      WeatherImg5,
      WeatherImg6,
      WeatherImg7,
      WeatherImg8,
      WeatherImg9,
      WeatherImg10,
    ];
    function preloadImages(array) {
      if (!preloadImages.list) {
        preloadImages.list = [];
      }
      var list = preloadImages.list;
      for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function () {
          var index = list.indexOf(this);
          if (index !== -1) {
            // remove image from the array once it's loaded
            // for memory consumption reasons
            list.splice(index, 1);
          }
        };
        list.push(img);
        img.src = array[i];
      }
    }
    preloadImages(images);
  }, []);
  return (
    <div>
      <Header />
      <Weather />

      <About />
    </div>
  );
}

export default App;
