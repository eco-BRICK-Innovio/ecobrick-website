export function Proof({ content }) {
  return `
    <section class="section proof-section" id="proof">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${content.title}</h2>
          <div class="section-line"></div>
        </div>
        
        <div class="proof-content fade-in slide-in-up">
            <p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-text-muted); max-width: 900px; margin: 0 auto; text-align: center; margin-bottom: 3rem;">
                ${content.body}
            </p>
            
            <div class="proof-images" style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap;">
                <div class="proof-img-col" style="max-width: 180px; flex: 1; min-width: 150px; display: flex; flex-direction: column; gap: 1rem;">
                    <img src="/assets/proof-left-extra.jpg" alt="Innovation Exhibit" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.3s ease;">
                    <img src="/assets/proof-right-extra.jpg" alt="Team at Expo" style="width: 100%; height: 130px; object-fit: cover; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.3s ease;">
                </div>
                <div class="proof-img-col" style="max-width: 180px; flex: 1; min-width: 150px; display: flex; flex-direction: column; gap: 1rem;">
                    <img src="/assets/proof-award.jpg" alt="Muni Expo 2025 Innovation Award" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.3s ease;">
                    <img src="/assets/proof-award-extra.jpg" alt="Award Ceremony Extra" style="width: 100%; height: 130px; object-fit: cover; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.3s ease;">
                </div>
                <div class="proof-img-col" style="max-width: 250px; flex: 1; min-width: 200px; display: flex; flex-direction: column; gap: 1rem;">
                    <img src="/assets/proof-team.jpg" alt="Eco Brick Team at Award Ceremony" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.3s ease;">
                    <img src="/assets/proof-presentation.jpg" alt="Eco Brick Presentation" style="width: 100%; height: 130px; object-fit: cover; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.3s ease;">
                </div>
                <div class="proof-img-col" style="max-width: 180px; flex: 1; min-width: 150px; display: flex; flex-direction: column; gap: 1rem;">
                    <img src="/assets/proof-one-pager.jpg" alt="Eco Brick Solution Overview" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.3s ease;">
                    <img src="/assets/proof-right-new.jpg" alt="Team at Expo" style="width: 100%; height: 130px; object-fit: cover; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.3s ease;">
                </div>
            </div>
        </div>
      </div>
    </section>
  `;
}
