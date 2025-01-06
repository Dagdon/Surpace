new Vue({
    el: '#chatApp',
    data: {
        currentUser: { name: 'Instructor John', id: 1 }, // Dummy user data
        messages: [
            { id: 1, sender: 'Instructor John', text: 'Reminder: Your project is due tomorrow.', timestamp: '5 mins ago' },
            { id: 2, sender: 'You', text: 'Thanks for the reminder, I will submit it.', timestamp: '3 mins ago' },
        ],
        newMessage: '',
    },
    computed: {
        chatId() {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get('id');
        }
    },
    methods: {
        sendMessage() {
            if (this.newMessage.trim() !== '') {
                const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const newMsg = {
                    id: this.messages.length + 1,
                    sender: 'You',
                    text: this.newMessage,
                    timestamp: timestamp,
                };
                this.messages.push(newMsg); // Add message to chat
                this.newMessage = ''; // Reset input field

                // Simulate a reply after 2 seconds
                setTimeout(() => {
                    const replyMsg = {
                        id: this.messages.length + 1,
                        sender: this.currentUser.name,
                        text: 'Got it! Let me know if you need help.',
                        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    };
                    this.messages.push(replyMsg); // Simulate a reply
                }, 2000);
            }
        },
    }
});
