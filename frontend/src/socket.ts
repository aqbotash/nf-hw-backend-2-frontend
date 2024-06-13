import io from "socket.io-client";

interface User {
  userId: string;
  isOnline: boolean;
}

interface TypingData {
  userId: string;
  isTyping: boolean;
}

const url: string = "http://localhost:8080";
const socket = io(url, {
  transports: ["websocket"],
});

socket.on("connect", () => {
  console.log("Connected to server");
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});

socket.on("userStatus", (user: User) => {
  updateUserStatus(user);
});

socket.on("typing", (data: TypingData) => {
  const { userId, isTyping } = data;
  updateTypingStatus(userId, isTyping);
});

function updateUserStatus(user: User) {
  const userElement = document.getElementById(user.userId);
  if (userElement) {
    if (user.isOnline) {
      userElement.classList.add('online');
    } else {
      userElement.classList.remove('online');
    }
  }
}

function updateTypingStatus(userId: string, isTyping: boolean) {
  const userElement = document.getElementById(userId);
  if (userElement) {
    if (isTyping) {
      userElement.classList.add('typing');
    } else {
      userElement.classList.remove('typing');
    }
  }
}

export default socket;
