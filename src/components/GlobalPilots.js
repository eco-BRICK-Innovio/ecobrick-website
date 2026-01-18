export function GlobalPilots({ content }) {
  return `
    <section class="section global-pilots-section" id="global-pilots">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${content.title}</h2>
          <p class="section-subtitle">${content.subtitle}</p>
        </div>
        <div class="pilots-grid">
          ${content.videos.map((video, index) => `
            <div class="video-card">
              <div class="video-placeholder" 
                   style="background-image: url('https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg'); background-size: cover; background-position: center;"
                   onclick="this.innerHTML = '<iframe width=\'100%\' height=\'100%\' src=\'https://www.youtube.com/embed/${video.videoId}?autoplay=1\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>'">
                <div class="play-button">
                  <div class="play-icon"></div>
                </div>
                <span class="video-label">${video.title}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
