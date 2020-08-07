import React, { useContext, useState } from "react";
import styles from "./image.module.css";
import UserContext from "../../ContextWrapper/User";
import axios from "axios";
import GetImage from "../ImageGetter";
import getCookie from "../../utils/getCookie";
const ImageUpload = () => {
  const { image } = GetImage();
  const [, setUpdate] = useState("");
  const { user } = useContext(UserContext);

  const _handleImageChange = async (e) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: getCookie("auth_cookie"),
      },
    };
    const formData = new FormData();
    formData.append("imageUrl", e.target.files[0]);
    const data = await axios.post(
      `http://localhost:9999/api/user/user/${user.id}`,
      formData,
      config
    );
    setUpdate(data.data);
  };
  console.log(image);
  return (
    <div className={styles["body-image"]}>
      <form>
        <input type="file" id="file" onChange={(e) => _handleImageChange(e)} />
        <label htmlFor="file">choose a file</label>

        {image ? (
          <img className={styles["body-image"]} src={image} alt='img' />
        ) : (
          <img className={styles["body-image"]} src={'https://i.gifer.com/ZZ5H.gif'} alt='img' />
        )}
      </form>
      <div className={styles["body-action-button u-flex-center"]}></div>
    </div>
  );
};

export default ImageUpload;
