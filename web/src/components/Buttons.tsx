import { Popover } from "@headlessui/react";
import html2canvas from "html2canvas";
import { X, ArrowLeft, Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "./Loading";

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

interface SendFeedbackProps {
  comment: string
}

export function SendFeedback({ comment }: SendFeedbackProps) {

  return (
    <button
      type="submit"
      className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:hover:bg-brand-500 disabled:opacity-50"
      disabled={comment.length === 0}
    >
      Enviar Feedback

    </button>
  )
}

interface screenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void
}

export function TakeScreenshot({ screenshot, onScreenshotTook }: screenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true)

    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')

    onScreenshotTook(base64image)
    setIsTakingScreenshot(false)
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        onClick={() => onScreenshotTook(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
        }}
      >
        <Trash weight="fill" />

      </button>
    )
  }

  return (
    <button
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      onClick={handleTakeScreenshot}
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}

    </button>
  )
}