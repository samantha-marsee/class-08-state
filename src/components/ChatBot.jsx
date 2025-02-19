import { useState } from 'react';

export default function ChatBot() {
  const [prompt, setPrompt] = useState();

  return (
    <div className="chatbot">
      <label htmlFor="chatbot-prompt">Prompt:</label>
      <textarea
        id="chatbot-prompt"
      />

      {!!prompt &&
        <div className="chat">
          <div className="message">
            <img src="/images/user.svg" alt="user" className="avatar" />
            <p>{prompt}</p>
          </div>

          <div className="message">
            <img src="/images/robot.svg" alt="robot" className="avatar" />
            <p>...</p>
          </div>
        </div>}
    </div>
  )
}
