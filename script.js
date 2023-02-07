let currentPage = 1;
  const totalPages = 2; // replace with the actual number of pages

  document.getElementById("next-button").addEventListener("click", function() {
    currentPage++;
    if (currentPage > totalPages) {
      currentPage = totalPages;
    }
    window.location.href = "page" + currentPage + ".html";
  });

  document.getElementById("previous-button").addEventListener("click", function() {
    currentPage--;
    if (currentPage < 1) {
      currentPage = 1;
    }
    window.location.href = "page" + currentPage + ".html";
  });

 