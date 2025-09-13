
// --- DATA ---

const prompts = [
  { id: 1, prompt: "Transforming the photographed person into a realistic 3D figurine in front of a computer desk. The computer screen displays a 3D design drawing of the figurine's software interface. The figurine has a transparent base, and next to it is its matching packaging box, allowing the figurine to be seen. The overall scene is in a realistic style, with the character presented in an ultra-realistic manner. The image quality reaches 4K high definition, the lighting effects are bright and layered, and the colors are saturated and vibrant, showcasing the exquisite imaging effect of high-end photography. Visual Tone: The scene is rich in color and visually impactful. The camera should be able to display different grand backgrounds, with detailed and lively elements in the background, creating an immersive experience.", imageUrl: "https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxoTmpNd1pEUTVPUzB5TURKaExUUmtZV0l0T1RBelppMWtPRGN5TURCbE56RXhNR0lHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--317aa468cc8e25303f95b8a6c5474aff562430ae/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e9280d525ba1fc2f95c971c0fbcb4a2ca8b55dd/prompthero-prompt-860ec5184a6.png", model: "Nano Banana" },
  { id: 2, prompt: "Create a 1/7 scale commercialized figure of the character in the illustration, in a realistic style and environment. Place figure on a computer desk in front of computer screen, using a circular transparent acrylic base without any text. On the computer screen, display the Z-Brush modeling process of the figure. Next to the computer screen, place a BANDAI-style toy packaging box printed with the original artwork.", imageUrl: "https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWszT1dRMk16ZGxPUzB4TUdaaUxUUmlObUl0WW1GaFlTMHhOemcyTW1Vd09HVTBPRFlHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--fa70cb47a927c6080d50350a4ee5785f0d62e31f/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e9280d525ba1fc2f95c971c0fbcb4a2ca8b55dd/prompthero-prompt-69ff9889891.jpg", model: "Nano Banana" },
  { id: 3, prompt: "Generate a hyper-realistic, 9:16 studio-style collage featuring an adult man  (facial match to the uploaded photo), set against a simple light gray background with strong, dramatic lighting. The composition should be elegant and striking, arranged in a 3x3 grid layout, with each square showcasing a unique facial expression and playful body movement to add personality and intrigue.Each expression should feel distinct, from pointing with authority, laughing joyfully, pretending to sleep in a relaxed way, drinking with casual coolness, winking mischievously, to thinking thoughtfully and gesturing dynamically. Every pose should captivate with energy and evoke mood, drawing the viewer in.For added drama and depth, make each pose appear as if it’s bursting through torn white paper frames, creating a 3D effect like the man is breaking out of the background—infusing the image with tension, energy, and movement.Each square features a different outfit, perfectly complementing the mood of the expression:Casual, laid-back t-shirtSemi-formal blazer, sharp and refinedSporty hoodie, active and effortlessHumorous or eccentric attire, playful and boldCreative and artistic fashion choices, with unexpected flairThe expressions should be dynamic, ranging from fun and playful to serious and thoughtful, with each frame showcasing a different emotional layer. Skin texture, lighting, and details should be hyper-realistic, ensuring every fold of clothing, facial feature, and lighting shadow is sharp and impactful.The overall studio-style aesthetic should balance modern sophistication with bold creativity, making each pose feel cinematic, powerful, and engaging, as if the man is stepping out of the scene, commanding attention with every shift.", imageUrl: "https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWs1TjJVNFpERmhNeTFsTldJekxUUmlNVFF0WVRjd05pMW1NVE0xWkdFMFpHWXhNRFFHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--2faaefe95d27c357cf4aa0d9b8ebafc1454020b3/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e9280d525ba1fc2f95c971c0fbcb4a2ca8b55dd/prompthero-prompt-da70bffc84d.png", model: "Nano Banana" },
  { id: 4, prompt: "A cinematic book cover illustration titled Scoob! The Untold Story of depicting a heartwarming scene of friendship and mystery. In the center, a large, realistically rendered golden retriever resembling Scooby-Doo sits attentively, his expressive eyes reflecting curiosity and loyalty as he gazes towards the viewer. Surrounding him are four diverse young adults, each dressed in contemporary casual wear, dynamically posed in a collaborative, problem-solving stance—one examining a map, another peering through binoculars, another consulting a notebook, and the last looking alert and watchful. The background showcases a softly lit, modern cityscape at night with warm streetlights casting a magical glow upon the scene, creating an atmosphere of adventure and camaraderie.", imageUrl: "https://ideogram.ai/assets/image/lossless/response/ef2IEZPrTB6ooaMbAa7HJQ", model: "Ideogram" },
  { id: 5, prompt: "A Disney-Pixar-style animated character of merida, casual merida, Merida is sitting on a large rock in a sun-dappled forest clearing, wearing a casual flannel shirt over a tank top, cargo pants, and hiking boots. Her wild red curls are flowing freely, and she’s holding a small bouquet of wildflowers she picked from the forest, disney style", imageUrl: "https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxsTlRGbU1UVTFNeTFoTlRoa0xUUm1NVFF0T1dWaVpTMWhPRFkyTWpZeFkyRmlZbVVHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--a8cfed5b59d223d5da579c4247c4aea6b9280554/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e9280d525ba1fc2f95c971c0fbcb4a2ca8b55dd/prompthero-prompt-91177980051.jpg", model: "Flux" },
  { id: 6, prompt: "Create a giant hyper-realistic statue based on the given photo, keeping the original face exactly the same without changes. The statue stands tall in the middle of a roundabout in Dhaka, near a famous historical landmark. The statue is still under construction, surrounded by scaffolding, with many construction workers in yellow helmets and orange vests climbing, welding, and working on it.", imageUrl: "https://pbs.twimg.com/media/G0qBczsaQAAowr5?format=jpg&name=small", model: "Nano Banana" },
  { id: 7, prompt: "This is a photo of me. Craft a moody studio portrait of the uploaded person, bathed in golden-orange spotlight that creates a glowing circular halo behind them on the wall. The warm light should sculpt the face and upper body with soft, sunset-like tones, while casting a strong head shadow to the right. Style the person. Her eyes are closed and chin tilted slightly up.", imageUrl: "https://pbs.twimg.com/media/G0skLD3aMAASLF9?format=jpg&name=medium", model: "Nano Banana" },
  { id: 8, prompt: "A person inside a bright red box room, captured from a high-angle top view so the floor and feet are visible, create photobooth layout divided into 4 frames (2x2 grid). In each frame, the person shows differents stylish poses and hand gestures while wearing casual modern fashion with sunglasses, confident expressions, and dynamic movement. Keep the red box consistent as background in all frames, with solid black borders separating each frame for a poster-like photobox like.", imageUrl: "https://pbs.twimg.com/media/G0suJ72aUAAPBkk?format=jpg&name=900x900", model: "Nano Banana" },
  { id: 9, prompt: "Create a hyper-realistic digital artwork of the person in the reference image. He is wearing a white hoodie and gray cargo pants, stepping forward out of a giant 3D smartphone screen. His form transitions from glowing digital particles and colorful floating social media icons (Twitter/X, YouTube, Instagram, WhatsApp, etc.) into a fully realistic human body. The scene is set in a futuristic neon-lit laboratory, illuminated with purple and blue ambient lights. On the side, a computer monitor displays a glowing digital skeleton scan, and a collectible action figure box of the same person appears on a desk, labeled ‘LIMULL AI.’ The atmosphere is cinematic, detailed, and ultra-realistic, with 8K clarity and a sci-fi poster style aesthetic. Ensure the person’s facial features, build, and likeness exactly match the reference image.", imageUrl: "https://pbs.twimg.com/media/G0vcRTkXEAAMFMs?format=jpg&name=medium", model: "Nano Banana" },
  { id: 10, prompt: "A collage of 9 editorial-style photos with a green color theme. The background, all objects, items, and props are dynamically colored green, except for the human figures. Each collage is framed with a bright green border. The male character matches the reference, standing at 170 cm tall, weighing 70 kg, with an ideal physique. He is dressed in a modern casual all-green outfit: a long-sleeved open orange shirt over a light green t-shirt.", imageUrl: "https://pbs.twimg.com/media/G0uA_OcXcAAJaot?format=jpg&name=small", model: "Nano Banana" },
  { id: 11, prompt: "A photorealistic image of a torn piece of paper revealing [INSIDE VIEW]. The torn paper is vertically oriented, with the edges rough and uneven, as if ripped by hand. The contrast between the textured white paper and the detailed landscape creates a striking visual effect, capturing a feeling of discovery and wonder.", imageUrl: "https://pbs.twimg.com/media/G0ZVQfObgAERJF7?format=jpg&name=900x900", model: "Nano Banana" },
  { id: 12, prompt: "create a 3d floor plan layout from the uploaded 1d floor plan", imageUrl: "https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWswTWpNMFpHRTJNeTAzT0RrNUxUUXlNRE10WWpKallTMDNOemMzWldNMVlXWmtZV1FHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--da6112d0d6f4300bd6d6660c175c13d8d393858f/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e9280d525ba1fc2f95c971c0fbcb4a2ca8b55dd/prompthero-prompt-c23fd6726cd.jpg", model: "Flux" },
  { id: 13, prompt: "Style the photo I'm uploading in this style. , with a white or transparent background in a sticker-style illustration. --chaos 75 --ar 1:2 --stylize 750", imageUrl: "https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWt5TTJabVpXTTBOUzA1TkRkaExUUTFZalV0T0RNMk1DMHlabVZoTmpneU4ySTNPRFlHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--155b3546335b94e956c884e109a173af06d37269/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e9280d525ba1fc2f95c971c0fbcb4a2ca8b55dd/prompthero-prompt-dd80ca50bc8.png", model: "Flux" },
  { id: 14, prompt: "Simple sketch of the uploaded image, precise, very basic line drawing, simple, abstract --chaos 25 --ar 1:2 --personalize yruxpc2 --stylize 750 --v 6. 1", imageUrl: "https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWs1TUdFeU16WXlaaTFsT1dNMkxUUTFZVEl0T1dJME5pMDNPR1ZsWWpSa09UYzFaV1FHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--99a1e931076f81d1101cc602c96cb223a10960c4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e9280d525ba1fc2f95c971c0fbcb4a2ca8b55dd/prompthero-prompt-0348440517d.png", model: "Flux" },
  { id: 15, prompt: "AISIGNATURE handwritten signature saying 'Sikai Xiao', black stylish calligraphy on white background. The person is a data analyst", imageUrl: "https://replicate.delivery/xezq/jBi6hJUmQDajIhr9WLNHZ6rL3QeETf2i8TiDPx31zn1yiWFUA/out-0.jpg", model: "Flux" },
  { id: 16, prompt: "Turn this photo into a pencil drawing.", imageUrl: "https://pbs.twimg.com/media/G0t4wa5aIAASH6g?format=jpg&name=medium", model: "Nano Banana" },
  { id: 17, prompt: "Change this person's dress to be made out of tennis balls.", imageUrl: "https://pbs.twimg.com/media/G0t407FbwAEoLOy?format=jpg&name=medium", model: "Nano Banana" },
  { id: 18, prompt: "In fashion editorial photography, blurred long-exposure figures fill the foreground. The camera sharply focuses on an elegant woman, gazing at the viewer. She stands against a white, vertically striped, matte glass wall, prism light effect on the foreground. The scene features a white theme, a minimal aesthetic --ar 1:1 --profile mrkvnmv", imageUrl: "https://pbs.twimg.com/media/G0ZkVX3akAA8II8?format=jpg&name=4096x4096", model: "Nano Banana" },
];

const videoPrompts = [
  { id: 101, prompt: "Turn any photo into a 3D AI figure with Google's Nano Banana. Upload your image to generate a unique full set of 3D figurine collectibles.", tweetUrl: "https://twitter.com/thealexbanks/status/1966128820471116225", model: "Nano Banana" },
  { id: 102, prompt: "Big or small, all collectible.", tweetUrl: "https://twitter.com/PixVerse_/status/1965731989778247971", model: "PixVerse" },
  { id: 103, prompt: "Your hairline’s new best friend.", tweetUrl: "https://twitter.com/PixVerse_/status/1964644826684817686", model: "PixVerse" },
  { id: 104, prompt: "Change the camera angle to be an aerial drone shot looking down as this woman walks down the narrow street from above", tweetUrl: "https://twitter.com/HBCoop_/status/1950604841425768909", model: "RunwayML" },
  { id: 105, prompt: "The video is a continuous, cinematic one-shot from the point of view of a free-spirited beach dog exploring a vibrant tropical island. The camera follows the natural movement of a medium-sized, athletic dog with a short, toffee-brown coat, pointed nose, alert ears, and a lean, agile frame. The dog begins its run through a bustling open-air market, zig-zagging between motorbikes, crates of fruit, and woven baskets. Local vendors and passersby react playfully as it weaves through legs and knocks over a coconut.  It barrels through the automatic doors of a brightly lit convenience store, sliding slightly on the smooth floor, skidding past snack shelves and fridges, and startling an NPC dropping a can. A quick exit out the back leads straight into a winding jungle path. The dog's breath quickens. It bounds over logs, ducks under hanging vines, and pauses briefly to sniff before bolting again toward sunlight flickering through the canopy.  The foliage breaks suddenly—revealing a breathtaking, quiet beach. The dog charges toward the water, then slows to a trot as waves roll in. It stops at the waterline, panting, tail wagging, soaking in the breeze.  **Visual style**   Realistic, hyper-detailed 3D with tactile textures—from sandy paws and wet nose smudges to sun-soaked wood and dewy jungle leaves.  **Camera movement**   Low, responsive POV camera with quick darts, sudden pivots, and bounding momentum. Subtle head tilt and body roll mimic natural canine locomotion and curiosity.  **Main subject**   The island as experienced through the eyes of a curious beach dog—free, joyful, alert to the chaos and beauty around it.  **Background setting**   A Southeast Asian tropical island with a local market, a convenience store, a dense palm-filled jungle, and a wide, golden beach. No explicit signage—everything is conveyed through texture, color, and atmosphere.  **Lighting / Mood**   Dynamic natural light. Warm and bright in the market, cool and filtered in the jungle, then golden and open on the beach. The overall mood is playful, free, and cinematic.  **Audio cue**   Immersive diegetic sound: panting breath, padded paws on different surfaces, distant scooter engines, chatter, jungle insects, birds, a fridge hum inside the shop, crunching leaves, and eventually soft crashing waves.", tweetUrl: "https://twitter.com/techguyver/status/1930916882984603690", model: "Veo" },
  { id: 106, prompt: "The film opens with a close-up of a hand, nails painted a soft pastel pink, gently lifting the lid of a pastel blue woven box. As the lid rises, the camera peers inside, revealing a miniature boutique world already alive with motion. Pastel counters curve along the interior, mirrored panels stretch upward, and glowing shelves line the walls. At the center, a pastel blue delivery van has just rolled to a stop. Tiny staff figures in couture uniforms swing open the back doors, unveiling a radiant perfume bottle glowing softly on the flatbed. With slow, deliberate movements, the staff step forward, carefully lifting the perfume down. The camera tracks them as they carry it across the boutique floor, placing it ceremoniously onto a pedestal bathed in a soft spotlight. Once set, the perfume gleams like a jewel. The staff step back in quiet reverence as the camera lingers on the glowing bottle. Finally, the camera begins to pull away as the hand gently lowers the lid, closing the box. The frame returns seamlessly to where it began  ready to loop again, as though the enchanting world inside continues endlessly each time the box is opened.", tweetUrl: "https://twitter.com/Salmaaboukarr/status/1962273436782281058", model: "Veo" },
  { id: 107, prompt: "FPV-style camera chasing closely behind an orange-and-white cat confidently riding a skateboard along a narrow mountain path. The camera tilts and sways slightly, mimicking every sharp turn the cat makes. It occasionally surges forward as if trying to catch up, then falls slightly behind, enhancing the sense of a wild, high-speed pursuit.",  "style": "cinematic, ultra-dynamic, photorealistic",  "environment": "narrow dirt trail along a steep mountain slope, surrounded by wildflowers, grass, and dramatic views of distant peaks and a deep valley below",  "subject": "orange-and-white cat riding a skateboard with confidence and agility",  "action": [    "motion blur intensifies the feeling of extreme speed",    "flowers and grass turn into colorful streaks at the edges of the path",    "clouds race across the sky in the opposite direction",    "the skateboard bounces slightly on bumps",    "the cat’s tail flows dynamically in the wind"  ],  "mood": "exhilarating, intense, epic",  "lighting": "bright natural daylight with sharp contrast on the terrain and sparkling clouds",  "special_effects": "subtle camera shake, FPV vibrations, fast blur trails, depth-of-field with foreground in crisp focus", tweetUrl: "https://twitter.com/Preda2005/status/1964344052943585680", model: "Kling" },
  { id: 108, prompt: "Your Skull Avatar", tweetUrl: "https://twitter.com/PixVerse_/status/1960218731801387319", model: "PixVerse" },
];


const faqs = [
  { question: "What are AI prompts?", answer: "An AI prompt is a string of text that you give to an AI art generator (like Midjourney, DALL-E, or Stable Diffusion) to tell it what kind of image you want it to create. The more detailed and descriptive your prompt, the more likely you are to get the result you envision." },
  { question: "How do I use these prompts?", answer: "Simply click on any prompt card on this page. The prompt text will be automatically copied to your clipboard. Then, you can paste it directly into your favorite AI art generator." },
  { question: "Can I modify these prompts?", answer: "Absolutely! These prompts are designed to be a starting point. Feel free to add, remove, or change words to better match your creative vision. Experimenting is part of the fun of AI art generation." },
  { question: "Are these prompts free to use?", answer: "Yes, all prompts on this website are completely free for you to use in your personal and commercial projects." },
];

// --- STATE & CONSTANTS ---
const ITEMS_PER_PAGE = 6;
// Image state
let currentPage = 1;
let currentSearchQuery = '';
let currentModelFilter = 'all';
// Video state
let currentVideoPage = 1;
let currentVideoSearchQuery = '';
let currentVideoModelFilter = 'all';

// --- DOM ELEMENT SELECTORS ---
// General
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const faqContainer = document.getElementById('faq-container');
// Image section
const searchInput = document.getElementById('search-input');
const modelFilter = document.getElementById('model-filter');
const latestGrid = document.getElementById('latest-grid');
const paginationControls = document.getElementById('pagination-controls');
// Video section
const videoSearchInput = document.getElementById('video-search-input');
const videoModelFilter = document.getElementById('video-model-filter');
const videoGrid = document.getElementById('video-grid');
const videoPaginationControls = document.getElementById('video-pagination-controls');

// --- HELPER FUNCTIONS ---

/**
 * Gets the list of prompts, filtered by model and search query.
 * @returns {Array<object>} The filtered prompts.
 */
const getFilteredPrompts = () => {
  let filteredPrompts = prompts;

  // Filter by model
  if (currentModelFilter !== 'all') {
    filteredPrompts = filteredPrompts.filter(p => p.model === currentModelFilter);
  }

  // Filter by search query
  if (currentSearchQuery) {
    filteredPrompts = filteredPrompts.filter(p =>
      p.prompt.toLowerCase().includes(currentSearchQuery)
    );
  }

  return filteredPrompts;
};

/**
 * Gets the list of video prompts, filtered by model and search query.
 * @returns {Array<object>} The filtered video prompts.
 */
const getFilteredVideoPrompts = () => {
  let filtered = videoPrompts;

  if (currentVideoModelFilter !== 'all') {
    filtered = filtered.filter(p => p.model === currentVideoModelFilter);
  }

  if (currentVideoSearchQuery) {
    filtered = filtered.filter(p =>
      p.prompt.toLowerCase().includes(currentVideoSearchQuery)
    );
  }

  return filtered;
};


// --- RENDER FUNCTIONS ---

/**
 * Creates the HTML for a single prompt card.
 * @param {object} prompt The prompt object.
 * @returns {string} The HTML string for the prompt card.
 */
const createPromptCardHTML = (prompt) => `
  <div class="prompt-card bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-cyan-500/50 cursor-pointer relative group flex flex-col" data-prompt="${prompt.prompt}" role="button" tabindex="0" aria-label="Copy prompt: ${prompt.prompt}">
    <img src="${prompt.imageUrl}" alt="AI generated art for prompt: ${prompt.prompt.substring(0, 30)}..." class="w-full aspect-[9/16] object-cover" loading="lazy">
    <div class="p-4 flex-grow flex flex-col">
      <p class="text-gray-300 text-sm leading-relaxed flex-grow">${prompt.prompt}</p>
    </div>
    <div class="absolute top-2 right-2 bg-gray-900 bg-opacity-50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" title="Copy prompt">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    </div>
    <div class="absolute bottom-2 right-2 bg-gray-900 bg-opacity-75 text-cyan-400 text-xs font-bold px-2 py-1 rounded">
      ${prompt.model}
    </div>
    <div class="copy-feedback absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center text-white font-bold text-lg opacity-0 transition-opacity duration-300 pointer-events-none">
      Copied!
    </div>
  </div>
`;

/**
 * Creates the HTML for a single video prompt card.
 * @param {object} prompt The video prompt object.
 * @returns {string} The HTML string for the video prompt card.
 */
const createVideoPromptCardHTML = (prompt) => `
  <div class="prompt-card bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-green-500/50 relative group flex flex-col" data-prompt="${prompt.prompt}">
    <div class="aspect-[9/16] w-full bg-black flex items-center justify-center">
       <blockquote class="twitter-tweet" data-theme="dark" data-media-max-width="560">
         <a href="${prompt.tweetUrl}" class="text-gray-400">Loading Tweet...</a>
       </blockquote>
    </div>
    <div class="p-4 flex-grow flex flex-col cursor-pointer" role="button" tabindex="0" aria-label="Copy prompt: ${prompt.prompt}">
      <p class="text-gray-300 text-sm leading-relaxed flex-grow">${prompt.prompt}</p>
    </div>
    <div class="absolute top-2 right-2 bg-gray-900 bg-opacity-50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" title="Copy prompt">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    </div>
    <div class="absolute bottom-2 right-2 bg-gray-900 bg-opacity-75 text-green-400 text-xs font-bold px-2 py-1 rounded">
      ${prompt.model}
    </div>
    <div class="copy-feedback absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center text-white font-bold text-lg opacity-0 transition-opacity duration-300 pointer-events-none">
      Copied!
    </div>
  </div>
`;


/**
 * Creates the HTML for a single FAQ item.
 * @param {object} faq The FAQ object.
 * @returns {string} The HTML string for the FAQ item.
 */
const createFaqHTML = (faq) => `
  <details class="bg-gray-800 rounded-lg p-4 cursor-pointer group">
    <summary class="font-semibold text-lg text-gray-200 list-none flex justify-between items-center group-hover:text-cyan-400 transition-colors">
      <span>${faq.question}</span>
      <svg class="w-5 h-5 transform transition-transform duration-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>
    <p class="mt-4 text-gray-400 text-base">${faq.answer}</p>
  </details>
`;

/** Renders prompts for the current page, based on filters. */
const renderLatestPrompts = () => {
  if (!latestGrid) return;
  const filteredPrompts = getFilteredPrompts();
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const paginatedPrompts = filteredPrompts.slice(start, end);
  
  if (paginatedPrompts.length === 0) {
     let message = "No prompts found.";
     if (currentSearchQuery && currentModelFilter !== 'all') {
         message = `No prompts found for "${currentSearchQuery}" with model "${currentModelFilter}".`;
     } else if (currentSearchQuery) {
         message = `No prompts found for "${currentSearchQuery}".`;
     } else if (currentModelFilter !== 'all') {
         message = `No prompts found for the model "${currentModelFilter}".`;
     }
    latestGrid.innerHTML = `<p class="text-gray-400 col-span-full text-center">${message}</p>`;
  } else {
    latestGrid.innerHTML = paginatedPrompts.map(createPromptCardHTML).join('');
  }
};

/** Renders pagination controls based on filtered results. */
const renderPagination = () => {
  if (!paginationControls) return;
  const filteredPrompts = getFilteredPrompts();
  const totalPages = Math.ceil(filteredPrompts.length / ITEMS_PER_PAGE);

  if (totalPages <= 1) {
    paginationControls.innerHTML = '';
    return;
  }
  
  let html = '';

  // Previous button
  html += `<button data-page="${currentPage - 1}" class="px-4 py-2 bg-gray-700 rounded-md text-sm font-medium hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed" ${currentPage === 1 ? 'disabled' : ''}>Previous</button>`;

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    const activeClass = i === currentPage ? 'bg-cyan-600 text-white' : 'bg-gray-700 hover:bg-gray-600';
    html += `<button data-page="${i}" class="px-4 py-2 rounded-md text-sm font-medium ${activeClass}">${i}</button>`;
  }

  // Next button
  html += `<button data-page="${currentPage + 1}" class="px-4 py-2 bg-gray-700 rounded-md text-sm font-medium hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed" ${currentPage === totalPages ? 'disabled' : ''}>Next</button>`;
  
  paginationControls.innerHTML = html;
};

/** Renders video prompts for the current page, based on filters. */
const renderVideoPrompts = () => {
  if (!videoGrid) return;
  const filtered = getFilteredVideoPrompts();
  const start = (currentVideoPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, end);
  
  if (paginated.length === 0) {
     let message = "No video prompts found.";
     if (currentVideoSearchQuery && currentVideoModelFilter !== 'all') {
         message = `No video prompts found for "${currentVideoSearchQuery}" with model "${currentVideoModelFilter}".`;
     } else if (currentVideoSearchQuery) {
         message = `No video prompts found for "${currentVideoSearchQuery}".`;
     } else if (currentVideoModelFilter !== 'all') {
         message = `No video prompts found for the model "${currentVideoModelFilter}".`;
     }
    videoGrid.innerHTML = `<p class="text-gray-400 col-span-full text-center">${message}</p>`;
  } else {
    videoGrid.innerHTML = paginated.map(createVideoPromptCardHTML).join('');
    // Tell Twitter's widget script to render the new tweets
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load(videoGrid);
    }
  }
};

/** Renders video pagination controls based on filtered results. */
const renderVideoPagination = () => {
  if (!videoPaginationControls) return;
  const filtered = getFilteredVideoPrompts();
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  if (totalPages <= 1) {
    videoPaginationControls.innerHTML = '';
    return;
  }
  
  let html = '';

  html += `<button data-page="${currentVideoPage - 1}" class="px-4 py-2 bg-gray-700 rounded-md text-sm font-medium hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed" ${currentVideoPage === 1 ? 'disabled' : ''}>Previous</button>`;

  for (let i = 1; i <= totalPages; i++) {
    const activeClass = i === currentVideoPage ? 'bg-green-600 text-white' : 'bg-gray-700 hover:bg-gray-600';
    html += `<button data-page="${i}" class="px-4 py-2 rounded-md text-sm font-medium ${activeClass}">${i}</button>`;
  }

  html += `<button data-page="${currentVideoPage + 1}" class="px-4 py-2 bg-gray-700 rounded-md text-sm font-medium hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed" ${currentVideoPage === totalPages ? 'disabled' : ''}>Next</button>`;
  
  videoPaginationControls.innerHTML = html;
};

/** Renders FAQ items. */
const renderFAQs = () => {
  if (!faqContainer) return;
  faqContainer.innerHTML = faqs.map(createFaqHTML).join('');
};

/** Populates the model filter dropdown. */
const renderModelFilter = () => {
    if (!modelFilter) return;
    const models = [...new Set(prompts.map(p => p.model))].sort();
    
    let optionsHTML = `<option value="all">All Models</option>`;
    models.forEach(model => {
        optionsHTML += `<option value="${model}">${model}</option>`;
    });

    modelFilter.innerHTML = optionsHTML;
};

/** Populates the video model filter dropdown. */
const renderVideoModelFilter = () => {
    if (!videoModelFilter) return;
    const models = [...new Set(videoPrompts.map(p => p.model))].sort();
    
    let optionsHTML = `<option value="all">All Models</option>`;
    models.forEach(model => {
        optionsHTML += `<option value="${model}">${model}</option>`;
    });

    videoModelFilter.innerHTML = optionsHTML;
};

// --- EVENT HANDLERS ---

/** Toggles the mobile menu visibility. */
const handleMenuToggle = () => {
  mobileMenu?.classList.toggle('hidden');
};

/** Handles search input to filter prompts. */
const handleSearchInput = (e) => {
    const target = e.target;
    currentSearchQuery = target.value.trim().toLowerCase();
    currentPage = 1; // Reset to the first page for new search
    renderLatestPrompts();
    renderPagination();
};

/** Handles model filter change to filter prompts. */
const handleModelFilterChange = (e) => {
    const target = e.target;
    currentModelFilter = target.value;
    currentPage = 1; // Reset to the first page for new filter
    renderLatestPrompts();
    renderPagination();
};

/** Handles search input to filter video prompts. */
const handleVideoSearchInput = (e) => {
    currentVideoSearchQuery = e.target.value.trim().toLowerCase();
    currentVideoPage = 1;
    renderVideoPrompts();
    renderVideoPagination();
};

/** Handles video model filter change to filter prompts. */
const handleVideoModelFilterChange = (e) => {
    currentVideoModelFilter = e.target.value;
    currentVideoPage = 1;
    renderVideoPrompts();
    renderVideoPagination();
};

/** Handles clicks for copying prompts. */
const handleCopyClick = (e) => {
  const target = e.target;
  const card = target.closest('.prompt-card');
  if (!card) return;

  // Prevent copy if clicking inside the tweet embed
  if (target.closest('.twitter-tweet')) {
    return;
  }
  
  const promptText = card.getAttribute('data-prompt');
  if (promptText) {
    navigator.clipboard.writeText(promptText)
      .then(() => {
        const feedback = card.querySelector('.copy-feedback');
        if (feedback) {
          feedback.classList.add('show');
          setTimeout(() => {
            feedback.classList.remove('show');
          }, 1500);
        }
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  }
};

/** Handles clicks on pagination controls. */
const handlePaginationClick = (e) => {
  const target = e.target;
  if (target.tagName === 'BUTTON' && target.dataset.page) {
    const page = parseInt(target.dataset.page, 10);
    if (page !== currentPage) {
      currentPage = page;
      renderLatestPrompts();
      renderPagination();
      document.getElementById('latest')?.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

/** Handles clicks on video pagination controls. */
const handleVideoPaginationClick = (e) => {
  const target = e.target;
  if (target.tagName === 'BUTTON' && target.dataset.page) {
    const page = parseInt(target.dataset.page, 10);
    if (page !== currentVideoPage) {
      currentVideoPage = page;
      renderVideoPrompts();
      renderVideoPagination();
      document.getElementById('video-collection')?.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

// --- INITIALIZATION ---

/** Sets up all event listeners. */
const setupEventListeners = () => {
  menuToggle?.addEventListener('click', handleMenuToggle);
  // Image section listeners
  searchInput?.addEventListener('input', handleSearchInput);
  modelFilter?.addEventListener('change', handleModelFilterChange);
  paginationControls?.addEventListener('click', handlePaginationClick);
  // Video section listeners
  videoSearchInput?.addEventListener('input', handleVideoSearchInput);
  videoModelFilter?.addEventListener('change', handleVideoModelFilterChange);
  videoPaginationControls?.addEventListener('click', handleVideoPaginationClick);

  // Use event delegation for dynamically created prompt cards
  document.body.addEventListener('click', handleCopyClick);

  // Also allow copying with Enter key for accessibility
  document.body.addEventListener('keydown', (e) => {
    const target = e.target;
    if (e.key === 'Enter' && target.classList.contains('prompt-card')) {
      // Prevent copy if focusing inside the tweet embed
      if (document.activeElement.closest('.twitter-tweet')) {
         return;
      }
      handleCopyClick(e);
    }
  });
};

/** Main function to run on page load. */
const init = () => {
  // Image section
  renderModelFilter();
  renderLatestPrompts();
  renderPagination();
  // Video section
  renderVideoModelFilter();
  renderVideoPrompts();
  renderVideoPagination();
  // Common
  renderFAQs();
  setupEventListeners();
};

document.addEventListener('DOMContentLoaded', init);
