import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../closeButton"

interface FeedbackTypeStepsProps {
  onFeedbackTypeChange: (type: FeedbackType) => void
}

export function FeedbackTypeSteps({ onFeedbackTypeChange }: FeedbackTypeStepsProps) {

  return (
    <>
      <header className="w-full flex items-center justify-between">
        <div />
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {
          Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col 
                    items-center border-2 border-transparent hover:border-brand-500
                    focus:border-brand-500 focus:outline-none"
                onClick={() => onFeedbackTypeChange(key as FeedbackType)}
                type="button"
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span className="text-xl leading-6">{value.title}</span>
              </button>
            )
          })
        }
      </div>
    </>
  )
}