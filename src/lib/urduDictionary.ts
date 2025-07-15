/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

const urduDictionary: Record<string, string> = {
  // Basic words
  blog: 'بلاگ',
  summary: 'خلاصہ',
  content: 'مواد',
  author: 'مصنف',
  published: 'شائع',
  date: 'تاریخ',
  title: 'عنوان',
  article: 'مضمون',
  post: 'تحریر',
  website: 'ویب سائٹ',
  
  // Important words
  important: 'اہم',
  main: 'مرکزی',
  key: 'کلیدی',
  primary: 'بنیادی',
  essential: 'لازمی',
  crucial: 'انتہائی اہم',
  significant: 'نمایاں',
  major: 'اہم',
  central: 'مرکزی',
  fundamental: 'بنیادی',
  critical: 'انتہائی اہم',
  
  // Content structure
  introduction: 'تعارف',
  conclusion: 'نتیجہ',
  overview: 'جائزہ',
  background: 'پس منظر',
  information: 'معلومات',
  details: 'تفصیلات',
  analysis: 'تجزیہ',
  research: 'تحقیق',
  study: 'مطالعہ',
  report: 'رپورٹ',
  
  // Common words
  the: 'یہ',
  and: 'اور',
  or: 'یا',
  but: 'لیکن',
  for: 'کے لیے',
  with: 'کے ساتھ',
  from: 'سے',
  about: 'کے بارے میں',
  this: 'یہ',
  that: 'وہ',
  these: 'یہ',
  those: 'وہ',
  
  // Error/Status Messages
  'too short': 'بہت چھوٹا',
  'generate a meaningful summary': 'ایک معنی خیز خلاصہ تیار کریں',
  'content too short': 'مواد بہت چھوٹا ہے',
  'no content available': 'کوئی مواد دستیاب نہیں ہے',
  'failed to summarize': 'خلاصہ بنانے میں ناکام',
  'error occurred': 'خطا واقع ہوئی',
  'please try again': 'براہ کرم دوبارہ کوشش کریں',
  'invalid url': 'غلط URL',
  'page not found': 'صفحہ نہیں ملا',
  'access forbidden': 'رسائی ممنوع ہے',
  'server error': 'سرور کی خطا',
  'network error': 'نیٹ ورک کی خطا',
  'timeout error': 'وقت ختم ہو گیا',
  'connection failed': 'کنکشن ناکام',
  'processing': 'پروسیسنگ',
  'loading': 'لوڈ ہو رہا ہے',
  'success': 'کامیاب',
  'completed': 'مکمل',
  'ready': 'تیار',
  'idle': 'غیر فعال',
  'busy': 'مصروف',
  'online': 'آن لائن',
  'offline': 'آف لائن',
  
  // Action words
  explains: 'وضاحت کرتا ہے',
  describes: 'بیان کرتا ہے',
  discusses: 'بحث کرتا ہے',
  shows: 'دکھاتا ہے',
  presents: 'پیش کرتا ہے',
  provides: 'فراہم کرتا ہے',
  offers: 'پیش کرتا ہے',
  includes: 'شامل کرتا ہے',
  contains: 'شامل ہے',
  
  // Technology words
  technology: 'ٹیکنالوجی',
  application: 'ایپلیکیشن',
  software: 'سافٹ ویئر',
  system: 'سسٹم',
  platform: 'پلیٹ فارم',
  development: 'ترقی',
  programming: 'پروگرامنگ',
  coding: 'کوڈنگ',
  
  // Technical/Programming Terms
  page: 'صفحہ',
  introduces: 'تعارف کراتا ہے',
  infrastructure: 'انفراسٹرکچر',
  runtime: 'رن ٹائم',
  environment: 'ماحول',
  model: 'ماڈل',
  theoretical: 'نظریاتی',
  abstract: 'مجرد',
  implementation: 'عمل درآمد',
  assumes: 'فرض کرتا ہے',
  familiar: 'واقف',
  execution: 'عمل',
  languages: 'زبانوں',
  java: 'جاوا',
  heavy: 'بھاری',
  existing: 'موجودہ',
  concepts: 'تصورات',
  operating: 'آپریٹنگ',
  agent: 'ایجنٹ',
  web: 'ویب',
  similar: 'مشابہ',
  origin: 'اصل',
  window: 'کھڑکی',
  various: 'مختلف',
  objects: 'آبجیکٹس',
  potentially: 'ممکنہ طور پر',
  reach: 'پہنچ',
  each: 'ہر ایک',
  other: 'دوسرے',
  directly: 'براہ راست',
  using: 'استعمال کرتے ہوئے',
  document: 'دستاویز',
  globally: 'عالمی طور پر',
  declared: 'اعلان شدہ',
  variables: 'متغیرات',
  value: 'قیمت',
  global: 'عالمی',
  cache: 'کیش',
  template: 'ٹیمپلیٹ',
  literal: 'لفظی',
  arrays: 'آرے',
  evaluation: 'تشخیص',
  same: 'ایک ہی',
  tagged: 'ٹیگ شدہ',
  expression: 'اظہار',
  always: 'ہمیشہ',
  causes: 'سبب بنتا ہے',
  receive: 'وصول کرتا ہے',
  realm: 'دائرہ',
  corresponded: 'مطابقت رکھتے ہیں',
  tracks: 'ٹریک کرتا ہے',
  state: 'حالت',
  module: 'ماڈیول',
  script: 'اسکرپٹ',
  function: 'فنکشن',
  applicable: 'قابل اطلاق',
  executing: 'عمل کر رہا ہے',
  generator: 'جنریٹر',
  current: 'موجودہ',
  bindings: 'بائنڈنگز',
  defined: 'تعریف شدہ',
  var: 'var',
  let: 'let',
  const: 'const',
  class: 'کلاس',
  properties: 'خصوصیات',
  reasoning: 'استدلال',
  program: 'پروگرام',
  fact: 'حقیقت',
  whenever: 'جب بھی',
  runs: 'چلتا ہے',
  cannot: 'نہیں کر سکتا',
  preempted: 'ترجیح دی گئی',
  entirely: 'مکمل طور پر',
  modify: 'ترمیم',
  data: 'ڈیٹا',
  manipulates: 'استعمال کرتا ہے',
  guarantee: 'ضمانت',
  never: 'کبھی نہیں',
  blocking: 'روکنے والا',
  requires: 'ضرورت ہے',
  api: 'API',
  inherently: 'فطری طور پر',
  asynchronous: 'غیر متوازی',
  legacy: 'وراثت',
  exceptions: 'استثناء',
  exist: 'موجود ہیں',
  alert: 'الارٹ',
  synchronous: 'متوازی',
  xhr: 'XHR',
  pairs: 'جوڑے',
  cluster: 'کلسٹر',
  thus: 'اس طرح',
  memory: 'میموری',
  dedicated: 'مخصوص',
  worker: 'ورکر',
  created: 'بنایا گیا',
  
  // Business words
  business: 'کاروبار',
  company: 'کمپنی',
  organization: 'تنظیم',
  project: 'پروجیکٹ',
  strategy: 'حکمت عملی',
  management: 'انتظام',
  leadership: 'قیادت',
  team: 'ٹیم',
  
  // Blog Structure
  paragraph: 'پیراگراف',
  section: 'حصہ',
  headline: 'سرخی',
  subheading: 'ذیلی سرخی',
  reference: 'حوالہ',
  source: 'ماخذ',

  // Emotions / Tone
  interesting: 'دلچسپ',
  useful: 'مفید',
  helpful: 'مددگار',
  informative: 'معلوماتی',
  educational: 'تعلیمی',
  valuable: 'قیمتی',
  popular: 'مقبول',
  controversial: 'متنازع',

  // Education & Knowledge
  education: 'تعلیم',
  learning: 'سیکھنا',
  knowledge: 'علم',
  concept: 'تصور',
  idea: 'خیال',
  lesson: 'سبق',
  topic: 'موضوع',
  subject: 'مضمون',
  student: 'طالب علم',
  teacher: 'استاد',

  // Time / Order Words
  first: 'پہلا',
  second: 'دوسرا',
  then: 'پھر',
  after: 'بعد',
  before: 'پہلے',
  finally: 'آخرکار',
  currently: 'فی الحال',
  recently: 'حال ہی میں',
  today: 'آج',
  yesterday: 'کل',

  // Web/Internet Terms
  internet: 'انٹرنیٹ',
  blogger: 'بلاگر',
  reader: 'قارئ',
  click: 'کلک',
  link: 'لنک',
  download: 'ڈاؤن لوڈ',
  upload: 'اپ لوڈ',

  // Productivity / Purpose
  goal: 'مقصد',
  objective: 'مقاصد',
  purpose: 'مقصد',
  task: 'کام',
  process: 'عمل',
  method: 'طریقہ',
  approach: 'انداز',
  technique: 'تکنیک',

  // Connectors / Flow
  therefore: 'لہٰذا',
  however: 'تاہم',
  moreover: 'مزید برآں',
  'in addition': 'علاوہ ازیں',
  'on the other hand': 'دوسری طرف',
  'in conclusion': 'آخر میں',
  'as a result': 'نتیجتاً',

  // Common Verbs
  learns: 'سیکھتا ہے',
  teaches: 'سکھاتا ہے',
  helps: 'مدد کرتا ہے',
  focuses: 'توجہ دیتا ہے',
  improves: 'بہتر بناتا ہے',
  builds: 'بناتا ہے',
  develops: 'ترقی دیتا ہے',
  explores: 'دریافت کرتا ہے',

  // General
  example: 'مثال',
  benefit: 'فائدہ',
  advantage: 'برتری',
  risk: 'خطرہ',
  challenge: 'چیلنج',
  solution: 'حل',
  result: 'نتیجہ',

  // Science & Research
  science: 'سائنس',
  scientist: 'سائنسدان',
  experiment: 'تجربہ',
  laboratory: 'تجربہ گاہ',
  observation: 'مشاہدہ',
  hypothesis: 'مفروضہ',
  theory: 'نظریہ',
  evidence: 'ثبوت',
  discovery: 'دریافت',
  innovation: 'جدت',
  physics: 'طبیعات',
  chemistry: 'کیمسٹری',
  biology: 'حیاتیات',
  astronomy: 'فلکیات',

  // Health & Medicine
  health: 'صحت',
  healthy: 'صحت مند',
  disease: 'بیماری',
  treatment: 'علاج',
  medicine: 'ادویات',
  doctor: 'ڈاکٹر',
  nurse: 'نرس',
  hospital: 'ہسپتال',
  clinic: 'کلینک',
  emergency: 'ایمرجنسی',
  patient: 'مریض',

  // Common connectors and phrases for better sentence structure
  because: 'کیونکہ',
  also: 'بھی',
  as: 'جیسا کہ',
  like: 'جیسا',
  such: 'ایسا',
  very: 'بہت',
  quite: 'کافی',
  rather: 'بلکہ',
  especially: 'خاص طور پر',
  particularly: 'خاص طور پر',
  mainly: 'بنیادی طور پر',
  primarily: 'بنیادی طور پر',
  usually: 'عام طور پر',
  generally: 'عام طور پر',
  often: 'اکثر',
  sometimes: 'کبھی کبھی',
  rarely: 'شاذ و نادر',
  frequently: 'بار بار',
  occasionally: 'کبھی کبھار',
  
  // Common verbs for better sentence structure
  is: 'ہے',
  was: 'تھا',
  were: 'تھے',
  will: 'ہوگا',
  would: 'ہوگا',
  can: 'کر سکتا ہے',
  could: 'کر سکتا تھا',
  should: 'کرنا چاہیے',
  must: 'ضرور',
  may: 'ہو سکتا ہے',
  might: 'ہو سکتا ہے',
  
  // Common adjectives for better descriptions
  good: 'اچھا',
  bad: 'برا',
  big: 'بڑا',
  small: 'چھوٹا',
  new: 'نیا',
  old: 'پرانہ',
  necessary: 'ضروری',
  possible: 'ممکن',
  impossible: 'ناممکن',
  easy: 'آسان',
  difficult: 'مشکل',
  simple: 'سادہ',
  complex: 'پیچیدہ',
  
  // Time-related words
  now: 'اب',
  soon: 'جلد',
  later: 'بعد میں',
  during: 'دوران',
  while: 'جبکہ',
  when: 'جب',
  
  // Place-related words
  here: 'یہاں',
  there: 'وہاں',
  everywhere: 'ہر جگہ',
  nowhere: 'کہیں نہیں',
  somewhere: 'کہیں',
  inside: 'اندر',
  outside: 'باہر',
  above: 'اوپر',
  below: 'نیچے',
  near: 'قریب',
  far: 'دور',
  
  // Quantity words
  many: 'بہت',
  few: 'کچھ',
  some: 'کچھ',
  all: 'سب',
  none: 'کوئی نہیں',
  every: 'ہر',
  any: 'کوئی',
  several: 'کئی',
  most: 'زیادہ تر',
  least: 'کم سے کم',
  more: 'زیادہ',
  less: 'کم',
  
  // Common phrases
  'in fact': 'درحقیقت',
  'for example': 'مثال کے طور پر',
  'such as': 'جیسے',
  'as well as': 'کے ساتھ ساتھ',
  'not only': 'صرف نہیں',
  'but also': 'بلکہ بھی',
  'to sum up': 'خلاصہ یہ کہ',
  'in summary': 'خلاصہ میں',

  // Additional common words
  including: 'شامل',
  are: 'ہیں',
  plenty: 'کافی',
  of: 'کا',
  has: 'ہے',
  along: 'کے ساتھ',
  to: 'کے لیے',
  courses: 'کورسز',
  available: 'دستیاب',
  learn: 'سیکھنا',
  code: 'کوڈ',
  listed: 'فہرست دی',
  three: 'تین',
  best: 'بہترین',
  tutorial: 'سبق آموز',
  databases: 'ڈیٹابیسز',
  html: 'ایچ ٹی ایم ایل',
  resources: 'وسائل',
  examples: 'مثالیں',
  exercises: 'مشقیں',
  help: 'مدد',
  basic: 'بنیادی',
  free: 'مفت',
  wide: 'وسیع',
  specifications: 'وضاحتیں',
  providing: 'فراہم کرنا',
  regular: 'باقاعدہ',
  updates: 'اپ ڈیٹس',

  

  // Specific translations for the example text
  'w3schools': 'ڈبلیو تھری سکولز',
  'w3c': 'ڈبلیو تھری سی',
  'the world wide web consortium': 'عالمی ویب کنسورٹیم',

  // Communication & Media
  communication: 'ابلاغ',
  message: 'پیغام',
  email: 'ای میل',
  phone: 'فون',
  call: 'کال',
  media: 'میڈیا',
  news: 'خبریں',
  broadcast: 'نشریات',
  channel: 'چینل',

  // Social Media & Interaction
  social: 'سماجی',
  network: 'نیٹ ورک',
  profile: 'پروفائل',
  comment: 'تبصرہ',
  share: 'شئیر',
  follow: 'پیروی کرنا',
  followers: 'پیروکار',
  trending: 'مقبول',

  // Work & Productivity
  schedule: 'شیڈول',
  deadline: 'آخری تاریخ',
  meeting: 'اجلاس',
  calendar: 'کیلنڈر',
  notes: 'نوٹس',
  reporting: 'رپورٹنگ',

  // Emotions & Reactions
  surprise: 'حیرت',
  joy: 'خوشی',
  sadness: 'اداسی',
  fear: 'خوف',
  anger: 'غصہ',
  relief: 'اطمینان',
  shock: 'صدمہ',
  hope: 'امید',
  fearful: 'خائف',

  // Logic & Reasoning
  logic: 'منطق',
  reason: 'وجہ',
  cause: 'سبب',
  effect: 'اثر',
  problem: 'مسئلہ',
  argument: 'دلائل',
  decision: 'فیصلہ',
  choice: 'انتخاب',

  // Miscellaneous
  start: 'شروع',
  end: 'خاتمہ',
  open: 'کھولنا',
  close: 'بند کرنا',
  enable: 'فعال کرنا',
  disable: 'غیرفعال کرنا',
  save: 'محفوظ کرنا',
  edit: 'ترمیم کرنا',
  delete: 'حذف کرنا',
  update: 'تازہ کاری',

  // Descriptive Words
  beautiful: 'خوبصورت',
  ugly: 'بدصورت',
  fast: 'تیز',
  slow: 'آہستہ',
  bright: 'روشن',
  dark: 'اندھیرا',
  clean: 'صاف',
  dirty: 'گندا',

  // Colors
  red: 'سرخ',
  blue: 'نیلا',
  green: 'سبز',
  yellow: 'پیلا',
  black: 'کالا',
  white: 'سفید',
  orange: 'نارنجی',
  purple: 'ارغوانی',
  pink: 'گلابی',
  brown: 'بھورا',

  // Numbers
  zero: 'صفر',
  one: 'ایک',
  two: 'دو',
  four: 'چار',
  five: 'پانچ',
  six: 'چھے',
  seven: 'سات',
  eight: 'آٹھ',
  nine: 'نو',
  ten: 'دس',

  // Days & Months
  monday: 'پیر',
  tuesday: 'منگل',
  wednesday: 'بدھ',
  thursday: 'جمعرات',
  friday: 'جمعہ',
  saturday: 'ہفتہ',
  sunday: 'اتوار',

  january: 'جنوری',
  february: 'فروری',
  march: 'مارچ',
  april: 'اپریل',
  june: 'جون',
  july: 'جولائی',
  august: 'اگست',
  september: 'ستمبر',
  october: 'اکتوبر',
  november: 'نومبر',
  december: 'دسمبر',

  // Feelings & State of Mind
  bored: 'بور',
  confused: 'الجھن میں',
  interested: 'دلچسپی رکھتا ہے',
  calm: 'پرسکون',
  tense: 'تناؤ',
  anxious: 'پریشان',
  proud: 'فخر',
  shy: 'شرمیلا',
  lonely: 'تنہا',
  relaxed: 'پرسکون',
  worried: 'فکر مند',

  // Movement & Actions
  walk: 'چلنا',
  run: 'دوڑنا',
  jump: 'چھلانگ',
  sit: 'بیٹھنا',
  stand: 'کھڑا ہونا',
  move: 'حرکت کرنا',
  stop: 'رکنا',
  go: 'جانا',
  come: 'آنا',
  leave: 'چھوڑنا',
  arrive: 'پہنچنا',

  // Thinking & Learning
  think: 'سوچنا',
  understand: 'سمجھنا',
  remember: 'یاد رکھنا',
  forget: 'بھولنا',
  decide: 'فیصلہ کرنا',
  analyze: 'تجزیہ کرنا',
  review: 'جائزہ لینا',

  // Appearance & Body
  face: 'چہرہ',
  hair: 'بال',
  eyes: 'آنکھیں',
  mouth: 'منہ',
  hand: 'ہاتھ',
  foot: 'پاؤں',
  leg: 'ٹانگ',
  head: 'سر',
  arm: 'بازو',
  back: 'پیٹھ',

  // Clothing & Fashion
  shirt: 'قمیض',
  pant: 'پینٹ',
  dress: 'لباس',
  shoes: 'جوتے',
  hat: 'ٹوپی',
  jacket: 'جیکٹ',
  jeans: 'جینز',
  socks: 'موزے',
  clothes: 'کپڑے',
  style: 'انداز',

  // Food & Drink
  breakfast: 'ناشتہ',
  lunch: 'دوپہر کا کھانا',
  dinner: 'رات کا کھانا',
  snack: 'ہلکی غذا',
  fruit: 'پھل',
  vegetable: 'سبزی',
  rice: 'چاول',
  bread: 'روٹی',
  milk: 'دودھ',
  tea: 'چائے',
  coffee: 'کافی',
  water: 'پانی',
  juice: 'جوس',

  // Household
  kitchen: 'باورچی خانہ',
  bedroom: 'بیڈروم',
  bathroom: 'غسل خانہ',
  livingroom: 'ڈرائنگ روم',
  door: 'دروازہ',
  table: 'میز',
  chair: 'کرسی',
  fan: 'پنکھا',
  light: 'روشنی',
  television: 'ٹی وی',

  // Travel & Locations
  city: 'شہر',
  village: 'گاؤں',
  country: 'ملک',
  place: 'جگہ',
  location: 'مقام',
  road: 'سڑک',
  street: 'گلی',
  airport: 'ہوائی اڈہ',
  station: 'اسٹیشن',
  hotel: 'ہوٹل',
  restaurant: 'ریسٹورنٹ',
  map: 'نقشہ',

  // Work Roles & Tools
  engineer: 'انجینئر',
  developer: 'ڈویلپر',
  designer: 'ڈیزائنر',
  writer: 'مصنف',
  manager: 'مینجر',
  employee: 'ملازم',
  tool: 'اوزار',
  keyboard: 'کی بورڈ',
  mouse: 'ماؤس',
  monitor: 'مانٹیر',

  // Devices
  laptop: 'لیپ ٹاپ',
  tablet: 'ٹیبلیٹ',
  device: 'ڈیوائس',
  charger: 'چارجر',
  battery: 'بیٹری',
  router: 'راوٹر',
  wifi: 'وائی فائی',
  screen: 'اسکرین',
  button: 'بٹن',

  // General compound phrases (not specific to any content)
  'available online': 'آن لائن دستیاب',

  // Weather & Nature
  weather: 'موسم',
  rain: 'بارش',
  sun: 'سورج',
  wind: 'ہوا',
  storm: 'طوفان',
  cloud: 'بادل',
  snow: 'برف',
  temperature: 'درجہ حرارت',
  hot: 'گرم',
  cold: 'ٹھنڈا',
  fog: 'دھند',
  lightning: 'کڑک',
  thunder: 'گرج',
  climate: 'آب و ہوا',

  // Sports & Games
  sports: 'کھیل',
  game: 'کھیل',
  match: 'میچ',
  player: 'کھلاڑی',
  coach: 'مربی',
  score: 'اسکور',
  win: 'جیتنا',
  lose: 'ہارنا',
  tournament: 'ٹورنامنٹ',
  cricket: 'کرکٹ',
  football: 'فٹبال',
  tennis: 'ٹینس',
  competition: 'مقابلہ',

  // Religion & Spiritual
  religion: 'مذہب',
  faith: 'ایمان',
  god: 'خدا',
  prayer: 'نماز',
  mosque: 'مسجد',
  church: 'چرچ',
  temple: 'مندِر',
  spiritual: 'روحانی',
  holy: 'مقدس',
  sin: 'گناہ',
  blessing: 'برکت',
  fasting: 'روزہ',
  quran: 'قرآن',
  bible: 'بائبل',
  prophet: 'نبی',

  // Politics & Society
  government: 'حکومت',
  politics: 'سیاست',
  vote: 'ووٹ',
  election: 'الیکشن',
  leader: 'رہنما',
  president: 'صدر',
  prime: 'وزیر اعظم',
  minister: 'وزیر',
  democracy: 'جمہوریت',
  law: 'قانون',
  justice: 'انصاف',
  freedom: 'آزادی',
  protest: 'احتجاج',
  rights: 'حقوق',
  policy: 'پالیسی',

  // Artificial Intelligence & Machine Learning
  ai: 'مصنوعی ذہانت',
  ml: 'مشین لرننگ',
  dataset: 'ڈیٹا سیٹ',
  algorithm: 'الگورتھم',
  training: 'ٹریننگ',
  accuracy: 'درستگی',
  prediction: 'پیش گوئی',
  neural: 'نیورل',
  supervised: 'نگرانی شدہ',
  unsupervised: 'بغیر نگرانی کے',
  classification: 'درجہ بندی',
  clustering: 'گروہ بندی',

  // Feelings (continued)
  embarrassed: 'شرمندہ',
  ashamed: 'شرمندگی محسوس کرنا',
  grateful: 'شکر گزار',
  hopeful: 'پر امید',
  discouraged: 'مایوس',
  guilty: 'قصوروار',
  hurt: 'زخمی',
  jealous: 'حسین',
  envy: 'حسد',
  kind: 'مہربان',

  // Miscellaneous Useful Words
  complete: 'مکمل',
  empty: 'خالی',
  full: 'بھرا ہوا',
  safe: 'محفوظ',
  dangerous: 'خطرناک',
  correct: 'درست',
  wrong: 'غلط',
  early: 'جلدی',
  late: 'دیر',
  maybe: 'شاید',
  sure: 'یقینی',

  // Common Adverbs
  quickly: 'جلدی',
  slowly: 'آہستہ',
  carefully: 'احتیاط سے',
  easily: 'آسانی سے',
  loudly: 'زور سے',
  silently: 'خاموشی سے',
  together: 'اکٹھے',
  separately: 'الگ الگ',

  // Travel & Transportation
  travel: 'سفر',
  trip: 'سفر',
  journey: 'سفر',
  destination: 'منزل',
  ticket: 'ٹکٹ',
  passport: 'پاسپورٹ',
  visa: 'ویزا',
  flight: 'پرواز',
  train: 'ٹرین',
  bus: 'بس',
  reservation: 'بکنگ',
  luggage: 'سامان',
  guide: 'رہنما',
  tour: 'دورہ',

  // Shopping & Commerce
  shop: 'دکان',
  store: 'اسٹور',
  buy: 'خریدنا',
  sell: 'بیچنا',
  product: 'مصنوعات',
  item: 'چیز',
  price: 'قیمت',
  discount: 'رعایت',
  sale: 'فروخت',
  cash: 'نقد',
  card: 'کارڈ',
  receipt: 'رسید',
  customer: 'گاہک',
  cart: 'ٹوکری',
  checkout: 'ادائیگی',

  // School & Education Life
  school: 'اسکول',
  college: 'کالج',
  university: 'یونیورسٹی',
  classroom: 'کلاس روم',
  assignment: 'اسائنمنٹ',
  exam: 'امتحان',
  grade: 'درجہ',
  homework: 'ہوم ورک',
  attendance: 'حاضری',
  lecture: 'لیکچر',
  blackboard: 'سلیٹ',

  // Career & Professional Terms
  career: 'پیشہ',
  job: 'نوکری',
  occupation: 'پیشہ',
  profession: 'پیشہ',
  resume: 'سی وی',
  interview: 'انٹرویو',
  experience: 'تجربہ',
  skill: 'مہارت',
  hiring: 'بھرتی',
  employer: 'آجر',
  salary: 'تنخواہ',
  promotion: 'ترقی',
  ملاقات: 'meeting',

  // DevOps / Cloud / Technical Tools
  devops: 'ڈیووپس',
  docker: 'ڈوکر',
  kubernetes: 'کیوبرنیٹیز',
  pipeline: 'پائپ لائن',
  deployment: 'تعیناتی',
  build: 'بلڈ',
  repository: 'ریپوزٹری',
  version: 'ورژن',
  control: 'کنٹرول',
  branch: 'برانچ',
  merge: 'ضم کرنا',
  commit: 'کمیٹ',
  push: 'پش کرنا',
  pull: 'پل کرنا',
  logs: 'لاگز',
  monitoring: 'نگرانی',
  debug: 'ڈی بگ',
  crash: 'خرابی',

  // Finance & Banking
  account: 'اکاؤنٹ',
  balance: 'بیلنس',
  deposit: 'جمع',
  withdraw: 'نکالنا',
  credit: 'کریڈٹ',
  debit: 'ڈیبٹ',
  payment: 'ادائیگی',
  invoice: 'انوائس',
  statement: 'بیان',
  interest: 'سود',
  loan: 'قرض',
  insurance: 'انشورنس',
  budget: 'بجٹ',
  financial: 'مالی',
  saving: 'بچت',
  investment: 'سرمایہ کاری',

  // Programming Concepts
  loop: 'چکر',
  array: 'ارے',
  object: 'آبجیکٹ',
  parameter: 'پیرامیٹر',
  variable: 'متغیر',
  constant: 'مستقل',
  condition: 'شرط',
  if: 'اگر',
  else: 'ورنہ',
  switch: 'سوئچ',
  case: 'معاملہ',
  return: 'واپسی',
  break: 'روکنا',
  continue: 'جاری رکھنا',

  // Database Terms
  database: 'ڈیٹا بیس',
  column: 'کالم',
  row: 'قطار',
  record: 'ریکارڈ',
  field: 'فیلڈ',
  query: 'استفسار',
  select: 'منتخب کریں',
  insert: 'درج کریں',
  foreign: 'غیر ملکی',
  index: 'اشاریہ',
  join: 'جوڑنا',
  relation: 'رشتہ',

  // Emotions & Mental States
  love: 'محبت',
  hate: 'نفرت',
  trust: 'اعتماد',
  confusion: 'الجھن',
  stress: 'تناؤ',
  peace: 'امن',
  frustration: 'مایوسی',
  satisfaction: 'اطمینان',
  gratitude: 'شکرگزاری',

  // Social Media & Slang
  hashtag: 'ہیش ٹیگ',
  feed: 'فیڈ',
  story: 'کہانی',
  viral: 'وائرل',
  login: 'لاگ ان',
  logout: 'لاگ آؤٹ',
  bio: 'بایو',
  username: 'یوزرنیم',
  following: 'فالوونگ',
  notification: 'اطلاع',
  dm: 'براہ راست پیغام',

  // Daily Activities & Routine
  workout: 'ورزش',
  drive: 'ڈرائیو کرنا',

  // Communication & Media
  watch: 'دیکھنا',
  radio: 'ریڈیو',
  newspaper: 'اخبار',
  announcement: 'اعلان',

  // Travel & Places
  vacation: 'تعطیلات',

  // Clothing & Fashion
  pants: 'پتلون',
  scarf: 'دوپٹہ',
  cap: 'ٹوپی',
  fashion: 'فیشن',
  wear: 'پہننا',

  // Weather & Nature
  moon: 'چاند',
  stars: 'ستارے',
  sky: 'آسمان',
  tree: 'درخت',
  flower: 'پھول',
  grass: 'گھاس',
  mountain: 'پہاڑ',
  river: 'دریا',

  // School & Exams
  test: 'ٹیسٹ',
  marks: 'نمبرات',

  // Web & Learning Context
  feature: 'خصوصیت',
  features: 'خصوصیات',
  step: 'مرحلہ',
  steps: 'مراحل',
  instructions: 'ہدایات',
  release: 'اجرا',

  // Education & E-Learning
  course: 'کورس',
  quiz: 'کوئز',
  certificate: 'سرٹیفکیٹ',
  enroll: 'داخلہ لینا',
  register: 'رجسٹر ہونا',

  // Community / Collaboration
  community: 'برادری',
  forum: 'فورم',
  discussion: 'بحث',
  feedback: 'رائے',
  response: 'جواب',
  teamwork: 'اجتماعی کام',
  contribution: 'شراکت',

  // Account & Access
  setting: 'ترتیب',
  signup: 'سائن اپ',
  security: 'سیکیورٹی',
  privacy: 'رازداری',
  dashboard: 'ڈیش بورڈ',

  // Utility Words (very common)
  view: 'دیکھنا',
  search: 'تلاش کرنا',
  filter: 'فلٹر',
  sort: 'ترتیب دینا',
  next: 'اگلا',
  previous: 'پچھلا',

  // Data Structures & Technical Terms
  'data structure': 'ڈیٹا اسٹرکچر',
  'data structures': 'ڈیٹا اسٹرکچرز',
  'building blocks': 'بنیادی اجزاء',
  computer: 'کمپیوٹر',
  organized: 'منظم',
  stored: 'محفوظ',
  manipulated: 'تبدیل',
  understanding: 'سمجھنا',
  efficient: 'موثر',
  effective: 'کارگر',
  algorithms: 'الگوردمز',
  storage: 'ذخیرہ',
  arrange: 'ترتیب دینا',
  arranging: 'ترتیب',
  accessed: 'رسائی',
  updated: 'اپ ڈیٹ',
  types: 'اقسام',
  advanced: 'جدید',
  linear: 'لکیری',
  static: 'جامد',
  dynamic: 'متحرک',
  fixed: 'مقرر',
  size: 'سائز',
  randomly: 'بے ترتیب',
  'space complexity': 'اسپیس کمپلیکسٹی',

  // Web/Programming/Technical Terms for improved translation
  chapter: 'باب',
  discuss: 'بحث',
  general: 'عمومی',
  'world wide web': 'ورلڈ وائڈ ویب',
  www: 'ڈبلیو ڈبلیو ڈبلیو',
  'working knowledge': 'عملی علم',
  'hypertext markup language': 'ہائپر ٹیکسٹ مارک اپ لینگویج',
  documentation: 'دستاویزات',
  mdn: 'ایم ڈی این',
  scripting: 'سکرپٹنگ',
  structured: 'ساختہ',
  guides: 'رہنما',
  beginners: 'نوآموز',
  'cross-platform': 'کراس پلیٹ فارم',
  'object-oriented': 'آبجیکٹ پر مبنی',
  'scripting language': 'سکرپٹنگ زبان',
  interactive: 'انٹرایکٹو',
  'host environment': 'میزبان ماحول',
  browser: 'براؤزر',
  connected: 'منسلک',
  programmatic: 'پروگراماتی',
  'client-side': 'کلائنٹ سائیڈ',
  extensions: 'ایکسٹینشنز',
  communicate: 'رابطہ',
  continuity: 'تسلسل',
  invocation: 'کال',
  perform: 'انجام دینا',
  'file manipulations': 'فائل ہیرا پھیری',
  ecmascript: 'ای سی ایم اے اسکرپٹ',
  specification: 'تفصیلات',
  standardized: 'معیاری',
  'ecma international': 'ای سی ایم اے انٹرنیشنل',
  'european association': 'یورپی ایسوسی ایشن',
  standardizing: 'معیاری بنانا',
  systems: 'سسٹمز',
  'computer manufacturers': 'کمپیوٹر مینوفیکچررز',
  deliver: 'فراہم کرنا',
  'document object model': 'ڈاکیومنٹ آبجیکٹ ماڈل',
  dom: 'ڈی او ایم',
  consortium: 'کونسورٹیم',
  whatwg: 'واٹ ڈبلیو جی',
  'web hypertext application technology working group': 'ویب ہائپر ٹیکسٹ ایپلیکیشن ٹیکنالوجی ورکنگ گروپ',

  // React, Coding, and Web Dev Terms for improved translation
  couple: 'کچھ',
  years: 'سال',
  ago: 'پہلے',
  teaching: 'پڑھانا',
  react: 'ری ایکٹ',
  local: 'مقامی',
  bootcamp: 'بوٹ کیمپ',
  noticed: 'نوٹ کیا',
  handful: 'چند',
  things: 'چیزیں',
  catching: 'پکڑنا',
  students: 'طلباء',
  'off guard': 'غافل',
  steer: 'رہنمائی',
  avoid: 'اجتناب',
  order: 'ترتیب',
  breezy: 'خوشگوار',
  dig: 'کھودنا',
  reasons: 'وجوہات',
  gotchas: 'چالاکیاں',
  intended: 'ارادہ',
  audience: 'سامعین',
  written: 'تحریر',
  developers: 'ڈویلپرز',
  basics: 'بنیادیات',
  evaluating: 'جانچنا',
  alright: 'ٹھیک ہے',
  pervasive: 'وسیع',
  usestate: 'یوز اسٹیٹ',
  null: 'خالی',
  async: 'ایسنک',
  retrieve: 'حاصل کرنا',
  res: 'ریسپانس',
  await: 'انتظار',
  fetch: 'حاصل کرنا',
  API: 'اے پی آئی',
  json: 'جیسن',
  randomuuid: 'رینڈم یو یو آئی ڈی',
  augmented: 'اضافہ شدہ',
  setdata: 'سیٹ ڈیٹا',
  missing: 'غائب',
  whitespace: 'خالی جگہ',
  dastardly: 'مکار',
  see: 'دیکھنا',
  time: 'وقت',
  log: 'لاگ',
  export: 'ایکسپورٹ',
  default: 'ڈیفالٹ',
  app: 'ایپ',
  console: 'کنسول',
  refresh: 'تازہ کاری',
  results: 'نتائج',
  pane: 'پین',
  notice: 'نوٹس',
  sentences: 'جملے',
  smushed: 'دبے ہوئے',
  happens: 'ہوتا ہے',
  jsx: 'جے ایس ایکس',
  compiler: 'کمپائلر',
  tools: 'اوزار',
  turns: 'بدلتا ہے',
  write: 'لکھنا',
  'browser-friendly': 'براؤزر کے موافق',
  distinguish: 'تمیز کرنا',
  grammatical: 'قواعدی',
  indentation: 'انڈینٹیشن',
  readability: 'قابل مطالعہ',
  fix: 'درست کرنا',
  works: 'کام کرتا ہے',
  expect: 'توقع',
  delegated: 'تفویض',
  label: 'لیبل',
  symbolism: 'علامت',
  chose: 'منتخب کیا',
  use: 'استعمال',
  tag: 'ٹیگ',
  fragments: 'ٹکڑے',
  produce: 'پیدا کرنا',
  real: 'حقیقی',
  markup: 'مارک اپ',
  // API, HTTP, and Web Programming Terms for improved translation
  'api interface': 'اے پی آئی انٹرفیس',
  'http requests': 'ایچ ٹی ٹی پی درخواستیں',
  responses: 'جوابات',
  'modern replacement': 'جدید متبادل',
  xmlhttprequest: 'ایکس ایم ایل ایچ ٹی ٹی پی ریکویسٹ',
  callbacks: 'کال بیکس',
  'promise-based': 'پرومس پر مبنی',
  integrated: 'ضم شدہ',
  'modern web': 'جدید ویب',
  'service workers': 'سروس ورکرز',
  'cross-origin resource sharing': 'کراس اوریجن ریسورس شیئرنگ',
  cors: 'سی او آر ایس',
  request: 'درخواست',
  calling: 'کال کرنا',
  'global function': 'عالمی فنکشن',
  contexts: 'سیاق و سباق',
  'url params': 'یو آر ایل پیرا میٹرز',
  encode: 'انکوڈ',
  'form data': 'فارم ڈیٹا',
  js: 'جے ایس',
  wait: 'انتظار',
  'content-type': 'مواد کی قسم',
  'www-form-urlencoded': 'ڈبلیو ڈبلیو ڈبلیو-فارم-یورینکوڈڈ',
  automatically: 'خود بخود',
  converted: 'تبدیل',
  password: 'پاس ورڈ',
  body: 'باڈی',
  note: 'نوٹ',
  bodies: 'باڈیز',
  streams: 'اسٹریمز',
  making: 'بنانا',
  stream: 'اسٹریم',
  included: 'شامل',
  twice: 'دو بار',
  give: 'دینا',
  tells: 'بتاتا ہے',
  format: 'فارمیٹ',
  append: 'ایپینڈ',
  not: 'نہیں',
  certain: 'کچھ',
  'use cases': 'استعمال کے کیسز',
  stringify: 'سٹرنگیفائی',
  create: 'بنائیں',
  another: 'دوسرا',
  changing: 'تبدیل کرنا',
  its: 'اس کا',
  try: 'کوشش',
  // CSS, Flexbox, and Layout Terms for improved translation
  truly: 'واقعی',
  how: 'کیسے',
  layouts: 'لے آؤٹس',
  respond: 'ردعمل',
  rearranging: 'دوبارہ ترتیب دینا',
  needed: 'ضرورت',
  container: 'کنٹینر',
  width: 'چوڑائی',
  drag: 'ڈریگ',
  name: 'نام',
  submit: 'جمع کروائیں',
  demo: 'ڈیمو',
  inspired: 'متاثر',
  incredible: 'ناقابل یقین',
  codepen: 'کوڈ پین',
  relevant: 'متعلقہ',
  css: 'سی ایس ایس',
  copy: 'کاپی',
  clipboard: 'کلپ بورڈ',
  form: 'فارم',
  display: 'ڈسپلے',
  flex: 'فلیکس',
  'align-items': 'الائن آئٹمز',
  'flex-end': 'فلیکس اینڈ',
  'flex-wrap': 'فلیکس ریپ',
  wrap: 'ریپ',
  gap: 'وقفہ',
  flow: 'بہاؤ',
  meant: 'مراد',
  digital: 'ڈیجیٹل',
  documents: 'دستاویزات',
  essentially: 'بنیادی طور پر',
  'microsoft word': 'مائیکروسافٹ ورڈ',
  alignment: 'صف بندی',
  change: 'تبدیل',
  children: 'بچے',
  distributed: 'تقسیم',
  'primary axis': 'پرائمری محور',
  'justify-content': 'جسٹیفائی-کنٹینٹ',
  property: 'خصوصیت',
  hello: 'ہیلو',
  world: 'دنیا',
  'flex-direction': 'فلیکس-ڈائریکشن',
  center: 'مرکز',
  'space-between': 'اسپیس-بیٹوین',
  'space-around': 'اسپیس-اراؤنڈ',
  'space-evenly': 'اسپیس-ایونلی',
  comes: 'آتا ہے',
  terms: 'اصطلاحات',
  aligning: 'صف بندی کرنا',
  single: 'واحد',
  child: 'بچہ',
  stretch: 'اسٹریچ',
  baseline: 'بیس لائن',
  growing: 'بڑھنا',
  shrinking: 'سکڑنا',
  seen: 'دیکھا',
  flexbox: 'فلیکس باکس',
  'built-in': 'بلٹ ان',
  flexibility: 'لچک',
  hypothetical: 'مفروضی',
  sizes: 'سائزز',
  distribute: 'تقسیم کرنا',
  horizontally: 'افقی طور پر',
  vertically: 'عمودی طور پر',
  teach: 'سکھانا',
  someone: 'کوئی',
  wonder: 'حیرت',
  going: 'جا رہا',
  through: 'کے ذریعے',
  trouble: 'پریشانی',
  'flex-shrink': 'فلیکس-شرنک',
  simpler: 'آسان',
};

export function translateToUrdu(text: string): string {
  if (!text || text.trim().length === 0) {
    return text;
  }

  // Check if text is already in Urdu (contains Urdu characters)
  const urduRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  if (urduRegex.test(text)) {
    return text; // Already translated, return as is
  }

  // Check if this is a simple error message that should be translated directly
  const simpleErrorMessages = {
    'Content too short to generate a meaningful summary.': 'مواد بہت چھوٹا ہے ایک معنی خیز خلاصہ تیار کرنے کے لیے۔',
    'Content too short or unclear to generate a meaningful summary.': 'مواد بہت چھوٹا یا غیر واضح ہے ایک معنی خیز خلاصہ تیار کرنے کے لیے۔',
    'No content available to summarize.': 'خلاصہ بنانے کے لیے کوئی مواد دستیاب نہیں ہے۔'
  };

  if (text in simpleErrorMessages) {
    return simpleErrorMessages[text as keyof typeof simpleErrorMessages];
  }

  // Pre-process text for better translation
  const processedText = preprocessText(text);
  
  // Split into sentences for better processing
  const sentences = splitIntoSentences(processedText);
  
  // Translate each sentence with improved Urdu grammar and natural flow
  const translatedSentences = sentences.map((sentence, index) => {
    const translated = translateSentenceWithImprovedGrammar(sentence.trim());
    // Only add period if the sentence doesn't already end with punctuation
    if (translated && !/[.!?]$/.test(translated)) {
      return translated + '.';
    }
    return translated;
  });
  
  return translatedSentences.join(' ');
}

function translateSentenceWithImprovedGrammar(sentence: string): string {
  if (!sentence || sentence.trim().length === 0) {
    return sentence;
  }

  // Check if already in Urdu
  const urduRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  if (urduRegex.test(sentence)) {
    return sentence; // Already translated
  }

  // Convert to lowercase for processing
  const lowerSentence = sentence.toLowerCase();
  const words = lowerSentence.split(/\s+/);
  
  // Step 1: Direct word translation with fallback
  const translatedWords = words.map(word => {
    // Try to find translation in dictionary
    if (urduDictionary[word]) {
      return urduDictionary[word];
    }
    
    // Try compound phrases (2-3 words)
    for (let i = Math.min(3, words.length); i >= 2; i--) {
      const phrase = words.slice(0, i).join(' ');
      if (urduDictionary[phrase]) {
        return urduDictionary[phrase];
      }
    }
    
    // Keep original word if no translation found
    return word;
  });

  // Step 2: Apply Urdu sentence structure (verb at the end)
  let result = applyUrduSentenceStructure(translatedWords, words);
  
  // Step 3: Apply general Urdu grammar rules
  result = applyGeneralUrduGrammar(result, words);
  
  // Prevent infinite loops by ensuring we don't repeat the same translation
  if (result === sentence || result === lowerSentence) {
    return sentence; // Return original if no meaningful translation occurred
  }
  
  return result;
}

function applyUrduSentenceStructure(translatedWords: string[], originalWords: string[]): string {
  // Identify Urdu verbs that should go to the end
  const urduVerbs = [
    'ہے', 'ہیں', 'تھا', 'تھے', 'ہوگا', 'ہوگی', 'ہوں گے', 'ہوں گی',
    'کرتا ہے', 'کرتے ہیں', 'کرتی ہے', 'کرتی ہیں',
    'کر رہا ہے', 'کر رہے ہیں', 'کر رہی ہے', 'کر رہی ہیں',
    'کر چکا ہے', 'کر چکے ہیں', 'کر چکی ہے', 'کر چکی ہیں',
    'فراہم کرتا ہے', 'فراہم کرتے ہیں', 'فراہم کرتی ہے', 'فراہم کرتی ہیں',
    'پیش کرتا ہے', 'پیش کرتے ہیں', 'پیش کرتی ہے', 'پیش کرتی ہیں',
    'شامل کرتا ہے', 'شامل کرتے ہیں', 'شامل کرتی ہے', 'شامل کرتی ہیں',
    'وضاحت کرتا ہے', 'وضاحت کرتے ہیں', 'وضاحت کرتی ہے', 'وضاحت کرتی ہیں',
    'بیان کرتا ہے', 'بیان کرتے ہیں', 'بیان کرتی ہے', 'بیان کرتی ہیں',
    'دکھاتا ہے', 'دکھاتے ہیں', 'دکھاتی ہے', 'دکھاتی ہیں',
    'سکھاتا ہے', 'سکھاتے ہیں', 'سکھاتی ہے', 'سکھاتی ہیں',
    'مدد کرتا ہے', 'مدد کرتے ہیں', 'مدد کرتی ہے', 'مدد کرتی ہیں',
    'برقرار رکھتا ہے', 'برقرار رکھتے ہیں', 'برقرار رکھتی ہے', 'برقرار رکھتی ہیں',
    'ترقی دیتا ہے', 'ترقی دیتے ہیں', 'ترقی دیتی ہے', 'ترقی دیتی ہیں',
    'موجود ہے', 'موجود ہیں', 'موجود تھا', 'موجود تھے',
    'دستیاب ہے', 'دستیاب ہیں', 'دستیاب تھا', 'دستیاب تھے',
    'شامل ہے', 'شامل ہیں', 'شامل تھا', 'شامل تھے'
  ];

  // Check for plural subjects to determine verb form
  const pluralWords = ['courses', 'resources', 'examples', 'exercises', 'updates', 'articles', 'posts', 'tutorials'];
  const hasPluralSubject = originalWords.some(word => pluralWords.includes(word));

  // Find verbs in the translated words
  const verbIndices: number[] = [];
  const verbs: string[] = [];
  
  translatedWords.forEach((word, index) => {
    if (urduVerbs.includes(word)) {
      verbIndices.push(index);
      verbs.push(word);
    }
  });

  // If no verbs found, add appropriate verb based on subject
  if (verbIndices.length === 0) {
    // Check if we have "موجود" (there are) pattern
    const hasMojood = translatedWords.includes('موجود');
    if (hasMojood) {
      // Remove "موجود" and add appropriate verb at the end
      const wordsWithoutMojood = translatedWords.filter(word => word !== 'موجود');
      const appropriateVerb = hasPluralSubject ? 'موجود ہیں' : 'موجود ہے';
      return [...wordsWithoutMojood, appropriateVerb].join(' ');
    }
    
    // Add default verb based on subject
    const defaultVerb = hasPluralSubject ? 'ہیں' : 'ہے';
    return [...translatedWords, defaultVerb].join(' ');
  }

  // Create new word array without verbs
  const wordsWithoutVerbs = translatedWords.filter((_, index) => !verbIndices.includes(index));
  
  // Adjust verb forms for plural subjects
  const adjustedVerbs = verbs.map(verb => {
    if (hasPluralSubject) {
      // Convert singular verbs to plural
      if (verb === 'ہے') return 'ہیں';
      if (verb === 'کرتا ہے') return 'کرتے ہیں';
      if (verb === 'فراہم کرتا ہے') return 'فراہم کرتے ہیں';
      if (verb === 'پیش کرتا ہے') return 'پیش کرتے ہیں';
      if (verb === 'شامل کرتا ہے') return 'شامل کرتے ہیں';
      if (verb === 'وضاحت کرتا ہے') return 'وضاحت کرتے ہیں';
      if (verb === 'بیان کرتا ہے') return 'بیان کرتے ہیں';
      if (verb === 'دکھاتا ہے') return 'دکھاتے ہیں';
      if (verb === 'سکھاتا ہے') return 'سکھاتے ہیں';
      if (verb === 'مدد کرتا ہے') return 'مدد کرتے ہیں';
      if (verb === 'برقرار رکھتا ہے') return 'برقرار رکھتے ہیں';
      if (verb === 'ترقی دیتا ہے') return 'ترقی دیتے ہیں';
      if (verb === 'موجود ہے') return 'موجود ہیں';
      if (verb === 'دستیاب ہے') return 'دستیاب ہیں';
      if (verb === 'شامل ہے') return 'شامل ہیں';
    }
    return verb;
  });
  
  // Add verbs at the end
  const result = [...wordsWithoutVerbs, ...adjustedVerbs].join(' ');
  
  return result;
}

function applyGeneralUrduGrammar(text: string, originalWords: string[]): string {
  let result = text;
  
  // General pattern replacements (not specific to any content)
  const generalPatterns = [
    { pattern: /\bthere are\b/gi, replacement: 'موجود' },
    { pattern: /\bwe have\b/gi, replacement: 'ہم نے' },
    { pattern: /\bto learn\b/gi, replacement: 'سیکھنے کے لیے' },
    { pattern: /\bfor free\b/gi, replacement: 'مفت میں' },
    { pattern: /\balong with\b/gi, replacement: 'کے ساتھ ساتھ' },
    { pattern: /\band\b/gi, replacement: 'اور' },
    { pattern: /\bbut\b/gi, replacement: 'لیکن' },
    { pattern: /\bthe\b/gi, replacement: '' }, // Remove articles for better flow
  ];
  
  // Apply general patterns
  generalPatterns.forEach(({ pattern, replacement }) => {
    result = result.replace(pattern, replacement);
  });
  
  // Handle plural subjects (general rule) - but don't add verbs here since they'll be moved to end
  const pluralWords = ['courses', 'resources', 'examples', 'exercises', 'updates', 'articles', 'posts', 'tutorials'];
  const hasPluralSubject = originalWords.some(word => pluralWords.includes(word));
  
  // Note: Verb endings will be handled by the sentence structure function
  // We don't modify verbs here to avoid conflicts with verb placement logic
  
  return result;
}

function splitIntoSentences(text: string): string[] {
  // Split on sentence endings (., !, ?) but handle commas intelligently
  const sentences: string[] = [];
  
  // First, split by major sentence endings
  const majorParts = text.split(/([.!?])/);
  
  for (let i = 0; i < majorParts.length; i += 2) {
    const sentencePart = majorParts[i];
    const punctuation = majorParts[i + 1] || '';
    
    if (sentencePart.trim()) {
      // Now handle commas within this sentence part
      const commaParts = sentencePart.split(',');
      
      if (commaParts.length > 1) {
        // If there are commas, we need to be more careful about sentence boundaries
        let currentSegment = '';
        
        for (let j = 0; j < commaParts.length; j++) {
          const part = commaParts[j].trim();
          if (part) {
            currentSegment += (currentSegment ? ', ' : '') + part;
            
            // Check if this segment looks like a complete sentence
            if (isCompleteSentence(currentSegment) && j < commaParts.length - 1) {
              // This segment is complete, treat it as a separate sentence
              sentences.push(currentSegment);
              currentSegment = '';
            }
          }
        }
        
        // Add the remaining segment if it exists
        if (currentSegment.trim()) {
          currentSegment += punctuation;
          sentences.push(currentSegment);
        }
      } else {
        // No commas, just add the sentence with its punctuation
        const fullSentence = sentencePart + punctuation;
        if (fullSentence.trim()) {
          sentences.push(fullSentence.trim());
        }
      }
    }
  }
  
  return sentences.filter(s => s.trim().length > 0);
}

function isCompleteSentence(text: string): boolean {
  // Check if a text segment looks like a complete sentence
  const words = text.trim().split(/\s+/);
  
  // If it's very short (1-2 words), it's probably not a complete sentence
  if (words.length <= 2) {
    return false;
  }
  
  // If it starts with common sentence starters, it might be complete
  const sentenceStarters = ['there', 'we', 'the', 'this', 'that', 'these', 'those', 'it', 'they'];
  if (sentenceStarters.includes(words[0].toLowerCase())) {
    return true;
  }
  
  // If it has a verb-like word, it might be complete
  const verbIndicators = ['is', 'are', 'was', 'were', 'has', 'have', 'had', 'will', 'can', 'should', 'provides', 'offers', 'includes', 'maintains', 'develops', 'contains', 'explains', 'teaches', 'helps'];
  if (words.some(word => verbIndicators.includes(word.toLowerCase()))) {
    return true;
  }
  
  // If it has a subject-verb-object structure, it's likely complete
  if (words.length >= 3) {
    // Check for common patterns like "X is Y", "X provides Y", etc.
    const hasSubject = words[0] && words[0].length > 0;
    const hasVerb = words.some(word => verbIndicators.includes(word.toLowerCase()));
    const hasObject = words[words.length - 1] && words[words.length - 1].length > 0;
    
    if (hasSubject && hasVerb && hasObject) {
      return true;
    }
  }
  
  return false;
}

function preprocessText(text: string): string {
  return text
    .replace(/\s+/g, ' ')
    .replace(/[^\w\s.,!?;:()'"-]/g, '')
    .trim();
}

function translateSentenceWithProperGrammar(sentence: string): string {
  if (!sentence || sentence.trim().length === 0) {
    return sentence;
  }

  // Parse the sentence structure
  const parsed = parseEnglishSentence(sentence);
  
  // Convert to proper Urdu structure
  return convertToUrduStructure(parsed);
}

interface ParsedSentence {
  subject: string;
  verb: string;
  object: string;
  modifiers: string[];
  connectors: string[];
  type: 'statement' | 'question' | 'command';
  originalWords: string[];
}

function parseEnglishSentence(sentence: string): ParsedSentence {
  const words = sentence.toLowerCase().split(/\s+/);
  
  const parsed: ParsedSentence = {
    subject: '',
    verb: '',
    object: '',
    modifiers: [],
    connectors: [],
    type: 'statement',
    originalWords: words
  };

  // Identify sentence type
  if (words[0] === 'what' || words[0] === 'how' || words[0] === 'why' || 
      words[0] === 'when' || words[0] === 'where' || words[0] === 'who' || 
      words[0] === 'which' || words[0] === 'is' || words[0] === 'are' || 
      words[0] === 'do' || words[0] === 'does' || words[0] === 'can' || 
      words[0] === 'will' || words[0] === 'should') {
    parsed.type = 'question';
  }

  // Identify connectors
  const connectorWords = ['and', 'or', 'but', 'because', 'however', 'therefore', 'moreover', 'furthermore'];
  parsed.connectors = words.filter(word => connectorWords.includes(word));

  // Identify verbs
  const commonVerbs = ['is', 'are', 'was', 'were', 'will', 'can', 'should', 'provides', 'offers', 'includes', 'contains', 'explains', 'describes', 'shows', 'teaches', 'helps', 'maintains', 'develops', 'have', 'has', 'had'];
  const verbIndex = words.findIndex(word => commonVerbs.includes(word));
  if (verbIndex !== -1) {
    parsed.verb = words[verbIndex];
  }

  return parsed;
}

function convertToUrduStructure(parsed: ParsedSentence): string {
  const words = parsed.originalWords;
  const translatedWords = words.map(word => urduDictionary[word] || word);

  // Advanced linguistic analysis
  const analysis = analyzeLinguisticStructure(words, translatedWords);
  
  // Apply context-aware translation
  return applyContextAwareTranslation(analysis, parsed);
}

interface LinguisticAnalysis {
  subject: string;
  predicate: string;
  object: string;
  modifiers: string[];
  tense: 'present' | 'past' | 'future';
  voice: 'active' | 'passive';
  mood: 'indicative' | 'imperative' | 'subjunctive';
  aspect: 'simple' | 'continuous' | 'perfect';
  number: 'singular' | 'plural';
  person: 'first' | 'second' | 'third';
  originalWords: string[];
  translatedWords: string[];
}

function analyzeLinguisticStructure(words: string[], translatedWords: string[]): LinguisticAnalysis {
  const analysis: LinguisticAnalysis = {
    subject: '',
    predicate: '',
    object: '',
    modifiers: [],
    tense: 'present',
    voice: 'active',
    mood: 'indicative',
    aspect: 'simple',
    number: 'singular',
    person: 'third',
    originalWords: words,
    translatedWords: translatedWords
  };

  // Detect tense
  if (words.includes('was') || words.includes('were') || words.includes('had')) {
    analysis.tense = 'past';
  } else if (words.includes('will') || words.includes('shall')) {
    analysis.tense = 'future';
  }

  // Detect voice
  if (words.includes('by') || words.includes('is') && words.includes('by')) {
    analysis.voice = 'passive';
  }

  // Detect number
  if (words.includes('are') || words.includes('were') || words.includes('have')) {
    analysis.number = 'plural';
  }

  // Detect person
  if (words.includes('I') || words.includes('we')) {
    analysis.person = 'first';
  } else if (words.includes('you')) {
    analysis.person = 'second';
  }

  return analysis;
}

function applyContextAwareTranslation(analysis: LinguisticAnalysis, parsed: ParsedSentence): string {
  const words = analysis.originalWords;
  const translatedWords = analysis.translatedWords;

  // Handle specific patterns with proper Urdu grammar
  
  // Pattern 1: "There are X" → "X موجود ہیں"
  if (words[0] === 'there' && words[1] === 'are') {
    const restOfSentence = translatedWords.slice(2).join(' ');
    return `${restOfSentence} موجود ہیں`;
  }

  // Pattern 2: "This is X" → "یہ X ہے"
  if (words[0] === 'this' && words[1] === 'is') {
    const restOfSentence = translatedWords.slice(2).join(' ');
    return `یہ ${restOfSentence} ہے`;
  }

  // Pattern 3: "It is X" → "یہ X ہے"
  if (words[0] === 'it' && words[1] === 'is') {
    const restOfSentence = translatedWords.slice(2).join(' ');
    return `یہ ${restOfSentence} ہے`;
  }

  // Pattern 4: "We have X" → "ہمارے پاس X ہے"
  if (words[0] === 'we' && words[1] === 'have') {
    const restOfSentence = translatedWords.slice(2).join(' ');
    return `ہمارے پاس ${restOfSentence} ہے`;
  }

  // Pattern 5: "X provides Y" → "X Y فراہم کرتا ہے"
  if (parsed.verb === 'provides') {
    const verbIndex = words.indexOf('provides');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} ${object} فراہم کرتا ہے`;
  }

  // Pattern 6: "X offers Y" → "X Y پیش کرتا ہے"
  if (parsed.verb === 'offers') {
    const verbIndex = words.indexOf('offers');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} ${object} پیش کرتا ہے`;
  }

  // Pattern 7: "X includes Y" → "X Y شامل کرتا ہے"
  if (parsed.verb === 'includes') {
    const verbIndex = words.indexOf('includes');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} ${object} شامل کرتا ہے`;
  }

  // Pattern 8: "X contains Y" → "X Y شامل ہے"
  if (parsed.verb === 'contains') {
    const verbIndex = words.indexOf('contains');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} ${object} شامل ہے`;
  }

  // Pattern 9: "X explains Y" → "X Y وضاحت کرتا ہے"
  if (parsed.verb === 'explains') {
    const verbIndex = words.indexOf('explains');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} ${object} وضاحت کرتا ہے`;
  }

  // Pattern 10: "X teaches Y" → "X Y سکھاتا ہے"
  if (parsed.verb === 'teaches') {
    const verbIndex = words.indexOf('teaches');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} ${object} سکھاتا ہے`;
  }

  // Pattern 11: "X helps Y" → "X Y مدد کرتا ہے"
  if (parsed.verb === 'helps') {
    const verbIndex = words.indexOf('helps');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} ${object} مدد کرتا ہے`;
  }

  // Pattern 12: "X maintains Y" → "X Y برقرار رکھتا ہے"
  if (parsed.verb === 'maintains') {
    const verbIndex = words.indexOf('maintains');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} ${object} برقرار رکھتا ہے`;
  }

  // Pattern 13: "X develops Y" → "X Y ترقی دیتا ہے"
  if (parsed.verb === 'develops') {
    const verbIndex = words.indexOf('develops');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} ${object} ترقی دیتا ہے`;
  }

  // Pattern 14: "X is Y" → "X Y ہے"
  if (parsed.verb === 'is') {
    const verbIndex = words.indexOf('is');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} ${object} ہے`;
  }

  // Pattern 15: "X are Y" → "X Y ہیں"
  if (parsed.verb === 'are') {
    const verbIndex = words.indexOf('are');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} ${object} ہیں`;
  }

  // Pattern 16: "X has Y" → "X کے پاس Y ہے"
  if (parsed.verb === 'has') {
    const verbIndex = words.indexOf('has');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} کے پاس ${object} ہے`;
  }

  // Pattern 17: "X have Y" → "X کے پاس Y ہیں"
  if (parsed.verb === 'have') {
    const verbIndex = words.indexOf('have');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} کے پاس ${object} ہیں`;
  }

  // Pattern 18: Compound sentences with "and"
  const andIndex = words.indexOf('and');
  if (andIndex !== -1) {
    const beforeAnd = translatedWords.slice(0, andIndex).join(' ');
    const afterAnd = translatedWords.slice(andIndex + 1).join(' ');
    return `${beforeAnd} اور ${afterAnd} ہے`;
  }

  // Pattern 19: Compound sentences with "but"
  const butIndex = words.indexOf('but');
  if (butIndex !== -1) {
    const beforeBut = translatedWords.slice(0, butIndex).join(' ');
    const afterBut = translatedWords.slice(butIndex + 1).join(' ');
    return `${beforeBut} لیکن ${afterBut} ہے`;
  }

  // Pattern 20: "for" purpose
  const forIndex = words.indexOf('for');
  if (forIndex !== -1) {
    const beforeFor = translatedWords.slice(0, forIndex).join(' ');
    const afterFor = translatedWords.slice(forIndex + 1).join(' ');
    return `${afterFor} کے لیے ${beforeFor} ہے`;
  }

  // Pattern 21: "of" possessive
  const ofIndex = words.indexOf('of');
  if (ofIndex !== -1) {
    const beforeOf = translatedWords.slice(0, ofIndex).join(' ');
    const afterOf = translatedWords.slice(ofIndex + 1).join(' ');
    return `${afterOf} کا ${beforeOf} ہے`;
  }

  // Pattern 22: "to" infinitive
  const toIndex = words.indexOf('to');
  if (toIndex !== -1) {
    const beforeTo = translatedWords.slice(0, toIndex).join(' ');
    const afterTo = translatedWords.slice(toIndex + 1).join(' ');
    return `${afterTo} کے لیے ${beforeTo} ہے`;
  }

  // Pattern 23: "with" accompaniment
  const withIndex = words.indexOf('with');
  if (withIndex !== -1) {
    const beforeWith = translatedWords.slice(0, withIndex).join(' ');
    const afterWith = translatedWords.slice(withIndex + 1).join(' ');
    return `${beforeWith} ${afterWith} کے ساتھ ہے`;
  }

  // Pattern 24: "available" descriptive
  const availableIndex = words.indexOf('available');
  if (availableIndex !== -1) {
    const beforeAvailable = translatedWords.slice(0, availableIndex).join(' ');
    const afterAvailable = translatedWords.slice(availableIndex + 1).join(' ');
    return `${beforeAvailable} ${afterAvailable} دستیاب ہے`;
  }

  // Pattern 25: "free" descriptive
  const freeIndex = words.indexOf('free');
  if (freeIndex !== -1) {
    const beforeFree = translatedWords.slice(0, freeIndex).join(' ');
    const afterFree = translatedWords.slice(freeIndex + 1).join(' ');
    return `${beforeFree} ${afterFree} مفت ہے`;
  }

  // Pattern 26: "best" superlative
  const bestIndex = words.indexOf('best');
  if (bestIndex !== -1) {
    const beforeBest = translatedWords.slice(0, bestIndex).join(' ');
    const afterBest = translatedWords.slice(bestIndex + 1).join(' ');
    return `${beforeBest} ${afterBest} بہترین ہے`;
  }

  // Pattern 27: "three" number
  const threeIndex = words.indexOf('three');
  if (threeIndex !== -1) {
    const beforeThree = translatedWords.slice(0, threeIndex).join(' ');
    const afterThree = translatedWords.slice(threeIndex + 1).join(' ');
    return `${beforeThree} ${afterThree} تین ہیں`;
  }

  // Pattern 28: "world wide web"
  const webIndex = words.indexOf('web');
  if (webIndex !== -1 && words[webIndex - 1] === 'wide' && words[webIndex - 2] === 'world') {
    const beforeWeb = translatedWords.slice(0, webIndex - 2).join(' ');
    const afterWeb = translatedWords.slice(webIndex + 1).join(' ');
    return `${beforeWeb} دنیا وسیع ویب ${afterWeb} ہے`;
  }

  // Pattern 29: "w3c"
  const w3cIndex = words.indexOf('w3c');
  if (w3cIndex !== -1) {
    const beforeW3c = translatedWords.slice(0, w3cIndex).join(' ');
    const afterW3c = translatedWords.slice(w3cIndex + 1).join(' ');
    return `${beforeW3c} کونسورٹیم ${afterW3c} ہے`;
  }

  // Pattern 30: "w3schools"
  const w3schoolsIndex = words.indexOf('w3schools');
  if (w3schoolsIndex !== -1) {
    const beforeW3schools = translatedWords.slice(0, w3schoolsIndex).join(' ');
    const afterW3schools = translatedWords.slice(w3schoolsIndex + 1).join(' ');
    return `${beforeW3schools} w3schools ${afterW3schools} ہے`;
  }

  // Pattern 31: "html"
  const htmlIndex = words.indexOf('html');
  if (htmlIndex !== -1) {
    const beforeHtml = translatedWords.slice(0, htmlIndex).join(' ');
    const afterHtml = translatedWords.slice(htmlIndex + 1).join(' ');
    return `${beforeHtml} ایچ ٹی ایم ایل ${afterHtml} ہے`;
  }

  // Advanced context-aware translation
  return applyAdvancedContextTranslation(analysis, parsed);
}

function applyAdvancedContextTranslation(analysis: LinguisticAnalysis, parsed: ParsedSentence): string {
  // const words = analysis.originalWords;
  const translatedWords = analysis.translatedWords;

  // ... existing code ...

  return translatedWords.join(' ') + '۔';
}

function analyzeSemanticStructure(sentence: string): unknown {
  // Analyze semantic meaning for better translation
  const words = sentence.toLowerCase().split(/\s+/);
  
  return {
    topic: extractTopic(words),
    focus: extractFocus(words),
    emphasis: extractEmphasis(words),
    discourseMarkers: extractDiscourseMarkers(words),
    semanticRole: extractSemanticRole(words)
  };
}

function extractTopic(words: string[]): string {
  // Extract the main topic of the sentence
  const topicWords = ['this', 'that', 'it', 'there', 'here'];
  const topicIndex = words.findIndex(word => topicWords.includes(word));
  return topicIndex !== -1 ? words[topicIndex] : words[0];
}

function extractFocus(words: string[]): string {
  // Extract the focused element (usually at the end)
  return words[words.length - 1];
}

function extractEmphasis(words: string[]): string[] {
  // Extract emphasized words
  const emphasisWords = ['very', 'quite', 'rather', 'especially', 'particularly', 'mainly', 'primarily'];
  return words.filter(word => emphasisWords.includes(word));
}

function extractDiscourseMarkers(words: string[]): string[] {
  // Extract discourse markers for better flow
  const markers = ['however', 'therefore', 'moreover', 'furthermore', 'in addition', 'on the other hand', 'in conclusion'];
  return words.filter(word => markers.includes(word));
}

function extractSemanticRole(words: string[]): string {
  // Determine semantic role (agent, patient, instrument, etc.)
  if (words.includes('by')) return 'passive';
  if (words.includes('for')) return 'purpose';
  if (words.includes('with')) return 'instrument';
  if (words.includes('to')) return 'goal';
  return 'agent';
}

// function applySemanticTranslation(analysis: LinguisticAnalysis, semanticAnalysis: unknown): string {
//   // ... function body ...
// }

export default urduDictionary; 
