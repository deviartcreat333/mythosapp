router.post('/ai/agent', async (req, res) => {
  const { messages, language } = req.body;
  const summary = await summarizeMessages(messages);
  const suggestions = await suggestContent(messages);
  const translated = await translateMessages(messages, language);
  res.json({ summary, suggestions, translated });
});