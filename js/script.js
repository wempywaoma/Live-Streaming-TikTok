document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");

  searchInput.addEventListener("input", function (event) {
    const query = event.target.value.toLowerCase();
    const videos = document.querySelectorAll(".video-item");

    videos.forEach((video) => {
      const title = video.querySelector("h3").textContent.toLowerCase();
      if (title.includes(query)) {
        video.style.display = "block";
      } else {
        video.style.display = "none";
      }
    });
  });
});
