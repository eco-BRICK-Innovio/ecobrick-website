export function Team({ content }) {
  return `
    <section class="section team-section" id="team">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${content.title}</h2>
          <p class="section-subtitle">${content.subtitle}</p>
        </div>
        <div class="team-grid">
          ${content.members.map(member => `
            <div class="team-card">
              <div class="team-info">
                <h3 class="team-name">${member.name}</h3>
                <p class="team-role">${member.role}</p>
                <p class="team-bio">${member.bio}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
