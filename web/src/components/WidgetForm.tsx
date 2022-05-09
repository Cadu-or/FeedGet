import { CloseButton } from "./CloseButton";

import probImageUrl from '../images/problema.svg'
import ideiaImageUrl from '../images/ideia.svg'
import outroImageUrl from '../images/outro.svg'

const feedbackTypes = {
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
    }
  },
  Outro: {
    title: 'Outro',
    image: {
      source: outroImageUrl,
      alt: 'Imagem de uma Reticência',
    }
  }
}

export function WidgetForm() {
  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu Feedback</span>

        <CloseButton/>
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (

          <button
            key={key}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            type="button"
            > 
              <img src={value.image.source} alt={value.image.alt} width="40" height="40"/>
              <span>{value.title}</span>
            </button>
          );
        } )}
      </div>

      <footer className="text-xs text-neutral-400">
        Feito por <a className="underline underline-offset-2" href="https://github.com/Cadu-or"> cadu-or </a>.
      </footer>
    </div>
  )
}
