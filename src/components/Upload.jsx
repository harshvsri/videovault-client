import { useState, useRef } from "react";
import { API_URL } from "../utils/data";
import { Alert, Spinner } from "react-bootstrap";

function Upload() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({
    content: "",
    variant: "",
  });

  const inputVideo = useRef();
  const inputImage = useRef();

  async function handleClick(event) {
    event.preventDefault();
    setIsLoading(true);

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
    const url = API_URL + "/uploads/upload";
    const response = await fetch(url, {
      method: "POST",
      body: data,
    });

    if (response.ok) {
      console.log(await response.json());
      setMessage({
        content: "Video uploaded successfully",
        variant: "success",
      });
    } else {
      const errorMsg = await response.json();
      setMessage({
        content: errorMsg.message,
        variant: "danger",
      });
    }
    setIsLoading(false);
  }

  return (
    <>
      <form
        className="upload-form"
        action="/upload"
        method="post"
        encType="multipart/form-data"
      >
        {message && <Alert variant={message.variant}>{message.content}</Alert>}
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
        <h2>Upload Video</h2>
        <input type="file" ref={inputVideo} name="video" accept="video/*" />
        <h2>Upload Thumbnail</h2>
        <input type="file" ref={inputImage} name="thumbnail" accept="image/*" />
        <button type="submit" onClick={handleClick} disabled={isLoading}>
          {isLoading ? <Spinner animation="border" role="status" /> : "Submit"}
        </button>
      </form>
    </>
  );
}

export default Upload;
