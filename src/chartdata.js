const chartdata = [
  {
    name: "OneRPM",
    url: "https://onerpm.com",
    price: { value: "$0", weighted_value: 0 },
    commission: { value: "15%", weighted_value: 1 },
    stores: 38,
    video_distribution: {
      value: "Free (50% commission)",
      weighted_value: 1,
    },
    content_id: {
      value: "Only if your song reaches 1000 daily plays",
      weighted_value: 1,
    },
    ig_music: true,
    payout_minimum: 0,
    make_changes_after_distribution: {
      value: "Artwork, Titles, Audio Files",
      weighted_value: 1,
    },
    extra_tools: {
      value: "Smart Links, Pre-Save, Promo Art",
      weighted_value: 1,
    },
  },
  {
    name: "Amuse (Free Plan)",
    url: "https://amuse.io",
    price: { value: "$0", weighted_value: 0 },
    commission: { value: "0%", weighted_value: 0 },
    stores: 9,
    video_distribution: {
      value: false,
      weighted_value: 0,
    },
    content_id: {
      value: false,
      weighted_value: 0,
    },
    ig_music: false,
    payout_minimum: 10,
    make_changes_after_distribution: {
      value: false,
      weighted_value: 0,
    },
    extra_tools: {
      value: "Smart Links",
      weighted_value: 1,
    },
  },
  {
    name: "Amuse (Paid Plan)",
    url: "https://amuse.io",
    price: { value: "$60/yr", weighted_value: 2 },
    commission: { value: "0%", weighted_value: 0 },
    stores: 16,
    video_distribution: {
      value: false,
      weighted_value: 0,
    },
    content_id: {
      value: true,
      weighted_value: 1,
    },
    ig_music: true,
    payout_minimum: 10,
    make_changes_after_distribution: {
      value: "Artwork",
      weighted_value: 1,
    },
    extra_tools: {
      value: "Smart Links",
      weighted_value: 1,
    },
  },
  {
    name: "Novecore",
    url: "https://www.novecore.com/",
    price: { value: "$0", weighted_value: 0 },
    commission: { value: "15%", weighted_value: 1 },
    stores: 27,
    video_distribution: {
      value: false,
      weighted_value: 0,
    },
    content_id: {
      value: true,
      weighted_value: 1,
    },
    ig_music: true,
    payout_minimum: 0,
    make_changes_after_distribution: {
      value: false,
      weighted_value: 0,
    },
    extra_tools: {
      value: false,
      weighted_value: 0,
    },
  },
  {
    name: "Soundrop",
    url: "https://soundrop.com/",
    price: { value: "$0", weighted_value: 0 },
    commission: { value: "15%", weighted_value: 1 },
    stores: 12,
    video_distribution: {
      value: false,
      weighted_value: 0,
    },
    content_id: {
      value: false,
      weighted_value: 0,
    },
    ig_music: true,
    payout_minimum: 20,
    make_changes_after_distribution: {
      value: "Artwork, Titles",
      weighted_value: 1,
    },
    extra_tools: {
      value: "Pre-Save, Show.co Tools",
      weighted_value: 1,
    },
  },
  {
    name: "United Masters (Free Plan)",
    url: "https://unitedmasters.com/",
    price: { value: "$0", weighted_value: 0 },
    commission: { value: "10%", weighted_value: 1 },
    stores: 5,
    video_distribution: {
      value: "Only If Accepted",
      weighted_value: 1,
    },
    content_id: {
      value: false,
      weighted_value: 0,
    },
    ig_music: false,
    payout_minimum: 50,
    make_changes_after_distribution: {
      value: false,
      weighted_value: 0,
    },
    extra_tools: {
      value: "Smart Links, Artist Website, Playlist Placement Tracker",
      weighted_value: 1,
    },
  },
  {
    name: "United Masters (Paid Plan)",
    url: "https://unitedmasters.com/",
    price: { value: "$60/yr", weighted_value: 2 },
    commission: { value: "0%", weighted_value: 0 },
    stores: 35,
    video_distribution: {
      value: "Only If Accepted",
      weighted_value: 1,
    },
    content_id: {
      value: true,
      weighted_value: 1,
    },
    ig_music: true,
    payout_minimum: 50,
    make_changes_after_distribution: {
      value: false,
      weighted_value: 0,
    },
    extra_tools: {
      value: "Smart Links, Artist Website, Playlist Placement Tracker",
      weighted_value: 1,
    },
  },
  {
    name: "Routenote (Free Plan)",
    url: "https://www.routenote.com/",
    price: { value: "$0", weighted_value: 0 },
    commission: { value: "15%", weighted_value: 1 },
    stores: 28,
    video_distribution: {
      value: false,
      weighted_value: 0,
    },
    content_id: {
      value: true,
      weighted_value: 1,
    },
    ig_music: true,
    payout_minimum: 50,
    make_changes_after_distribution: {
      value: "Artwork, Titles",
      weighted_value: 1,
    },
    extra_tools: {
      value: false,
      weighted_value: 0,
    },
  },
  {
    name: "DistroKid",
    url: "https://www.distrokid.com/",
    price: { value: "$19.99/yr", weighted_value: 1 },
    commission: { value: "0%", weighted_value: 0 },
    stores: 41,
    video_distribution: {
      value: false,
      weighted_value: 0,
    },
    content_id: {
      value: true,
      weighted_value: 1,
    },
    ig_music: true,
    payout_minimum: 0,
    make_changes_after_distribution: {
      value: "Artwork, Titles",
      weighted_value: 1,
    },
    extra_tools: {
      value: "Smart Links, Pre-save",
      weighted_value: 1,
    },
  },
  {
    name: "Freshtunes",
    url: "https://www.freshtunes.com/",
    price: { value: "$0", weighted_value: 0 },
    commission: { value: "0%", weighted_value: 0 },
    stores: 15,
    video_distribution: {
      value: false,
      weighted_value: 0,
    },
    content_id: {
      value: true,
      weighted_value: 1,
    },
    ig_music: false,
    payout_minimum: 25,
    make_changes_after_distribution: {
      value: false,
      weighted_value: 0,
    },
    extra_tools: {
      value: "Promotion",
      weighted_value: 1,
    },
  },
  {
    name: "Ditto Music",
    url: "https://www.dittomusic.com/",
    price: { value: "$19/yr", weighted_value: 1 },
    commission: { value: "0%", weighted_value: 0 },
    stores: 160,
    video_distribution: {
      value:
        "$99 First Video + VEVO Channel.\n$29.99/video for further uploads",
      weighted_value: 1,
    },
    content_id: {
      value: "Only On Request",
      weighted_value: 1,
    },
    ig_music: true,
    payout_minimum: 25,
    make_changes_after_distribution: {
      value: false,
      weighted_value: 0,
    },
    extra_tools: {
      value:
        "Smart Links, Pre-Save, Ditto Spotify Playlist, Playlist Placement Tracker",
      weighted_value: 1,
    },
  },
  {
    name: "CD Baby",
    url: "https://cdbaby.com/",
    price: { value: "Single: $9.95\nAlbum: $29", weighted_value: 2 },
    commission: { value: "9%", weighted_value: 1 },
    stores: 154,
    video_distribution: {
      value: false,
      weighted_value: 0,
    },
    content_id: {
      value: true,
      weighted_value: 1,
    },
    ig_music: true,
    payout_minimum: 0,
    make_changes_after_distribution: {
      value: "Titles, Feature Artists, Pricing on iTunes only",
      weighted_value: 1,
    },
    extra_tools: {
      value: "Show.co Tools",
      weighted_value: 1,
    },
  },
  {
    name: "Octiive",
    url: "https://www.octiive.com/",
    price: {
      value:
        "Pay As You Go:\nSingle - $9, Album - $19\n\nUnlimited:\n$190/yr for upto 20 artists",
      weighted_value: 2,
    },
    commission: {
      value: "Pay As You Go: 8%\nUnlimited: 0%",
      weighted_value: 1,
    },
    stores: 200,
    video_distribution: {
      value: false,
      weighted_value: 0,
    },
    content_id: {
      value: false,
      weighted_value: 0,
    },
    ig_music: true,
    payout_minimum: 25,
    make_changes_after_distribution: {
      value: false,
      weighted_value: 0,
    },
    extra_tools: {
      value: "Pre-save, Separate paid marketing services",
      weighted_value: 1,
    },
  },
  {
    name: "Landr Lite",
    url: "https://www.landr.com/en/digital-distribution/",
    price: {
      value: "Single: $9, Album: $29",
      weighted_value: 2,
    },
    commission: {
      value: "15%",
      weighted_value: 1,
    },
    stores: 150,
    video_distribution: {
      value: false,
      weighted_value: 0,
    },
    content_id: {
      value: true,
      weighted_value: 1,
    },
    ig_music: true,
    payout_minimum: 20,
    make_changes_after_distribution: {
      value: false,
      weighted_value: 0,
    },
    extra_tools: {
      value: "Promo Links, AI Mastering",
      weighted_value: 1,
    },
  },
  {
    name: "Landr Unlimited",
    url: "https://www.landr.com/en/digital-distribution/",
    price: {
      value: "$89/yr",
      weighted_value: 2,
    },
    commission: {
      value: "0%",
      weighted_value: 0,
    },
    stores: 150,
    video_distribution: {
      value: false,
      weighted_value: 0,
    },
    content_id: {
      value: true,
      weighted_value: 1,
    },
    ig_music: true,
    payout_minimum: 20,
    make_changes_after_distribution: {
      value: false,
      weighted_value: 0,
    },
    extra_tools: {
      value: "Promo Links, AI Mastering",
      weighted_value: 1,
    },
  },
  {
    name: "TuneCore",
    url: "https://www.tunecore.com/",
    price: {
      value: "Single: $9.99, Album: $29.99",
      weighted_value: 2,
    },
    commission: {
      value: "0%",
      weighted_value: 0,
    },
    stores: 150,
    video_distribution: {
      value: false,
      weighted_value: 0,
    },
    content_id: {
      value: "$10 Set-up fee, 20% commission",
      weighted_value: 2,
    },
    ig_music: true,
    payout_minimum: 0,
    make_changes_after_distribution: {
      value: false,
      weighted_value: 0,
    },
    extra_tools: {
      value: "N/A",
      weighted_value: 0,
    },
  },
];
export default chartdata;
