const profileApp = Vue.createApp({
  data() {
    return {
      user: {
        name: "John Doe",
        email: "john.doe@example.com",
        avatar: "assets/default-avatar.png"
      },
      activeTab: 'profile', // Default tab
      settings: {
        password: "",
        language: "en"
      },
      notifications: {
        courseUpdates: true,
        webinarAlerts: false,
        communityMessages: true
      }
    };
  },
  methods: {
    updateProfile() {
      alert("Profile updated successfully!");
      console.log("Updated User:", this.user);
    },
    updateSettings() {
      alert("Account settings updated!");
      console.log("Updated Settings:", this.settings);
    },
    updateNotifications() {
      alert("Notification preferences saved!");
      console.log("Updated Notifications:", this.notifications);
    }
  }
});

profileApp.component('navbar', {
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Surpace</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="profile.html">Profile</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `
});

profileApp.component('footer', {
  template: `
    <footer class="bg-dark text-white py-4">
      <div class="container text-center">
        <p>&copy; 2025 Surpace. All Rights Reserved.</p>
      </div>
    </footer>
  `
});

profileApp.mount('#profile-app');
