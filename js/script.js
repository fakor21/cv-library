/**
 * CV Library - Afghan Job Market
 * Pure Vanilla JavaScript for GitHub Pages
 */

// ============================================================
// CATEGORY DATA — Based on ACBAR Afghanistan job postings
// ============================================================
const categories = [
  {
    id: 1,
    title: 'Education',
    description: 'Education officers, teacher educators, and trainers for Afghan schools and institutions',
    count: 6,
    folder: 'category1',
  },
  {
    id: 2,
    title: 'Business, Finance & Administration',
    description: 'Admin, finance, HR, and data entry roles in Afghan organizations',
    count: 6,
    folder: 'category2',
  },
  {
    id: 3,
    title: 'Engineering & Technical',
    description: 'WASH engineers, technicians, and technical specialists in Afghanistan',
    count: 6,
    folder: 'category3',
  },
  {
    id: 4,
    title: 'Medical & Health',
    description: 'Vaccinators, midwives, nurses, and health professionals in Afghan health facilities',
    count: 6,
    folder: 'category4',
  },
  {
    id: 5,
    title: 'Data Management & MEAL',
    description: 'MEAL officers, M&E officers, and data management roles in Afghan NGOs',
    count: 6,
    folder: 'category5',
  },
  {
    id: 6,
    title: 'Computer Science & IT',
    description: 'IT network officers, MIS officers, and IT support roles in Afghanistan',
    count: 6,
    folder: 'category6',
  },
  {
    id: 7,
    title: 'Humanitarian & Program Management',
    description: 'Project officers, field officers, and program staff in Afghan humanitarian sector',
    count: 6,
    folder: 'category7',
  },
  {
    id: 8,
    title: 'Logistics & Supply Chain',
    description: 'Procurement, logistics, and supply chain officers for Afghan operations',
    count: 6,
    folder: 'category8',
  },
  {
    id: 9,
    title: 'Protection & Social Services',
    description: 'Protection officers, social workers, and community mobilizers in Afghanistan',
    count: 6,
    folder: 'category9',
  },
  {
    id: 10,
    title: 'WASH & Livelihoods',
    description: 'WASH engineers, hygiene promoters, and livelihoods assistants in Afghan communities',
    count: 6,
    folder: 'category10',
  },
];

// ============================================================
// DOM ELEMENTS
// ============================================================
const categoriesGrid = document.getElementById('categoriesGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const noResults = document.getElementById('noResults');
const navHamburger = document.getElementById('navHamburger');
const navLinks = document.getElementById('navLinks');

// ============================================================
// RENDER CATEGORY CARDS
// ============================================================
function renderCategories(filter = '') {
  const query = filter.toLowerCase().trim();
  const filtered = query
    ? categories.filter(
        (cat) =>
          cat.title.toLowerCase().includes(query) ||
          cat.description.toLowerCase().includes(query)
      )
    : categories;

  // Show/hide no results message
  if (filtered.length === 0) {
    categoriesGrid.style.display = 'none';
    noResults.style.display = 'block';
    return;
  } else {
    categoriesGrid.style.display = 'grid';
    noResults.style.display = 'none';
  }

  // Build HTML
  categoriesGrid.innerHTML = filtered
    .map(
      (cat, index) => `
    <div class="category-card" data-folder="${cat.folder}" data-id="${cat.id}" style="transition-delay: ${index * 100}ms">
      <h3 class="category-card-title">${escapeHtml(cat.title)}</h3>
      <p class="category-card-desc">${escapeHtml(cat.description)}</p>
      <div class="category-card-footer">
        <span class="category-card-link">View</span>
        <span class="category-card-badge">${cat.count} CVs</span>
      </div>
    </div>
  `
    )
    .join('');

  // Attach click handlers to cards
  document.querySelectorAll('.category-card').forEach((card) => {
    card.addEventListener('click', () => {
      const folder = card.dataset.folder;
      const title = card.querySelector('.category-card-title').textContent;
      showCategoryInfo(folder, title);
    });
  });

  // Trigger visibility after a small delay for animation
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.querySelectorAll('.category-card').forEach((card) => {
        card.classList.add('visible');
      });
    });
  });
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Navigate to category detail page when card is clicked
function showCategoryInfo(folder, _title) {
  window.location.href = `category.html?cat=${folder}`;
}

// ============================================================
// SEARCH FUNCTIONALITY
// ============================================================
let searchTimeout;

function handleSearch() {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    const query = searchInput.value;
    renderCategories(query);
  }, 300);
}

searchInput.addEventListener('input', handleSearch);
searchBtn.addEventListener('click', () => renderCategories(searchInput.value));

// Allow Enter key to search
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    clearTimeout(searchTimeout);
    renderCategories(searchInput.value);
  }
});

// ============================================================
// MOBILE MENU
// ============================================================
navHamburger.addEventListener('click', () => {
  navHamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    navHamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// ============================================================
// SCROLL-TRIGGERED ANIMATIONS (Intersection Observer)
// ============================================================

// Fade-in section headers
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.fade-in-section').forEach((el) => {
  fadeObserver.observe(el);
});

// Stat items observer
const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        statObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll('.stat-item').forEach((el) => {
  statObserver.observe(el);
});

// Category cards observer (for individual card animations)
const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        cardObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

// ============================================================
// STATISTICS COUNTER ANIMATION
// ============================================================
function animateCounters() {
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);
          const suffix = el.dataset.suffix || '';
          const duration = 2000;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(target * eased);
            el.textContent = current + suffix;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            }
          }

          requestAnimationFrame(updateCounter);
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((el) => counterObserver.observe(el));
}

// ============================================================
// SMOOTH SCROLL FALLBACK (for older browsers)
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ============================================================
// HANDLE PAGE LOAD WITH QUERY PARAM (for linking to searches)
// ============================================================
function handleUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const search = params.get('search');
  if (search) {
    searchInput.value = search;
    renderCategories(search);
  }
}

// ============================================================
// INITIALIZE
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Set hero animation delays
  document.querySelectorAll('.fade-in').forEach((el) => {
    const delay = el.dataset.delay || '0';
    el.style.animationDelay = delay + 'ms';
  });

  // Render categories
  renderCategories();

  // Start counter animations
  animateCounters();

  // Handle URL search params
  handleUrlParams();
});
