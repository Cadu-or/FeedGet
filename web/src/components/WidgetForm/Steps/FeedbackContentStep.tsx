import { FeedbackType, feedbackTypes } from "..";
import { CloseButton, ArrowLeftButton, SendFeedback, TakeScreenshot } from "../../Buttons";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  onFeedbackNull: () => void
}

export function FeedbackContentStep({ feedbackType, onFeedbackNull }: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
      <header className="flex">
        <button
          type="button"
          onClick={onFeedbackNull}
        >
          <ArrowLeftButton />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"></img>
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-200 border-zinc-600 text-zinc-100 rounded-md bg-transparent focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
        />
        <footer className="flex mt-2  gap-2">
          <TakeScreenshot />
          <SendFeedback />
        </footer>
      </form>
    </>
  )
}