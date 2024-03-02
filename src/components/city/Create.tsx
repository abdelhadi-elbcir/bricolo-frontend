import React, { useState } from "react";
import { CityDto } from "../../utils/models/cityDto";
import { createCity } from "../../services/cityService";

interface CreateCityProps {}

const Create: React.FC<CreateCityProps> = () => {
  const [cityData, setCityData] = useState<CityDto>({
    name: "",
  });


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityData({
      ...cityData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveCity = async () => {
    try {
      let res = createCity(cityData);
      console.log(res);
    } catch (error) {
      console.error("Error saving city:", error);
    }
  };

  return (
    <div>
      <h2>Create City</h2>
      <form>
        <label>
          City Name:
          <input
            type="text"
            name="name"
            value={cityData.name}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleSaveCity}>
          Save City
        </button>
      </form>
    </div>
  );
};

export default Create;
