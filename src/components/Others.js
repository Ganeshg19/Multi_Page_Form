import React, { useEffect, useState } from "react";
import data from "./Countries.json";
import "./Others.css";
import Select from "react-select";

const Others = ({ formData, setFormData }) => {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState(data);
  const [selectedCountry, setSelectedCountry] = useState(
    localStorage.getItem("selectedCountry") || ""
  );
  const [selectedCity, setSelectedCity] = useState(
    localStorage.getItem("selectedCity") || ""
  );
  const [selectedState, setSelectedState] = useState("");
  const [values, setValues] = useState(selectedCountry);
  // const [selectedCity, setSelectedCity] = useState("Munich");
  // const [country, setCountry] = useState(data);
  // console.log(data[0].cities);

  // This Validation for Pincode Validation same as above Phone number section

  const validateKeyPress2 = (event) => {
    const allowedKeys2 = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "Backspace",
      "Delete",
      // "ArrowLeft",
    ];
    const keyPressed2 = event.key;

    if (!allowedKeys2.includes(keyPressed2)) {
      event.preventDefault();
      return;
    }

    const inputValue2 = event.target.value;
    const numericValue2 = inputValue2.replace(/[^\d]/g, "");

    if (
      numericValue2.length >= 6 &&
      keyPressed2 !== "Backspace" &&
      keyPressed2 !== "Delete"
    ) {
      event.preventDefault();
    }
  };

  // const handleCountryChange = (e) => {
  //   e.preventDefault();
  //   const selectedCountry = e.target.value;
  //   setValues(selectedCountry); // Update the input field value
  //   setSelectedCountry(selectedCountry);
  //   setFormData({ ...formData, nationality: selectedCountry });
  //   localStorage.setItem("selectedCountry", selectedCountry);

  //   const selectedCountryData = countries.find(
  //     (country) => country.country === selectedCountry
  //   );

  //   if (selectedCountryData) {
  //     setCities(selectedCountryData.cities);
  //     setSelectedCity(selectedCountryData.cities[0]);
  //     localStorage.setItem("selectedCity", selectedCountryData.cities[0]);
  //   }
  // };
  // handleCountryChange();
  const HandleCityChange = (e) => {
    e.preventDefault();
    const selectedCity = e.target.value;
    setSelectedCity(selectedCity);
    setFormData({ ...formData, city: selectedCity });
    localStorage.setItem("selectedCity", selectedCity);
  };

  useEffect(() => {
    const selectedCountryData = countries.find(
      (country) => country.country === selectedCountry
    );

    if (selectedCountryData) {
      setCities(selectedCountryData.cities);
      setSelectedCity(selectedCountryData.cities[0]);
      localStorage.setItem("selectedCity", selectedCountryData.cities[0]);
    }
  }, [selectedCountry, countries]);
  const postalCodes = {
    "New York": "10",
    "Los Angeles": "90",
    Chicago: "60",
    Toronto: "52",
    Vancouver: "78",
    Montreal: "56",
    Paris: "75",
    Marseille: "13",
    Lyon: "69",
    Sydney: "20",
    Melbourne: "30",
    Brisbane: "40",
    Tokyo: "10",
    Osaka: "53",
    Kyoto: "60",
    Berlin: "10",
    Munich: "80",
    Hamburg: "20",
    "Sao Paulo": "01",
    "Rio de Janeiro": "20",
    Brasilia: "70",
    Mumbai: "40",
    "New Delhi": "11",
    Bangalore: "56",
    Moscow: "10",
    "Saint Petersburg": "19",
    Novosibirsk: "63",
    Johannesburg: "20",
    "Cape Town": "80",
    Durban: "40",
    "Mexico City": "01",
    Guadalajara: "44",
    Monterrey: "64",
    Rome: "00",
    Milan: "20",
    Venice: "30",
    Madrid: "28",
    Barcelona: "08",
    Valencia: "46",
    London: "34",
    Manchester: "11",
    Birmingham: "32",
    "Buenos Aires": "14",
    Cordoba: "14",
    Rosario: "14",
    Istanbul: "34",
    Ankara: "06",
    Izmir: "35",
    Lagos: "10",
    Kano: "03",
    Ibadan: "20",
    Karachi: "75",
    Lahore: "54",
    Islamabad: "44",
    Cairo: "11",
    Alexandria: "21",
    Giza: "16",
    Seoul: "13",
    Busan: "60",
    Incheon: "40",
    Kyiv: "02",
    Kharkiv: "61",
    Odessa: "65",
    Athens: "10",
    Thessaloniki: "54",
    Patras: "26",
    Stockholm: "16",
    Gothenburg: "41",
    Malmö: "21",
    Zurich: "80",
    Geneva: "12",
    Bern: "30",
    Warsaw: "00",
    Krakow: "30",
    Lodz: "90",
    Amsterdam: "10",
    Rotterdam: "30",
    "The Hague": "25",
    Brussels: "10",
    Antwerp: "20",
    Ghent: "90",
    Vienna: "11",
    Graz: "80",
    Linz: "40",
    Lisbon: "17",
    Porto: "40",
    Braga: "47",
    Oslo: "03",
    Bergen: "50",
    Trondheim: "70",
    Copenhagen: "16",
    Aarhus: "80",
    Odense: "52",
    Helsinki: "00",
    Espoo: "02",
    Tampere: "33",
    Dublin: "01",
    Cork: "12",
    Galway: "09",
    "Singapore City": "17",
    Riyadh: "11",
    Jeddah: "21",
    Mecca: "21",
    Dubai: "12",
    "Abu Dhabi": "12",
    Sharjah: "12",
    "Tel Aviv": "62",
    Jerusalem: "97",
    Haifa: "34",
    Doha: "01",
    "Kuwait City": "20",
    Muscat: "13",
    Manama: "31",
    Beirut: "20",
    Amman: "11",
    Baghdad: "90",
    Erbil: "44",
    Basra: "61",
    Tehran: "14",
    Mashhad: "91",
    Isfahan: "81",
    Damascus: "11",
    Aleppo: "12",
    "Sana'a": "12",
    Aden: "12",
    Kabul: "10",
    Herat: "40",
    "Mazar-i-Sharif": "17",
    Dhaka: "12",
    Chittagong: "42",
    Khulna: "90",
    Colombo: "00",
    Kandy: "20",
    Galle: "80",
    Kathmandu: "44",
    Pokhara: "33",
    Patan: "44",
    Thimphu: "11",
    Phuntsholing: "00",
    Paro: "12",
    Male: "20",
    Yangon: "11",
    Mandalay: "11",
    Naypyidaw: "15",
    "Phnom Penh": "12",
    "Siem Reap": "17",
    Vientiane: "01",
    "Luang Prabang": "15",
    "Ho Chi Minh City": "70",
    Hanoi: "10",
    "Da Nang": "55",
    Bangkok: "10",
    "Chiang Mai": "50",
    Phuket: "83",
    "Kuala Lumpur": "50",
    "George Town": "10",
    Ipoh: "30",
    Jakarta: "12",
    Surabaya: "60",
    Bandung: "40",
    "Bandar Seri Begawan": "11",
    Manila: "10",
    "Quezon City": "11",
    "Cebu City": "60",
    Dili: "01",
    Honiara: "20",
    "Port Vila": "00",
    Suva: "00",
    Nadi: "67",
    Lautoka: "66",
    "Nuku'alofa": "17",
    Apia: "18",
    Funafuti: "19",
    "South Tarawa": "21",
    Majuro: "15",
    Ngerulmud: "12",
    Palikir: "96",
    Yaren: "58",
    Auckland: "10",
    Wellington: "60",
    Christchurch: "80",
    "Port Moresby": "11",
    Lae: "41",
  };
  const firstTwoDigitsArray = Object.values(postalCodes).map((code) => {
    const firstTwoDigits = code.replace(/\D/g, "").slice(0, 2);
    return parseInt(firstTwoDigits, 10);
  });
  const selectedPostalCode = postalCodes[selectedCity] || "";
  // console.log(firstTwoDigitsArray);

  // const onChange = (e) => {
  //   e.preventDefault();
  //   const selectedCountry = e.target.value;
  //   setSelectedCountry(selectedCountry);
  //   setValues(selectedCountry);
  //   setFormData({ ...formData, nationality: selectedCountry });
  //   // localStorage.setItem("selectedCountry", selectedCountry);

  //   const selectedCountryData = countries.find(
  //     (country) => country.country === selectedCountry
  //   );

  //   if (selectedCountryData) {
  //     setCities(selectedCountryData.cities);
  //     setSelectedCity(selectedCountryData.cities[0]);
  //     localStorage.setItem("selectedCity", selectedCountryData.cities[0]);
  //   }
  // };

  const onSearch = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
    setValues(selectedCountry);
    setFormData({ ...formData, nationality: selectedCountry });
    localStorage.setItem("selectedCountry", selectedCountry);

    const selectedCountryData = countries.find(
      (country) => country.country === selectedCountry
    );

    if (selectedCountryData) {
      setCities(selectedCountryData.cities);
      setSelectedCity(selectedCountryData.cities[0]);
      localStorage.setItem("selectedCity", selectedCountryData.cities[0]);
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    const selectedCountry = e.target.value;
    setSelectedCountry(selectedCountry);
    setValues(selectedCountry);
    // setFormData({ ...formData, nationality: selectedCountry });
    // localStorage.setItem("selectedCountry", selectedCountry); // Add this line

    // const selectedCountryData = countries.find(
    //   (country) => country.country === selectedCountry
    // );

    // if (selectedCountryData) {
    //   setCities(selectedCountryData.cities);
    //   setSelectedCity(selectedCountryData.cities[0]);
    //   localStorage.setItem("selectedCity", selectedCountryData.cities[0]);
    // }
  };

  return (
    <div className="others">
      {/* Nationality Information */}
      {/* <div className="select-container">
        <select
          isMulti
          className="form-control mb-4 Default select"
          value={selectedCountry}
          onChange={handleCountryChange}
          options={countries.map((country) => ({ country: country }))}
        >
          <option value="">Select Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country.country}>
              {country.country}
            </option>
          ))}
        </select>
        <div className="arrow-down2"></div>
      </div> */}

      <div className="select-container">
        <input
          className="form-control mb-4 field position-sticky"
          type="text"
          placeholder="Country"
          onChange={onChange}
          value={values}
        />
        {/* <div className="arrow-down2"></div> */}
        <div className="dropdown">
          {countries
            .filter((item) => {
              const searchTerm = selectedCountry.toLocaleLowerCase(); // Assuming values is the selected country
              const country = item.country.toLocaleLowerCase();
              return (
                searchTerm &&
                country.startsWith(searchTerm) &&
                country !== searchTerm
              );
            })
            .splice(0, 10)
            .map((item) => (
              <div
                className="dropdown-row"
                onClick={() => {
                  onSearch(item.country);
                  setValues(item.country);
                  console.log(values);
                }}
                key={item.country}
              >
                {item.country}
              </div>
            ))}
        </div>
      </div>

      {/* City Details */}
      <div className="select-container">
        <select
          className="form-control mb-4"
          value={selectedCity}
          onChange={HandleCityChange}
        >
          <option value="">Select City</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
        <div className="arrow-down2"></div>
      </div>

      {/* Pincode Details */}
      <div className="select-container2">
        <div>
          <input
            type="text"
            value={selectedPostalCode}
            className="form-control First"
            disabled
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Pincode"
            className="mb-4 form-control"
            required="required"
            onKeyDown={validateKeyPress2}
            maxLength={6}
            value={selectedState}
            onChange={(e) => {
              const pincode = e.target.value;
              setSelectedState(pincode);
              setFormData({
                ...formData,
                pincode: `${selectedPostalCode}${pincode}`,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Others;
