import React, { useState } from "react";
import Hero from "./Hero";
import PhonesContainer from "../components/PhonesContainer";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  // console.log(data)
  const [phones, setPhones] = useState(data);

  const handleSearch = (e, text) => {
    e.preventDefault();
    if (text === "") return setPhones(data);
    const searchedPhones = data.filter(
      (phone) =>
        phone?.name?.toLowerCase().split(" ").includes(text.toLowerCase()) ||
        phone?.brand?.toLowerCase().split(" ").includes(text.toLowerCase())
    );
    setPhones(searchedPhones);
  };
  return (
    <div>
      <Hero handleSearch={handleSearch} />
      <PhonesContainer phones={phones}></PhonesContainer>
    </div>
  );
};

export default Home;
