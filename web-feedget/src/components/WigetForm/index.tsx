import { CloseButton } from "../closeButton";
import BugImage from "../../assets/bug.svg";
import IdeaImage from "../../assets/idea.svg";
import ThoughtImage from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeSteps } from "./Steps/FeedbackTypeSteps";
import { FeedbackContentSteps } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessSteps } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: BugImage,
      alt: 'Imagem de uma lagarta',
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: IdeaImage,
      alt: 'Imagem de uma lâmpada',
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      source: ThoughtImage,
      alt: 'Imagem de uma nuvem de pensamentos',
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WigedtForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleRestartFeedback = () => {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="
      bg-zinc-900 p-4 relative rounded-2xl 
      mb-4 flex flex-col items-center shadow-lg
      w-[calc(100vw-2rem)] md:w-auto
    ">
      {
        feedbackSent ? (
          <FeedbackSuccessSteps onFeedbackRestartRequest={handleRestartFeedback} />
        ) : (
          <>
            {!feedbackType ?
              <FeedbackTypeSteps onFeedbackTypeChange={setFeedbackType} />
              : <FeedbackContentSteps
                feedbackType={feedbackType}
                onFeedbackRestartRequest={handleRestartFeedback}
                onFeedbackSent={() => setFeedbackSent(true)}
              />
            }
          </>
        )
      }
      <footer className="text-xs text-neutral-400">
        Feito por <a className="underline underline-offset-2" href="#">JefftheDev</a>
      </footer>
    </div >
  )
}