const landingPageApp = Vue.createApp({
  data() {
    return {
      courses: [
        { id: 1, title: "ALX SE: Frontend Development", description: "Master HTML, CSS, JavaScript, React and Vue.js.", image: "assets/frontend.jpg", link: "signup.html" },
        { id: 2, title: "ALX SE: Backend Development", description: "Learn backend essentials like Node.js, Express, Python, Django, APIs and databases.", image: "assets/backend.jpg", link: "signup.html" },
        { id: 3, title: "ALX AiCE", description: "Master Artificial Intelligence and Cloud Engineering, also dive into machine learning and AI applications.", image: "assets/aice.jpg", link: "signup.html" },
        { id: 4, title: "ALX Ventures", description: "Learn entrepreneurial skills to build successful startups.", image: "assets/ventures.jpg", link: "signup.html" },
        { id: 5, title: "ALX Data Science", description: "Learn business strategies and startup basics, also Analyze data and build machine learning business models.", image: "assets/data-science.jpg", link: "signup.html" },
      ],
      activeCourses: [
        { id: 1, title: "ALX SE: Frontend Development", progress: 50 },
        { id: 5, title: "ALX Data Science", progress: 30 },
      ],
      achievements: [
        { id: 1, name: "First Course Completed" },
        { id: 2, name: "Data Science Explorer" },
        { id: 3, name: "Frontend Master" },
      ],
      webinars: [
        { id: 1, title: "Mastering Frontend Development", date: "Jan 10, 2025", speaker: "Jane Doe" },
        { id: 2, title: "AI for Beginners", date: "Jan 17, 2025", speaker: "John Smith" },
      ]
    };
  }
});

landingPageApp.mount('#landing-page');
