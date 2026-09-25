module.exports = {
  config: {
    name: "blooc",
    version: "1.0",
    author: "Blooc",
    countDown: 3,
    role: 0,
    shortDescription: "custom",
    longDescription: "ako gagawa reply",
    category: "custom",
    guide: "{pn}"
  },
  onStart: async function ({ message }) {
    return message.reply("Active na custom ko boss!");
  },
  onChat: async function ({ event, message }) {
    const body = (event.body || "").toLowerCase();
    if (!body) return;

    if (body == "hi") return message.reply("Hello boss! Kamusta? 🤖");
    if (body == "pogi ba ako") return message.reply("Oo boss pinaka pogi ka!");
    if (body == "bye") return message.reply("Bye boss ingat!");
  }
};
