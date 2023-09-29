import React from "react";
import { createRoot } from "react-dom/client";

const randomImage = "https://picsum.photos/200";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img alt="Random" src={randomImage} />
      <img alt="Bacon" src="https://www.wellplated.com/wp-content/uploads/2023/05/Oven-Baked-Bacon.jpg" />
      <img alt="Jamon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Jam%C3%B3n_de_Guijuelo_004_%28cropped%29_4.3.JPG/800px-Jam%C3%B3n_de_Guijuelo_004_%28cropped%29_4.3.JPG" />
      <img alt="Noodles" src="https://www.whiskaffair.com/wp-content/uploads/2021/05/Gochujang-Noodles-2-3.jpg" />
    </div>
  </div>
);
