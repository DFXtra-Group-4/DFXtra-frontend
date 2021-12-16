import Profile from "./profile";
import axios from "axios";
import { useEffect, useState } from "react";

const ProfileData = () => {
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState({});

  const getProfileData = async () => {
    try {
      console.log('making GET request...');
      const res = await axios.get('http://127.0.0.1:4000/trainee/dc1ac1002b92436dc4c010b1');
      setLoading(false);
      console.log(res.data);
      return res.data;
    }
    catch (e) { console.log(e) };
  };

  useEffect(() => {
    const getData = async () => {
      setProfileData(await getProfileData());
    }
    getData();
  }, []);


  const updateData = async () => {
    try {
      await axios.put('http://127.0.0.1:4000/trainee/dc1ac1002b92436dc4c010b1/edit');
    }
    catch (e) {
      console.log(e);
    };
  };

  return (
    <>
      {loading ? <h2> Data is loading...</h2> : <Profile data={profileData} />}
    </>
  )
}

export default ProfileData