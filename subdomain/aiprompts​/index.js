// --- Data ---
const TRENDING_PROMPTS = [
  {
    id: 101,
    prompt: "Bioluminescent mushroom forest at night, glowing flora and fauna, mystical river, ethereal glow, fantasy, detailed, hyperrealistic.",
    imageUrl: "https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxoTmpNd1pEUTVPUzB5TURKaExUUmtZV0l0T1RBelppMWtPRGN5TURCbE56RXhNR0lHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--317aa468cc8e25303f95b8a6c5474aff562430ae/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e9280d525ba1fc2f95c971c0fbcb4a2ca8b55dd/prompthero-prompt-860ec5184a6.png"
  },
  {
    id: 102,
    prompt: "Portrait of a regal android queen, intricate golden filigree on porcelain face, glowing optic sensors, futuristic royalty, sci-fi, character concept art.",
    imageUrl: "https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWs1TmpjelptTTFZUzB6TkRoaUxUUTBOVE10T1Rnd1l5MHlaRFZtWVRBeU1qQXhNREVHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--0c14f9e4c7994c1f36a86ba16431377fad73fda8/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e9280d525ba1fc2f95c971c0fbcb4a2ca8b55dd/prompthero-prompt-957045df1ff.png"
  },
  {
    id: 103,
    prompt: "An ancient, moss-covered golem made of stone and vines, sitting peacefully in a sun-dappled clearing, gentle giant, cinematic lighting, Lord of the Rings aesthetic.",
    imageUrl: "https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxtTmpabFpqVmxOaTAwWkRNMUxUUTBZMk10T0dFd1pTMDFNVFkwT1dZMVlqa3laRElHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--13dbcb3406e0a2f33bb0cf4569d1f72ac65a355a/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e9280d525ba1fc2f95c971c0fbcb4a2ca8b55dd/prompthero-prompt-e7815ad0d26.jpeg"
  }
];

const PROMPTS = [
  { id: 1, prompt: "A cinematic shot of a lone astronaut discovering a glowing, crystalline alien forest on a distant moon, volumetric lighting, epic scale, hyperrealistic, 8K.", imageUrl: "https://picsum.photos/seed/prompt1/512/512" },
  { id: 2, prompt: "An oil painting of a mystical library inside a giant, ancient tree, shelves filled with glowing books, sunbeams filtering through leaves, style of Thomas Kinkade.", imageUrl: "https://picsum.photos/seed/prompt2/512/512" },
  { id: 3, prompt: "Steampunk city street at dusk, copper and brass airships flying overhead, cobblestone streets wet with rain reflecting neon signs, detailed, intricate, moody.", imageUrl: "https://picsum.photos/seed/prompt3/512/512" },
  { id: 4, prompt: "A minimalist vector logo for a coffee shop named 'The Quantum Bean', featuring a coffee bean merging with an atom symbol, clean lines, muted colors.", imageUrl: "https://picsum.photos/seed/prompt4/512/512" },
  { id: 5, prompt: "Macro photograph of a snowflake on a dark wool sweater, incredibly detailed ice crystals, shallow depth of field, bokeh background.", imageUrl: "https://picsum.photos/seed/prompt5/512/512" },
  { id: 6, prompt: "A majestic cyberpunk dragon with neon circuits running along its metallic scales, perched atop a futuristic skyscraper, synthwave aesthetic, vibrant pinks and blues.", imageUrl: "https://picsum.photos/seed/prompt6/512/512" },
  { id: 7, prompt: "A cozy, cluttered artist's studio in a Parisian attic, sunlight streaming through a large window, canvases, paintbrushes, and plants everywhere, warm and inviting atmosphere.", imageUrl: "https://picsum.photos/seed/prompt7/512/512" },
  { id: 8, prompt: "An adorable, fluffy Corgi dressed as a wizard, holding a tiny glowing staff, fantasy setting, enchanted forest background, digital painting.", imageUrl: "https://picsum.photos/seed/prompt8/512/512" },
  { id: 9, prompt: "Abstract 3D render of interconnected glass cubes, reflecting a rainbow gradient, floating in a dark void, mesmerizing, satisfying loop, octane render.", imageUrl: "https://picsum.photos/seed/prompt9/512/512" },
  { id: 10, prompt: "A haunted Victorian mansion on a cliff overlooking a stormy sea, lightning flashes illuminating the scene, Gothic horror, dark and atmospheric, matte painting.", imageUrl: "https://picsum.photos/seed/prompt10/512/512" },
  { id: 11, prompt: "Food photography of a stack of fluffy pancakes, dripping with maple syrup and topped with fresh berries, bright morning light, high-resolution, delicious.", imageUrl: "https://picsum.photos/seed/prompt11/512/512" },
  { id: 12, prompt: "Pixel art of a serene Japanese garden with a koi pond, cherry blossom trees, and a small wooden bridge, 16-bit style, peaceful, animated.", imageUrl: "https://picsum.photos/seed/prompt12/512/512" },
  { id: 13, prompt: "A secret underwater city reminiscent of Atlantis, with towering spires that glow with soft blue light, schools of exotic fish swimming between buildings, deep sea exploration.", imageUrl: "https://picsum.photos/seed/prompt13/512/512" },
  { id: 14, prompt: "A beautiful elven warrior with silver hair and intricate armor, standing in a sun-drenched forest, holding a glowing bow, fantasy portrait, high detail, sharp focus.", imageUrl: "https://picsum.photos/seed/prompt14/512/512" },
  { id: 15, prompt: "A futuristic F1 racing car hovering on a magnetic track through a neon-lit city at night, motion blur, sense of speed, dynamic, cyberpunk racing.", imageUrl: "https://picsum.photos/seed/prompt15/512/512" },
  { id: 16, prompt: "An isometric 3D render of a cozy log cabin in the snow, smoke coming from the chimney, surrounded by pine trees, warm light from windows, winter scene, low poly.", imageUrl: "https://picsum.photos/seed/prompt16/512/512" },
  { id: 17, prompt: "Surreal collage art of a human head opening up to reveal a galaxy of stars and nebulae, thoughts and dreams, cosmic, symbolic, mixed media.", imageUrl: "https://picsum.photos/seed/prompt17/512/512" },
  { id: 18, prompt: "Watercolor painting of a bustling market street in Morocco, vibrant colors, detailed textiles, spices, and pottery, busy with people, sunlit atmosphere.", imageUrl: "https://picsum.photos/seed/prompt18/512/512" }
];

const faqs = [
  { question: "How do I use these prompts?", answer: "Simply click the 'Copy Prompt' button on any card. Then, paste the copied text into your favorite AI image generator, such as Midjourney, Stable Diffusion, or DALL-E." },
  { question: "Can I modify the prompts?", answer: "Absolutely! These prompts are designed to be a starting point. Feel free to add, remove, or change details to better match your creative vision. Experimentation is key to getting unique results." },
  { question: "What AI art generator should I use?", answer: "Different generators have unique styles. Midjourney is known for its artistic and cinematic outputs, Stable Diffusion offers high customizability, and DALL-E is great for photorealism and understanding natural language." },
  { question: "Why aren't my images looking like the ones here?", answer: "The final image depends on the AI model, its version, and specific parameters used. These prompts provide a strong foundation, but results will vary. Use them as inspiration and adapt them to your tool." },
  { question: "How can I get better results?", answer: "Be specific! Add details about lighting (e.g., 'volumetric lighting'), composition (e.g., 'wide-angle shot'), style (e.g., 'in the style of Van Gogh'), and rendering quality (e.g., '8K, hyperrealistic')." }
];

// --- Application State & Constants ---
const ITEMS_PER_PAGE = 6;
let currentPage = 1;

// --- DOM Elements ---
const trendingGrid = document.getElementById('trending-grid');
const latestGrid = document.getElementById('latest-grid');
const paginationControls = document.getElementById('pagination-controls');
const faqContainer = document.getElementById('faq-container');

// --- SVG Icons ---
const copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 mr-2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" /></svg>`;
const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 mr-2"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>`;

// --- Rendering Functions ---

/**
 * Creates the HTML for a single prompt card.
 * @param {object} prompt - The prompt object.
 * @returns {string} The HTML string for the prompt card.
 */
function createPromptCardHTML(prompt) {
  return `
    <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden group flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/20">
      <div class="aspect-square w-full overflow-hidden">
        <img src="${prompt.imageUrl}" alt="AI generated image for prompt: ${prompt.prompt.substring(0, 30)}..." class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
      </div>
      <div class="p-4 flex flex-col flex-grow">
        <div class="relative flex-grow">
          <p class="text-gray-300 text-sm leading-relaxed h-32 overflow-y-auto pr-2 scrollbar-thin">
            ${prompt.prompt}
          </p>
        </div>
        <button
          data-prompt-text="${encodeURIComponent(prompt.prompt)}"
          class="copy-button mt-4 w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 transition-colors duration-200"
        >
          ${copyIcon}
          Copy Prompt
        </button>
      </div>
    </div>
  `;
}

/**
 * Renders the prompts into a given grid element.
 * @param {HTMLElement} gridElement - The DOM element to render into.
 * @param {Array<object>} prompts - The array of prompt objects to render.
 */
function renderPrompts(gridElement, prompts) {
  if (!gridElement) return;
  gridElement.innerHTML = prompts.map(createPromptCardHTML).join('');
}

/** Renders the paginated "Latest" prompts. */
function renderLatestPrompts() {
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPrompts = PROMPTS.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  renderPrompts(latestGrid, currentPrompts);
}

/** Renders the pagination controls. */
function renderPagination() {
  if (!paginationControls) return;

  const totalPages = Math.ceil(PROMPTS.length / ITEMS_PER_PAGE);
  if (totalPages <= 1) {
    paginationControls.innerHTML = '';
    return;
  }

  let paginationHTML = `
    <button
      data-page-change="-1"
      ${currentPage === 1 ? 'disabled' : ''}
      class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-300 bg-gray-800 rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      Previous
    </button>
  `;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  paginationHTML += pageNumbers.map(number => `
    <button
      data-page-number="${number}"
      class="relative hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
        currentPage === number
          ? 'bg-blue-600 text-white z-10'
          : 'text-gray-300 bg-gray-800 hover:bg-gray-700'
      }"
      aria-current="${currentPage === number ? 'page' : 'false'}"
    >
      ${number}
    </button>
  `).join('');
  
  paginationHTML += `
    <div class="relative sm:hidden inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-300 bg-gray-800 rounded-md">
      Page ${currentPage} of ${totalPages}
    </div>
  `;

  paginationHTML += `
    <button
      data-page-change="1"
      ${currentPage === totalPages ? 'disabled' : ''}
      class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-300 bg-gray-800 rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      Next
    </button>
  `;

  paginationControls.innerHTML = paginationHTML;
}

/** Renders the FAQ section. */
function renderFaqs() {
  if (!faqContainer) return;
  faqContainer.innerHTML = faqs.map(faq => `
    <div class="bg-gray-800/50 p-6 rounded-lg shadow-lg">
      <h3 class="font-semibold text-lg text-cyan-400 mb-2">${faq.question}</h3>
      <p class="text-gray-400 leading-relaxed">${faq.answer}</p>
    </div>
  `).join('');
}


// --- Event Handlers ---

/**
 * Handles clicks on the pagination controls.
 * @param {Event} e - The click event.
 */
function handlePaginationClick(e) {
  const button = e.target.closest('button');
  if (!button || !paginationControls.contains(button)) return;

  const { pageNumber, pageChange } = button.dataset;
  const totalPages = Math.ceil(PROMPTS.length / ITEMS_PER_PAGE);
  let newPage = currentPage;

  if (pageNumber) {
    newPage = parseInt(pageNumber, 10);
  } else if (pageChange) {
    newPage += parseInt(pageChange, 10);
  }

  if (newPage >= 1 && newPage <= totalPages) {
    currentPage = newPage;
    renderLatestPrompts();
    renderPagination();
    document.getElementById('latest').scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Handles clicks on the copy prompt buttons.
 * @param {Event} e - The click event.
 */
async function handleCopyClick(e) {
    const button = e.target.closest('.copy-button');
    if (!button) return;

    const originalContent = button.innerHTML;
    const promptText = decodeURIComponent(button.dataset.promptText);

    try {
        await navigator.clipboard.writeText(promptText);
        button.innerHTML = `${checkIcon} Copied!`;
        button.classList.remove('bg-blue-600', 'hover:bg-blue-700');
        button.classList.add('bg-green-600', 'cursor-default');
        button.disabled = true;

        setTimeout(() => {
            button.innerHTML = originalContent;
            button.classList.add('bg-blue-600', 'hover:bg-blue-700');
            button.classList.remove('bg-green-600', 'cursor-default');
            button.disabled = false;
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
        button.innerHTML = 'Error Copying';
        setTimeout(() => {
             button.innerHTML = originalContent;
        }, 2000);
    }
}


// --- Initialization ---

/**
 * Initializes the application.
 */
function init() {
  renderPrompts(trendingGrid, TRENDING_PROMPTS);
  renderLatestPrompts();
  renderPagination();
  renderFaqs();

  // Event delegation for clicks
  document.body.addEventListener('click', (e) => {
    handlePaginationClick(e);
    handleCopyClick(e);
  });
}

// Run the app once the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', init);