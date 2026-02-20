const seedData = [
  {
    fullName: "Eleanor Vance",
    nickname: "Ellie",
    birthDate: "1938-06-15",
    deathDate: "2024-01-10",
    age: 85,
    shortDescription: "A loving mother, talented artist, and cherished friend.",
    fullStory: "Eleanor 'Ellie' Vance, a beacon of creativity and kindness, passed away peacefully at the age of 85. Born in a small town, she dreamed of the city and moved to New York to study art. Her paintings, known for their vibrant colors and emotional depth, were featured in several galleries. She is remembered for her infectious laughter and her ability to find beauty in the everyday.",
    passingLocation: "New York, NY",
    birthPlace: "Maple Creek, WI",
    parents: JSON.stringify([{ name: "Arthur Rowe" }, { name: "Clara Rowe" }]),
    educationDetails: JSON.stringify([{ institution: "Pratt Institute", year: 1960, degree: "Fine Arts" }]),
    spouseName: "Samuel Vance",
    marriageDate: "1962-09-20",
    spousePassingDate: "2010-05-12",
    careerDetails: JSON.stringify([{ role: "Professional Artist", institution: "Self-Employed", years: "50" }]),
    awards: JSON.stringify([{ name: "Metropolitan Art Prize", year: 1985 }]),
    keyAnecdotes: "Her Greenwich Village studio was a chaotic sanctuary, always filled with the smell of turpentine and fresh coffee. She taught her children how to see the world not just as it was, but as it could be.",
    children: JSON.stringify([{ name: "Robert Vance", location: "New York, NY" }]),
    grandchildren: JSON.stringify([{ name: "Olivia Vance" }]),
    precededBy: "Her beloved husband, Samuel.",
    donationRequest: "In lieu of flowers, please consider a donation to the Young Artists Fund.",
    photoGallery: [], // You can add image URLs here later
    shareLink: "https://example.com/share/evance",
    followLink: "https://example.com/follow/evance",
    timeline: [
      { year: 1938, title: "Born in Maple Creek", description: "A quiet childhood filled with drawing and dreaming." },
      { year: 1956, title: "Moved to New York", description: "Began her journey as an artist at the Pratt Institute." },
    ],
    serviceDetails: [
      { type: "Memorial Service", date: "2024-02-20", time: "2:00 PM", locationName: "Greenwich Village Art Hall", address: "123 Art St, New York, NY" }
    ],
    tributes: [
      { authorName: "Olivia Vance", relationship: "Granddaughter", content: "Grandma Ellie taught me how to paint. I will miss her dearly." }
    ]
  },
  {
    fullName: "Marcus Thorne",
    nickname: "Marc",
    birthDate: "1952-11-21",
    deathDate: "2023-12-25",
    age: 71,
    shortDescription: "A dedicated teacher, historian, and pillar of his community.",
    fullStory: "Marcus Thorne dedicated his life to education and history. For over 40 years, he taught history at Northwood High, where he was known for making the past come alive. He published several books on local history and was a tireless advocate for historical preservation. He passed away on Christmas Day, leaving a legacy of knowledge and community service.",
    passingLocation: "Boston, MA",
    birthPlace: "Boston, MA",
    careerDetails: JSON.stringify([{ role: "History Teacher", institution: "Northwood High", years: "42" }]),
    children: JSON.stringify([{ name: "Anna Thorne" }, { name: "David Thorne" }]),
    grandchildren: JSON.stringify([{ name: "Leo" }, { name: "Mia" }]),
    photoGallery: [],
    timeline: [
        { year: 1974, title: "Graduated from Boston College", description: "Earned a Master's in European History." },
        { year: 1975, title: "Began Teaching", description: "Started his long and storied career at Northwood High." }
    ],
    serviceDetails: [
      { type: "Funeral Service", date: "2024-01-05", time: "11:00 AM", locationName: "St. Mary's Cathedral", address: "456 Faith Ave, Boston, MA" }
    ],
    tributes: [
        { authorName: "James Franklin", relationship: "Former Student", content: "Mr. Thorne was the best teacher I ever had. He made me love history." }
    ]
  },
  {
    fullName: "Isabella Rossi",
    nickname: "Bella",
    birthDate: "1965-03-30",
    deathDate: "2024-01-15",
    age: 58,
    shortDescription: "A brilliant chef whose food brought joy to thousands.",
    fullStory: "Isabella Rossi was a culinary artist. Her restaurant, 'Rossi's Table', was a neighborhood institution for over 20 years, earning critical acclaim for its innovative take on Italian cuisine. She believed that food was a universal language of love and family. Her sudden passing has left a void in the hearts and stomachs of many.",
    passingLocation: "San Francisco, CA",
    birthPlace: "Naples, Italy",
    spouseName: "Matteo Rossi",
    careerDetails: JSON.stringify([{ role: "Chef & Owner", institution: "Rossi's Table", years: "22" }]),
    children: JSON.stringify([{ name: "Sophia Rossi" }]),
    photoGallery: [],
    timeline: [
        { year: 1988, title: "Immigrated to the US", description: "Brought her family's recipes and a dream." },
        { year: 2002, title: "Opened Rossi's Table", description: "Her restaurant quickly became a local favorite." }
    ],
    serviceDetails: [
      { type: "Visitation", date: "2024-01-25", time: "5:00 PM - 8:00 PM", locationName: "Golden Gate Funeral Home", address: "789 Sunset Blvd, San Francisco, CA" }
    ],
    tributes: []
  },
  {
    fullName: "David Chen",
    nickname: "Dave",
    birthDate: "1945-09-02",
    deathDate: "2023-11-30",
    age: 78,
    shortDescription: "An accomplished engineer and a devoted family man.",
    fullStory: "David Chen was a man of logic and love. An aerospace engineer, he contributed to several key satellite projects during his 40-year career. At home, he was a doting husband, father, and grandfather who loved to build elaborate model rockets with his grandchildren. He taught his family to reach for the stars, both literally and figuratively.",
    passingLocation: "Houston, TX",
    birthPlace: "Shanghai, China",
    spouseName: "Mei-Lin Chen",
    careerDetails: JSON.stringify([{ role: "Aerospace Engineer", institution: "NASA", years: "40" }]),
    children: JSON.stringify([{ name: "Emily Chen" }]),
    grandchildren: JSON.stringify([{ name: "Lucas" }, { name: "Chloe" }]),
    photoGallery: [],
    timeline: [
        { year: 1968, title: "Joined NASA", description: "Began a long career working on the nation's space program." },
    ],
    serviceDetails: [
      { type: "Memorial Service", date: "2023-12-10", time: "3:00 PM", locationName: "Houston Space Center", address: "1601 E NASA Pkwy, Houston, TX" }
    ],
    tributes: []
  },
  {
    fullName: "Fatima Al-Jamil",
    nickname: "",
    birthDate: "1980-07-19",
    deathDate: "2024-02-01",
    age: 43,
    shortDescription: "A fearless journalist who gave a voice to the voiceless.",
    fullStory: "Fatima Al-Jamil was a courageous journalist who reported from some of the world's most dangerous conflict zones. She believed in the power of truth and dedicated her life to shining a light on injustice. Her work earned her numerous accolades, but she was most proud of the impact it had on the people whose stories she told. She was a hero in the truest sense of the word.",
    passingLocation: "Beirut, Lebanon",
    birthPlace: "Cairo, Egypt",
    careerDetails: JSON.stringify([{ role: "Foreign Correspondent", institution: "World News Agency", years: "20" }]),
    photoGallery: [],
    timeline: [
        { year: 2003, title: "First Foreign Assignment", description: "Reported on the aftermath of the war in Iraq." },
        { year: 2015, title: "Won Peabody Award", description: "Recognized for her documentary on the Syrian refugee crisis." }
    ],
    serviceDetails: [
      { type: "Memorial Service", date: "2024-03-01", time: "12:00 PM", locationName: "International Press Club", address: "456 Global Way, Geneva, Switzerland" }
    ],
    tributes: []
  }
] as const;

export { seedData };
