export function generateSummary(content: string, maxLength: number = 2000): string {
  if (!content || content.trim().length === 0) {
    return 'No content available to summarize.';
  }

  // Clean the content - remove HTML tags and normalize text
  const cleanContent = content
    .replace(/<[^>]*>/g, ' ') // Remove HTML tags
    .replace(/&[a-zA-Z]+;/g, ' ') // Remove HTML entities
    .replace(/[^\w\s.,!?;:()'"-]/g, ' ') // Remove special characters but keep spaces
    .replace(/\s+/g, ' ') // Normalize multiple spaces to single space
    .replace(/\s+([.,!?;:])/g, '$1') // Remove spaces before punctuation
    .replace(/([.,!?;:])\s*/g, '$1 ') // Ensure single space after punctuation
    .replace(/\b\w{1,2}\b/g, '') // Remove very short words (1-2 letters)
    .replace(/\s+/g, ' ') // Normalize spaces again
    .trim();

  // Extract a few lines of original content for preview
  const originalLines = content
    .replace(/<[^>]*>/g, ' ') // Remove HTML tags but keep text structure
    .replace(/&[a-zA-Z]+;/g, ' ') // Remove HTML entities
    .split(/\n+/)
    .map(line => line.trim())
    .filter(line => line.length > 30 && line.length < 300) // Filter reasonable length lines
    .filter(line => !/^(menu|navigation|sidebar|header|footer|search|login|signup|subscribe|follow|share|like|comment|ad|sponsored|promoted)/i.test(line)) // Remove obvious navigation
    .slice(0, 3); // Take first 3 good lines

  // Create original content preview
  let originalPreview = '';
  if (originalLines.length > 0) {
    originalPreview = originalLines.join('\n\n') + '\n\n---\n\n';
  }

  // Filter out navigation and menu content
  const navigationPatterns = [
    /tutorials?/gi,
    /learn\s+\w+/gi,
    /reference/gi,
    /overview/gi,
    /filter/gi,
    /input/gi,
    /html\s+and\s+css/gi,
    /web\s+building/gi,
    /create\s+website/gi,
    /hot/gi,
    /menu/gi,
    /navigation/gi,
    /sidebar/gi,
    /header/gi,
    /footer/gi,
    /breadcrumb/gi,
    /pagination/gi,
    /tags/gi,
    /categories/gi,
    /search/gi,
    /login/gi,
    /signup/gi,
    /subscribe/gi,
    /follow/gi,
    /share/gi,
    /like/gi,
    /comment/gi,
    /advertisement/gi,
    /ad\s*/gi,
    /sponsored/gi,
    /promoted/gi,
    /css\s+sets/gi,
    /data\s+analytics/gi,
    /generative/gi,
    /create\s+server/gi,
    /new/gi,
    /where\s+start/gi,
    /web\s+templates/gi,
    /web\s+statistics/gi,
    /web\s+certificates/gi,
    /web\s+development/gi,
    /introduction/gi,
    /programming/gi,
    /code\s+editor/gi,
    /test\s+your\s+typing\s+speed/gi,
    /play\s+code\s+game/gi,
    /cyber\s+security/gi,
    /accessibility/gi,
    /join\s+our\s+newsletter/gi,
    /javascript/gi,
    /backend/gi,
    /django/gi,
    /exercises?/gi,
    /excercises?/gi,
    /html\s+exercise/gi,
    /css\s+exercise/gi,
    /bootstrap\s+exercise/gi,
    /quiz/gi,
    /numpy\s+exercise/gi,
    /pandas\s+exercise/gi,
    /scipy\s+exercise/gi,
    /excel\s+exercise/gi,
    /what\s+exercise/gi,
    /sets/gi,
    /data\s+analytics/gi,
    /generative/gi,
    /server/gi,
    /templates/gi,
    /statistics/gi,
    /certificates/gi,
    /development/gi,
    /editor/gi,
    /typing/gi,
    /game/gi,
    /security/gi,
    /newsletter/gi
  ];

  // Remove navigation patterns
  let filteredContent = cleanContent;
  navigationPatterns.forEach(pattern => {
    filteredContent = filteredContent.replace(pattern, ' ');
  });

  // Clean up after filtering
  filteredContent = filteredContent
    .replace(/\s+/g, ' ')
    .trim();

  if (filteredContent.length < 50) {
    return 'ERROR: Content too short to generate a meaningful summary.';
  }

  // Split into sentences more reliably
  const sentences = filteredContent
    .split(/[.!?]+/)
    .map(s => s.trim())
    .filter(s => s.length > 20 && s.length < 500) // Filter out very short or very long sentences
    .map(s => {
      // Clean up sentence formatting
      return s
        .replace(/\s+/g, ' ') // Normalize spaces
        .replace(/^\s+|\s+$/g, '') // Trim
        .replace(/^[a-z]/, (match) => match.toUpperCase()) // Capitalize first letter
        .replace(/\s+([.,!?;:])/g, '$1') // Remove spaces before punctuation
        .replace(/([.,!?;:])\s*/g, '$1 ') // Ensure proper spacing after punctuation
        .replace(/\s+/g, ' ') // Final space normalization
        .trim();
    })
    .filter(s => {
      // Additional filtering for better quality sentences
      const words = s.split(/\s+/).filter(word => word.length > 0);
      const lowerSentence = s.toLowerCase();
      
      // Check for navigation patterns in the sentence
      const navigationWords = [
        'tutorial', 'learn', 'reference', 'overview', 'filter', 'input', 'menu', 'navigation', 
        'sidebar', 'header', 'footer', 'search', 'login', 'signup', 'subscribe', 'follow', 
        'share', 'like', 'comment', 'ad', 'sponsored', 'promoted', 'css', 'sets', 'data', 
        'analytics', 'generative', 'create', 'server', 'new', 'where', 'start', 'web', 
        'templates', 'statistics', 'certificates', 'development', 'introduction', 'programming', 
        'code', 'editor', 'test', 'your', 'typing', 'speed', 'play', 'game', 'cyber', 
        'security', 'accessibility', 'join', 'our', 'newsletter', 'javascript', 'backend', 
        'django', 'exercise', 'excercise', 'html', 'bootstrap', 'quiz', 'numpy', 'pandas', 
        'scipy', 'excel', 'what'
      ];
      
      const hasNavigationWords = navigationWords.some(word => lowerSentence.includes(word));
      
      return words.length >= 6 && // At least 6 words for meaningful sentences
             !/^[A-Z\s]+$/.test(s) && // Not all caps
             !/^\d+$/.test(s) && // Not just numbers
             s.length > 40 && // Minimum length for complete thoughts
             !/^\s*$/.test(s) && // Not just whitespace
             !hasNavigationWords && // No navigation words
             /[a-z]/.test(s) && // Contains lowercase letters (real content)
             !/^[A-Z\s]+$/.test(s) && // Not all uppercase (likely navigation)
             /[.!?]$/.test(s) || s.length > 50; // Either ends with punctuation or is long enough
    });

  if (sentences.length === 0) {
    // Fallback: create a better summary from words
    const words = cleanContent.split(/\s+/).filter(word => word.length > 2);
    if (words.length > 10) {
      const wordCount = Math.min(50, words.length);
      return words.slice(0, wordCount).join(' ') + '...';
    }
    return 'ERROR: Content too short or unclear to generate a meaningful summary.';
  }

  // Define important keywords for different topics
  const keywordCategories = {
    technology: ['technology', 'software', 'programming', 'development', 'code', 'application', 'system', 'platform', 'digital', 'computer', 'data', 'algorithm', 'framework', 'database', 'api', 'web', 'mobile', 'cloud', 'ai', 'machine learning', 'artificial intelligence'],
    business: ['business', 'company', 'organization', 'strategy', 'management', 'leadership', 'team', 'project', 'market', 'industry', 'profit', 'revenue', 'growth', 'startup', 'entrepreneur', 'investment', 'finance', 'economy', 'corporate', 'enterprise'],
    health: ['health', 'medical', 'doctor', 'patient', 'treatment', 'disease', 'medicine', 'hospital', 'surgery', 'therapy', 'wellness', 'fitness', 'nutrition', 'exercise', 'mental health', 'physical', 'clinical', 'diagnosis', 'symptoms'],
    education: ['education', 'learning', 'teaching', 'student', 'school', 'university', 'course', 'study', 'research', 'academic', 'knowledge', 'training', 'curriculum', 'lecture', 'assignment', 'exam', 'degree', 'professor', 'classroom'],
    science: ['science', 'experiment', 'research', 'theory', 'scientific', 'laboratory', 'hypothesis', 'discovery', 'physics', 'chemistry', 'biology', 'astronomy', 'observations', 'data collection', 'analysis', 'innovation', 'testing', 'variables', 'result', 'conclusion'],
    politics: ['politics', 'government', 'policy', 'election', 'vote', 'campaign', 'president', 'prime minister', 'law', 'democracy', 'parliament', 'senate', 'legislation', 'reform', 'debate', 'minister', 'bill', 'governance', 'diplomacy', 'conflict'],
    finance: ['finance', 'money', 'bank', 'budget', 'tax', 'currency', 'income', 'expense', 'profit', 'loss', 'investment', 'economy', 'financial', 'loan', 'interest', 'savings', 'debt', 'stocks', 'market', 'valuation'],
    sports: ['sports', 'game', 'match', 'tournament', 'team', 'player', 'coach', 'score', 'goal', 'win', 'lose', 'championship', 'league', 'athlete', 'competition', 'training', 'performance', 'rankings', 'record', 'fans'],
    media: ['media', 'news', 'journalism', 'reporter', 'interview', 'broadcast', 'television', 'radio', 'newspaper', 'headline', 'coverage', 'press', 'article', 'network', 'viral', 'social media', 'post', 'platform', 'content', 'influencer'],
    general: ['important', 'key', 'main', 'primary', 'essential', 'crucial', 'significant', 'major', 'central', 'fundamental', 'critical', 'introduction', 'conclusion', 'summary', 'overview', 'background', 'details', 'analysis', 'report', 'information', 'explains', 'describes', 'discusses', 'shows', 'presents', 'provides', 'offers', 'includes', 'contains']
  };

  // Score sentences based on keywords and position
  const sentenceScores = sentences.map((sentence, index) => {
    let score = 0;
    const lowerSentence = sentence.toLowerCase();
    
    // Higher score for sentences at the beginning (first 70% of content)
    if (index < sentences.length * 0.7) {
      score += 20;
    }
    
    // Even higher score for first few sentences (introduction)
    if (index < Math.min(5, sentences.length)) {
      score += 25;
    }
    
    // Score based on sentence length (prefer medium to long sentences)
    const length = sentence.length;
    if (length > 60 && length < 400) {
      score += 12;
    } else if (length > 40 && length < 500) {
      score += 8;
    }
    
    // Score based on keyword presence (weighted by category)
    Object.entries(keywordCategories).forEach(([category, keywords]) => {
      keywords.forEach(keyword => {
        if (lowerSentence.includes(keyword)) {
          // Give higher weight to topic-specific keywords
          if (category !== 'general') {
            score += 8;
          } else {
            score += 4;
          }
        }
      });
    });
    
    // Bonus for sentences that start with capital letters (likely important)
    if (sentence[0] && sentence[0] === sentence[0].toUpperCase()) {
      score += 5;
    }
    
    // Bonus for sentences with numbers (often contain important data)
    if (/\d/.test(sentence)) {
      score += 4;
    }
    
    // Bonus for sentences with quotes (often important statements)
    if (sentence.includes('"') || sentence.includes("'")) {
      score += 6;
    }
    
    // Bonus for sentences with transition words (indicate structure)
    const transitionWords = ['however', 'therefore', 'furthermore', 'moreover', 'additionally', 'consequently', 'meanwhile', 'nevertheless', 'thus', 'hence', 'accordingly', 'subsequently', 'in conclusion', 'in summary', 'to summarize', 'overall', 'in essence'];
    transitionWords.forEach(word => {
      if (lowerSentence.includes(word)) {
        score += 3;
      }
    });
    
    // Bonus for sentences that contain definitions or explanations
    const definitionWords = ['is', 'are', 'means', 'refers to', 'defined as', 'consists of', 'comprises', 'includes', 'contains', 'involves', 'entails'];
    definitionWords.forEach(word => {
      if (lowerSentence.includes(word)) {
        score += 2;
      }
    });
    
    // Bonus for well-formed sentences (proper grammar and structure)
    if (/^[A-Z].*[.!?]$/.test(sentence)) {
      score += 10; // High bonus for complete sentences
    }
    
    // Bonus for sentences with proper subject-verb structure
    const hasSubjectVerb = /\b(is|are|was|were|has|have|had|do|does|did|can|could|will|would|should|may|might)\b/i.test(sentence);
    if (hasSubjectVerb) {
      score += 6;
    }
    
    return { sentence, score, index };
  });

  // Sort by score (highest first)
  sentenceScores.sort((a, b) => b.score - a.score);
  
  // Create a balanced summary with content from different parts
  let summary = '';
  let totalLength = 0;
  const maxSentences = 30;
  let sentenceCount = 0;
  
  // Get top-scoring sentences with better distribution
  const topSentences = sentenceScores.slice(0, Math.min(maxSentences * 3, sentenceScores.length));
  
  // Prioritize complete, well-formed sentences
  const completeSentences = topSentences.filter(s => 
    /^[A-Z].*[.!?]$/.test(s.sentence) && // Starts with capital, ends with punctuation
    s.sentence.length > 50 && // Reasonable length
    /\b(is|are|was|were|has|have|had|do|does|did|can|could|will|would|should|may|might)\b/i.test(s.sentence) // Has subject-verb structure
  );
  
  // Ensure we get sentences from different parts of the article
  const selectedSentences: Array<{sentence: string, score: number, index: number}> = [];
  const totalSentences = sentences.length;
  
  // Take complete sentences from beginning (first 30%)
  const beginningCount = Math.min(8, Math.floor(totalSentences * 0.3));
  const beginningSentences = completeSentences
    .filter(s => s.index < beginningCount)
    .sort((a, b) => a.index - b.index);
  selectedSentences.push(...beginningSentences.slice(0, Math.min(6, beginningSentences.length)));
  
  // Take complete sentences from middle (30-70%)
  const middleStart = Math.floor(totalSentences * 0.3);
  const middleEnd = Math.floor(totalSentences * 0.7);
  const middleSentences = completeSentences
    .filter(s => s.index >= middleStart && s.index < middleEnd)
    .sort((a, b) => a.index - b.index);
  selectedSentences.push(...middleSentences.slice(0, 10));
  
  // Take complete sentences from end (last 30%)
  const endStart = Math.floor(totalSentences * 0.7);
  const endSentences = completeSentences
    .filter(s => s.index >= endStart)
    .sort((a, b) => a.index - b.index);
  selectedSentences.push(...endSentences.slice(0, 8));
  
  // If we don't have enough complete sentences, add some from top-scoring
  if (selectedSentences.length < 10) {
    const remainingSentences = topSentences
      .filter(s => !selectedSentences.some(selected => selected.index === s.index))
      .slice(0, 10 - selectedSentences.length);
    selectedSentences.push(...remainingSentences);
  }
  
  // Sort by original position to maintain flow
  selectedSentences.sort((a, b) => a.index - b.index);
  
  for (const { sentence } of selectedSentences) {
    if (totalLength + sentence.length + 2 <= maxLength && sentenceCount < maxSentences) {
      if (summary) summary += ' ';
      // Preserve original sentence structure - don't add period if it already has one
      if (sentence.endsWith('.') || sentence.endsWith('!') || sentence.endsWith('?')) {
        summary += sentence;
      } else {
        summary += sentence + '.';
      }
      totalLength += sentence.length + 2;
      sentenceCount++;
    } else {
      break;
    }
  }

  // Clean up the summary formatting properly
  summary = summary
    .replace(/\s+/g, ' ') // Normalize all spaces to single space
    .replace(/\s+\./g, '.') // Remove spaces before periods
    .replace(/\.+/g, '.') // Remove multiple periods
    .replace(/\.\s*\./g, '.') // Remove double periods with spaces
    .replace(/\s+/g, ' ') // Normalize spaces again
    .trim();

  // Improve sentence structure if needed
  if (summary.length > 0) {
    const sentences = summary.split(/[.!?]+/).filter(s => s.trim().length > 0);
    if (sentences.length > 0) {
      // Ensure each sentence is properly structured
      const improvedSentences = sentences.map(sentence => {
        const trimmed = sentence.trim();
        if (trimmed.length < 10) return ''; // Skip very short fragments
        
        // Ensure sentence starts with capital letter
        const capitalized = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
        
        // Ensure sentence ends with proper punctuation
        if (!/[.!?]$/.test(capitalized)) {
          return capitalized + '.';
        }
        return capitalized;
      }).filter(s => s.length > 0);
      
      if (improvedSentences.length > 0) {
        summary = improvedSentences.join(' ');
      }
    }
  }



  // If we still don't have a summary, take the first few sentences
  if (!summary && sentences.length > 0) {
    const firstSentences = sentences.slice(0, Math.min(20, sentences.length));
    summary = firstSentences.join('. ') + '.';
    // Clean up the fallback summary too
    summary = summary
      .replace(/\s+/g, ' ')
      .replace(/\s+\./g, '.')
      .replace(/\.+/g, '.')
      .trim();
  }

  // Final fallback: create a longer summary from the beginning
  if (!summary) {
    const words = filteredContent.split(/\s+/).filter(word => word.length > 0);
    const wordCount = Math.min(250, words.length);
    summary = words.slice(0, wordCount).join(' ') + '...';
    // Clean up the word-based summary too
    summary = summary
      .replace(/\s+/g, ' ')
      .trim();
  }

  // Ensure the summary is not too short
  if (summary.length < 500 && sentences.length > 0) {
    // Add more sentences from the beginning
    const additionalSentences = sentences.slice(0, Math.min(12, sentences.length));
    const additionalText = additionalSentences.join('. ') + '.';
    if (summary.length + additionalText.length < maxLength) {
      summary = summary + ' ' + additionalText;
    }
    // Clean up the extended summary
    summary = summary
      .replace(/\s+/g, ' ')
      .replace(/\s+\./g, '.')
      .replace(/\.+/g, '.')
      .trim();
  }

  // Final formatting cleanup
  summary = summary
    .replace(/\s+/g, ' ') // Normalize spaces
    .replace(/\s+\./g, '.') // Remove spaces before periods
    .replace(/\.+/g, '.') // Remove multiple periods
    .replace(/\s+/g, ' ') // Normalize spaces again
    .replace(/\s+([.,!?;:])/g, '$1') // Remove spaces before punctuation
    .replace(/([.,!?;:])\s*/g, '$1 ') // Ensure proper spacing after punctuation
    .replace(/\s+/g, ' ') // Final space normalization
    .trim();

  return originalPreview + summary;
} 