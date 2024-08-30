import React, { useState, useEffect } from "react";

async function fetchData(API_KEY, messages, setMessages, setIsTyping, userMessage) {
    try {
        const response = await fetch(
            "https://api.openai.com/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${API_KEY}`,
                },
                body: JSON.stringify({
                    name: "asst_IHGSM4mzuFcjRQPS99PE1Dwp",
                    model: "gpt-3.5-turbo",
                    messages: [...messages, { role: "user", content: userMessage }],
                    temperature: 0.7,
                }),
            }
        );

        if (!response.ok) {
            throw new Error("Oops! Something went wrong while processing your request.");
        }

        const responseData = await response.json();
        setIsTyping(false);
        setMessages((prevMessages) => [
            ...prevMessages,
            {
                role: "assistant",
                content: responseData.choices[0].message.content,
            },
        ]);
    }catch (error) {
        console.error("Error while fetching chat data:", error);
        setIsTyping(false);
    }
}

function Home3() {
    const API_KEY = "";
    const [messages, setMessages] = useState([
        {
            role: "system",
            content:
                "You're like a grammar-checking wizard, helping users fix grammar bloopers and jazz up their sentence structures.",
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        async function fetchDataOnMount() {
            await fetchData(API_KEY, messages, setMessages, setIsTyping, "This is a test!");
        }

        fetchDataOnMount();
    }, [messages]); // Empty dependency array to run once on mount

    const handleSendMessage = (messageContent) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { role: "user", content: messageContent },
        ]);
        setIsTyping(true);
        chatData(messageContent);
    };

    const chatData = async (userMessage) => {
        setIsTyping(true);
        await fetchData(API_KEY, messages, setMessages, setIsTyping, userMessage);
    };

    return (
        <>
            <div>
                {messages.map((message, index) => (
                    <div key={index}>
                        <h3>{message.role}</h3>
                        <p>{message.content}</p>
                    </div>
                ))}
                {isTyping && <p>Bot is typing...</p>}
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const input = e.target.input.value;
                    if (input.trim() !== "") {
                        handleSendMessage(input);
                        e.target.reset();
                    }
                }}
            >
                <input
                    type="text"
                    name="input"
                    placeholder="Type your message..."
                    disabled={isTyping}
                />
                <button type="submit" disabled={isTyping}>
                    Send
                </button>
            </form>
        </>
    );
}

export default Home3;
