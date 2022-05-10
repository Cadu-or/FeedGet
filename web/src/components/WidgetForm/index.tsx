import { CloseButton } from "../Buttons";

import probImageUrl from '../../images/problema.svg'
import ideiaImageUrl from '../../images/ideia.svg'
import outroImageUrl from '../../images/outro.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

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
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  
  function setFeedbackNull(){
    setFeedbackType(null)
  }

  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {!feedbackType ? (
        < FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
      ) : (
        
        <FeedbackContentStep 
          feedbackType={feedbackType}
          onFeedbackNull={setFeedbackNull}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Feito por <a className="underline underline-offset-2" href="https://github.com/Cadu-or"> cadu-or </a>.
      </footer>
    </div>
  )
}
