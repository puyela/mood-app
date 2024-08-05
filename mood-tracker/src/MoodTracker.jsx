import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const moods = [
  { mood: 'Happy', quote: 'Happiness is the best makeup.' },
  { mood: 'Sad', quote: 'Tears come from the heart and not from the brain.' },
  { mood: 'Angry', quote: 'For every minute you are angry you lose sixty seconds of happiness.' },
  { mood: 'Excited', quote: 'The best way to predict the future is to create it.' },
  { mood: 'Relaxed', quote: 'Relaxation is the stepping stone to tranquility.' },
];

const MoodTracker = () => {
  const [mood, setMood] = useState(null);

  const handleMoodChange = (selectedMood) => {
    setMood(selectedMood);
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-10 text-center">Mood Tracker</h1>
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {moods.map((m, index) => (
          <button
            key={index}
            onClick={() => handleMoodChange(m)}
            className="btn btn-primary btn-lg transition transform hover:scale-105"
          >
            {m.mood}
          </button>
        ))}
      </div>
      <AnimatePresence>
        {mood && (
          <motion.div
            key={mood.mood}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <h2 className="text-3xl font-semibold mb-4">{`Current Mood: ${mood.mood}`}</h2>
            <p className="text-lg text-gray-700">{mood.quote}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MoodTracker;
