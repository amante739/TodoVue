Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      // count: 0,

      items: [
        {
          id: 1,
          name: "Wash Car",
          completed: true,
        },
        {
          id: 2,
          name: "Clean Dishes",
          completed: false,
        },
      ],
    };
  },
  methods: {
    addItem() {
      this.items.push({
        id: this.items.length + 1,
        name: this.newItem,
        completed: false,
      });
      this.newItem = "";
    },
    toggleComplete(item) {
      item.completed = !item.completed;
    },
    removeItem(item) {
      this.items.splice(this.items.indexOf(item), 1);
    },
  },
}).mount("#app");
