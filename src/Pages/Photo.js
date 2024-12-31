import React, { useState } from "react";
import Header from "../Components/Header";
import bgImage from "../assets/Images/photobg.jpg";

function Photo() {
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleFileUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImages((prev) => [...prev, reader.result]);
        setShowModal(false);
        setSelectedFile(null);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDeleteImage = (index) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <Header />
      <div
        className=" pt-32 min-h-screen"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-row justify-between px-20 items-center">
          <h1 className="text-white text-3xl font-semibold nameholder">
            Photo Gallery
          </h1>
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-600 nameholder1 hover:bg-green-700 px-4 py-2 rounded-md text-white w-[130px] text-[16px]"
          >
            Upload Photo
          </button>
        </div>

        <div className="border-t border-gray-500 mt-4 mx-20" />

        <div className="px-20 py-10">
          {uploadedImages.length === 0 ? (
            <p className="text-white/90 text-center nameholder1">
              No photos to preview
            </p>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {uploadedImages.map((image, index) => (
                <div key={index} className="relative ">
                  <img
                    src={image}
                    alt={`Uploaded ${index + 1}`}
                    className="w-full h-auto object-cover rounded-md shadow-lg"
                  />
                  <button
                    onClick={() => handleDeleteImage(index)}
                    className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full p-1"
                    title="Delete"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-md p-6 w-1/3">
              <h2 className="text-xl font-semibold mb-4 nameholder1">
                Upload Image
              </h2>
              <div
                className="border-dashed border-2 border-gray-400 rounded-md h-40 flex flex-col items-center justify-center text-center"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
              >
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M16 7l-4-4m0 0L8 7m4-4v12"
                    />
                  </svg>
                  <p className="text-gray-500 nameholder1 mt-2">
                    Drag & Drop or
                  </p>
                  <span className="text-blue-500 nameholder1 underline">
                    Choose File
                  </span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="file-upload"
                  onChange={handleInputChange}
                />
              </div>
              {selectedFile && (
                <p className="mt-2 text-sm nameholder1 text-gray-600">
                  Selected File: {selectedFile.name}
                </p>
              )}
              <div className="mt-4 flex justify-end space-x-4">
                <button
                  onClick={handleFileUpload}
                  className="bg-green-600 nameholder1 hover:bg-green-700 text-white px-4 py-2 rounded-md"
                  disabled={!selectedFile}
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setShowModal(false);
                    setSelectedFile(null);
                  }}
                  className="bg-gray-500 nameholder1 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Photo;
