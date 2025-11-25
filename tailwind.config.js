/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        selous: {
          // Primary Brand Colors (Purple Theme)
          primary: '#7C3AED',     // Deep professional purple (main brand color)
          secondary: '#8B5CF6',   // Bright purple accent
          accent: '#F59E0B',      // Gold/yellow for highlights
          white: '#FFFFFF',       // Pure white
          
          // Gradient Colors
          purple: {
            50: '#FAF5FF',        // Very light purple
            100: '#F3E8FF',       // Light purple
            200: '#E9D5FF',       // Medium light purple
            300: '#D8B4FE',       // Medium purple
            400: '#C084FC',       // Purple
            500: '#A855F7',       // Primary purple
            600: '#9333EA',       // Dark purple
            700: '#7C3AED',       // Darker purple
            800: '#6B21A8',       // Very dark purple
            900: '#581C87',       // Darkest purple
          },
          
          // Gold/Yellow Gradients
          gold: {
            50: '#FFFBEB',        // Very light gold
            100: '#FEF3C7',       // Light gold
            200: '#FDE68A',       // Medium light gold
            300: '#FCD34D',       // Medium gold
            400: '#FBBF24',       // Gold
            500: '#F59E0B',       // Primary gold
            600: '#D97706',       // Dark gold
            700: '#B45309',       // Darker gold
            800: '#92400E',       // Very dark gold
            900: '#78350F',       // Darkest gold
          },
          
          // Neutral Colors
          gray: {
            50: '#F9FAFB',        // Very light gray
            100: '#F3F4F6',       // Light gray
            200: '#E5E7EB',       // Medium light gray
            300: '#D1D5DB',       // Medium gray
            400: '#9CA3AF',       // Gray
            500: '#6B7280',       // Dark gray
            600: '#4B5563',       // Darker gray
            700: '#374151',       // Very dark gray
            800: '#1F2937',       // Almost black
            900: '#111827',       // Black
          },
          
          // Status Colors
          green: '#10B981',       // Success green
          red: '#EF4444',         // Error red
          orange: '#F97316',      // Warning orange
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}