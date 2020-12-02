var grid = document.querySelector('.grid');
var movies = new Movies( grid, {
  itemSelector: 'none', // select none at first
  columnWidth: '.grid__col-sizer',
  gutter: '.grid__gutter-sizer',
  percentPosition: true,
  stagger: 30,
  visibleStyle: { transform: 'translateY(0)', opacity: 1 },
  hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
});
imagesLoaded( grid, function() {
  grid.classList.remove('are-images-unloaded');
  movies.options.itemSelector = '.grid__item';
  var items = grid.querySelectorAll('.grid__item');
  movies.appended( items );
});
// init Infinite Scroll
var infScroll = new InfiniteScroll( grid, {
  append: '.grid__item',
  status: '.page-load-status',
});
