import{H as i}from"./Header-dA1zBvZr.js";const r={header:{technology:"Technology",applications:"Applications",impact:"Impact",partner:"Home",partnerLink:"/",technicalLibrary:"Technical Library"}},a=()=>console.log("Lang toggle not implemented on this static page"),s="en";document.querySelector("#app").innerHTML=`
            ${i({content:r.header,toggleLang:a,currentLang:s})}
            <main style="padding-top: 100px; min-height: 80vh; background-color: #f8f9fa;">
                <div class="container" style="max-width: 1200px;">
                    <h1 style="margin-bottom: 1rem; color: var(--color-primary);">Technical Library</h1>
                    <p style="margin-bottom: 2rem; color: var(--color-text-muted);">Access our technical documentation, test reports, and presentations.</p>
                    
                    <div class="document-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 2rem;">
                        
                        <!-- Document Card 1 -->
                        <div class="doc-card" style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                            <div class="doc-preview" style="height: 200px; background-color: #e9ecef; display: flex; align-items: center; justify-content: center; position: relative;">
                                <span style="font-size: 3rem;">🖥️</span>
                                <div class="overlay" style="position: absolute; inset: 0; background: transparent;"></div>
                            </div>
                            <div class="doc-info" style="padding: 1.5rem;">
                                <h3 style="margin-bottom: 0.5rem;">Main Presentation</h3>
                                <p style="font-size: 0.9rem; color: #6c757d; margin-bottom: 1rem;">Comprehensive overview of eco BRICK Innovio technology and vision.</p>
                                <button onclick="window.open('https://siautomation455-my.sharepoint.com/:b:/g/personal/shlomi_innovio_tech/IQA7EYqBrYytQIauvdGcwbTzAZeDDa3QsDxh2jOC0AeJWDQ?e=8414nw', '_blank')" class="btn btn-primary" style="width: 100%;">View Presentation</button>
                            </div>
                        </div>

                        <!-- Document Card 2 -->
                        <div class="doc-card" style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                            <div class="doc-preview" style="height: 200px; background-color: #e9ecef; display: flex; align-items: center; justify-content: center; position: relative;">
                                <span style="font-size: 3rem;">📊</span>
                                <div class="overlay" style="position: absolute; inset: 0; background: transparent;"></div>
                            </div>
                            <div class="doc-info" style="padding: 1.5rem;">
                                <h3 style="margin-bottom: 0.5rem;">ASTM C331 Standard Report</h3>
                                <p style="font-size: 0.9rem; color: #6c757d; margin-bottom: 1rem;">Standard Specification for Lightweight Aggregates for Concrete Masonry Units.</p>
                                <button onclick="window.open('https://siautomation455-my.sharepoint.com/:b:/g/personal/shlomi_innovio_tech/IQD3uwAv0LuXQYoZLvgxsVOGAdbUu8F6W5GBu5m5YTZdnVA?e=4aaRhd', '_blank')" class="btn btn-primary" style="width: 100%;">View Report</button>
                            </div>
                        </div>

                        <!-- Document Card 3 -->
                        <div class="doc-card" style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                            <div class="doc-preview" style="height: 200px; background-color: #e9ecef; display: flex; align-items: center; justify-content: center; position: relative;">
                                <span style="font-size: 3rem;">📜</span>
                                <div class="overlay" style="position: absolute; inset: 0; background: transparent;"></div>
                            </div>
                            <div class="doc-info" style="padding: 1.5rem;">
                                <h3 style="margin-bottom: 0.5rem;">the Standards Institution of Israel</h3>
                                <p style="font-size: 0.9rem; color: #6c757d; margin-bottom: 1rem;">Official Standard Compliance Certificate.</p>
                                <button onclick="window.open('https://siautomation455-my.sharepoint.com/:b:/g/personal/shlomi_innovio_tech/IQAXH_4jYtUIRaUERkQ0UX1UAc0f1TSEMJFiLhHIdBtQYfo?e=EEVI2J', '_blank')" class="btn btn-primary" style="width: 100%;">View Certificate</button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <!-- Copyright Footer -->
            <footer class="footer" style="margin-top: auto;">
                <div class="container footer-content">
                    <p>&copy; 2026 Eco BRICK Innovio. All rights reserved.</p>
                </div>
            </footer>

            <!-- Secure Viewer Modal -->
            <div id="doc-viewer-modal" style="display: none; position: fixed; inset: 0; z-index: 1000; background: rgba(0,0,0,0.9); flex-direction: column;">
                <div class="viewer-header" style="background: #000; padding: 1rem; display: flex; justify-content: space-between; align-items: center; color: white;">
                    <span id="viewer-title">Document Viewer</span>
                    <button onclick="closeViewer()" style="background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer;">&times;</button>
                </div>
                <div class="viewer-body" style="flex: 1; position: relative; width: 100%; height: 100%;">
                    <!-- Protection Overlay -->
                    <div class="protection-layer" style="position: absolute; inset: 0; z-index: 10; background: transparent;" oncontextmenu="return false;"></div>
                    
                    <!-- Iframe Viewer with restrictions -->
                    <iframe id="doc-frame" src="" style="width: 100%; height: 100%; border: none;" allowfullscreen></iframe>
                </div>
            </div>
        `;window.openViewer=function(e){const t=document.getElementById("doc-viewer-modal"),n=document.getElementById("doc-frame");if(e.startsWith("http"))n.src=e;else{const o=`
                    <body style="background: #525659; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; color: white; font-family: sans-serif;">
                        <div style="text-align: center;">
                            <h2>Secure View Mode</h2>
                            <p>Document: ${e}</p>
                            <p><em>(Placeholder: Upload actual PDF to public/documents/)</em></p>
                        </div>
                    </body>
                `;n.src="data:text/html;charset=utf-8,"+encodeURIComponent(o)}t.style.display="flex",t.addEventListener("contextmenu",o=>o.preventDefault())};window.closeViewer=function(){const e=document.getElementById("doc-viewer-modal"),t=document.getElementById("doc-frame");e.style.display="none",t.src=""};
