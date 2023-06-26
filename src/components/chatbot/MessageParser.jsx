import React from "react";
import ChatBot from "react-simple-chatbot";
import "./chat.scss";
import { colors } from "@mui/material";

class MessageParser extends React.Component {
  render() {
    return (
      <div className="chatbot-container ">
        <ChatBot
          steps={[
            {
              id: "1",
              message: "Hey, John ! Good morning",
              trigger: "2",
            },
            {
              id: "2",
              user: true,
              trigger: "3",
            },
            {
              id: "3",
              message:
                "John, did you know you can now invest in any property real estate as an alternative investment with secured & transparent mechanics using crypto currency?",
              trigger: "4",
              className: "chat-message bot-message",
            },

            {
              id: "4",
              user: true,
              trigger: "5",
            },
            {
              id: "5",
              message:
                "Users can list their property and tokenize it on a platform and investors can buy fractionalised token of the property instead of investing on whole property and then can buy / sell it on market place as and when the prize of the property sees a notable change.",
              trigger: "6",
            },
            {
              id: "6",
              user: true,
              trigger: "7",
            },
            {
              id: "7",
              message:
                "It Is very simple, all you need to do is create an account on meta mask and buy some cryptocurrency like Ethers and use them to buy some fractionalise token of listed properties. ",
              trigger: "8",
            },
            {
              id: "8",
              user: true,
              trigger: "9",
            },
            {
              id: "9",
              message:
                "Exploring various properties is fun too. It is time to invest & earn!  Would you like to join the most trending platform for real estate investing ?",
              trigger: "10",
            },
            {
              id: "10",
              user: true,
              trigger: "11",
            },
            {
              id: "11",
              message:
                "Great ! I'll help you in connecting them. You will receive a message on our mobile app and sms shortly.",
              end: true,
            },
          ]}
          userAvatar={null} // Hide user avatar if desired
          headerTitle="SkovGPT" // Customize the header title if desired
          placeholder="Type your message..." // Customize the input field placeholder if desired
          style={{ background: "#f1f2f2" }}
          userDelay={500} // Delay between user input and bot response in milliseconds
          customComponents={{
            // Custom component to add class name to user messages
            botMessageBox: (props) => (
              <div
                className="chat-message user-message"
                style={{ background: "#004370" }}
              >
                {props.children}
              </div>
            ),
          }}
        />
      </div>
    );
  }
}
export default MessageParser;
