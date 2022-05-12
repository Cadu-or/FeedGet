import { CloseButton } from "../Buttons";

import probImageUrl from '../../images/problema.svg'
import ideiaImageUrl from '../../images/ideia.svg'
import outroImageUrl from '../../images/outro.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  Problema: {
    title: 'Problema',
    image: {
      source: probImageUrl,
      alt: 'Imagem de um bug',
    }
  },
  Ideia: {
    title: 'Ideia',
    image: {
      source: ideiaImageUrl,
      alt: 'Imagem de uma lâmpada',
    },
  },
  Outro: {
    title: 'Outro',
    image: {
      source: outroImageUrl,
      alt: 'Imagem de uma Reticência',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function setFeedbackNull() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {feedbackSent ? (
        <FeedbackSuccessStep onsetFeedbackNull={setFeedbackNull}/>
      ) :
        <>
          {!feedbackType ? (
            < FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (

            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackNull={setFeedbackNull}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      }

      <footer className="text-xs text-neutral-400">
        Feito por <a className="underline underline-offset-2" href="https://github.com/Cadu-or"> cadu-or </a>.
      </footer>
    </div>
  )
}
