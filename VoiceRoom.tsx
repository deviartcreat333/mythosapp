import { useEffect } from 'react';
import { useVoiceRoom } from './useVoiceRoom';

export function VoiceRoom({ roomId }) {
  const { joinRoom, leaveRoom, users, mediaStreams } = useVoiceRoom(roomId);

  useEffect(() => {
    joinRoom();
    return () => leaveRoom();
  }, [roomId]);

  return (
    <div className="grid grid-cols-2 gap-4">
      {users.map(user => (
        <div key={user.id}>
          <video autoPlay playsInline ref={el => mediaStreams[user.id]?.attach(el)} />
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
}