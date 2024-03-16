import { useState } from "react";
import { useRef } from "react";

function Upload() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const inputVideo = useRef();
  const inputImage = useRef();

  async function handleClick(event) {
    event.preventDefault();

    const videoFile = inputVideo.current.files[0];
    const imageFile = inputImage.current.files[0];
    const data = new FormData();

    // append the video file and other form data to it
    data.append(
      "userID",
      JSON.parse(localStorage.getItem("response")).user._id
    );
    data.append("video", videoFile);
    data.append("thumbnail", imageFile);
    data.append("title", formData.title);
    data.append("description", formData.description);

    // Send the data to the server
    const url = import.meta.env.VITE_API_URL + "/uploads/upload";
    const response = await fetch(url, {
      method: "POST",
      body: data,
    });

    if (response.ok) {
      console.log(await response.json());
      console.log("Video uploaded successfully");
    } else {
      console.log("Failed to upload video");
    }
  }

  return (
    <form action="/upload" method="post" encType="multipart/form-data">
      <input type="file" ref={inputVideo} name="video" accept="video/*" />
      <input
        type="text"
        value={formData.title}
        name="title"
        placeholder="Title"
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <input
        type="text"
        value={formData.description}
        name="description"
        placeholder="Description"
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      <input type="file" ref={inputImage} name="thumbnail" accept="image/*" />
      <button type="submit" onClick={handleClick}>
        Submit
      </button>
    </form>
  );
}

export default Upload;
