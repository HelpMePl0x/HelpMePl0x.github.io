const searchClient = algoliasearch(
    'HIAZKNYWHU',
    '90e965e3a7392b0ec3f70e753858b7a6'
  );
  
  const search = instantsearch({
    indexName: 'tormovies',
    searchClient,
  });
  
  search.addWidgets([
    instantsearch.widgets.searchBox({
      container: '#searchbox',
      placeholder:"Search for movies",
    }),
    instantsearch.widgets.poweredBy({
      container: '#powered-by',
    }),
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        empty: `
          <div class="text-dark text-center py-5 my-5">
            <p class="display-4 fw-bold">No movies found</p>
            <a href="/request" class="btn btn-primary position-relative">
              request movie
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                42 hrs
                <span class="visually-hidden">unread messages</span>
              </span>
            </a>
          </div>
        `,
        item(item){
          return `
            <img src="${item.image}" class="card-img-top movie_poster" alt="${item.movie_name}">
            <div class="card-body p-3">
              <h5 class="card-title m-0 text-justify fw-bold text-dark">${item.movie_name}</h5>
              <small class="card-text text-muted">${item.release_date}</small>
              <div class="mt-2">
                ${item.dlink.three != "" ? `<a href="${item.dlink.three}" class="btn btn-outline-secondary">360p</a>` : ``}
                ${item.dlink.four != "" ? `<a href="${item.dlink.four}" class="btn btn-outline-secondary">480p</a>` : ``}
                ${item.dlink.seven != "" ? `<a href="${item.dlink.seven}" class="btn btn-outline-secondary">720p</a>` : ``}
                ${item.dlink.ten != "" ? `<a href="${item.dlink.ten}" class="btn btn-outline-secondary">1080p</a>` : ``}
                ${item.dlink.fourteen != "" ? `<a href="${item.dlink.fourteen}" class="btn btn-outline-secondary">1440p</a>` : ``}
                ${item.dlink.twentyone != "" ? `<a href="${item.dlink.twentyone}" class="btn btn-outline-secondary">2160p</a>` : ``}
                ${item.dlink.fourk != "" ? `<a href="${item.dlink.fourk}" class="btn btn-outline-secondary">4k</a>` : ``}
              </div>
            </div>
          `;
        }
      },
    }),
    instantsearch.widgets.pagination({
      container: '#pagination',
      showFirst: true,
      showPrevious: true,
      showNext: true,
      showLast: true,
    }),
  ]);
  
  search.start();