import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import Loader from "../components/Loader/Loader";
import "./Home.css";

const Home = () => {
  const [PersonData, setPersonData] = useState([]);
  const [loading, setLoading] = useState(false);

  const DataFetch = () => {
    setLoading(true);
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((responseData) => {
        setPersonData(responseData.data);
      });
  };

  setTimeout(() => {
    setLoading(false);
  }, 4000);

  return (
    <>
      <Navbar onClick={DataFetch} />
      {loading || !PersonData ? (
        <Loader />
      ) : (
        <div className="HomeSection">
          <div className="HomeContent">
            {PersonData.map((user) => {
              return (
                <ProfileCard
                  key={user.id}
                  email={user.email}
                  FirstName={user.first_name}
                  LastName={user.last_name}
                  avatar={user.avatar}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
