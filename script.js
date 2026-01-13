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

    // Add actual articles
    articles.forEach(article => {
        if (!seenTitles.has(article.title) && count < 5) {
            seenTitles.add(article.title);

            const li = document.createElement("li");
            li.textContent = article.title;
            listElement.appendChild(li);

            count++;
        }
    });

    // Show number of results available
    if (count < 5) {
        const info = document.createElement("li");
        info.textContent = `Only ${count} article${count === 1 ? "" : "s"} available`;
        info.style.fontStyle = "italic";
        info.style.textAlign = "center";
        info.style.color = "rgba(30,30,30,0.5)";
        listElement.appendChild(info);

        // Add placeholder cards for missing items
        for (let i = count + 1; i <= 5; i++) {
            const placeholder = document.createElement("li");
            placeholder.textContent = "No more articles currently available";
            placeholder.style.fontStyle = "italic";
            placeholder.style.textAlign = "center";
            placeholder.style.color = "rgba(30,30,30,0.3)";
            listElement.appendChild(placeholder);
        }
    }
}



