import React from "react";
import { Sparkles } from "lucide-react";

const Welcome = () => {
  return (
    <div className="text-center mt-8">
      <div className="flex items-center justify-center gap-2 mb-4 text-gray-800">
        <Sparkles className="w-6 h-6" />
        <h1 className="text-3xl font-bold">Hi Boss! 👋</h1>
      </div>
      <p className="text-gray-700 text-lg">
        Welcome back to your dashboard. Hope you're having a productive day!
      </p>
    </div>
  );
};

export default Welcome;
