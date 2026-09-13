const KB = [
  {
    id: "greeting",
    keywords: [
      "hi",
      "hello",
      "hey",
      "namaste",
      "good morning",
      "good afternoon",
      "good evening",
    ],
    answer: `Hello! I'm <b>kashiAI</b>, the virtual assistant for JSS Academy of Technical Education, Noida. Ask me about admissions, academics, campus life, research, placements or contact details.`,
  },
  {
    id: "about",
    keywords: [
      "about",
      "jssaten",
      "institution",
      "college",
      "history",
      "established",
      "founded",
      "when was it started",
      "who are you",
      "what is jssaten",
    ],
    answer: `<b>JSS Academy of Technical Education, Noida (JSSATEN)</b> is a leading technical institution located in Sector-62, Noida, in the Delhi/NCR region.
    <ul>
      <li>Established in <b>1998</b></li>
      <li>Located at C-20/1, Sector-62, Noida</li>
      <li>Affiliated to <b>Dr. A.P.J. Abdul Kalam Technical University (AKTU)</b></li>
      <li>AICTE approved, with NBA accredited UG programmes</li>
    </ul>`,
  },
  {
    id: "vision",
    keywords: [
      "vision",
      "mission",
      "goal",
      "purpose",
      "objective",
      "philosophy",
    ],
    answer: `<b>Vision:</b> "To become an Institution of excellence in imparting quality Outcome Based Education that empowers the young generation with Knowledge, Skills, Research, Aptitude and Ethical values to solve Contemporary Challenging Problems."
    <br><br><b>Mission:</b>
    <ul>
      <li><b>Technological Competence</b> — developing globally acceptable intellectual acumen and technological competence.</li>
      <li><b>Research &amp; Innovation</b> — creating an inspiring ambience for quality research.</li>
      <li><b>Ethics &amp; Positive Attitude</b> — providing an environment for ethical values and positive attitude.</li>
    </ul>`,
  },
  {
    id: "stats",
    keywords: [
      "students",
      "how many students",
      "strength",
      "faculty",
      "how many faculty",
      "campus size",
      "acres",
      "years of excellence",
      "statistics",
      "numbers",
    ],
    answer: `JSSATEN at a glance:
    <ul>
      <li><b>4000+</b> students on campus</li>
      <li><b>250+</b> faculty members</li>
      <li><b>28-acre</b> campus</li>
      <li><b>25+ years</b> of academic excellence</li>
    </ul>`,
  },
  {
    id: "academics",
    keywords: [
      "course",
      "courses",
      "programme",
      "program",
      "degree",
      "btech",
      "b.tech",
      "mca",
      "mba",
      "undergraduate",
      "postgraduate",
      "academics",
      "branches",
      "streams",
      "study",
    ],
    answer: `JSSATEN offers programmes across undergraduate, postgraduate and other categories, including:
    <ul>
      <li><b>B.Tech</b> — Computer Science &amp; Engineering, Electronics &amp; Communication Engineering, Information Technology</li>
      <li><b>MCA</b> — Master of Computer Applications</li>
      <li><b>MBA</b> — Master of Business Administration</li>
    </ul>
    Note: this list reflects commonly offered programme categories — please confirm the current, exact list of active programmes and specialisations with the admissions office, as offerings can change year to year.`,
  },
  {
    id: "fees",
    keywords: [
      "fee",
      "fees",
      "fee structure",
      "cost",
      "tuition",
      "how much does it cost",
    ],
    answer: `I don't have a verified, up-to-date fee structure to share. Fee details vary by programme and change periodically — please contact the JSSATEN admissions office directly, or check the official counselling authority (AKTU/admission body) notification for the current fee structure.`,
  },
  {
    id: "admissions",
    keywords: [
      "admission",
      "admissions",
      "apply",
      "how to apply",
      "eligibility",
      "entrance exam",
      "application process",
      "counselling",
      "jee",
    ],
    answer: `Admissions to JSSATEN's programmes are generally through the applicable state/AKTU counselling process for UG and PG engineering and management programmes.
    <br><br>For the current admissions cycle, eligibility criteria, important dates and the application process, please reach out via the <b>Contact</b> section or the admissions office — I don't have the live counselling schedule.`,
  },
  {
    id: "campus_facilities",
    keywords: [
      "campus",
      "facilities",
      "hostel",
      "library",
      "laboratory",
      "labs",
      "infrastructure",
      "amenities",
      "boys hostel",
      "girls hostel",
      "sports",
    ],
    answer: `JSSATEN's 28-acre campus includes:
    <ul>
      <li>Modern academic campus and green spaces</li>
      <li>Boys Hostel and Girls Hostel</li>
      <li>Library with texts, journals and digital resources</li>
      <li>Discipline-specific laboratories</li>
      <li>Innovation &amp; research spaces</li>
      <li>Student support services</li>
      <li>Clubs, fests and campus activities</li>
    </ul>`,
  },
  {
    id: "research",
    keywords: [
      "research",
      "innovation",
      "r&d",
      "projects",
      "student projects",
      "idea lab",
      "innovation council",
    ],
    answer: `JSSATEN's research and innovation ecosystem includes:
    <ul>
      <li>Faculty and student-led <b>Research &amp; Development</b></li>
      <li>Campus <b>Innovation Initiatives</b> and innovation cells</li>
      <li>Applied <b>Student Projects</b> as part of the technical curriculum</li>
      <li>An <b>AICTE IDEA Lab</b> supporting project-based innovation</li>
      <li>Recognition under the <b>Institution's Innovation Council</b> framework</li>
    </ul>`,
  },
  {
    id: "placements",
    keywords: [
      "placement",
      "placements",
      "job",
      "jobs",
      "career",
      "recruiters",
      "package",
      "salary",
      "training and placement",
    ],
    answer: `JSSATEN's Training &amp; Placement cell connects students with recruiters across engineering, IT and management roles.
    <br><br>I don't have verified current placement statistics (placement %, number of recruiters, highest package) to share — please check the official placement report or contact the Training &amp; Placement office for the latest verified figures.`,
  },
  {
    id: "achievements",
    keywords: [
      "accreditation",
      "accredited",
      "aicte",
      "nba",
      "nirf",
      "ranking",
      "qs i-gauge",
      "rating",
      "recognition",
      "smart india hackathon",
      "sih",
      "achievements",
    ],
    answer: `JSSATEN's institutional recognitions on record include:
    <ul>
      <li><b>AICTE approved</b> institution</li>
      <li><b>NBA accreditation</b> for eligible UG programmes</li>
      <li>Participation in <b>NIRF</b> rankings</li>
      <li><b>QS I-GAUGE</b> institutional rating</li>
      <li>Recognised as a <b>Smart India Hackathon</b> nodal centre</li>
      <li>Active <b>Institution's Innovation Council</b> recognition</li>
      <li><b>AICTE IDEA Lab</b> project recognition</li>
    </ul>
    Please verify the current year/status of each recognition before relying on it for official use.`,
  },
  {
    id: "contact",
    keywords: [
      "contact",
      "address",
      "location",
      "where is jssaten",
      "phone",
      "email",
      "reach",
      "how to contact",
      "map",
      "directions",
    ],
    answer: `<b>JSS Academy of Technical Education, Noida</b><br>
    C-20/1, Sector-62, Noida, District Gautam Buddha Nagar, Uttar Pradesh – 201301, India
    <br><br>You can reach the college via the contact form on the website, or by phone/email — please confirm the current official phone number and email address, as I don't have a verified one to share here.`,
  },
  {
    id: "affiliation",
    keywords: ["affiliation", "affiliated", "aktu", "university", "ug tu"],
    answer: `JSSATEN is affiliated to <b>Dr. A.P.J. Abdul Kalam Technical University (AKTU)</b> and is approved by <b>AICTE</b>.`,
  },
  {
    id: "thanks",
    keywords: [
      "thanks",
      "thank you",
      "thankyou",
      "great",
      "helpful",
      "nice",
      "cool",
      "ok thanks",
    ],
    answer: `You're welcome! Let me know if there's anything else about JSSATEN you'd like to know.`,
  },
  {
    id: "bye",
    keywords: ["bye", "goodbye", "see you", "exit", "quit"],
    answer: `Goodbye! Feel free to come back anytime you have questions about JSSATEN.`,
  },
];

const FALLBACK = `I don't have a confirmed answer for that yet. I can help with information about <b>JSSATEN's</b> history, vision &amp; mission, academics, campus facilities, research, placements, achievements or contact details — try rephrasing, or reach out to the college office directly for anything not covered here.`;

function normalize(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matchKB(query) {
  const q = normalize(query);
  const tokens = q.split(" ").filter(Boolean);
  let best = null,
    bestScore = 0;

  KB.forEach((entry) => {
    let score = 0;
    entry.keywords.forEach((kw) => {
      const kwNorm = normalize(kw);
      if (q.includes(kwNorm)) {
        score += kwNorm.split(" ").length * 2;
      } else {
        const kwTokens = kwNorm.split(" ");
        kwTokens.forEach((t) => {
          if (tokens.includes(t)) score += 1;
        });
      }
    });

    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  });

  return bestScore > 0 ? best : null;
}
