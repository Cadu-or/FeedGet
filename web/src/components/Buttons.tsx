import { Popover } from "@headlessui/react";
import { X, ArrowLeft } from "phosphor-react";

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