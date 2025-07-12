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
  never: 'کبھی نہیں',
  always: 'ہمیشہ',
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
  each: 'ہر ایک',
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
  online: 'آن لائن',
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
  world: 'دنیا',
  wide: 'وسیع',
  web: 'ویب',
  consortium: 'کونسورٹیم',
  maintains: 'برقرار رکھتا ہے',
  specifications: 'وضاحتیں',
  providing: 'فراہم کرنا',
  regular: 'باقاعدہ',
  updates: 'اپ ڈیٹس',
};

export function translateToUrdu(text: string): string {
  if (!text || text.trim().length === 0) {
    return text;
  }

  // Pre-process text for better translation
  const processedText = preprocessText(text);
  
  // Split into sentences for better processing
  const sentences = processedText.split(/[.!?]+/).filter(s => s.trim().length > 0);
  
  // Translate each sentence with proper Urdu grammar
  const translatedSentences = sentences.map((sentence, index) => {
    return translateSentenceWithProperGrammar(sentence.trim());
  });
  
  return translatedSentences.join('. ') + '.';
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
    return `${restOfSentence} موجود ہیں۔`;
  }

  // Pattern 2: "This is X" → "یہ X ہے"
  if (words[0] === 'this' && words[1] === 'is') {
    const restOfSentence = translatedWords.slice(2).join(' ');
    return `یہ ${restOfSentence} ہے۔`;
  }

  // Pattern 3: "It is X" → "یہ X ہے"
  if (words[0] === 'it' && words[1] === 'is') {
    const restOfSentence = translatedWords.slice(2).join(' ');
    return `یہ ${restOfSentence} ہے۔`;
  }

  // Pattern 4: "We have X" → "ہمارے پاس X ہے"
  if (words[0] === 'we' && words[1] === 'have') {
    const restOfSentence = translatedWords.slice(2).join(' ');
    return `ہمارے پاس ${restOfSentence} ہے۔`;
  }

  // Pattern 5: "X provides Y" → "X Y فراہم کرتا ہے"
  if (parsed.verb === 'provides') {
    const verbIndex = words.indexOf('provides');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} ${object} فراہم کرتا ہے۔`;
  }

  // Pattern 6: "X offers Y" → "X Y پیش کرتا ہے"
  if (parsed.verb === 'offers') {
    const verbIndex = words.indexOf('offers');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} ${object} پیش کرتا ہے۔`;
  }

  // Pattern 7: "X includes Y" → "X Y شامل کرتا ہے"
  if (parsed.verb === 'includes') {
    const verbIndex = words.indexOf('includes');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} ${object} شامل کرتا ہے۔`;
  }

  // Pattern 8: "X contains Y" → "X Y شامل ہے"
  if (parsed.verb === 'contains') {
    const verbIndex = words.indexOf('contains');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} ${object} شامل ہے۔`;
  }

  // Pattern 9: "X explains Y" → "X Y وضاحت کرتا ہے"
  if (parsed.verb === 'explains') {
    const verbIndex = words.indexOf('explains');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} ${object} وضاحت کرتا ہے۔`;
  }

  // Pattern 10: "X teaches Y" → "X Y سکھاتا ہے"
  if (parsed.verb === 'teaches') {
    const verbIndex = words.indexOf('teaches');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} ${object} سکھاتا ہے۔`;
  }

  // Pattern 11: "X helps Y" → "X Y مدد کرتا ہے"
  if (parsed.verb === 'helps') {
    const verbIndex = words.indexOf('helps');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} ${object} مدد کرتا ہے۔`;
  }

  // Pattern 12: "X maintains Y" → "X Y برقرار رکھتا ہے"
  if (parsed.verb === 'maintains') {
    const verbIndex = words.indexOf('maintains');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} ${object} برقرار رکھتا ہے۔`;
  }

  // Pattern 13: "X develops Y" → "X Y ترقی دیتا ہے"
  if (parsed.verb === 'develops') {
    const verbIndex = words.indexOf('develops');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} ${object} ترقی دیتا ہے۔`;
  }

  // Pattern 14: "X is Y" → "X Y ہے"
  if (parsed.verb === 'is') {
    const verbIndex = words.indexOf('is');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} ${object} ہے۔`;
  }

  // Pattern 15: "X are Y" → "X Y ہیں"
  if (parsed.verb === 'are') {
    const verbIndex = words.indexOf('are');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} ${object} ہیں۔`;
  }

  // Pattern 16: "X has Y" → "X کے پاس Y ہے"
  if (parsed.verb === 'has') {
    const verbIndex = words.indexOf('has');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} کے پاس ${object} ہے۔`;
  }

  // Pattern 17: "X have Y" → "X کے پاس Y ہیں"
  if (parsed.verb === 'have') {
    const verbIndex = words.indexOf('have');
    const subject = translatedWords.slice(0, verbIndex).join(' ');
    const object = translatedWords.slice(verbIndex + 1).join(' ');
    return `${subject} کے پاس ${object} ہیں۔`;
  }

  // Pattern 18: Compound sentences with "and"
  const andIndex = words.indexOf('and');
  if (andIndex !== -1) {
    const beforeAnd = translatedWords.slice(0, andIndex).join(' ');
    const afterAnd = translatedWords.slice(andIndex + 1).join(' ');
    return `${beforeAnd} اور ${afterAnd} ہے۔`;
  }

  // Pattern 19: Compound sentences with "but"
  const butIndex = words.indexOf('but');
  if (butIndex !== -1) {
    const beforeBut = translatedWords.slice(0, butIndex).join(' ');
    const afterBut = translatedWords.slice(butIndex + 1).join(' ');
    return `${beforeBut} لیکن ${afterBut} ہے۔`;
  }

  // Pattern 20: "for" purpose
  const forIndex = words.indexOf('for');
  if (forIndex !== -1) {
    const beforeFor = translatedWords.slice(0, forIndex).join(' ');
    const afterFor = translatedWords.slice(forIndex + 1).join(' ');
    return `${afterFor} کے لیے ${beforeFor} ہے۔`;
  }

  // Pattern 21: "of" possessive
  const ofIndex = words.indexOf('of');
  if (ofIndex !== -1) {
    const beforeOf = translatedWords.slice(0, ofIndex).join(' ');
    const afterOf = translatedWords.slice(ofIndex + 1).join(' ');
    return `${afterOf} کا ${beforeOf} ہے۔`;
  }

  // Pattern 22: "to" infinitive
  const toIndex = words.indexOf('to');
  if (toIndex !== -1) {
    const beforeTo = translatedWords.slice(0, toIndex).join(' ');
    const afterTo = translatedWords.slice(toIndex + 1).join(' ');
    return `${afterTo} کے لیے ${beforeTo} ہے۔`;
  }

  // Pattern 23: "with" accompaniment
  const withIndex = words.indexOf('with');
  if (withIndex !== -1) {
    const beforeWith = translatedWords.slice(0, withIndex).join(' ');
    const afterWith = translatedWords.slice(withIndex + 1).join(' ');
    return `${beforeWith} ${afterWith} کے ساتھ ہے۔`;
  }

  // Pattern 24: "available" descriptive
  const availableIndex = words.indexOf('available');
  if (availableIndex !== -1) {
    const beforeAvailable = translatedWords.slice(0, availableIndex).join(' ');
    const afterAvailable = translatedWords.slice(availableIndex + 1).join(' ');
    return `${beforeAvailable} ${afterAvailable} دستیاب ہے۔`;
  }

  // Pattern 25: "free" descriptive
  const freeIndex = words.indexOf('free');
  if (freeIndex !== -1) {
    const beforeFree = translatedWords.slice(0, freeIndex).join(' ');
    const afterFree = translatedWords.slice(freeIndex + 1).join(' ');
    return `${beforeFree} ${afterFree} مفت ہے۔`;
  }

  // Pattern 26: "best" superlative
  const bestIndex = words.indexOf('best');
  if (bestIndex !== -1) {
    const beforeBest = translatedWords.slice(0, bestIndex).join(' ');
    const afterBest = translatedWords.slice(bestIndex + 1).join(' ');
    return `${beforeBest} ${afterBest} بہترین ہے۔`;
  }

  // Pattern 27: "three" number
  const threeIndex = words.indexOf('three');
  if (threeIndex !== -1) {
    const beforeThree = translatedWords.slice(0, threeIndex).join(' ');
    const afterThree = translatedWords.slice(threeIndex + 1).join(' ');
    return `${beforeThree} ${afterThree} تین ہیں۔`;
  }

  // Pattern 28: "world wide web"
  const webIndex = words.indexOf('web');
  if (webIndex !== -1 && words[webIndex - 1] === 'wide' && words[webIndex - 2] === 'world') {
    const beforeWeb = translatedWords.slice(0, webIndex - 2).join(' ');
    const afterWeb = translatedWords.slice(webIndex + 1).join(' ');
    return `${beforeWeb} دنیا وسیع ویب ${afterWeb} ہے۔`;
  }

  // Pattern 29: "w3c"
  const w3cIndex = words.indexOf('w3c');
  if (w3cIndex !== -1) {
    const beforeW3c = translatedWords.slice(0, w3cIndex).join(' ');
    const afterW3c = translatedWords.slice(w3cIndex + 1).join(' ');
    return `${beforeW3c} کونسورٹیم ${afterW3c} ہے۔`;
  }

  // Pattern 30: "w3schools"
  const w3schoolsIndex = words.indexOf('w3schools');
  if (w3schoolsIndex !== -1) {
    const beforeW3schools = translatedWords.slice(0, w3schoolsIndex).join(' ');
    const afterW3schools = translatedWords.slice(w3schoolsIndex + 1).join(' ');
    return `${beforeW3schools} w3schools ${afterW3schools} ہے۔`;
  }

  // Pattern 31: "html"
  const htmlIndex = words.indexOf('html');
  if (htmlIndex !== -1) {
    const beforeHtml = translatedWords.slice(0, htmlIndex).join(' ');
    const afterHtml = translatedWords.slice(htmlIndex + 1).join(' ');
    return `${beforeHtml} ایچ ٹی ایم ایل ${afterHtml} ہے۔`;
  }

  // Advanced context-aware translation
  return applyAdvancedContextTranslation(analysis, parsed);
}

function applyAdvancedContextTranslation(analysis: LinguisticAnalysis, parsed: ParsedSentence): string {
  const words = analysis.originalWords;
  const translatedWords = analysis.translatedWords;

  // Handle complex sentence structures
  
  // 1. Passive voice handling
  if (analysis.voice === 'passive') {
    return handlePassiveVoice(analysis);
  }

  // 2. Future tense handling
  if (analysis.tense === 'future') {
    return handleFutureTense(analysis);
  }

  // 3. Past tense handling
  if (analysis.tense === 'past') {
    return handlePastTense(analysis);
  }

  // 4. Plural subject handling
  if (analysis.number === 'plural') {
    return handlePluralSubject(analysis);
  }

  // 5. First person handling
  if (analysis.person === 'first') {
    return handleFirstPerson(analysis);
  }

  // 6. Second person handling
  if (analysis.person === 'second') {
    return handleSecondPerson(analysis);
  }

  // 7. Complex modifier handling
  if (analysis.modifiers.length > 0) {
    return handleComplexModifiers(analysis);
  }

  // Default: simple sentence with proper verb
  let result = translatedWords.join(' ');
  
  // Smart verb selection based on context
  if (!result.includes('ہے') && !result.includes('ہیں') && !result.includes('کرتا ہے')) {
    result = addContextAwareVerb(result, analysis);
  }
  
  return result + '۔';
}

function handlePassiveVoice(analysis: LinguisticAnalysis): string {
  const words = analysis.originalWords;
  const translatedWords = analysis.translatedWords;
  
  // Convert passive to active Urdu structure
  const byIndex = words.indexOf('by');
  if (byIndex !== -1) {
    const beforeBy = translatedWords.slice(0, byIndex).join(' ');
    const afterBy = translatedWords.slice(byIndex + 1).join(' ');
    return `${afterBy} ${beforeBy} کرتا ہے۔`;
  }
  
  return translatedWords.join(' ') + ' ہے۔';
}

function handleFutureTense(analysis: LinguisticAnalysis): string {
  const words = analysis.originalWords;
  const translatedWords = analysis.translatedWords;
  
  // Convert future tense to Urdu
  const willIndex = words.indexOf('will');
  if (willIndex !== -1) {
    const beforeWill = translatedWords.slice(0, willIndex).join(' ');
    const afterWill = translatedWords.slice(willIndex + 1).join(' ');
    return `${beforeWill} ${afterWill} کرے گا۔`;
  }
  
  return translatedWords.join(' ') + ' ہوگا۔';
}

function handlePastTense(analysis: LinguisticAnalysis): string {
  const words = analysis.originalWords;
  const translatedWords = analysis.translatedWords;
  
  // Convert past tense to Urdu
  const wasIndex = words.indexOf('was');
  const wereIndex = words.indexOf('were');
  const hadIndex = words.indexOf('had');
  
  if (wasIndex !== -1) {
    const beforeWas = translatedWords.slice(0, wasIndex).join(' ');
    const afterWas = translatedWords.slice(wasIndex + 1).join(' ');
    return `${beforeWas} ${afterWas} تھا۔`;
  } else if (wereIndex !== -1) {
    const beforeWere = translatedWords.slice(0, wereIndex).join(' ');
    const afterWere = translatedWords.slice(wereIndex + 1).join(' ');
    return `${beforeWere} ${afterWere} تھے۔`;
  } else if (hadIndex !== -1) {
    const beforeHad = translatedWords.slice(0, hadIndex).join(' ');
    const afterHad = translatedWords.slice(hadIndex + 1).join(' ');
    return `${beforeHad} کے پاس ${afterHad} تھا۔`;
  }
  
  return translatedWords.join(' ') + ' تھا۔';
}

function handlePluralSubject(analysis: LinguisticAnalysis): string {
  const words = analysis.originalWords;
  const translatedWords = analysis.translatedWords;
  
  // Handle plural subjects properly
  const areIndex = words.indexOf('are');
  const haveIndex = words.indexOf('have');
  
  if (areIndex !== -1) {
    const beforeAre = translatedWords.slice(0, areIndex).join(' ');
    const afterAre = translatedWords.slice(areIndex + 1).join(' ');
    return `${beforeAre} ${afterAre} ہیں۔`;
  } else if (haveIndex !== -1) {
    const beforeHave = translatedWords.slice(0, haveIndex).join(' ');
    const afterHave = translatedWords.slice(haveIndex + 1).join(' ');
    return `${beforeHave} کے پاس ${afterHave} ہیں۔`;
  }
  
  return translatedWords.join(' ') + ' ہیں۔';
}

function handleFirstPerson(analysis: LinguisticAnalysis): string {
  const words = analysis.originalWords;
  const translatedWords = analysis.translatedWords;
  
  // Handle first person (I, we)
  const iIndex = words.indexOf('i');
  const weIndex = words.indexOf('we');
  
  if (iIndex !== -1) {
    const afterI = translatedWords.slice(iIndex + 1).join(' ');
    return `میں ${afterI} کرتا ہوں۔`;
  } else if (weIndex !== -1) {
    const afterWe = translatedWords.slice(weIndex + 1).join(' ');
    return `ہم ${afterWe} کرتے ہیں۔`;
  }
  
  return translatedWords.join(' ') + ' کرتا ہوں۔';
}

function handleSecondPerson(analysis: LinguisticAnalysis): string {
  const words = analysis.originalWords;
  const translatedWords = analysis.translatedWords;
  
  // Handle second person (you)
  const youIndex = words.indexOf('you');
  
  if (youIndex !== -1) {
    const afterYou = translatedWords.slice(youIndex + 1).join(' ');
    return `آپ ${afterYou} کرتے ہیں۔`;
  }
  
  return translatedWords.join(' ') + ' کرتے ہیں۔';
}

function handleComplexModifiers(analysis: LinguisticAnalysis): string {
  const words = analysis.originalWords;
  const translatedWords = analysis.translatedWords;
  
  // Handle complex modifiers like "very", "quite", "rather"
  const veryIndex = words.indexOf('very');
  const quiteIndex = words.indexOf('quite');
  const ratherIndex = words.indexOf('rather');
  
  if (veryIndex !== -1) {
    const beforeVery = translatedWords.slice(0, veryIndex).join(' ');
    const afterVery = translatedWords.slice(veryIndex + 1).join(' ');
    return `${beforeVery} بہت ${afterVery} ہے۔`;
  } else if (quiteIndex !== -1) {
    const beforeQuite = translatedWords.slice(0, quiteIndex).join(' ');
    const afterQuite = translatedWords.slice(quiteIndex + 1).join(' ');
    return `${beforeQuite} کافی ${afterQuite} ہے۔`;
  } else if (ratherIndex !== -1) {
    const beforeRather = translatedWords.slice(0, ratherIndex).join(' ');
    const afterRather = translatedWords.slice(ratherIndex + 1).join(' ');
    return `${beforeRather} بلکہ ${afterRather} ہے۔`;
  }
  
  return translatedWords.join(' ') + ' ہے۔';
}

function addContextAwareVerb(result: string, analysis: LinguisticAnalysis): string {
  // Smart verb selection based on context and content
  if (result.includes('کام') || result.includes('ملازمت') || result.includes('پروجیکٹ')) {
    return result + ' کرتا ہے';
  } else if (result.includes('سیکھنا') || result.includes('تعلیم') || result.includes('مطالعہ')) {
    return result + ' سیکھتا ہے';
  } else if (result.includes('دیکھنا') || result.includes('مشاہدہ') || result.includes('تجربہ')) {
    return result + ' دیکھتا ہے';
  } else if (result.includes('لکھنا') || result.includes('تحریر') || result.includes('مضمون')) {
    return result + ' لکھتا ہے';
  } else if (result.includes('پڑھنا') || result.includes('مطالعہ') || result.includes('تحقیق')) {
    return result + ' پڑھتا ہے';
  } else if (result.includes('سوچنا') || result.includes('خیال') || result.includes('تصور')) {
    return result + ' سوچتا ہے';
  } else if (result.includes('بنانا') || result.includes('تخلیق') || result.includes('ترقی')) {
    return result + ' بناتا ہے';
  } else if (result.includes('دینا') || result.includes('فراہم') || result.includes('پیش')) {
    return result + ' دیتا ہے';
  } else if (result.includes('ہونا') || result.includes('موجود') || result.includes('دستیاب')) {
    return result + ' ہے';
  } else {
    return result + ' ہے';
  }
}

function analyzeSemanticStructure(sentence: string): any {
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

function applySemanticTranslation(analysis: LinguisticAnalysis, semanticAnalysis: any): string {
  const words = analysis.originalWords;
  const translatedWords = analysis.translatedWords;

  // Apply semantic-aware translation based on context
  
  // 1. Topic-comment structure
  if (semanticAnalysis.topic) {
    return applyTopicCommentStructure(analysis, semanticAnalysis);
  }

  // 2. Emphasis handling
  if (semanticAnalysis.emphasis.length > 0) {
    return applyEmphasisStructure(analysis, semanticAnalysis);
  }

  // 3. Discourse marker handling
  if (semanticAnalysis.discourseMarkers.length > 0) {
    return applyDiscourseMarkerStructure(analysis, semanticAnalysis);
  }

  // 4. Semantic role handling
  if (semanticAnalysis.semanticRole !== 'agent') {
    return applySemanticRoleStructure(analysis, semanticAnalysis);
  }

  return applyDefaultTranslation(analysis);
}

function applyTopicCommentStructure(analysis: LinguisticAnalysis, semanticAnalysis: any): string {
  const words = analysis.originalWords;
  const translatedWords = analysis.translatedWords;

  // Apply topic-comment structure common in Urdu
  const topic = semanticAnalysis.topic;
  const topicIndex = words.indexOf(topic);
  
  if (topicIndex !== -1) {
    const beforeTopic = translatedWords.slice(0, topicIndex).join(' ');
    const afterTopic = translatedWords.slice(topicIndex + 1).join(' ');
    
    if (topic === 'this' || topic === 'that') {
      return `یہ ${afterTopic} ہے۔`;
    } else if (topic === 'it') {
      return `یہ ${afterTopic} ہے۔`;
    } else if (topic === 'there') {
      return `${afterTopic} موجود ہے۔`;
    }
  }

  return translatedWords.join(' ') + ' ہے۔';
}

function applyEmphasisStructure(analysis: LinguisticAnalysis, semanticAnalysis: any): string {
  const words = analysis.originalWords;
  const translatedWords = analysis.translatedWords;

  // Handle emphasis markers properly
  const emphasis = semanticAnalysis.emphasis[0];
  const emphasisIndex = words.indexOf(emphasis);
  
  if (emphasisIndex !== -1) {
    const beforeEmphasis = translatedWords.slice(0, emphasisIndex).join(' ');
    const afterEmphasis = translatedWords.slice(emphasisIndex + 1).join(' ');
    
    switch (emphasis) {
      case 'very':
        return `${beforeEmphasis} بہت ${afterEmphasis} ہے۔`;
      case 'quite':
        return `${beforeEmphasis} کافی ${afterEmphasis} ہے۔`;
      case 'rather':
        return `${beforeEmphasis} بلکہ ${afterEmphasis} ہے۔`;
      case 'especially':
        return `${beforeEmphasis} خاص طور پر ${afterEmphasis} ہے۔`;
      case 'particularly':
        return `${beforeEmphasis} خاص طور پر ${afterEmphasis} ہے۔`;
      default:
        return `${beforeEmphasis} ${afterEmphasis} ہے۔`;
    }
  }

  return translatedWords.join(' ') + ' ہے۔';
}

function applyDiscourseMarkerStructure(analysis: LinguisticAnalysis, semanticAnalysis: any): string {
  const words = analysis.originalWords;
  const translatedWords = analysis.translatedWords;

  // Handle discourse markers for better flow
  const marker = semanticAnalysis.discourseMarkers[0];
  const markerIndex = words.indexOf(marker);
  
  if (markerIndex !== -1) {
    const beforeMarker = translatedWords.slice(0, markerIndex).join(' ');
    const afterMarker = translatedWords.slice(markerIndex + 1).join(' ');
    
    switch (marker) {
      case 'however':
        return `${beforeMarker} تاہم ${afterMarker} ہے۔`;
      case 'therefore':
        return `${beforeMarker} لہذا ${afterMarker} ہے۔`;
      case 'moreover':
        return `${beforeMarker} مزید برآں ${afterMarker} ہے۔`;
      case 'furthermore':
        return `${beforeMarker} علاوہ ازیں ${afterMarker} ہے۔`;
      case 'in addition':
        return `${beforeMarker} علاوہ ازیں ${afterMarker} ہے۔`;
      case 'on the other hand':
        return `${beforeMarker} دوسری طرف ${afterMarker} ہے۔`;
      case 'in conclusion':
        return `${beforeMarker} آخر میں ${afterMarker} ہے۔`;
      default:
        return `${beforeMarker} ${afterMarker} ہے۔`;
    }
  }

  return translatedWords.join(' ') + ' ہے۔';
}

function applySemanticRoleStructure(analysis: LinguisticAnalysis, semanticAnalysis: any): string {
  const words = analysis.originalWords;
  const translatedWords = analysis.translatedWords;

  // Handle different semantic roles
  switch (semanticAnalysis.semanticRole) {
    case 'passive':
      return handlePassiveVoice(analysis);
    case 'purpose':
      return handlePurposeStructure(analysis);
    case 'instrument':
      return handleInstrumentStructure(analysis);
    case 'goal':
      return handleGoalStructure(analysis);
    default:
      return applyDefaultTranslation(analysis);
  }
}

function handlePurposeStructure(analysis: LinguisticAnalysis): string {
  const words = analysis.originalWords;
  const translatedWords = analysis.translatedWords;

  const forIndex = words.indexOf('for');
  if (forIndex !== -1) {
    const beforeFor = translatedWords.slice(0, forIndex).join(' ');
    const afterFor = translatedWords.slice(forIndex + 1).join(' ');
    return `${afterFor} کے لیے ${beforeFor} ہے۔`;
  }

  return translatedWords.join(' ') + ' ہے۔';
}

function handleInstrumentStructure(analysis: LinguisticAnalysis): string {
  const words = analysis.originalWords;
  const translatedWords = analysis.translatedWords;

  const withIndex = words.indexOf('with');
  if (withIndex !== -1) {
    const beforeWith = translatedWords.slice(0, withIndex).join(' ');
    const afterWith = translatedWords.slice(withIndex + 1).join(' ');
    return `${beforeWith} ${afterWith} کے ساتھ ہے۔`;
  }

  return translatedWords.join(' ') + ' ہے۔';
}

function handleGoalStructure(analysis: LinguisticAnalysis): string {
  const words = analysis.originalWords;
  const translatedWords = analysis.translatedWords;

  const toIndex = words.indexOf('to');
  if (toIndex !== -1) {
    const beforeTo = translatedWords.slice(0, toIndex).join(' ');
    const afterTo = translatedWords.slice(toIndex + 1).join(' ');
    return `${afterTo} کے لیے ${beforeTo} ہے۔`;
  }

  return translatedWords.join(' ') + ' ہے۔';
}

function applyDefaultTranslation(analysis: LinguisticAnalysis): string {
  const translatedWords = analysis.translatedWords;
  let result = translatedWords.join(' ');
  
  if (!result.includes('ہے') && !result.includes('ہیں') && !result.includes('کرتا ہے')) {
    result = addContextAwareVerb(result, analysis);
  }
  
  return result + '۔';
}


export default urduDictionary; 