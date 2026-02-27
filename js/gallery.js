document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('gallery');
  if (!container) return;

  try {
    const response = await fetch('photos/gallery/manifest.json');
    if (!response.ok) throw new Error('Failed to load gallery');
    const jobs = await response.json();

    if (jobs.length === 0) {
      container.innerHTML = '<p class="text-muted text-center">No projects to display yet.</p>';
      return;
    }

    let current = 0;

    function render() {
      const job = jobs[current];
      const counter = `${current + 1} / ${jobs.length}`;
      container.innerHTML = `
        <div class="gallery-reel mx-auto">
          <div class="text-center mb-3">
            <h5 class="mb-1">${job.suburb}</h5>
            ${job.builder ? `<p class="text-muted small mb-0">Job #${job.jobNo} &mdash; ${job.builder}</p>` : ''}
          </div>
          <div class="mb-2">
            <p class="text-center mb-1 small fw-bold text-danger">Before</p>
            <img src="photos/gallery/${job.before}" alt="Before rendering - ${job.suburb}"
                 class="img-fluid rounded w-100">
          </div>
          <div class="mb-3">
            <p class="text-center mb-1 small fw-bold text-success">After</p>
            <img src="photos/gallery/${job.after}" alt="After rendering - ${job.suburb}"
                 class="img-fluid rounded w-100">
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <button class="btn btn-outline-secondary" id="gallery-prev" ${current === 0 ? 'disabled' : ''}>
              &#8592; Prev
            </button>
            <span class="text-muted small">${counter}</span>
            <button class="btn btn-outline-secondary" id="gallery-next" ${current === jobs.length - 1 ? 'disabled' : ''}>
              Next &#8594;
            </button>
          </div>
        </div>
      `;

      document.getElementById('gallery-prev').addEventListener('click', () => {
        if (current > 0) { current--; render(); }
      });
      document.getElementById('gallery-next').addEventListener('click', () => {
        if (current < jobs.length - 1) { current++; render(); }
      });
    }

    render();
  } catch (err) {
    container.innerHTML = '<p class="text-muted text-center">Gallery is currently unavailable.</p>';
  }
});
