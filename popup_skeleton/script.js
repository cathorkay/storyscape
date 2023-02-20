async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '803844fademsheb97c324f18df2fp1a65cfjsncc375303a931',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };
    
    const res = await fetch('https://concerts-artists-events-tracker.p.rapidapi.com/location?name=San%20Francisco&minDate=2023-02-12&maxDate=2023-02-18&page=1', options)
        // .then(response => response.json())
        // .then(response => console.log(response))
        // .catch(err => console.error(err));
    const record = await res.json()
    console.log('record', record)

    document.getElementById("concerts").innerHTML = record.data.map(item => `<li>${item.name}</li>`).join('');
}
// fetchData();