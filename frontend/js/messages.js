// Vue.js app for the messages page
new Vue({
    el: '#app',
    data: {
        // Sample messages data (could be fetched from an API)
        messages: [
            { id: 1, sender: 'Instructor John', text: 'Reminder: Your project is due tomorrow. Please make sure it\'s submitted.', timestamp: '5 mins ago', isRead: false },
            { id: 2, sender: 'Admin', text: 'Welcome to Surpace! We hope you\'re ready to start learning.', timestamp: '1 hour ago', isRead: true },
            { id: 3, sender: 'Support', text: 'Your support ticket has been updated.', timestamp: '2 hours ago', isRead: false },
            { id: 4, sender: 'Instructor Emma', text: 'Great work on your assignment! Keep it up.', timestamp: '3 hours ago', isRead: false },
        ]
    },
    methods: {
        // Mark message as read
        markAsRead(message) {
            message.isRead = true;
        },
        
        // Handle reply action
        replyToMessage(message) {
            alert(`Replying to ${message.sender}`);
            // Here, you could trigger a modal or input field to allow replying
        },

        // Handle delete message
        deleteMessage(message) {
            const index = this.messages.indexOf(message);
            if (index > -1) {
                this.messages.splice(index, 1);
            }
        },

        // Simulate new incoming messages
        addNewMessage() {
            const newMessage = {
                id: this.messages.length + 1,
                sender: 'Instructor Sarah',
                text: 'New message alert: You have a new assignment due.',
                timestamp: 'Just now',
                isRead: false
            };
            this.messages.unshift(newMessage); // Add new message at the top
        }
    },
    mounted() {
        // Simulate new message arrival every 5 seconds
        setInterval(this.addNewMessage, 5000);
    }
});
