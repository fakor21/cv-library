/**
 * CV Library - Category Detail Page
 * Displays CV cards for a selected category with download functionality
 */

// ============================================================
// CATEGORY DATA — Based on ACBAR Afghanistan job postings
// ============================================================
const categories = [
  { id: 1, title: 'Education', description: 'Education officers, teacher educators, and trainers for Afghan schools and institutions', count: 6, folder: 'category1' },
  { id: 2, title: 'Business, Finance & Administration', description: 'Admin, finance, HR, and data entry roles in Afghan organizations', count: 6, folder: 'category2' },
  { id: 3, title: 'Engineering & Technical', description: 'WASH engineers, technicians, and technical specialists in Afghanistan', count: 6, folder: 'category3' },
  { id: 4, title: 'Medical & Health', description: 'Vaccinators, midwives, nurses, and health professionals in Afghan health facilities', count: 6, folder: 'category4' },
  { id: 5, title: 'Data Management & MEAL', description: 'MEAL officers, M&E officers, and data management roles in Afghan NGOs', count: 6, folder: 'category5' },
  { id: 6, title: 'Computer Science & IT', description: 'IT network officers, MIS officers, and IT support roles in Afghanistan', count: 6, folder: 'category6' },
  { id: 7, title: 'Humanitarian & Program Management', description: 'Project officers, field officers, and program staff in Afghan humanitarian sector', count: 6, folder: 'category7' },
  { id: 8, title: 'Logistics & Supply Chain', description: 'Procurement, logistics, and supply chain officers for Afghan operations', count: 6, folder: 'category8' },
  { id: 9, title: 'Protection & Social Services', description: 'Protection officers, social workers, and community mobilizers in Afghanistan', count: 6, folder: 'category9' },
  { id: 10, title: 'WASH & Livelihoods', description: 'WASH engineers, hygiene promoters, and livelihoods assistants in Afghan communities', count: 6, folder: 'category10' },
];

// Real mid-level job titles from ACBAR Afghanistan job postings
const cvTitles = {
  category1: ['Education Officer', 'District Teacher Educator', 'Youth Educator', 'Life Skills Trainer', 'Master Trainer for Teachers', 'School Health Counselor'],
  category2: ['Admin and Finance Assistant', 'Finance Assistant', 'Account Receivable Officer', 'Human Resources Officer', 'Data Entry Assistant', 'Admin Officer'],
  category3: ['WASH Engineer', 'HVAC Technician', 'Technical Implementation Engineer', 'ISP Technical Support', 'Site Engineer', 'Technical Designer Engineer'],
  category4: ['Vaccinator', 'Midwife', 'Nurse', 'Medical Doctor', 'Nutrition Counsellor', 'PSS Counselor'],
  category5: ['MEAL Officer', 'M&E Officer', 'M&E and Data Management Officer', 'Data Entry Officer', 'MEAL Assistant', 'M&E Data Collector'],
  category6: ['IT Network Officer', 'MIS Officer', 'CLIC Operator', 'Data Entry Officer', 'ISP Technical Support Officer', 'IT Support Officer'],
  category7: ['Project Officer', 'Nutrition Project Officer', 'Coordination Officer', 'Field Officer', 'Program Quality and Compliance Officer', 'ECCD Officer'],
  category8: ['Procurement and Logistics Officer', 'Logistics and Supply Officer', 'Procurement Officer', 'Logistics Assistant', 'Supply Chain Specialist', 'Warehouse Supervisor'],
  category9: ['Protection Officer', 'Protection Officer - Psychosocial Support', 'Social Worker', 'Community Mobilizer', 'MHPSS Counsellor', 'Safeguarding Social Worker'],
  category10: ['WASH Engineer', 'Hygiene Promoter', 'Community Mobilizer - Hygiene Promoter', 'Vegetable Expert Trainer', 'Health and Nutrition Extender', 'Livelihoods Assistant'],
};

// ============================================================
// DOM ELEMENTS
// ============================================================
const categoryTitle = document.getElementById('categoryTitle');
const categoryDesc = document.getElementById('categoryDesc');
const cvGrid = document.getElementById('cvGrid');
const cvError = document.getElementById('cvError');
const navHamburger = document.getElementById('navHamburger');
const navLinks = document.getElementById('navLinks');

// ============================================================
// URL PARAMETER PARSING
// ============================================================
function getCategoryFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('cat');
}

// ============================================================
// RENDER CV CARDS
// ============================================================
function renderCvCards(category) {
  const titles = cvTitles[category.folder] || [];

  cvGrid.innerHTML = '';

  for (let i = 1; i <= category.count; i++) {
    const cvNum = String(i).padStart(2, '0');
    const pdfPath = `cvs/${category.folder}/cv_${cvNum}.pdf`;
    const title = titles[i - 1] || `CV Template ${cvNum}`;

    const card = document.createElement('div');
    card.className = 'cv-card';
    card.style.transitionDelay = `${(i - 1) * 80}ms`;

    card.innerHTML = `
      <div class="cv-card-preview">
        <svg class="cv-card-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        <span class="cv-card-file">PDF</span>
      </div>
      <div class="cv-card-body">
        <h3 class="cv-card-title">${escapeHtml(title)}</h3>
        <p class="cv-card-meta">${escapeHtml(category.title)} &middot; Template ${cvNum}</p>
      </div>
      <div class="cv-card-footer">
        <a href="${pdfPath}" class="cv-download-btn" download>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span>Download</span>
        </a>
      </div>
    `;

    cvGrid.appendChild(card);
  }

  // Trigger entrance animation
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.querySelectorAll('.cv-card').forEach((card) => {
        card.classList.add('visible');
      });
    });
  });
}

// ============================================================
// INITIALIZE PAGE
// ============================================================
function initCategoryPage() {
  const folderName = getCategoryFromUrl();

  if (!folderName) {
    showError();
    return;
  }

  const category = categories.find((cat) => cat.folder === folderName);

  if (!category) {
    showError();
    return;
  }

  // Update page title
  document.title = `${category.title} - CV Templates`;

  // Update header
  categoryTitle.textContent = category.title;
  categoryDesc.textContent = `${category.count} professional CV templates for ${category.description.toLowerCase()}. Click download to save any template.`;

  // Render CV cards
  renderCvCards(category);
}

function showError() {
  categoryTitle.textContent = 'Category Not Found';
  categoryDesc.textContent = '';
  cvGrid.style.display = 'none';
  cvError.style.display = 'block';
}

// ============================================================
// UTILITY
// ============================================================
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ============================================================
// MOBILE MENU
// ============================================================
navHamburger.addEventListener('click', () => {
  navHamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    navHamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// ============================================================
// INITIALIZE
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initCategoryPage();
});
