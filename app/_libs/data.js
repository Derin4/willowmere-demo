// Fictitious data for the Willowmere Township demo.

export const NEWS_CATS = ["All", "Notice", "Council", "Public works", "Events"];

export const news = [
  {
    slug: "spring-cleanup",
    cat: "Events",
    date: "Oct 24, 2026",
    title: "Fall clean-up day returns to the riverfront",
    text: "Bring gloves and a friend. Bags and refreshments are provided at the Mill Street dock from 9am.",
  },
  {
    slug: "budget-hearing",
    cat: "Council",
    date: "Oct 21, 2026",
    title: "Public hearing on the 2027 draft budget",
    text: "Residents are invited to review the draft and speak at council on November 9.",
  },
  {
    slug: "bridge-work",
    cat: "Public works",
    date: "Oct 18, 2026",
    title: "Harrow Street bridge: lane closure this week",
    text: "One lane will be closed weekdays between 9am and 3pm. Please allow extra time.",
  },
  {
    slug: "water-notice",
    cat: "Notice",
    date: "Oct 15, 2026",
    title: "Annual hydrant flushing begins Monday",
    text: "Water may appear cloudy for a few hours. Run the cold tap until it clears.",
  },
  {
    slug: "library-hours",
    cat: "Notice",
    date: "Oct 12, 2026",
    title: "Library extends evening hours",
    text: "From November, the Willowmere Library will stay open until 8pm on Tuesdays and Thursdays.",
  },
  {
    slug: "harvest-fair",
    cat: "Events",
    date: "Oct 9, 2026",
    title: "Harvest Fair draws record crowd",
    text: "More than 1,200 neighbours enjoyed the market, the pie contest and the lantern walk.",
  },
];

export const bulletin = [
  {
    tag: "Wanted",
    text: "Volunteers for the winter food drive. Sign up at the township office.",
  },
  {
    tag: "Notice",
    text: "Garbage collection moves to Thursday during the holiday week.",
  },
  {
    tag: "Lost & found",
    text: "A child's red mitten was found at the community hall.",
  },
  {
    tag: "For sale",
    text: "Community garden plots available for next season. Apply by December 1.",
  },
];

export const events = [
  {
    day: "02",
    mon: "Nov",
    title: "Council meeting",
    where: "Township hall, 7pm",
  },
  {
    day: "09",
    mon: "Nov",
    title: "Budget public hearing",
    where: "Township hall, 6pm",
  },
  {
    day: "14",
    mon: "Nov",
    title: "Winter market",
    where: "Mill Street square, 10am",
  },
  {
    day: "21",
    mon: "Nov",
    title: "Lantern walk",
    where: "Willow River trail, 5pm",
  },
];

export const PROJECT_STATUS = ["All", "Current", "Upcoming", "Proposed"];

export const projects = [
  {
    slug: "riverfront",
    status: "Current",
    title: "Riverfront boardwalk",
    dept: "Parks",
    budget: "$840,000",
    progress: 62,
    text: "A 600 m accessible boardwalk linking Mill Street dock to the Willow River trail.",
    due: "Opens summer 2027",
  },
  {
    slug: "harrow-bridge",
    status: "Current",
    title: "Harrow Street bridge repair",
    dept: "Public works",
    budget: "$420,000",
    progress: 35,
    text: "Deck replacement and new railings for the community's main river crossing.",
    due: "Complete spring 2027",
  },
  {
    slug: "library-wing",
    status: "Current",
    title: "Library children's wing",
    dept: "Library",
    budget: "$310,000",
    progress: 80,
    text: "A bright new reading room and story-time space.",
    due: "Opens January 2027",
  },
  {
    slug: "splash-pad",
    status: "Upcoming",
    title: "Splash pad at Ridge Park",
    dept: "Parks",
    budget: "$260,000",
    progress: 0,
    text: "A zero-depth splash pad for hot summer days, with shade and seating.",
    due: "Construction starts spring 2027",
  },
  {
    slug: "bike-lanes",
    status: "Upcoming",
    title: "Main Street bike lanes",
    dept: "Public works",
    budget: "$180,000",
    progress: 0,
    text: "Protected lanes from the school to the town square.",
    due: "Design phase",
  },
  {
    slug: "solar-hall",
    status: "Proposed",
    title: "Solar panels for the community hall",
    dept: "Facilities",
    budget: "$150,000",
    progress: 0,
    text: "Cut the hall's power costs and show what a small community can do.",
    due: "Awaiting council vote",
    support: 214,
  },
  {
    slug: "dog-park",
    status: "Proposed",
    title: "Off-leash dog park",
    dept: "Parks",
    budget: "$65,000",
    progress: 0,
    text: "A fenced dog park beside the old rail line.",
    due: "Awaiting council vote",
    support: 388,
  },
  {
    slug: "skate-park",
    status: "Proposed",
    title: "Youth skate park",
    dept: "Parks",
    budget: "$210,000",
    progress: 0,
    text: "Proposed by the youth council and designed with local teens.",
    due: "Awaiting council vote",
    support: 297,
  },
];

export const DIR_CATS = [
  "All",
  "Food & drink",
  "Trades",
  "Health",
  "Shops",
  "Services",
];

export const directory = [
  {
    name: "Mill Street Bakery",
    cat: "Food & drink",
    addr: "4 Mill Street",
    phone: "(555) 010-2101",
    text: "Sourdough, pastries and coffee.",
  },
  {
    name: "Riverbend Café",
    cat: "Food & drink",
    addr: "20 Water Street",
    phone: "(555) 010-2102",
    text: "Breakfast and lunch by the river.",
  },
  {
    name: "Harlan Plumbing & Heating",
    cat: "Trades",
    addr: "88 Harrow Street",
    phone: "(555) 010-2103",
    text: "Emergency and scheduled work.",
  },
  {
    name: "Brightside Electric",
    cat: "Trades",
    addr: "31 Ridge Road",
    phone: "(555) 010-2104",
    text: "Residential electrical contractors.",
  },
  {
    name: "Willow Family Dental",
    cat: "Health",
    addr: "15 Main Street",
    phone: "(555) 010-2105",
    text: "Family and emergency dental care.",
  },
  {
    name: "Riverside Pharmacy",
    cat: "Health",
    addr: "2 Main Street",
    phone: "(555) 010-2106",
    text: "Prescriptions and local delivery.",
  },
  {
    name: "Oak & Thread",
    cat: "Shops",
    addr: "9 Mill Street",
    phone: "(555) 010-2107",
    text: "Handmade gifts and home goods.",
  },
  {
    name: "Ridge Hardware",
    cat: "Shops",
    addr: "70 Ridge Road",
    phone: "(555) 010-2108",
    text: "Tools, paint and garden supplies.",
  },
  {
    name: "Willowmere Books",
    cat: "Shops",
    addr: "11 Water Street",
    phone: "(555) 010-2109",
    text: "New and used books.",
  },
  {
    name: "Clearline Accounting",
    cat: "Services",
    addr: "40 Main Street",
    phone: "(555) 010-2110",
    text: "Personal and small-business tax.",
  },
  {
    name: "Foxglove Salon",
    cat: "Services",
    addr: "6 Mill Street",
    phone: "(555) 010-2111",
    text: "Cuts, colour and styling.",
  },
  {
    name: "Trailhead Bike Repair",
    cat: "Services",
    addr: "3 Trail Lane",
    phone: "(555) 010-2112",
    text: "Tune-ups and rentals.",
  },
];

export const PLACE_TYPES = ["All", "Parks", "Culture", "Community"];

// x and y are positions on the 600 x 380 illustrated map.
export const places = [
  {
    id: 1,
    name: "Ridge Park",
    type: "Parks",
    x: 120,
    y: 100,
    text: "Playground, picnic shelters and the future splash pad.",
  },
  {
    id: 2,
    name: "Willow River trail",
    type: "Parks",
    x: 300,
    y: 290,
    text: "A 5 km riverside walking and cycling path.",
  },
  {
    id: 3,
    name: "Willowmere Library",
    type: "Culture",
    x: 330,
    y: 150,
    text: "Books, programs and free internet.",
  },
  {
    id: 4,
    name: "Heritage Mill Museum",
    type: "Culture",
    x: 440,
    y: 230,
    text: "The old grist mill, open weekends.",
  },
  {
    id: 5,
    name: "Township hall",
    type: "Community",
    x: 270,
    y: 190,
    text: "Council chambers, offices and community hall.",
  },
  {
    id: 6,
    name: "Harvest Fair grounds",
    type: "Community",
    x: 500,
    y: 110,
    text: "Home of the autumn fair and winter market.",
  },
  {
    id: 7,
    name: "Mill Street dock",
    type: "Parks",
    x: 205,
    y: 262,
    text: "Boat launch and the start of the new boardwalk.",
  },
];

export const funds = [
  {
    id: "boardwalk",
    name: "Riverfront boardwalk",
    raised: 48200,
    goal: 75000,
    text: "Benches, lighting and planters along the new boardwalk.",
  },
  {
    id: "splash",
    name: "Ridge Park splash pad",
    raised: 21400,
    goal: 40000,
    text: "Help the splash pad open on time.",
  },
  {
    id: "food",
    name: "Winter food drive",
    raised: 9600,
    goal: 12000,
    text: "Groceries for neighbours who need them, delivered before the holidays.",
  },
];

export const departments = [
  "General enquiry",
  "Public works",
  "Parks & recreation",
  "Building & permits",
  "Water & utilities",
  "Council members",
  "Library",
];
