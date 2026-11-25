import { WeddingConfig } from '../types/wedding';

/**
 * Bride Side Configuration — Priyanka & Paras (The Golden Vow)
 */
export const brideWeddingConfig: WeddingConfig = {
  bride: {
    name: 'Priyanka Rajpura',
    parents: 'Daughter of Mrs. Jayshreeben & Mr. Daksheshbhai Shivlal Rajpura',
    bio: 'M.Sc. IT • Blessed by Shree Ambaji Mataji & Family',
    image: '/images/couple/bride.svg',
    imagePosition: 'center 30%',
  },

  groom: {
    name: 'Paras Goswami',
    parents: 'Son of Mrs. Ritaben & Mr. Rameshbharthi Balabharthi Goswami',
    bio: 'B.C.A. • With the sacred blessings of elders and family',
    image: '/images/couple/groom.svg',
    imagePosition: 'center 25%',
  },

  couple: {
    displayName: 'Priyanka & Paras',
    monogram: 'P & P',
    tagline: 'The Golden Vow • Two Hearts, One Auspicious Beginning',
    story:
      'With the divine grace of Lord Ganesha, Shree Ambaji Mataji, and our beloved elders, our families joyfully unite as we begin our sacred journey of forever.',
    image: '/images/couple/couple.svg',
    imagePosition: 'center 35%',
  },

  invitation: {
    pretitle: '|| Shree Ganeshay Namah || • Together With Their Families',
    heading: 'An Invitation to Our Forever',
    subheading: 'Two Hearts, One Auspicious Beginning',
    message:
      'With the divine blessings of Lord Ganesha, Shree Ambaji Mataji, and our revered elders, along with the love of our dearest families, we cordially invite you to grace the auspicious wedding celebrations of Priyanka & Paras and bless the couple.',
    closingMessage:
      'With Love, Today and Always. Your gracious presence and heartfelt blessings will bestow honour upon our families and make our celebration truly unforgettable.',
    dateDisplay: 'Monday, December 14, 2026',
    timeDisplay: '7:00 PM onwards — Hast Melap',
  },

  wedding: {
    date: '2026-12-14T19:00:00',
    timezone: 'Asia/Kolkata',
    venue: 'B.M.C. Party Plot',
    address: 'Ring Road, Opposite Shriji Party Plot, Bhavnagar, Gujarat, India',
    city: 'Bhavnagar, Gujarat',
    mapsUrl:
      'https://maps.google.com/?q=B.M.C.+Party+Plot+Ring+Road+Opposite+Shriji+Party+Plot+Bhavnagar+Gujarat',
  },

  events: [
    {
      id: 'ganesh-sthapana',
      title: 'Ganesh Sthapana',
      tagline: 'Auspicious Invocations to Lord Ganesha',
      date: 'December 13, 2026',
      day: 'Sunday',
      startTime: '8:30 AM',
      venue: 'B.M.C. Party Plot',
      address: 'Ring Road, Opposite Shriji Party Plot, Bhavnagar',
      description:
        'Beginning the sacred wedding ceremonies by seeking the divine blessings of Lord Ganesha for peace, prosperity, and obstacle-free festivities.',
      mapsUrl:
        'https://maps.google.com/?q=B.M.C.+Party+Plot+Ring+Road+Opposite+Shriji+Party+Plot+Bhavnagar+Gujarat',
      icon: 'sun',
      enabled: true,
    },
    {
      id: 'mandap-muhurat',
      title: 'Mandap Muhurat',
      tagline: 'Sanctifying the Sacred Wedding Canopy',
      date: 'December 13, 2026',
      day: 'Sunday',
      startTime: '9:00 AM',
      venue: 'B.M.C. Party Plot',
      address: 'Ring Road, Opposite Shriji Party Plot, Bhavnagar',
      description:
        'Holy Vedic ritual invoking Mother Earth and auspicious planetary blessings to sanctify the wedding mandap.',
      mapsUrl:
        'https://maps.google.com/?q=B.M.C.+Party+Plot+Ring+Road+Opposite+Shriji+Party+Plot+Bhavnagar+Gujarat',
      icon: 'sparkles',
      enabled: true,
    },
    {
      id: 'mameru',
      title: 'Rudu Mameru Shobhavshe',
      tagline: "Maternal Uncle's Loving Gifts & Blessings (Mosaad)",
      date: 'December 13, 2026',
      day: 'Sunday',
      startTime: '11:30 AM',
      venue: 'B.M.C. Party Plot',
      address: 'Ring Road, Opposite Shriji Party Plot, Bhavnagar',
      description:
        'A cherished Gujarati tradition where the bride is showered with love, traditional wedding finery, and treasured blessings by her maternal family.',
      mapsUrl:
        'https://maps.google.com/?q=B.M.C.+Party+Plot+Ring+Road+Opposite+Shriji+Party+Plot+Bhavnagar+Gujarat',
      icon: 'heart',
      enabled: true,
    },
    {
      id: 'raas-garba',
      title: 'Raas-Garba',
      tagline: 'An Enchanting Night of Traditional Garba & Dandiya Beats',
      date: 'December 13, 2026',
      day: 'Sunday',
      startTime: '7:30 PM onwards',
      venue: 'B.M.C. Party Plot',
      address: 'Ring Road, Opposite Shriji Party Plot, Bhavnagar',
      description:
        'A joyous musical evening filled with traditional Gujarati Raas-Garba, rhythmic Dandiya beats, and celebration under the stars.',
      mapsUrl:
        'https://maps.google.com/?q=B.M.C.+Party+Plot+Ring+Road+Opposite+Shriji+Party+Plot+Bhavnagar+Gujarat',
      icon: 'music',
      enabled: true,
    },
    {
      id: 'haldi',
      title: 'Haldi Rasam',
      tagline: 'Turmeric, Sunshine & Golden Radiance',
      date: 'December 14, 2026',
      day: 'Monday',
      startTime: '9:00 AM',
      venue: 'B.M.C. Party Plot',
      address: 'Ring Road, Opposite Shriji Party Plot, Bhavnagar',
      dressCode: 'Office White / Cream Colour Theme',
      description:
        'An auspicious morning bathed in fragrant turmeric, floral laughter, holy verses, and loving blessings.',
      mapsUrl:
        'https://maps.google.com/?q=B.M.C.+Party+Plot+Ring+Road+Opposite+Shriji+Party+Plot+Bhavnagar+Gujarat',
      icon: 'sun',
      enabled: true,
    },
    {
      id: 'wedding',
      title: 'The Wedding Ceremony (Hast Melap)',
      tagline: 'Sacred Hast Melap & Saptapadi Vows',
      date: 'December 14, 2026',
      day: 'Monday',
      startTime: '7:00 PM',
      venue: 'B.M.C. Party Plot',
      address: 'Ring Road, Opposite Shriji Party Plot, Bhavnagar',
      dressCode: 'Traditional Wedding Attire',
      description:
        'With sacred Vedic chants, holy fire, and the divine joining of hands in Hast Melap, Priyanka & Paras embark on their journey of forever.',
      mapsUrl:
        'https://maps.google.com/?q=B.M.C.+Party+Plot+Ring+Road+Opposite+Shriji+Party+Plot+Bhavnagar+Gujarat',
      icon: 'ring',
      enabled: true,
    },
    {
      id: 'dinner',
      title: 'Swaruche Bhojan (Wedding Dinner)',
      tagline: 'Auspicious Wedding Feast & Celebratory Dinner',
      date: 'December 14, 2026',
      day: 'Monday',
      startTime: '8:00 PM onwards',
      venue: 'B.M.C. Party Plot',
      address: 'Ring Road, Opposite Shriji Party Plot, Bhavnagar',
      description:
        'An evening of sumptuous traditional Gujarati royal culinary delicacies in celebration of the newlyweds.',
      mapsUrl:
        'https://maps.google.com/?q=B.M.C.+Party+Plot+Ring+Road+Opposite+Shriji+Party+Plot+Bhavnagar+Gujarat',
      icon: 'sparkles',
      enabled: true,
    },
  ],

  family: {
    enabled: true,
    message:
      'With the divine blessings of Shree Ambaji Mataji, Lord Ganesha, and our revered ancestors and beloved elders.',
    brideParents: {
      title: 'With Compliments & Blessings From',
      names: 'Mrs. Jayshreeben & Mr. Daksheshbhai Shivlal Rajpura',
      grandparents:
        'Blessed by Shree Shivlal Jeramdas Rajpura & Smt. Ramilaben Shivlal Rajpura',
    },
    groomParents: {
      title: 'Warmly Invited By',
      names: 'Mrs. Ritaben & Mr. Rameshbharthi Balabharthi Goswami',
      grandparents: 'With respectful blessings from Balabharthi Goswami family and elders',
    },
  },

  contact: {
    whatsappNumber: '919876543210',
    rsvpDeadline: 'December 05, 2026',
    messageTemplate:
      'Namaste! We are delighted to confirm our presence for the auspicious wedding celebrations of Priyanka & Paras.',
  },

  music: {
    enabled: true,
    src: '/audio/wedding-ambient.mp3',
    title: 'The Golden Vow • Classical Sitar & Shehnai',
  },

  sections: {
    envelope: true,
    hero: true,
    message: true,
    couple: true,
    countdown: true,
    events: true,
    venue: true,
    family: true,
    rsvp: false,
    closing: true,
  },
};

/**
 * Groom Side Configuration — Parasbharthi & Priyanka (The Golden Vow)
 * Styled in elegant English matching the bride side, with the Bharathi naming convention
 */
export const groomWeddingConfig: WeddingConfig = {
  bride: {
    name: 'Priyanka Rajpura',
    parents: 'Daughter of Mrs. Jayshreeben & Mr. Daksheshbhai Shivlal Rajpura (Bhavnagar)',
    bio: 'M.Sc. IT • Blessed by Shree Ambaji Mataji & Family',
    image: '/images/couple/bride.svg',
    imagePosition: 'center 30%',
  },

  groom: {
    name: 'Parasbharthi Goswami',
    parents: 'Son of Mrs. Ritaben & Mr. Rameshbharthi Balabharthi Goswami (Bordi, Bhavnagar)',
    bio: 'B.C.A. • With the divine grace of Lord Shiva & Shree Kamakhya Mataji',
    image: '/images/couple/groom.svg',
    imagePosition: 'center 25%',
  },

  couple: {
    displayName: 'Parasbharthi & Priyanka',
    monogram: 'P & P',
    tagline: 'The Golden Vow • Two Hearts, One Auspicious Beginning',
    story:
      'With the divine grace of Lord Ganesha, our Ishtadev Lord Shiva (Shree Bholanath), our Kuldevi Shree Kamakhya Mataji, and our revered elders, our families joyfully unite as we begin our sacred journey of forever.',
    image: '/images/couple/couple.svg',
    imagePosition: 'center 35%',
  },

  invitation: {
    pretitle: '|| Shree Ganeshay Namah || • Together With Their Families',
    heading: 'An Invitation to Our Forever',
    subheading: 'Two Hearts, One Auspicious Beginning',
    message:
      'With the divine blessings of Lord Ganesha, our Ishtadev Lord Shiva (Shree Bholanath), our Kuldevi Shree Kamakhya Mataji, and our revered elders, along with the love of our dearest families, we cordially invite you to grace the auspicious wedding celebrations of Parasbharthi & Priyanka and bless the couple.',
    closingMessage:
      'With Love, Today and Always. Your gracious presence and heartfelt blessings will bestow honour upon our families and make our celebration truly unforgettable.',
    dateDisplay: 'Monday, December 14, 2026',
    timeDisplay: '7:05 PM onwards — Hast Melap',
  },

  wedding: {
    date: '2026-12-14T19:05:00',
    timezone: 'Asia/Kolkata',
    venue: 'B.M.C. Party Plot',
    address: 'Ring Road, Opposite Shriji Party Plot, Bhavnagar, Gujarat, India',
    city: 'Bhavnagar, Gujarat',
    mapsUrl:
      'https://maps.google.com/?q=B.M.C.+Party+Plot+Ring+Road+Opposite+Shriji+Party+Plot+Bhavnagar+Gujarat',
  },

  events: [
    {
      id: 'geet-gunjan',
      title: 'Geet Gunjan (Sangeet Celebration)',
      tagline: 'Hosted with love by Smt. Sumitaben Himatbharthi Goswami',
      date: 'December 12, 2026',
      day: 'Saturday (Magsar Sud 3)',
      startTime: '4:00 PM onwards',
      venue: 'Shubh Sthal (Groom Residence)',
      address: 'Plot No. 5/A, Navjivan Society, Vitthalwadi, Bhavnagar',
      description:
        'Commencing the auspicious wedding celebrations with traditional Gujarati folk songs, family melodies, and joyous sangeet.',
      mapsUrl:
        'https://maps.google.com/?q=Navjivan+Society+Vitthalwadi+Bhavnagar+Gujarat',
      icon: 'music',
      enabled: true,
    },
    {
      id: 'mandap-muhurat',
      title: 'Mandap Muhurat',
      tagline: 'Sanctifying the Sacred Wedding Canopy by Mrs. Ritaben & Mr. Rameshbharthi Goswami',
      date: 'December 13, 2026',
      day: 'Sunday (Magsar Sud 4)',
      startTime: '9:00 AM',
      venue: 'B.M.C. Party Plot',
      address: 'Ring Road, Opposite Shriji Party Plot, Bhavnagar',
      description:
        'Holy Vedic ritual invoking Mother Earth, Lord Ganesha, and planetary blessings to sanctify the wedding mandap.',
      mapsUrl:
        'https://maps.google.com/?q=B.M.C.+Party+Plot+Ring+Road+Opposite+Shriji+Party+Plot+Bhavnagar+Gujarat',
      icon: 'sun',
      enabled: true,
    },
    {
      id: 'raas-garba',
      title: 'Raas-Garba (Dandiya Raas)',
      tagline: 'An Enchanting Evening hosted by Mrs. Hinaliben Vivekparigiri & Ms. Arpita Himatbharthi Goswami',
      date: 'December 13, 2026',
      day: 'Sunday (Magsar Sud 4)',
      startTime: '7:30 PM onwards',
      venue: 'B.M.C. Party Plot',
      address: 'Ring Road, Opposite Shriji Party Plot, Bhavnagar',
      description:
        'A magical evening filled with traditional Gujarati Raas-Garba, rhythmic Dandiya beats, and joyous celebrations under the stars.',
      mapsUrl:
        'https://maps.google.com/?q=B.M.C.+Party+Plot+Ring+Road+Opposite+Shriji+Party+Plot+Bhavnagar+Gujarat',
      icon: 'sparkles',
      enabled: true,
    },
    {
      id: 'haldi',
      title: 'Haldi Rasam (Pithi Ceremony)',
      tagline: 'Turmeric & Golden Radiance with Mrs. Gitaben Niteshgiri Goswami',
      date: 'December 14, 2026',
      day: 'Monday (Magsar Sud 5)',
      startTime: '9:00 AM',
      venue: 'B.M.C. Party Plot',
      address: 'Ring Road, Opposite Shriji Party Plot, Bhavnagar',
      description:
        'An auspicious morning bathed in fragrant turmeric, floral laughter, sacred mantras, and heartfelt blessings.',
      mapsUrl:
        'https://maps.google.com/?q=B.M.C.+Party+Plot+Ring+Road+Opposite+Shriji+Party+Plot+Bhavnagar+Gujarat',
      icon: 'flower',
      enabled: true,
    },
    {
      id: 'jaan-prasthan',
      title: 'Jaan Prasthan (Departure of Baraat)',
      tagline: 'Joyous departure blessed by Smt. Labhuben Balabharthi Goswami',
      date: 'December 14, 2026',
      day: 'Monday (Magsar Sud 5)',
      startTime: '4:00 PM',
      venue: 'From Residence to B.M.C. Party Plot',
      address: 'Plot No. 5/A, Navjivan Society, Vitthalwadi, Bhavnagar',
      description:
        'A vibrant and joyous procession of the Groom’s Baraat accompanied by celebratory dhol rhythms and music.',
      mapsUrl:
        'https://maps.google.com/?q=B.M.C.+Party+Plot+Ring+Road+Opposite+Shriji+Party+Plot+Bhavnagar+Gujarat',
      icon: 'sparkles',
      enabled: true,
    },
    {
      id: 'hast-melap',
      title: 'The Wedding Ceremony (Hast Melap)',
      tagline: 'Sacred Hast Melap & Saptapadi Vows',
      date: 'December 14, 2026',
      day: 'Monday (Magsar Sud 5)',
      startTime: '7:05 PM',
      venue: 'B.M.C. Party Plot',
      address: 'Ring Road, Opposite Shriji Party Plot, Bhavnagar',
      description:
        'With sacred Vedic chants, holy fire, and the divine joining of hands in Hast Melap, Parasbharthi & Priyanka embark on their journey of forever.',
      mapsUrl:
        'https://maps.google.com/?q=B.M.C.+Party+Plot+Ring+Road+Opposite+Shriji+Party+Plot+Bhavnagar+Gujarat',
      icon: 'ring',
      enabled: true,
    },
    {
      id: 'swaruchi-bhojan',
      title: 'Swaruchi Bhojan (Wedding Dinner)',
      tagline: 'Auspicious Wedding Feast & Celebratory Dinner',
      date: 'December 14, 2026',
      day: 'Monday (Magsar Sud 5)',
      startTime: '8:00 PM onwards',
      venue: 'B.M.C. Party Plot',
      address: 'Ring Road, Opposite Shriji Party Plot, Bhavnagar',
      description:
        'An evening of sumptuous traditional Gujarati royal culinary delicacies in joyous celebration of the newlyweds.',
      mapsUrl:
        'https://maps.google.com/?q=B.M.C.+Party+Plot+Ring+Road+Opposite+Shriji+Party+Plot+Bhavnagar+Gujarat',
      icon: 'glass',
      enabled: true,
    },
  ],

  family: {
    enabled: true,
    message:
      'With the divine blessings of our Ishtadev Lord Shiva, Kuldevi Shree Kamakhya Mataji, our revered ancestors, and beloved elders.',
    brideParents: {
      title: 'With Compliments & Blessings From',
      names: 'Mrs. Jayshreeben & Mr. Daksheshbhai Shivlal Rajpura (Bhavnagar)',
      grandparents: 'Blessed by Shree Shivlal Jeramdas Rajpura & Smt. Ramilaben Shivlal',
    },
    groomParents: {
      title: 'Warmly Invited By',
      names: 'Mrs. Ritaben & Mr. Rameshbharthi Balabharthi Goswami',
      grandparents: 'With respectful blessings from Late Shree Balabharthi Bhupatbharthi Goswami & Elders',
    },
  },

  contact: {
    whatsappNumber: '919924469165',
    rsvpDeadline: 'December 05, 2026',
    messageTemplate:
      'Namaste! We are delighted to confirm our presence for the auspicious wedding celebrations of Parasbharthi & Priyanka.',
  },

  music: {
    enabled: true,
    src: '/audio/wedding-ambient.mp3',
    title: 'The Golden Vow • Classical Sitar & Shehnai',
  },

  sections: {
    envelope: true,
    hero: true,
    message: true,
    couple: true,
    countdown: true,
    events: true,
    venue: true,
    family: true,
    rsvp: false,
    closing: true,
  },
};

/**
 * Helper to get the side-specific configuration
 */
export const getWeddingConfig = (side: 'bride' | 'groom' = 'bride'): WeddingConfig => {
  return side === 'groom' ? groomWeddingConfig : brideWeddingConfig;
};

// Default export is brideWeddingConfig for backwards compatibility
export const weddingConfig: WeddingConfig = brideWeddingConfig;
