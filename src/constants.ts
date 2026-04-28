import { Section } from './types';

export const AIS_LOGO_URL = "https://s.isanook.com/hi/0/ud/312/1560949/untitled-1.jpg?ip/crop/w670h402/q80/jpg";

export const PROVIDER_LOGOS: Record<string, string> = {
  netflix: '/images/ico/ico-netflix.svg.png',
  disney: '/images/ico/ico-Disney.png',
  hbo: '/images/ico/ico-hbo.png',
  ais: '/images/ico/ico-ais-play-icon.png',
  prime: '/images/ico/ico-prime-video.png',
  iqiyi: '/images/ico/ico-iqiyi.png',
  viu: '/images/ico/ico-viu.png',
  wetv: '/images/ico/ico-wetv.png'
};
 
export const SECTIONS: Section[] = [
  {
    id: 'hit-tv-shows',
    title: 'Hit TV Shows',
    items: [
      {
        id: 'h5',
        title: 'Stranger Things',
        synopsis: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one very strange little girl.',
        heroImg: 'https://4kwallpapers.com/images/walls/thumbs_3t/25038.jpg',
        thumbImg: 'https://4kwallpapers.com/images/walls/thumbs_3t/25038.jpg',
        provider: 'netflix',
        meta: 'S4 · 9 Episodes · TV-14',
        cta: 'Watch S4 E1',
        videoId: 'cIiDY4WA0oo'
      },
      {
        id: 'h1',
        title: 'The Last of Us',
        synopsis: 'After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity\'s last hope.',
        heroImg: 'https://4kwallpapers.com/images/walls/thumbs_3t/21484.jpg',
        thumbImg: 'https://4kwallpapers.com/images/walls/thumbs_3t/21484.jpg',
        provider: 'hbo',
        meta: 'S1 · 9 Episodes · TV-MA',
        cta: 'Watch S1 E1'
      },
      {
        id: 'h3',
        title: 'The Bear',
        synopsis: 'A young chef from the fine dining world returns to Chicago to run his family\'s sandwich shop.',
        heroImg: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop',
        thumbImg: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=600&auto=format&fit=crop',
        provider: 'disney',
        meta: 'S2 · 10 Episodes · TV-MA',
        cta: 'Watch S2 E1'
      },
      {
        id: 'h4',
        title: 'Squid Game',
        synopsis: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games. Inside, a tempting prize awaits with deadly high stakes.',
        heroImg: 'https://4kwallpapers.com/images/walls/thumbs_3t/20940.png',
        thumbImg: 'https://4kwallpapers.com/images/walls/thumbs_3t/20940.png',
        provider: 'netflix',
        meta: 'S1 · 9 Episodes · TV-MA',
        cta: 'Watch S1 E1'
      },
      {
        id: 'h6',
        title: 'House of the Dragon',
        synopsis: 'An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.',
        heroImg: 'https://4kwallpapers.com/images/walls/thumbs_3t/17478.jpg',
        thumbImg: 'https://4kwallpapers.com/images/walls/thumbs_3t/17478.jpg',
        provider: 'hbo',
        meta: 'S2 · 8 Episodes · TV-MA',
        cta: 'Watch S2 E1'
      },
      {
        id: 'h7',
        title: 'Bangkok Breaking',
        synopsis: 'A high-octane action-thriller set in the gripping world of emergency services in Bangkok.',
        heroImg: 'https://expresselevatortohell.com/wp-content/uploads/2024/11/bangkok-breaking_prologue-riot.webp',
        thumbImg: 'https://expresselevatortohell.com/wp-content/uploads/2024/11/bangkok-breaking_prologue-riot.webp',
        provider: 'ais',
        meta: 'S1 · 6 Episodes · TV-MA',
        cta: 'Watch S1 E1'
      },
      {
        id: 'h8',
        title: 'The Mandalorian',
        synopsis: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.',
        heroImg: 'https://4kwallpapers.com/images/walls/thumbs_3t/10651.jpg',
        thumbImg: 'https://4kwallpapers.com/images/walls/thumbs_3t/10651.jpg',
        provider: 'disney',
        meta: 'S3 · 8 Episodes · TV-14',
        cta: 'Watch S3 E1'
      }
    ]
  },
  {
    id: 'continue-watching',
    title: 'CONTINUE WATCHING',
    items: [
      {
        id: '2',
        title: 'House of the Dragon',
        synopsis: 'An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.',
        heroImg: 'https://4kwallpapers.com/images/walls/thumbs_3t/17478.jpg',
        thumbImg: 'https://4kwallpapers.com/images/walls/thumbs_3t/17478.jpg',
        provider: 'hbo',
        meta: 'S2 E1 · 64m · TV-MA',
        cta: 'Continue S2 E1',
        progress: 0.4,
        duration: '17:20'
      },
      {
        id: '3',
        title: 'Bangkok Breaking',
        synopsis: 'A high-octane action-thriller set in the gripping world of emergency services in Bangkok.',
        heroImg: 'https://expresselevatortohell.com/wp-content/uploads/2024/11/bangkok-breaking_prologue-riot.webp',
        thumbImg: 'https://expresselevatortohell.com/wp-content/uploads/2024/11/bangkok-breaking_prologue-riot.webp',
        provider: 'ais',
        meta: 'S1 E5 · 48m · TV-MA',
        cta: 'Continue S1 E5',
        progress: 0.6,
        duration: '08:15'
      },
      {
        id: '4',
        title: 'The Mandalorian',
        synopsis: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.',
        heroImg: 'https://4kwallpapers.com/images/walls/thumbs_3t/10651.jpg',
        thumbImg: 'https://4kwallpapers.com/images/walls/thumbs_3t/10651.jpg',
        provider: 'disney',
        meta: 'S3 E8 · 52m · TV-14',
        cta: 'Continue S3 E8',
        progress: 0.95,
        duration: '41:02'
      },
      {
        id: '5',
        title: 'Bridgerton',
        synopsis: 'Wealth, lust, and betrayal set against the backdrop of Regency-era England, seen through the eyes of the powerful Bridgerton family.',
        heroImg: '/images/brigerton-s1.png',
        thumbImg: '/images/brigerton-s1.png',
        provider: 'netflix',
        meta: 'S1 E4 · 58m · TV-MA',
        cta: 'Continue S1 E4',
        progress: 0.5,
        duration: '29:10'
      },
      {
        id: '6',
        title: 'Andor',
        synopsis: 'A prequel series to Rogue One, following Cassian Andor\'s journey as a rebel spy fighting against the oppressive Galactic Empire.',
        heroImg: '/images/12.Andor.avif',
        thumbImg: '/images/12.Andor.avif',
        provider: 'disney',
        meta: 'S1 E7 · 44m · TV-14',
        cta: 'Continue S1 E7',
        progress: 0.3,
        duration: '13:22'
      },
      {
        id: '7',
        title: 'The Wheel of Time',
        synopsis: 'A powerful sorceress guides five young villagers on a journey to discover which of them is the Dragon Reborn, destined to save or destroy humanity.',
        heroImg: '/images/AIS_TheWheelOfTime.jpg',
        thumbImg: '/images/AIS_TheWheelOfTime.jpg',
        provider: 'prime',
        meta: 'S2 E3 · 61m · TV-14',
        cta: 'Continue S2 E3',
        progress: 0.65,
        duration: '21:35'
      },
      {
        id: '8',
        title: 'Zootopia+',
        synopsis: 'Return to the mammal metropolis of Zootopia for a series of short stories focusing on fan-favourite characters.',
        heroImg: '/images/Zootopia_2.avif',
        thumbImg: '/images/Zootopia_2.avif',
        provider: 'disney',
        meta: 'S1 E2 · 12m · TV-G',
        cta: 'Continue S1 E2',
        progress: 0.75,
        duration: '03:04'
      },
      {
        id: '9',
        title: 'Sky Witness',
        synopsis: 'Gripping real-crime dramas and documentary series following investigators as they uncover shocking truths.',
        heroImg: '/images/SkyWitness_3.webp',
        thumbImg: '/images/SkyWitness_3.webp',
        provider: 'ais',
        meta: 'S3 E1 · 48m · TV-MA',
        cta: 'Continue S3 E1',
        progress: 0.2,
        duration: '38:50'
      },
      {
        id: '10',
        title: 'Premier League Highlights',
        synopsis: 'Every goal, every save, every key moment — full highlights from the weekend\'s Premier League action.',
        heroImg: '/images/sports.poster.SD.jpg',
        thumbImg: '/images/sports.poster.SD.jpg',
        provider: 'ais',
        meta: 'Matchday 32 · 60m · Sports',
        cta: 'Continue Watching',
        progress: 0.45,
        duration: '33:00'
      }
    ]
  },
  {
    id: 'disney-plus',
    title: 'Disney+',
    locked: true,
    promoProvider: 'disney',
    items: [
      {
        id: 'd1',
        title: 'The Mandalorian',
        synopsis: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.',
        heroImg: '/images/disney-wall.jpg',
        thumbImg: 'https://4kwallpapers.com/images/walls/thumbs_3t/10651.jpg',
        provider: 'disney',
        meta: 'S3 · 8 Episodes · TV-14',
        cta: 'Watch Now'
      },
      {
        id: 'd2',
        title: 'Andor',
        synopsis: 'A prequel series to Rogue One, following Cassian Andor\'s journey as a rebel spy fighting against the Galactic Empire.',
        heroImg: '/images/12.Andor.avif',
        thumbImg: '/images/12.Andor.avif',
        provider: 'disney',
        meta: 'S1 · 12 Episodes · TV-14',
        cta: 'Watch Now'
      },
      {
        id: 'd3',
        title: 'Zootopia+',
        synopsis: 'Return to the mammal metropolis of Zootopia for a series of short stories focusing on fan-favourite characters.',
        heroImg: '/images/Zootopia_2.avif',
        thumbImg: '/images/Zootopia_2.avif',
        provider: 'disney',
        meta: 'S1 · 6 Episodes · TV-G',
        cta: 'Watch Now'
      },
      {
        id: 'd4',
        title: 'The Bear',
        synopsis: 'A young chef from the fine dining world returns to Chicago to run his family\'s sandwich shop.',
        heroImg: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop',
        thumbImg: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=600&auto=format&fit=crop',
        provider: 'disney',
        meta: 'S2 · 10 Episodes · TV-MA',
        cta: 'Watch Now'
      },
      {
        id: 'd5',
        title: 'Bridgerton',
        synopsis: 'Wealth, lust, and betrayal set against the backdrop of Regency-era England, seen through the eyes of the Bridgerton family.',
        heroImg: '/images/brigerton-s2.png',
        thumbImg: '/images/brigerton-s2.png',
        provider: 'disney',
        meta: 'S2 · 8 Episodes · TV-MA',
        cta: 'Watch Now'
      },
      {
        id: 'd6',
        title: 'Loki',
        synopsis: 'The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of Avengers: Endgame.',
        heroImg: 'https://4kwallpapers.com/images/walls/thumbs_3t/16322.jpg',
        thumbImg: 'https://4kwallpapers.com/images/walls/thumbs_3t/16322.jpg',
        provider: 'disney',
        meta: 'S2 · 6 Episodes · TV-14',
        cta: 'Watch Now'
      }
    ]
  },
  {
    id: 'live-now',
    title: 'LIVE NOW',
    items: [
      {
        id: 'l1',
        title: 'Premier League: Liverpool vs Arsenal',
        synopsis: 'Live coverage from Anfield as Liverpool take on Arsenal in a crucial title clash.',
        heroImg: 'https://i.ytimg.com/vi/37OvOAMKBmQ/maxresdefault.jpg',
        thumbImg: 'https://i.ytimg.com/vi/37OvOAMKBmQ/maxresdefault.jpg',
        provider: 'ais',
        meta: 'Live · Sports · HD',
        cta: 'Watch Live',
        isLive: true,
        progress: 0.7
      },
      {
        id: 'l2',
        title: 'World News Tonight',
        synopsis: 'Rounding up the major headlines from across the globe.',
        heroImg: 'https://4kwallpapers.com/images/walls/thumbs_3t/25038.jpg',
        thumbImg: 'https://4kwallpapers.com/images/walls/thumbs_3t/25038.jpg',
        provider: 'ais',
        meta: 'Live · News · 24/7',
        cta: 'Watch Live',
        isLive: true,
        progress: 0.3
      },
      {
        id: 'l3',
        title: 'La Liga: Barcelona vs Real Madrid',
        synopsis: 'El Clásico live from Camp Nou — the most watched club fixture on the planet.',
        heroImg: '/images/sports2.poster.SD.jpg',
        thumbImg: '/images/sports2.poster.SD.jpg',
        provider: 'ais',
        meta: 'Live · Sports · 4K',
        cta: 'Watch Live',
        isLive: true,
        progress: 0.45
      },
      {
        id: 'l4',
        title: 'Sky One',
        synopsis: 'The home of big entertainment — live comedy, drama specials and exclusive Sky originals.',
        heroImg: '/images/SkyOne_2.jpg',
        thumbImg: '/images/SkyOne_2.jpg',
        provider: 'ais',
        meta: 'Live · Entertainment · HD',
        cta: 'Watch Live',
        isLive: true,
        progress: 0.6
      },
      {
        id: 'l5',
        title: 'Sky Documentaries',
        synopsis: 'Award-winning factual programming — nature, history, crime, and science, live and on demand.',
        heroImg: '/images/SkyDocs_1.jpg',
        thumbImg: '/images/SkyDocs_1.jpg',
        provider: 'ais',
        meta: 'Live · Documentary · HD',
        cta: 'Watch Live',
        isLive: true,
        progress: 0.2
      },
      {
        id: 'l6',
        title: 'UFC Fight Night',
        synopsis: 'Non-stop action from the Octagon — live prelims and main card fights streaming now.',
        heroImg: '/images/sports3.poster.SD.jpg',
        thumbImg: '/images/sports3.poster.SD.jpg',
        provider: 'ais',
        meta: 'Live · Sports · HD',
        cta: 'Watch Live',
        isLive: true,
        progress: 0.55
      },
      {
        id: 'l7',
        title: 'Sky Arts',
        synopsis: 'Live performances, gallery exhibitions, and cultural events from around the world.',
        heroImg: '/images/SkyOne_4.avif',
        thumbImg: '/images/SkyOne_4.avif',
        provider: 'ais',
        meta: 'Live · Arts & Culture · HD',
        cta: 'Watch Live',
        isLive: true,
        progress: 0.8
      },
      {
        id: 'l8',
        title: 'Formula 1: Grand Prix',
        synopsis: 'Live race coverage as the grid battles for championship points on a legendary circuit.',
        heroImg: '/images/sports4.poster.SD.jpg',
        thumbImg: '/images/sports4.poster.SD.jpg',
        provider: 'ais',
        meta: 'Live · Sports · 4K',
        cta: 'Watch Live',
        isLive: true,
        progress: 0.35
      },
      {
        id: 'l9',
        title: 'UTV Entertainment',
        synopsis: 'Your favourite Bollywood blockbusters and reality shows streaming live around the clock.',
        heroImg: '/images/UTV.webp',
        thumbImg: '/images/UTV.webp',
        provider: 'ais',
        meta: 'Live · Entertainment · HD',
        cta: 'Watch Live',
        isLive: true,
        progress: 0.5
      }
    ]
  }
];
