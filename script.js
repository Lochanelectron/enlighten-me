const API_KEY = "9d3b44e8a166feb5311acd0563132cd7";

const button = document.getElementById("enlightenBtn");
const newsList = document.getElementById("newsList");
const discoveriesList = document.getElementById("discoveriesList");

button.addEventListener("click", function () {
    fetchTechNews();
    fetchTechDiscoveries();
});

// -------- TECH NEWS --------
function fetchTechNews() {
    const gnewsUrl =
        `https://gnews.io/api/v4/top-headlines?category=technology&lang=en&max=5&apikey=${API_KEY}`;

    const proxyUrl =
        `https://api.allorigins.win/raw?url=${encodeURIComponent(gnewsUrl)}`;

    fetch(proxyUrl)
        .then(response => response.json())
        .then(data => {
            displayList(data.articles, newsList);
        })
        .catch(error => {
            console.error("Error fetching tech news:", error);
        });
}

// -------- TECH DISCOVERIES --------
function fetchTechDiscoveries() {
    const discoveryQuery = "technology breakthrough OR scientific discovery OR AI research OR innovation";

    const gnewsUrl =
        `https://gnews.io/api/v4/search?q=${encodeURIComponent(discoveryQuery)}&lang=en&max=5&apikey=${API_KEY}`;

    const proxyUrl =
        `https://api.allorigins.win/raw?url=${encodeURIComponent(gnewsUrl)}`;

    fetch(proxyUrl)
        .then(response => response.json())
        .then(data => {
            displayList(data.articles, discoveriesList);
        })
        .catch(error => {
            console.error("Error fetching tech discoveries:", error);
        });
}

// -------- DISPLAY FUNCTION --------
function displayList(articles, listElement) {
    listElement.innerHTML = "";

    const seenTitles = new Set();
    let count = 0;

    articles.forEach(article => {
        if (!seenTitles.has(article.title) && count < 5) {
            seenTitles.add(article.title);

            const li = document.createElement("li");
            li.textContent = article.title;
            listElement.appendChild(li);

            count++;
        }
    });

    // If no articles found
    if (count === 0) {
        const li = document.createElement("li");
        li.textContent = "No relevant articles available at the moment.";
        listElement.appendChild(li);
    }
}


