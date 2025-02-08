let userConfig = undefined;
try {
  userConfig = await import('./v0-user-next.config');
} catch (e) {
  // Ignore error if config doesn't exist
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // קובע שהאתר יהיה Static בלבד
  images: {
    unoptimized: true, // מבטל את מערכת עיבוד התמונות של Next.js כדי לחסוך בעלויות
  },
  eslint: {
    ignoreDuringBuilds: true, // מונע שגיאות ESLint במהלך הבנייה
  },
  typescript: {
    ignoreBuildErrors: true, // מתעלם משגיאות TypeScript כדי למנוע קריסה
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

// מיזוג הגדרות אם יש קובץ v0-user-next.config נוסף
mergeConfig(nextConfig, userConfig);

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return;
  }

  for (const key in userConfig) {
    if (typeof nextConfig[key] === "object" && !Array.isArray(nextConfig[key])) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      };
    } else {
      nextConfig[key] = userConfig[key];
    }
  }
}

export default nextConfig;
