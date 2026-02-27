document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('gallery');
  if (!container) return;

  try {
    const response = await fetch('photos/manifest.json');
    if (!response.ok) throw new Error('Failed to load gallery');
    const jobs = await response.json();

    if (jobs.length === 0) {
      container.innerHTML = '<p class="text-muted text-center">No projects to display yet.</p>';
      return;
    }

    container.innerHTML = '';

    jobs.forEach(job => {
      const col = document.createElement('div');
      col.className = 'col-12 col-md-6 col-lg-4 mb-4';
      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${job.suburb}</h5>
            <p class="card-text text-muted small">Job #${job.jobNo} &mdash; ${job.builder}</p>
            <div class="row g-2">
              <div class="col-6">
                <p class="text-center mb-1 small fw-bold text-danger">Before</p>
                <img src="photos/${job.before}" alt="Before rendering - ${job.suburb}"
                     class="img-fluid rounded" loading="lazy">
              </div>
              <div class="col-6">
                <p class="text-center mb-1 small fw-bold text-success">After</p>
                <img src="photos/${job.after}" alt="After rendering - ${job.suburb}"
                     class="img-fluid rounded" loading="lazy">
              </div>
            </div>
          </div>
        </div>
      `;
      container.appendChild(col);
    });
  } catch (err) {
    container.innerHTML = '<p class="text-muted text-center">Gallery is currently unavailable.</p>';
  }
});
