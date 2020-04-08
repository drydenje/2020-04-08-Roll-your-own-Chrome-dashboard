window.onload = function () {
  // sets the background to a random wallpaper
  setBackground("wallpaper");

  // pulls all bookmarks in the 'Mintbean' folder of your favourites, and returns them in an array
  // it was going to make clickable links on the page, didn't have time
  chrome.bookmarks.getTree(function (itemTree) {
    itemTree.forEach(function (item) {
      processNode(item);
    });
  });
};

function processNode(node) {
  if (node.children) {
    node.children.forEach(function (child) {
      processNode(child);
    });
  }
  if (node.title === "Mintbean") {
    const bookmarks = node.children.map((item) => {
      return {
        name: item.title,
        url: item.url,
      };
    });

    //
    console.log(bookmarks);
  }
}

const setBackground = (id) => {
  const src = "https://source.unsplash.com/random/3840x2160";
  const wallpaper = document.getElementById(id);
  wallpaper.style.backgroundImage = `linear-gradient(0deg, rgba(4,21,22,1) 0%, rgba(10,33,54,0.22592787114845936) 100%), url(${src})`;
  wallpaper.style.backgroundPosition = `center`;
};
