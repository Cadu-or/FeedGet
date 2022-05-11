import { Popover } from "@headlessui/react";
import { X, ArrowLeft, Camera } from "phosphor-react";

export function CloseButton() {
  return (
    <Popover.Button className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100" title="Fechar formulário de feedback">
      <X weight="bold" className="w-4 h-4" />
    </Popover.Button>
  );
}

export function ArrowLeftButton() {
  return (
    <button
      type='button'
      className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" title="Voltar para a tela anterior">
      <ArrowLeft weight="bold" className="w-4 h-4" />
    </button>
  );
}

export function SendFeedback() {
  return (
    <button
      type="submit"
      className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
    >
      Enviar Feedback

    </button>
  )
}

export function TakeScreenshot() {
  return (
    <button
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      <Camera className="w-6 h-6" />

    </button>
  )
}