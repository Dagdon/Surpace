const app = Vue.createApp({
  data() {
    return {
      courses: [
        { id: 1, title: "ALX SE: Frontend Development", description: "Master HTML, CSS, JavaScript, React and Vue.js.", image: "assets/frontend.jpg", link: "#" },
        { id: 2, title: "ALX SE: Backend Development", description: "Learn backend essentials like Node.js, Express, Python, Django, APIs and databases.", image: "assets/backend.jpg", link: "#" },
        { id: 3, title: "ALX AiCE", description: "Master Artificial Intelligence and Cloud Engineering, also dive into machine learning and AI applications.", image: "assets/aice.jpg", link: "#" },
        { id: 4, title: "ALX Ventures", description: "Learn entrepreneurial skills to build successful startups.", image: "assets/ventures.jpg", link: "#" },
        { id: 5, title: "ALX Data Science", description: "Learn business strategies and startup basics, also Analyze data and build machine learning business models.", image: "assets/data-science.jpg", link: "#" },
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

app.component('navbar', {
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Surpace</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Courses</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Community</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Webinars</a></li>
            <li class="nav-item"><a class="btn btn-primary" href="#">Sign Up</a></li>
          </ul>
        </div>
        <div class="logo"><img src="assets/logos/surpace.png" height="100" width="100" alt="Surpace's logo"></img></div>
        <!-- Hamburger Icon (visible on small screens) -->
        <div class="hamburger" id="hamburger-icon">
            <div></div>
            <div></div>
            <div></div>
        </div>   
        <div class="search-bar">
            <input type="text" placeholder="Search for courses or topics..." aria-label="Search">
            <button type="submit"><i class="fas fa-search"></i></button>
        </div>
      </div>
    </nav>
  `
});

app.component('footer', {
  template: `
    <footer class="bg-dark text-white py-4">
      <div class="container text-center">
      <img src="assets/logos/surpace.png" height="100" width="100" alt="Surpace's logo"></img>
        <p>&copy; 2025 Surpace. All Rights Reserved.</p>
      </div>
    </footer>
  `
});

app.component('course-card', {
  template: `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img :src="course.image" class="card-img-top" :alt="course.title">
        <div class="card-body">
          <h5 class="card-title">{{ course.title }}</h5>
          <p class="card-text">{{ course.description }}</p>
          <a :href="course.link" class="btn btn-primary">Enroll Now</a>
        </div>
      </div>
    </div>
  `,
  props: ['course']
});

app.mount('#app');
