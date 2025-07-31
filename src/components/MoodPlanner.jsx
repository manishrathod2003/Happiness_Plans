// src/components/MoodPlanner.jsx
import React, { useState } from 'react';
import styles from '../styles/MoodPlanner.module.css';

const moodSuggestions = {
  happy: "How about a beach vacation in Goa?",
  stressed: "A peaceful retreat in the Himalayas can help.",
  adventurous: "Try paragliding in Bir Billing or rafting in Rishikesh!",
  romantic: "Udaipur or Manali could be a dreamy escape.",
  sad: "Nature walks in Kerala or a peaceful stay in Coorg may help.",
};

const MoodPlanner = () => {
  const [mood, setMood] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (moodSuggestions[mood]) {
      setSuggestion(moodSuggestions[mood]);
    } else {
      setSuggestion("Please choose a mood to get suggestions.");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Mood-Based Trip Planner 🧭</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mood">Select Your Mood:</label>
        <select id="mood" value={mood} onChange={(e) => setMood(e.target.value)}>
          <option value="">--Choose--</option>
          <option value="happy">Happy</option>
          <option value="stressed">Stressed</option>
          <option value="adventurous">Adventurous</option>
          <option value="romantic">Romantic</option>
          <option value="sad">Sad</option>
        </select>
        <button type="submit">Get Suggestion</button>
      </form>
      {suggestion && <p className={styles.suggestion}>{suggestion}</p>}
    </div>
  );
};

export default MoodPlanner;
