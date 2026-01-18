export function Team({ content }) {
  return `
    <section class="section team-section" id="team">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${content.title}</h2>
          <p class="section-subtitle">${content.subtitle}</p>
        </div>
        <ul class="team-grid" style="list-style: none; padding: 0; margin: 0;">
          ${content.members.map(member => `
            <li class="team-card">
              <div class="team-info">
                <h3 class="team-name">${member.name}</h3>
                <p class="team-role">${member.role}</p>
                <p class="team-bio">${member.bio}</p>
              </div>
            </li>
          `).join('')}
        </ul>
      </div>
    </section>
  `;
}
