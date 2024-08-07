import React, { useEffect } from "react";

const ScrollX = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-content");
    const scrollLeftButton = document.getElementById("scroll-left");
    const scrollRightButton = document.getElementById("scroll-right");

    function checkScrollButtons() {
      if (scrollContainer.scrollLeft === 0) {
        scrollLeftButton.classList.add("hidden");
      } else {
        scrollLeftButton.classList.remove("hidden");
      }

      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth
      ) {
        scrollRightButton.classList.add("hidden");
      } else {
        scrollRightButton.classList.remove("hidden");
      }
    }
    scrollLeftButton.addEventListener("click", () => {
      scrollContainer.scrollLeft -= 400; // Adjust the value as needed
      checkScrollButtons();
    });

    scrollRightButton.addEventListener("click", () => {
      scrollContainer.scrollLeft += 400; // Adjust the value as needed
      checkScrollButtons();
    });

    scrollContainer.addEventListener("scroll", checkScrollButtons);
    // Initial check
    checkScrollButtons();
  }, []);

  useEffect(() => {
    var modal = document.getElementById("exampleModal");
    var modal2 = document.getElementById("exampleModal2");
    var modal3 = document.getElementById("exampleModal3");

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        pauseVideo("videoFrame1");
      }
      if (event.target == modal2) {
        modal2.style.display = "none";
        pauseVideo("videoFrame2");
      }
      if (event.target == modal3) {
        modal3.style.display = "none";
        pauseVideo("videoFrame3");
      }
    };

    // Function to pause the video
    function pauseVideo(videoFrame) {
      var iframe = document.getElementById(videoFrame);
      var iframeSrc = iframe.src;
      iframe.src = ""; // Clear the src attribute
      iframe.src = iframeSrc; // Reset the src attribute to stop the video
    }
  }, []);

  return (
    <div>
      <div className="videosection">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-3">
              <p className="video-title">Consulta gratuita!</p>
              <p>
                Quer uma consultoria em educação internacional de excelência e
                sem custo? Conheça o SMS HEG!
              </p>
              <button class="cta-button">Agende uma consulta gratuita</button>
            </div>
            <div className="col-9">
              <div class="scroll-container">
                <div id="scroll-left" className="scroll-left">
                  <button class="scroll-button ms-2">&#10094;</button>
                </div>
                <div class="scroll-content">
                  <div class="item">
                    <img
                      className="Video-Thumbnail"
                      src="https://i.ibb.co/tJqxcsV/Video-Thumbnail-01.png"
                      alt=""
                    />
                    <span
                      className="video-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                      >
                        <rect
                          width="60"
                          height="60"
                          rx="30"
                          fill="white"
                          fill-opacity="0.4"
                        />
                        <path
                          d="M30 50C41.0457 50 50 41.0457 50 30C50 18.9543 41.0457 10 30 10C18.9543 10 10 18.9543 10 30C10 41.0457 18.9543 50 30 50Z"
                          fill="#FEFEFE"
                        />
                        <path
                          d="M24 28.3996V31.6004C24 34.639 24 36.1582 24.8414 36.7724C25.6828 37.3864 26.8335 36.707 29.1351 35.3482L31.8456 33.7476C34.6152 32.1124 36 31.2948 36 30C36 28.7052 34.6152 27.8876 31.8456 26.2524L29.1351 24.6519C26.8335 23.293 25.6828 22.6136 24.8414 23.2276C24 23.8417 24 25.361 24 28.3996Z"
                          fill="#0B69FF"
                        />
                      </svg>
                    </span>

                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-body">
                            <iframe
                              id="videoFrame1"
                              src="https://drive.google.com/file/d/1zxxbrHwRwfMZPCSMSdmkqpp0y5KBL1CV/preview"
                              width="100%"
                              height="480"
                              allow="autoplay"
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <img
                      className="Video-Thumbnail"
                      src="https://i.ibb.co/9s09mfP/Video-Thumbnail-02.png"
                      alt=""
                    />
                    <span
                      className="video-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                      >
                        <rect
                          width="60"
                          height="60"
                          rx="30"
                          fill="white"
                          fill-opacity="0.4"
                        />
                        <path
                          d="M30 50C41.0457 50 50 41.0457 50 30C50 18.9543 41.0457 10 30 10C18.9543 10 10 18.9543 10 30C10 41.0457 18.9543 50 30 50Z"
                          fill="#FEFEFE"
                        />
                        <path
                          d="M24 28.3996V31.6004C24 34.639 24 36.1582 24.8414 36.7724C25.6828 37.3864 26.8335 36.707 29.1351 35.3482L31.8456 33.7476C34.6152 32.1124 36 31.2948 36 30C36 28.7052 34.6152 27.8876 31.8456 26.2524L29.1351 24.6519C26.8335 23.293 25.6828 22.6136 24.8414 23.2276C24 23.8417 24 25.361 24 28.3996Z"
                          fill="#0B69FF"
                        />
                      </svg>
                    </span>

                    <div
                      class="modal fade"
                      id="exampleModal2"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-body">
                            <iframe
                              id="videoFrame2"
                              src="https://drive.google.com/file/d/18V2oQ8vLDcK4qtGgfdqAP2PJsTY9dfkX//preview"
                              width="100%"
                              height="480"
                              allow="autoplay"
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <img
                      className="Video-Thumbnail"
                      src="https://i.ibb.co/D9d15fP/Video-Thumbnail-03.png"
                      alt=""
                    />

                    <span
                      className="video-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                      >
                        <rect
                          width="60"
                          height="60"
                          rx="30"
                          fill="white"
                          fill-opacity="0.4"
                        />
                        <path
                          d="M30 50C41.0457 50 50 41.0457 50 30C50 18.9543 41.0457 10 30 10C18.9543 10 10 18.9543 10 30C10 41.0457 18.9543 50 30 50Z"
                          fill="#FEFEFE"
                        />
                        <path
                          d="M24 28.3996V31.6004C24 34.639 24 36.1582 24.8414 36.7724C25.6828 37.3864 26.8335 36.707 29.1351 35.3482L31.8456 33.7476C34.6152 32.1124 36 31.2948 36 30C36 28.7052 34.6152 27.8876 31.8456 26.2524L29.1351 24.6519C26.8335 23.293 25.6828 22.6136 24.8414 23.2276C24 23.8417 24 25.361 24 28.3996Z"
                          fill="#0B69FF"
                        />
                      </svg>
                    </span>

                    <div
                      class="modal fade"
                      id="exampleModal3"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-body">
                            <iframe
                              id="videoFrame3"
                              src="https://drive.google.com/file/d/1EbWJF4iesjlCB6b7MNUKrRQZx3cdMkIl/preview"
                              width="100%"
                              height="480"
                              allow="autoplay"
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="scroll-right" className="scroll-right">
                  <button class="scroll-button me-2">&#10095;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollX;
