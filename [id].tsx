import { VoiceRoom, VRWhiteboard, useAIChatAgent } from '@/plugins';

export default function RoomPage({ roomId }) {
  const messages = useChatHistory(roomId);
  const { summary, suggestions, translated } = useAIChatAgent(messages);

  return (
    <div>
      <VoiceRoom roomId={roomId} />
      <VRWhiteboard />
      <div className="p-4">
        <h3>Summary</h3><p>{summary}</p>
        <h3>Suggestions</h3><ul>{suggestions.map(s => <li key={s}>{s}</li>)}</ul>
        <h3>Translated</h3><p>{translated}</p>
      </div>
    </div>
  );
}