// --- MOCK DATA WITH EXACT COORDINATES AND EXPANDED DESCRIPTIONS ---
const locationsData = [
  {
    id: 'temple-of-the-tooth',
    name: 'Temple of the Sacred Tooth Relic',
    category: 'Culture',
    tags: 'Culture • Heritage',
    rating: 4.8,
    img: '/images/TempleofTheTooth/p1.jpg',
    lat: 7.293600, lng: 80.641500,
    subtitle: 'A sacred Buddhist temple housing the relic of the tooth of the Buddha.',
    description: 'Located in the royal palace complex of the former Kingdom of Kandy, this UNESCO World Heritage site is the spiritual heart of Sri Lanka. The temple houses the sacred tooth relic of Lord Buddha, secured within seven nested golden caskets. Visitors can experience the rhythmic drumming and chanting during the daily \'Tevava\' (offerings). The complex also features the striking octagonal Paththirippuwa, beautifully carved wooden pillars, and intricately painted ceilings, all set against the serene backdrop of Kandy Lake.',
    gallery: [
      '/images/TempleofTheTooth/p1.jpg',
      '/images/TempleofTheTooth/p2.jpg',
      '/images/TempleofTheTooth/p3.jpg',
      '/images/TempleofTheTooth/p4.jpg',
      '/images/TempleofTheTooth/p5.jpg'

    ]
  },
  {
    id: 'galle-fort',
    name: 'Galle Fort',
    category: 'Culture',
    tags: 'Culture • Heritage',
    img: '/images/Gallefort/p1.jpg',
    lat: 6.025800, lng: 80.217600,
    subtitle: 'A beautifully preserved colonial-era coastal fortress.',
    description: 'A remarkable living UNESCO World Heritage site, Galle Fort represents the perfect fusion of European architectural styles and South Asian traditions. Initially built by the Portuguese in 1588 and heavily fortified by the Dutch in the 17th century, the fort is enclosed by massive stone sea walls. Today, its grid of narrow cobblestone streets is lined with beautifully restored colonial villas, vibrant boutique shops, art galleries, and quaint cafes. Walking the ramparts at sunset to the iconic white lighthouse is an unforgettable experience.',
    gallery: [
      '/images/Gallefort/p1.jpg',
      '/images/Gallefort/p2.jpg',
      '/images/Gallefort/p3.jpg'
    ]
  },
  {
    id: 'peradeniya-botanical-garden',
    name: 'Peradeniya Botanical Garden',
    category: 'Nature',
    tags: 'Nature • Gardens',
    img: '/images/peradeniyaGarden/p1.jpg',
    lat: 7.271100, lng: 80.596000,
    subtitle: 'The largest botanical garden in Sri Lanka, renowned for its royal palm avenue.',
    description: 'Once a pleasure garden for Kandyan royalty and later expanded by the British in 1821, this 147-acre paradise is bordered by the sweeping Mahaweli River. It boasts over 4,000 species of flora. Highlights include the spectacular Avenue of Royal Palms, a mesmerizing collection of over 300 varieties of orchids, an expansive medicinal plant garden, and a colossal Javan fig tree whose sprawling roots and branches cover over 2,500 square meters. A wobbly, historic suspension bridge adds a touch of adventure to the serene walks.',
    gallery: [
      '/images/peradeniyaGarden/p1.jpg',
      '/images/peradeniyaGarden/p2.jpg',
      '/images/peradeniyaGarden/p3.jpg'
    ]
  },
  {
    id: 'sinharaja-rain-forest',
    name: 'Sinharaja Rain Forest',
    category: 'Nature',
    tags: 'Nature • Wildlife',
    img: '/images/Sinharaja/p3.jpg',
    lat: 6.388800, lng: 80.454200,
    subtitle: 'A pristine tropical rainforest and UNESCO World Heritage biodiversity hotspot.',
    description: 'Meaning "Lion Kingdom," Sinharaja is Sri Lanka’s last remaining viable area of primary tropical rainforest. The dense, misty canopy is a designated Biosphere Reserve and a treasure trove of endemic species. More than 60% of the trees are endemic, and it is a paradise for birdwatchers, offering sightings of the rare Sri Lanka Blue Magpie and Red-faced Malkoha. Trekkers navigate narrow jungle paths surrounded by towering ferns, crystal-clear streams, and the constant hum of cicadas, often spotting Purple-faced Langurs in the canopy.',
    gallery: [
      '/images/Sinharaja/p1.jpg',
      '/images/Sinharaja/p2.jpg',
    ]
  },
  {
    id: 'yala-national-park',
    name: 'Yala National Park',
    category: 'Nature',
    tags: 'Nature • Safari',
    img: '/images/yala/p1.jpg',
    lat: 6.368300, lng: 81.517800,
    subtitle: 'The most visited national park, famous for its high leopard density.',
    description: 'Spanning a vast expanse of scrub jungle, brackish lagoons, and coastal borders in the island’s southeast, Yala offers the premier wildlife safari experience in Sri Lanka. It is globally renowned for having one of the highest densities of leopards (Panthera pardus kotiya) in the world. Visitors on bumpy jeep safaris frequently encounter herds of majestic Asian elephants crossing the dirt tracks, elusive sloth bears, marsh crocodiles basking in the sun, and vibrant peacocks displaying their plumage against the arid landscape.',
    gallery: [
      '/images/yala/p2.jpg',
      '/images/yala/p3.jpg'
    ]
  },
  {
    id: 'adams-peak',
    name: "Adam's Peak (Sri Pada)",
    category: 'Adventure',
    tags: 'Adventure • Pilgrimage',
    img: '/images/Sripada/p1.jpg',
    lat: 6.809600, lng: 80.499400,
    subtitle: 'A soaring conical mountain known for its sacred footprint and incredible sunrise.',
    description: 'Towering 2,243 meters above the central highlands, this conical peak is a deeply significant pilgrimage site. At its summit lies a rock formation revered by Buddhists as the footprint of Buddha, by Hindus as that of Shiva, and by Christians and Muslims as that of Adam. The arduous trek involves climbing over 5,500 stone steps, usually begun at midnight. The exhaustion is rewarded at dawn when the rising sun illuminates the surrounding peaks and casts the mountain’s perfect, mystical triangular shadow suspended over the clouds.',
    gallery: [
      '/images/Sripada/p1.jpg',
      '/images/Sripada/p2.jpg',
      '/images/Sripada/p3.jpg'
    ]
  },

  {
    id: 'sri-maha-bodhi',
    name: 'Jaya Sri Maha Bodhi',
    category: 'Culture',
    tags: 'Culture • History',
    img: '/images/SriMahaBodhi/srimahabodhi3.png',
    lat: 8.344800, lng: 80.397000,
    subtitle: 'The oldest historically documented tree in the world.',
    description: 'Planted in 288 BCE in the ancient capital of Anuradhapura, this is the oldest human-planted tree in the world with a continuous documented history. It was grown from a southern branch of the original Bodhi tree in Bodh Gaya, India, under which Lord Buddha attained enlightenment, brought to Sri Lanka by Princess Sangamitta. Encircled by golden railings and supported by golden crutches, the sacred fig tree draws thousands of white-clad pilgrims daily who offer lotus flowers, chant softly, and meditate in its profound, peaceful shade.',
    gallery: [
      '/images/SriMahaBodhi/srimahabodhi1.jpg',
      '/images/SriMahaBodhi/srimahabodhi2.jpeg',
      '/images/SriMahaBodhi/srimahabodhi3.png'
    ]
  },
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    category: 'Culture',
    tags: 'Culture • Heritage',
    img: '/images/Sigiriya/p2.jpg',
    lat: 7.959300, lng: 80.749200,
    subtitle: 'A 5th-century rock fortress and UNESCO World Heritage Site.',
    description: 'Sigiriya, known as the “Lion Rock,” is a massive rock fortress that rises dramatically from the central plains of Sri Lanka. Originally built as a royal citadel by King Kashyapa in the 5th century CE, it features intricate frescoes, extensive gardens, and a remarkable water management system. Visitors can climb the 1,200 steps to the summit, where they are rewarded with panoramic views of the surrounding landscape.',
   gallery: [
      '/images/Sigiriya/p1.jpg',
      '/images/Sigiriya/p3.jpg'
    ]
  },
 {
    id: 'heritance-kandalama',
    name: 'Heritance Kandalama',
    category: 'Accommodation',
    tags: 'Luxury • Architecture • Nature',
    img: '/images/Heritance Kandalama/p2.jpg',
    lat: 7.871100, lng: 80.707700,
    subtitle: 'An architectural masterpiece by Geoffrey Bawa blending into the jungle.',
    description: 'Designed by the legendary Sri Lankan architect Geoffrey Bawa, Heritance Kandalama is a pioneering example of tropical modernist architecture. The hotel is built seamlessly into a rock face and is entirely engulfed by the surrounding jungle, stretching nearly a kilometer long. It overlooks the serene Kandalama Lake and offers distant views of the Sigiriya Rock Fortress. Nature reclaims the structure with lush vegetation cascading from the terraces, creating an eco-friendly sanctuary that merges perfectly with the wilderness.',
     gallery: [
      '/images/Heritance Kandalama/p1.jpg',
      '/images/Heritance Kandalama/p3.jpg'
    ]
  
  },
  {
    id: 'galle-face-hotel',
    name: 'Galle Face Hotel',
    category: 'Accommodation',
    tags: 'Heritage • Luxury',
    img: '/images/Galle Face Hotel/p1.jpg',
    lat: 6.920600, lng: 79.846100,
    subtitle: 'An iconic colonial-era luxury hotel overlooking the Indian Ocean.',
    description: 'Established in 1864, the Galle Face Hotel is one of the oldest and most prestigious heritage hotels east of the Suez. Situated in the heart of Colombo along the famous Galle Face Green promenade, its grand architecture, sweeping wooden staircases, and historic charm transport guests back to the colonial era. It has hosted royalty, world leaders, and celebrities over the centuries. Watching the sunset over the Indian Ocean from the iconic Chequerboard terrace is an essential Colombo experience.',
   gallery: [
      '/images/Galle Face Hotel/p2.jpg',
      '/images/Galle Face Hotel/p3.jpg'
    ]
  },
  {
    id: '98-acres-resort',
    name: '98 Acres Resort & Spa',
    category: 'Accommodation',
    tags: 'Nature • Luxury • Wellness',
    img: '/images/98 Acres Resort/p1.jpg',
    lat: 6.875600, lng: 81.011200,
    subtitle: 'A stunning eco-friendly mountain resort set amidst a scenic tea estate.',
    description: 'Perched on a scenic 98-acre tea estate in Ella, this luxurious eco-resort offers some of the most breathtaking panoramic views in Sri Lanka\'s central highlands. The individual chalets are uniquely designed, built using recycled materials like discarded railway sleepers and thatched with \'Illuk\' straw to blend harmoniously with the environment. Overlooking the majestic Ella Gap and Little Adam\'s Peak, the resort provides a tranquil haven for relaxation, complete with a world-class spa and easy access to Ella\'s famous nature trails.',
     gallery: [
      '/images/98 Acres Resort/p3.jpg',
      '/images/98 Acres Resort/p2.jpg'
    ]
  }
];

export default locationsData;