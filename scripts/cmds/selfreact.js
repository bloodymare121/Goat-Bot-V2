module.exports = {
  config: {
    name: "selfreact",
    version: "1.0",
    author: "Boss",
    role: 0
  },
  onChat: async function({ event, api }) {
    if (event.senderID !== api.getCurrentUserID()) return;
    
    if (!global.selfReactIndex) global.selfReactIndex = 0;
    
    const reactions = ["😺","🤖","💀","🙊","🙉","🤡","🐶","🗣️","😡","🚮,"🗑️","🤯","🔥","🦴","🔪"];
    
    const reactToUse = reactions[global.selfReactIndex];
    
    api.setMessageReaction(reactToUse, event.messageID, () => {}, true);
    
    global.selfReactIndex++;
    if (global.selfReactIndex >= reactions.length) {
      global.selfReactIndex = 0;
    }
  }
};
