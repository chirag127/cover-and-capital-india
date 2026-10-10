export interface AuthorProfile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  education: string;
  work: string;
  location: string;
  contactEmail: string;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    youtube: string;
    reddit: string;
    facebook: string;
    instagram: string;
    buyMeACoffee: string;
  };
  disclaimer: string;
}

export const author: AuthorProfile = {
  name: 'Chirag Singhal',
  role: 'Founder & Research Author',
  tagline: 'Software engineer building transparent, first-principles tools for Indian financial education.',
  bio: 'Chirag Singhal is an Indian computer science graduate and software engineer at Tata Consultancy Services. Passionate about personal finance, financial mathematics, and consumer protection, he founded Cover & Capital India to demystify complex insurance contracts, policy wordings, and tax legislation through code, open-source mathematical calculators, and evidence-based analysis.',
  education: 'B.Tech in Computer Science and Engineering from Raj Kumar Goel Institute of Technology (AKTU)',
  work: 'Software Engineer at Tata Consultancy Services (TCS), India',
  location: 'India',
  contactEmail: 'chirag@oriz.in',
  socials: {
    github: 'https://github.com/chirag127/',
    linkedin: 'https://www.linkedin.com/in/chirag127/',
    twitter: 'https://x.com/singhal127Do',
    youtube: 'https://www.youtube.com/@ChiragSinghal127',
    reddit: 'https://www.reddit.com/user/Far_Macaron_9910/',
    facebook: 'https://www.facebook.com/singhal127',
    instagram: 'https://www.instagram.com/chiragsinghal127/',
    buyMeACoffee: 'https://buymeacoffee.com/chirag127',
  },
  disclaimer:
    'Chirag Singhal is a software engineer and independent researcher, NOT an insurance broker, corporate agent, actuary, SEBI-registered investment adviser (RIA), or chartered accountant. All content on Cover & Capital India is published purely for analytical and educational purposes. It does not constitute individualized financial, tax, or legal advice.',
};
