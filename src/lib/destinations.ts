export type College = {
  name: string;
  brief: string;
  website: string;
  image: string;
};

export type CountryData = {
  country: string;
  slug: string;
  flag: string;
  heroImage: string;
  tagline: string;
  colleges: College[];
};

const destinations: Record<string, CountryData> = {
  egypt: {
    country: 'Egypt',
    slug: 'egypt',
    flag: '🇪🇬',
    heroImage: '/dest-egypt.png',
    tagline: 'Renowned English-taught programs with world-class clinical exposure and highly affordable tuition fees.',
    colleges: [
      {
        name: 'Cairo University Faculty of Medicine',
        brief: "Founded in 1827, Cairo University is one of the oldest and most prestigious medical schools in Africa and the Arab world. Its comprehensive 6-year MBBS program is globally recognized, with state-of-the-art clinical training at Kasr Al-Ainy Hospital — one of the largest teaching hospitals in Egypt.",
        website: 'https://medicine.cu.edu.eg/',
        image: '/colleges/egypt/cairo-university.png',
      },
      {
        name: 'Ain Shams University Faculty of Medicine',
        brief: "Established in 1950, Ain Shams University's Faculty of Medicine is renowned for its strong emphasis on clinical training and research. The university is WHO-listed and NMC-recognized, offering English-medium programs with affordable tuition fees and a diverse international student community.",
        website: 'https://med.asu.edu.eg/',
        image: '/colleges/egypt/ain-shams.png',
      },
      {
        name: 'Alexandria University Faculty of Medicine',
        brief: "One of Egypt's most respected medical institutions, training physicians since 1942. Alexandria University Faculty of Medicine is celebrated for its strong clinical programs, distinguished faculty, and active international collaborations with European and American universities.",
        website: 'https://www.alexu.edu.eg/',
        image: '/colleges/egypt/alexandria-univ.png',
      },
      {
        name: 'MISR International University',
        brief: "A leading private university in Cairo, MISR International University (MIU) offers internationally accredited medical programs with a strong emphasis on research and innovation. MIU provides students with a modern campus environment, access to state-of-the-art laboratories, and clinical rotations at leading partner hospitals across Egypt.",
        website: 'https://miuegypt.edu.eg/',
        image: '/dest-egypt.png',
      },
    ],
  },

  georgia: {
    country: 'Georgia',
    slug: 'georgia',
    flag: '🇬🇪',
    heroImage: '/dest-georgia.png',
    tagline: 'European-standard education with ECTS credit transfer and globally recognized NMC & WFME accredited faculties.',
    colleges: [
      {
        name: 'Tbilisi State Medical University',
        brief: "Georgia's oldest and largest medical school (est. 1918), TSMU is internationally recognized and accredited by both WFME and NMC. It offers MBBS and MD programs entirely in English with ECTS credits, making degrees transferable across Europe. TSMU has a strong track record of FMGE success among Indian graduates.",
        website: 'https://tsmu.edu/',
        image: '/colleges/georgia/tsmu.png',
      },
      {
        name: 'Batumi Shota Rustaveli State University',
        brief: "Located in the scenic Black Sea city of Batumi, BSU offers an internationally recognized medical program with full English-medium instruction. The university provides modern clinical facilities and a highly supportive environment for international students, with a strong Indian student community.",
        website: 'https://bsu.edu.ge/',
        image: '/colleges/georgia/bsu-batumi.jpg',
      },
      {
        name: 'Avicenna Batumi Medical University',
        brief: "Named after the legendary Persian physician Avicenna, this institution in Batumi delivers NMC-recognized MBBS programs in English. Combining a rich academic tradition with modern clinical training facilities, the university is situated in Georgia's vibrant coastal city and offers students an affordable, high-quality medical education in a European setting.",
        website: 'https://avicenna.edu.ge/',
        image: '/dest-georgia.png',
      },
      {
        name: 'American University',
        brief: "Modelled on an American-style educational framework, this Tbilisi-based institution offers internationally aligned medical programs in English recognized by NMC and WHO. Its modern curriculum integrates evidence-based medicine with robust clinical placements at affiliated hospitals throughout Georgia, preparing graduates for medical practice worldwide.",
        website: 'https://www.aua.edu.ge/',
        image: '/dest-georgia.png',
      },
      {
        name: 'East European University',
        brief: "East European University in Tbilisi offers NMC-recognized medical degrees through English-medium instruction. The university focuses on producing globally competent physicians through its modern curriculum, simulation labs, and clinical rotations at affiliated hospitals in the Georgian capital, with dedicated support systems for Indian students.",
        website: 'https://eeu.edu.ge/',
        image: '/dest-georgia.png',
      },
      {
        name: 'BAU International University',
        brief: "BAU International University Tbilisi, affiliated with Bahcesehir University of Turkey, offers internationally recognized MD programs in English. BAU's medical faculty benefits from a strong European academic network, state-of-the-art campus facilities, and a multicultural environment attracting students from across South Asia, making it one of Georgia's fastest-growing medical institutions.",
        website: 'https://bau.edu.ge/',
        image: '/dest-georgia.png',
      },
    ],
  },

  russia: {
    country: 'Russia',
    slug: 'russia',
    flag: '🇷🇺',
    heroImage: '/dest-russia.png',
    tagline: 'Rigorous training at prestigious state universities with superb clinical infrastructure and affordable fees.',
    colleges: [
      {
        name: 'Kazan State Medical University',
        brief: "One of Russia's most prestigious medical universities (est. 1814), KSMU is WHO-listed and NMC-approved. Located in Kazan, it offers MBBS programs in English with excellent clinical exposure across its own network of teaching hospitals. Indian students consistently rank it among the top choices in Russia.",
        website: 'https://kazangmu.ru/',
        image: '/colleges/russia/kazan-smu.jpg',
      },
      {
        name: 'Kursk State Medical University',
        brief: "NMC-recognized and WHO-listed, Kursk State Medical University offers highly affordable MBBS programs in English. It is particularly popular among Indian students for its exceptional FMGE pass rates and a decades-long tradition of producing competent physicians recognized across India.",
        website: 'https://kgmu.cz.ru/',
        image: '/colleges/russia/kursk-smu.jpg',
      },
      {
        name: 'Bashkir State Medical University',
        brief: "Located in Ufa, Bashkir State Medical University offers WHO-listed MBBS programs at highly affordable fees. It is known for its strong emphasis on practical clinical training, excellent laboratory infrastructure, and maintains a sizable, well-supported Indian student community on campus.",
        website: 'https://bashgmu.ru/',
        image: '/dest-russia.png',
      },
      {
        name: 'National Research Nuclear University – MEPhI',
        brief: "The Medical Institute of the National Research Nuclear University MEPhI is a prestigious Moscow-based institution combining advanced biomedical sciences with clinical medicine. NMC-recognized and WHO-listed, it offers English-medium MBBS programs with cutting-edge research infrastructure, modern simulation labs, and affiliated teaching hospitals in the Russian capital.",
        website: 'https://mephi.ru/',
        image: '/dest-russia.png',
      },
      {
        name: 'NCFU – North Caucasus Federal University',
        brief: "North Caucasus Federal University in Stavropol offers NMC-recognized medical programs in English through its Institute of Life Sciences and Biomedicine. Located in southern Russia's cultural and academic hub, NCFU provides high-quality clinical training at its affiliated regional hospitals, modern research facilities, and a welcoming campus environment for Indian students.",
        website: 'https://ncfu.ru/',
        image: '/dest-russia.png',
      },
    ],
  },

  uzbekistan: {
    country: 'Uzbekistan',
    slug: 'uzbekistan',
    flag: '🇺🇿',
    heroImage: '/dest-uzbekistan.png',
    tagline: 'Highly affordable medical education at WHO-listed state institutes with a vibrant Indian student community.',
    colleges: [
      {
        name: 'Tashkent Medical Academy',
        brief: "The largest and most prestigious medical university in Uzbekistan, TMA is WHO-listed and NMC-recognized. Located in the capital Tashkent, it offers a 5-year MBBS program in English at highly affordable fees, with modern clinical infrastructure and a strong track record of FMGE success.",
        website: 'https://tma.uz/',
        image: '/colleges/uzbekistan/tashkent-ma.png',
      },
      {
        name: 'Samarkand State Medical University',
        brief: "Located in the historic Silk Road city of Samarkand, SSMU is WHO-listed and offers NMC-recognized MBBS programs in English. The university is known for its modern teaching facilities, experienced international faculty, and affordable cost of living in one of Central Asia's most beautiful cities.",
        website: 'https://sammi.uz/',
        image: '/dest-uzbekistan.png',
      },
      {
        name: 'Bukhara State Medical Institute',
        brief: "A state-funded institution offering WHO-listed MBBS programs in English, BSMI provides quality clinical training at very affordable tuition fees. Located in the ancient city of Bukhara, it offers a strong support system for Indian students and an immersive Central Asian cultural experience.",
        website: 'https://bsmi.uz/',
        image: '/dest-uzbekistan.png',
      },
      {
        name: 'Namangan State University — Faculty of Medicine',
        brief: "Namangan State University's Faculty of Medicine (NSUFM) is a WHO-listed institution in the heart of Uzbekistan's Namangan region, offering NMC-recognized MBBS programs in English at highly competitive fees. The faculty is equipped with modern anatomy labs, clinical simulation centres, and affiliations with regional teaching hospitals.",
        website: 'https://namdu.uz/',
        image: '/dest-uzbekistan.png',
      },
      {
        name: 'Namangan Davlat University',
        brief: "Namangan Davlat University is a state institution in Uzbekistan's Namangan region offering affordable medical programs with a strong practical orientation. The university maintains WHO recognition and provides English-medium instruction, dedicated student hostels, and a growing community of Indian students supported by experienced local faculty.",
        website: 'https://namdu.uz/',
        image: '/dest-uzbekistan.png',
      },
      {
        name: 'Medical Institute of Karakalpak',
        brief: "Situated in Nukus, the capital of the autonomous Republic of Karakalpakstan, this WHO-listed medical institute offers recognized MBBS programs at some of the most competitive fees in Central Asia. Its location provides students with a uniquely diverse clinical environment and exposure to a wide range of medical conditions across this geographically distinct region.",
        website: 'https://ndpi.uz/',
        image: '/dest-uzbekistan.png',
      },
      {
        name: 'Fergana State University',
        brief: "Fergana State University's medical faculty offers quality MBBS education at highly competitive fees in the fertile Fergana Valley. The university provides a safe and welcoming environment for international students, with dedicated hostels, Indian-friendly dining, and strong academic support throughout the program.",
        website: 'https://fdu.uz/',
        image: '/colleges/uzbekistan/fergana-su.jpg',
      },
    ],
  },

  vietnam: {
    country: 'Vietnam',
    slug: 'vietnam',
    flag: '🇻🇳',
    heroImage: '/dest-vietnam.png',
    tagline: 'Safe student environments with high-tech medical facilities, modern hospitals, and global clinical exposure.',
    colleges: [
      {
        name: 'Hanoi Medical University',
        brief: "Vietnam's premier medical institution (est. 1902), HMU is the oldest and most prestigious medical university in the country. WHO-listed and widely recognized, it offers MBBS programs with excellent clinical training across major teaching hospitals in Hanoi, producing graduates who practice worldwide.",
        website: 'https://hmu.edu.vn/',
        image: '/colleges/vietnam/hanoi-mu.jpg',
      },
      {
        name: 'Ho Chi Minh City University of Medicine and Pharmacy',
        brief: "Located in Vietnam's largest and most dynamic city, UMP is one of the country's top medical schools. It offers internationally recognized MBBS programs with modern teaching facilities and diverse clinical exposure in one of Southeast Asia's most rapidly developing metropolitan healthcare systems.",
        website: 'https://ump.edu.vn/',
        image: '/colleges/vietnam/hcmc-ump.png',
      },
      {
        name: 'Hue University of Medicine and Pharmacy',
        brief: "Located in the historic imperial city of Hue, this university offers quality medical education in a serene and culturally rich environment. It is WHO-listed, offers recognized MBBS programs, and is known for its strong clinical curriculum and highly affordable fee structure relative to other Vietnamese universities.",
        website: 'https://huemed-univ.edu.vn/',
        image: '/colleges/vietnam/hue-ump.jpg',
      },
      {
        name: 'Can Tho University of Medicine and Pharmacy',
        brief: "Located in the Mekong Delta region, CTUMP is WHO-listed and offers recognized MBBS programs in a unique clinical environment. The university provides exceptional exposure to a diverse patient population drawn from across the Delta region, with modern teaching facilities and dedicated faculty support.",
        website: 'https://ctump.edu.vn/',
        image: '/colleges/vietnam/cantho-ump.png',
      },
      {
        name: 'Dai Nam University',
        brief: "Dai Nam University in Ha Dong, Hanoi offers NMC-recognized medical programs combining modern teaching facilities with strong clinical exposure at partner hospitals in the Vietnamese capital region. The university's English-medium instruction and internationally experienced faculty make it an attractive and affordable destination for Indian medical aspirants.",
        website: 'https://dainam.edu.vn/',
        image: '/dest-vietnam.png',
      },
      {
        name: 'Phan Chau Trinh University',
        brief: "Phan Chau Trinh University in Da Nang, Vietnam's vibrant coastal city, delivers quality medical education at competitive fees. Located near world-class hospitals in a rapidly developing region, the university offers a diverse clinical environment, English-medium programs, and a safe and welcoming campus for international students.",
        website: 'https://pct.edu.vn/',
        image: '/dest-vietnam.png',
      },
      {
        name: 'Buon Ma Thuot Medical University',
        brief: "Buon Ma Thuot Medical University in Dak Lak Province offers recognized medical programs in Vietnam's Central Highlands, providing a uniquely diverse clinical environment. The university's affordable tuition, strong practical training focus, and exposure to a wide range of medical conditions across this geographically distinct region make it a compelling choice for international students.",
        website: 'https://bmu.edu.vn/',
        image: '/dest-vietnam.png',
      },
      {
        name: 'Donga University',
        brief: "Donga University in Da Nang offers internationally aligned medical programs with a strong focus on hands-on clinical training across its network of affiliated teaching hospitals. The university provides a supportive academic environment with dedicated faculty for international students, competitive tuition fees, and clear career pathways for FMGE-appearing graduates.",
        website: 'https://donga.edu.vn/',
        image: '/dest-vietnam.png',
      },
    ],
  },

  mongolia: {
    country: 'Mongolia',
    slug: 'mongolia',
    flag: '🇲🇳',
    heroImage: '/dest-mongolia.png',
    tagline: 'An emerging East Asian destination for affordable, internationally recognized medical education.',
    colleges: [
      {
        name: 'Etugen University',
        brief: "Etugen University in Ulaanbaatar is one of Mongolia's leading private universities offering internationally accredited medical programs. It provides a unique opportunity to pursue medical education in East Asia at highly competitive tuition fees, with a growing international student community, modern clinical training facilities, and a welcoming campus environment in Mongolia's vibrant capital city.",
        website: 'https://etugen.mn/',
        image: '/dest-mongolia.png',
      },
    ],
  },

  timorleste: {
    country: 'Timor Leste',
    slug: 'timorleste',
    flag: '🇹🇱',
    heroImage: '/dest-timorleste.png',
    tagline: 'An affordable and unique medical education pathway in emerging Southeast Asia.',
    colleges: [
      {
        name: 'Nalanda University',
        brief: "Nalanda University in Dili, Timor Leste, offers recognized medical programs in one of Southeast Asia's youngest and most rapidly developing nations. As an internationally partnered medical institution, it provides students with a distinctive clinical environment, affordable tuition fees, and a pathway to a globally recognized medical degree — all within a safe and culturally rich country.",
        website: 'https://nalanda.edu.tl/',
        image: '/dest-timorleste.png',
      },
    ],
  },
};

export default destinations;
