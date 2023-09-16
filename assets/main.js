const API = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PLT6KVETRMixNul-GGzw5L-EFAD8Emcu-i&part=snippet&maxResults=8';
const content = null || document.getElementById('content');
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '144930c8a2mshb6fbd4bc614aa7dp1b7e9cjsne77fe305e18c',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}


(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
        <a href="https://www.youtube.com/playlist?list=${video.snippet.playlistId}" target="_blank">
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-white">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
      </a>
        `).slice(0, 8).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        alert('Error');
        console.log(error);
    }
})();