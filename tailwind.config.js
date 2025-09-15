/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        selous: {
          // Primary Brand Colors (Actual Selous Express Bus Colors)
          primary: '#1E3A8A',     // Deep professional blue (main bus color)
          secondary: '#3B82F6',   // Bright blue accent
          accent: '#F59E0B',      // Gold/yellow for highlights
          white: '#FFFFFF',       // Pure white
          
          // Gradient Colors
          blue: {
            50: '#EFF6FF',        // Very light blue
            100: '#DBEAFE',       // Light blue
            200: '#BFDBFE',       // Medium light blue
            300: '#93C5FD',       // Medium blue
            400: '#60A5FA',       // Blue
            500: '#3B82F6',       // Primary blue
            600: '#2563EB',       // Dark blue
            700: '#1D4ED8',       // Darker blue
            800: '#1E3A8A',       // Very dark blue
            900: '#1E3A8A',       // Darkest blue
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
      }
    },
  },
  plugins: [],
}