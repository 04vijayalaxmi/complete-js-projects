document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&format=json&origin=*`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const results = data.query.search;
            let output = '<h2>Search Results:</h2>';
            results.forEach(result => {
                output += `
                    <div>
                        <h3>${result.title}</h3>
                        <p>${result.snippet}</p>
                        <a href="https://en.wikipedia.org/?curid=${result.pageid}" target="_blank">Read more</a>
                    </div>
                `;
            });
            document.getElementById('results').innerHTML = output;
        })
        .catch(error => console.error('Error:', error));
});
