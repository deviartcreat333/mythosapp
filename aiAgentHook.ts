import { useEffect, useState } from 'react';
import axios from 'axios';

export function useAIChatAgent(messages, language = 'en') {
  const [summary, setSummary] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [translated, setTranslated] = useState('');

  useEffect(() => {
    async function processMessages() {
      const res = await axios.post('/api/ai/agent', { messages, language });
      setSummary(res.data.summary);
      setSuggestions(res.data.suggestions);
      setTranslated(res.data.translated);
    }
    if (messages.length > 0) processMessages();
  }, [messages]);

  return { summary, suggestions, translated };
}