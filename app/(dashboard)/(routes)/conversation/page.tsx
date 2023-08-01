import Heading from "@/components/Heading";
import { MessageSquare } from "lucide-react";
import React from "react";

const ConversationPage = () => {
  return (
    <div>
      <div>
        <Heading
          title="Conversation"
          description="Our most davance conversation model"
          icon={MessageSquare}
          iconColor="text-violet-500"
          bgColor="bg-violet-500/10"
        />
      </div>
    </div>
  );
};

export default ConversationPage;
