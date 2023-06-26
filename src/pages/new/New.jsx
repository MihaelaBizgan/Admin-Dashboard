import React, { useState, useEffect } from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import Footer from "../../components/footer/Footer";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore, storage } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";
import { collection, query, where, getDocs } from "firebase/firestore";
import { debounce } from "lodash";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [perc, setPerc] = useState(null);
  const navigate = useNavigate();
  const [uploadStatus, setUploadStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [attention, setAttention] = useState({});
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const uploadFile = () => {
      //create a unique name or id for the file, using the timestamp
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
          setUploadStatus("Error uploading file!");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
            setUploadStatus("Product added successfully!");
            //toast.success("Item added successfully!");
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  console.log(data);

  const checkIfEmailAlreadyUsed = async (email) => {
    const usersRef = collection(firestore, "users");
    const emailQuery = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(emailQuery);

    return !querySnapshot.empty; // Resolve with true if query snapshot is not empty, false otherwise
  };

  const checkIfPhoneAlreadyUsed = async (phone) => {
    const usersRef = collection(firestore, "users");
    const emailQuery = query(usersRef, where("phone", "==", phone));
    const querySnapshot = await getDocs(emailQuery);

    return !querySnapshot.empty; // Resolve with true if query snapshot is not empty, false otherwise
  };

  const handleInput = debounce(async (e) => {
    const id = e.target.id;
    const value = e.target.value;

    let error = "";
    let attentionMessage = "";

    if (id === "email") {
      // Validate email address using regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = "Invalid email address";
      } else {
        // Check for duplicate email address
        const isEmailAlreadyUsed = await checkIfEmailAlreadyUsed(value);

        if (isEmailAlreadyUsed) {
          error = "Email address is already in use";
        } else {
          error = ""; // Clear the error message
        }
      }
    }

    // ...

    if (id === "phone") {
      // Validate phone number using regex
      const phoneRegex = /^\+?\d{10}$/; // Assuming a 10-digit phone number
      if (!phoneRegex.test(value)) {
        error = "Invalid phone number";
      } else {
        const isPhoneAlreadyUsed = await checkIfPhoneAlreadyUsed(value);
        if (isPhoneAlreadyUsed) {
          error = "Phone number is already in use";
        } else {
          error = "";
        }
      }
    }
    if (id === "password") {
      // Validate password using regex
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
      if (!passwordRegex.test(value)) {
        if (value.length === 0) {
          attentionMessage =
            "Enter your password to confirm your Admin rights!";
          error = "";
        } else {
          attentionMessage = "";
          error = "Invalid password format. You need at least 6 characters!";
        }
      } else {
        attentionMessage = "";
        error = "";
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [id]: error }));
    setAttention((prevAttention) => ({
      ...prevAttention,
      [id]: attentionMessage ? attentionMessage : undefined,
    }));

    setData((prevData) => ({ ...prevData, [id]: value }));
  }, 1000);
  console.log(data);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(firestore, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      navigate(-1); // navigate to previous page
      toast.success("Item added successfully!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleAdd}>
              {/* {uploadStatus && <p>{uploadStatus}</p>} */}
              <div className="formInput">
                <label htmlFor="file">
                  Upload image: <DriveFolderUploadIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                  />
                  {errors[input.id] && (
                    <p className="error" style={{ color: "red" }}>
                      {errors[input.id]}
                    </p>
                  )}
                  {attention[input.id] && (
                    <p
                      className="attention"
                      aria-required
                      style={{ color: "green" }}
                    >
                      {attention[input.id]}
                    </p>
                  )}
                </div>
              ))}

              <button disabled={perc !== null && perc < 100} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>

        <Footer className="footer" />
      </div>
    </div>
  );
};

export default New;
