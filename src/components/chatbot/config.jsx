import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../options/Options";
import Quiz from "../quiz/Quiz";

const Config = {
  botName: "SkovGPT",
  initialMessages: [
    createChatBotMessage(`Hello. What can I do for you?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "Products - FarmOnline",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question:
              "What in-between functions are supported in FarmOnline Explorer?",
            answer:
              "FarmOnline Explorer supports editing day programs and managing alarms.",
            id: 1,
          },
          {
            question:
              " In FarmOnline Explorer, what can Remote Access be used for?",
            answer:
              "Remote Access can be used for: Editing day programs, adjusting settings for manure drying (layers only), viewing key values for batch management, breeding, and layers, as well as accessing the SKOV Webshop.",
            id: 2,
          },
        ],
      },
    },
  ],
};

export default Config;
