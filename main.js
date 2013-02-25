$(document).ready(function() {
  MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

  var background_base64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDhCQzBDREZCQ0ZGMTFFMEIxQkFCQ0MxOEQzMzc5NTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDhCQzBDRTBCQ0ZGMTFFMEIxQkFCQ0MxOEQzMzc5NTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEOEJDMENEREJDRkYxMUUwQjFCQUJDQzE4RDMzNzk1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEOEJDMENERUJDRkYxMUUwQjFCQUJDQzE4RDMzNzk1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoOauxEAAAALSURBVAgdYzA+AwABNQEAGVbmvQAAAABJRU5ErkJggg%3D%3D"

  var observer = new MutationObserver(function(mutations, observer) {
    $('div[style]').each(function() {
      if ($(this).css('background-image') == 'url(data:image/png;base64,'+background_base64+')') {
        $(this).remove();
      }
    });
  });

  observer.observe(document, {
    subtree: true,
    attributes: true
  });
});
