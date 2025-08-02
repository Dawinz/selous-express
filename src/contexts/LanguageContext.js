import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default to English

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'sw' : 'en');
  };

  const t = (key) => {
    const translations = {
      en: {
        // Navigation
        home: 'Home',
        routes: 'Routes',
        gallery: 'Gallery',
        contact: 'Contact',
        whatsapp: 'WhatsApp',
        
        // Hero & CTA
        findYourJourney: 'FIND YOUR JOURNEY',
        searchBookPremium: 'Search and book your premium bus travel',
        bookYourJourney: 'BOOK YOUR JOURNEY',
        
        // Form Labels
        from: 'FROM',
        to: 'TO',
        travelDate: 'TRAVEL DATE',
        passengers: 'PASSENGERS',
        searchSafari: 'SEARCH TRIP',
        selectDeparture: 'Select departure',
        selectDestination: 'Select destination',
        passenger: 'Passenger',
        passengers: 'Passengers',
        
        // Popular Routes
        popularRoutes: 'Popular Routes:',
        
        // Features
        whyChoose: 'WHY CHOOSE KISESA EXPRESS',
        premiumComfort: 'PREMIUM COMFORT',
        comfortDesc: 'Luxury seats, air conditioning, and spacious interiors for your comfort',
        onTimeDeparture: 'ON-TIME DEPARTURE',
        onTimeDesc: 'Reliable schedules and punctual service you can depend on',
        safeTravel: 'SAFE TRAVEL',
        safeTravelDesc: 'Professional drivers and well-maintained vehicles for your safety',
        
        // Routes Page
        ourRoutes: 'OUR ROUTES',
        routesDesc: 'Discover all the destinations we serve with our premium bus services',
        price: 'Price:',
        duration: 'Duration:',
        bookThisRoute: 'Book This Route',
        routeInformation: 'ROUTE INFORMATION',
        departureTimes: 'DEPARTURE TIMES',
        morning: 'Morning: 6:00 AM - 8:00 AM',
        afternoon: 'Afternoon: 2:00 PM - 4:00 PM',
        morningTime: 'Morning: 6:00 AM - 8:00 AM',
        afternoonTime: 'Afternoon: 2:00 PM - 4:00 PM',
        eveningTime: 'Evening: 8:00 PM - 10:00 PM',
        
        // Amenities
        airConditioning: 'Air Conditioning',
        comfortableSeats: 'Comfortable Reclining Seats',
        freeWifi: 'Free WiFi',
        chargingPorts: 'Charging Ports',
        entertainmentSystem: 'Entertainment System',
        
        // Duration hours
        fourHours: '4 hours',
        fiveHours: '5 hours',
        sixHours: '6 hours',
        eightHours: '8 hours',
        tenHours: '10 hours',
        twelveHours: '12 hours',
        
        // Gallery
        ourGallery: 'OUR GALLERY',
        galleryDesc: 'Take a look at our modern fleet of buses and experience the comfort and luxury of traveling with Kisesa Express',
        ourFleet: 'OUR FLEET',
        fleetDescription: 'Experience comfort and luxury with our modern fleet of buses',
        modernFleet: 'Modern Fleet',
        comfortableInterior: 'Comfortable Interior',
        professionalService: 'Professional Service',
        safeTravel: 'Safe Travel',
        premiumExperience: 'Premium Experience',
        onTheRoad: 'On the Road',
        atTheTerminal: 'At the Terminal',
        
        // Contact Page
        contactUs: 'CONTACT US',
        contactDesc: 'Get in touch with us for any inquiries, bookings, or support',
        sendMessage: 'SEND US A MESSAGE',
        fullName: 'Full Name *',
        enterFullName: 'Enter your full name',
        emailAddress: 'Email Address *',
        enterEmail: 'Enter your email address',
        phoneNumber: 'Phone Number',
        enterPhone: 'Enter your phone number',
        message: 'Message *',
        enterMessage: 'Tell us how we can help you...',
        sendMessageBtn: 'SEND MESSAGE',
        getInTouch: 'GET IN TOUCH',
        phone: 'PHONE',
        email: 'EMAIL',
        office: 'OFFICE',
        serviceHours: 'SERVICE HOURS',
        availableDaily: 'AVAILABLE DAILY',
        customerSupport: 'CUSTOMER SUPPORT',
        available24_7: 'Available 24/7 via WhatsApp',
        quickSupport: 'QUICK SUPPORT',
        needImmediateAssistance: 'Need immediate assistance? Chat with us on WhatsApp for instant support!',
        chatOnWhatsApp: 'Chat on WhatsApp',
        
        // Gallery specific
        fleetOne: 'Fleet One',
        fleetTwo: 'Fleet Two', 
        fleetThree: 'Fleet Three',
        fleetFour: 'Fleet Four',
        mobileView: 'Mobile View',
        whyChooseKisesaExpress: 'WHY CHOOSE KISESA EXPRESS',
        premiumComfortDesc: 'Luxury seats, air conditioning, and spacious interiors for your comfort',
        onTimeDepartureDesc: 'Reliable schedules and punctual service you can depend on',
        safeTravelDesc: 'Professional drivers and well-maintained vehicles for your safety',
        
        // Contact specific
        simu: 'PHONE',
        ofisi: 'OFFICE',
        ubungoTerminal: 'Ubungo Terminal',
        darEsSalaaam: 'Dar es Salaam, Tanzania',
        wakatiWaHuduma: 'SERVICE HOURS',
        tunapaikanaKilaSiku: 'AVAILABLE DAILY',
        customerSupportDesc: 'CUSTOMER SUPPORT',
        timeRange: '6:00am – 10:00pm',
        
        // Form placeholders
        enterFullNamePlaceholder: 'Enter your full name',
        enterEmailPlaceholder: 'Enter your email address', 
        enterPhonePlaceholder: 'Enter your phone number',
        enterMessagePlaceholder: 'Tell us how we can help you...',
        
        // Experience difference
        experienceDifference: 'Experience the difference with our premium bus services',
        
        // Routes specific
        departureTimes: 'DEPARTURE TIMES',
        amenities: 'AMENITIES',
        
        // Cities
        mwanza: 'MWANZA MWZ',
        darEsSalaam: 'DAR ES SALAAM DSM',
        kahama: 'KAHAMA KHM',
        moshi: 'MOSHI MSH',
        shinyanga: 'SHINYANGA SHY',
        arusha: 'ARUSHA ARS',
        singida: 'SINGIDA SGD',
        
        // Footer
        footerTagline: 'Premium Travel, Easy Booking',
        footerDescription: 'Experience premium bus travel across Tanzania with our modern fleet, professional drivers, and exceptional service. Your comfort and safety are our top priorities.',
        quickLinks: 'QUICK LINKS',
        contactInfo: 'CONTACT INFO',
        phone: 'Phone',
        headOffice: 'Head Office',
        headOfficeLocation: 'Nata, Mwanza',
        followUs: 'Follow Us',
        allRightsReserved: 'All rights reserved',
        bookNow: 'Book Now',
        
        // Error Messages
        selectDepartureError: 'Please select departure city',
        selectDestinationError: 'Please select destination city',
        differentCitiesError: 'Departure and destination cities must be different',
        selectDateError: 'Please select travel date',
        selectPassengersError: 'Please select number of passengers'
      },
      sw: {
        // Navigation
        home: 'Nyumbani',
        routes: 'Njia',
        gallery: 'Picha',
        contact: 'Wasiliana',
        whatsapp: 'WhatsApp',
        
        // Hero & CTA
        findYourJourney: 'TAFUTA SAFARI YAKO',
        searchBookPremium: 'Tafuta na book safari yako ya kilasi',
        bookYourJourney: 'BOOK SAFARI YAKO',
        
        // Form Labels
        from: 'KUTOKA',
        to: 'KWENDA',
        travelDate: 'TAREHE YA SAFARI',
        passengers: 'ABIRIA',
        searchSafari: 'TAFUTA SAFARI',
        selectDeparture: 'Chagua mahali pa kuondoka',
        selectDestination: 'Chagua mahali pa kwenda',
        passenger: 'Mtu',
        passengers: 'Watu',
        
        // Popular Routes
        popularRoutes: 'Njia Maarufu:',
        
        // Features
        whyChoose: 'KWA NINI UCHAGUE KISESA EXPRESS',
        premiumComfort: 'USTAREHE WA KILASI',
        comfortDesc: 'Viti vya kifahari, hewa baridi, na mazingira mazuri ya ustarehe',
        onTimeDeparture: 'KUONDOKA KWA WAKATI',
        onTimeDesc: 'Ratiba za kuaminika na huduma ya wakati unayoweza kutegemea',
        safeTravel: 'USAFIRI SALAMA',
        safeTravelDesc: 'Madereva wataalam na magari yaliyotunzwa vizuri kwa usalama wako',
        
        // Routes Page
        ourRoutes: 'NJIA ZETU',
        routesDesc: 'Gundua maeneo yote tunayohudumia kwa huduma zetu za kilasi za mabasi',
        price: 'Bei:',
        duration: 'Muda:',
        bookThisRoute: 'Wekesha njia hii',
        routeInformation: 'TAARIFA ZA SAFARI',
        departureTimes: 'MUDA WA KUONDOKA',
        morning: 'Asubuhi: 6:00 AM - 8:00 AM',
        afternoon: 'Mchana: 2:00 PM - 4:00 PM',
        morningTime: 'Asubuhi: 6:00 AM - 8:00 AM',
        afternoonTime: 'Mchana: 2:00 PM - 4:00 PM',
        eveningTime: 'Jioni: 8:00 PM - 10:00 PM',
        
        // Amenities
        airConditioning: 'Hewa Baridi',
        comfortableSeats: 'Viti Vyenye Ustarehe',
        freeWifi: 'WiFi Bure',
        chargingPorts: 'Mahali pa Kuchaji',
        entertainmentSystem: 'Mfumo wa Burudani',
        
        // Duration hours
        fourHours: 'Masaa 4',
        fiveHours: 'Masaa 5',
        sixHours: 'Masaa 6',
        eightHours: 'Masaa 8',
        tenHours: 'Masaa 10',
        twelveHours: 'Masaa 12',
        
        // Gallery
        ourGallery: 'PICHA ZETU',
        galleryDesc: 'Angalia gari zetu za kisasa na ujaribu ustarehe na anasa ya kusafiri na Kisesa Express',
        ourFleet: 'MAGARI YETU',
        fleetDescription: 'Furahia ustarehe na anasa na magari yetu ya kisasa',
        modernFleet: 'Magari ya Kisasa',
        comfortableInterior: 'Ndani Yenye Ustarehe',
        professionalService: 'Huduma ya Kitaalam',
        safeTravel: 'Usafiri Salama',
        premiumExperience: 'Uzoefu wa Kilasi',
        onTheRoad: 'Barabarani',
        atTheTerminal: 'Kwenye Kituo',
        
        // Contact Page
        contactUs: 'WASILIANA NASI',
        contactDesc: 'Wasiliana nasi kwa maswali yoyote, uhifadhi au msaada',
        sendMessage: 'TUTUMIE UJUMBE',
        fullName: 'Jina Kamili *',
        enterFullName: 'Ingiza jina lako kamili',
        emailAddress: 'Barua Pepe *',
        enterEmail: 'Ingiza barua pepe yako',
        phoneNumber: 'Namba ya Simu',
        enterPhone: 'Ingiza namba yako ya simu',
        message: 'Ujumbe *',
        enterMessage: 'Tuambie jinsi tuweza kukusaidia...',
        sendMessageBtn: 'TUMA UJUMBE',
        getInTouch: 'WASILIANA',
        phone: 'SIMU',
        email: 'BARUA PEPE',
        office: 'OFISI',
        serviceHours: 'MUDA WA HUDUMA',
        availableDaily: 'TUNAPATIKANA KILA SIKU',
        customerSupport: 'MSAADA WA WATEJA',
        available24_7: 'Tunapatikana saa 24/7 kupitia WhatsApp',
        quickSupport: 'MSAADA WA HARAKA',
        needImmediateAssistance: 'Unahitaji msaada wa haraka? Ongea nasi WhatsApp kwa msaada wa mara moja!',
        chatOnWhatsApp: 'Ongea WhatsApp',
        
        // Gallery specific
        fleetOne: 'Gari la Kwanza',
        fleetTwo: 'Gari la Pili',
        fleetThree: 'Gari la Tatu', 
        fleetFour: 'Gari la Nne',
        mobileView: 'Mwonekano wa Simu',
        whyChooseKisesaExpress: 'KWA NINI UCHAGUE KISESA EXPRESS',
        premiumComfortDesc: 'Viti vya kifahari, hewa baridi, na mazingira mazuri ya ustarehe',
        onTimeDepartureDesc: 'Ratiba za kuaminika na huduma ya wakati unayoweza kutegemea',
        safeTravelDesc: 'Madereva wataalam na magari yaliyotunzwa vizuri kwa usalama wako',
        
        // Contact specific  
        simu: 'SIMU',
        ofisi: 'OFISI',
        ubungoTerminal: 'Kituo cha Ubungo',
        darEsSalaaam: 'Dar es Salaam, Tanzania',
        wakatiWaHuduma: 'WAKATI WA HUDUMA',
        tunapaikanaKilaSiku: 'TUNAPATIKANA KILA SIKU',
        customerSupportDesc: 'MSAADA WA WATEJA',
        timeRange: '6:00am – 10:00pm',
        
        // Form placeholders
        enterFullNamePlaceholder: 'Ingiza jina lako kamili',
        enterEmailPlaceholder: 'Ingiza barua pepe yako',
        enterPhonePlaceholder: 'Ingiza namba yako ya simu',
        enterMessagePlaceholder: 'Tuambie jinsi tuweza kukusaidia...',
        
        // Experience difference
        experienceDifference: 'Furahia tofauti na huduma zetu za kilasi za mabasi',
        
        // Routes specific
        departureTimes: 'MUDA WA KUONDOKA',
        amenities: 'VIFAA',
        
        // Cities
        mwanza: 'MWANZA MWZ',
        darEsSalaam: 'DAR ES SALAAM DSM',
        kahama: 'KAHAMA KHM',
        moshi: 'MOSHI MSH',
        shinyanga: 'SHINYANGA SHY',
        arusha: 'ARUSHA ARS',
        singida: 'SINGIDA SGD',
        
        // Footer
        footerTagline: 'Safari za Kifahari, Tiketi kwa Urahisi',
        footerDescription: 'Furahia safari za kifahari kote Tanzania na mabasi yetu ya kisasa, madereva wataalam, na huduma bora. Ustarehe na usalama wako ni vipaumbele vyetu.',
        quickLinks: 'VIUNGO VYA HARAKA',
        contactInfo: 'MAELEZO YA MAWASILIANO',
        phone: 'Simu',
        headOffice: 'Makao Makuu',
        headOfficeLocation: 'Nata, Mwanza',
        followUs: 'Tufuate',
        allRightsReserved: 'Haki zote zimehifadhiwa',
        bookNow: 'Book Sasa',
        
        // Error Messages
        selectDepartureError: 'Tafadhali chagua jiji la kuondoka',
        selectDestinationError: 'Tafadhali chagua jiji la kwenda',
        differentCitiesError: 'Miji ya kuondoka na kwenda lazima iwe tofauti',
        selectDateError: 'Tafadhali chagua tarehe ya safari',
        selectPassengersError: 'Tafadhali chagua idadi ya abiria'
      }
    };

    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};