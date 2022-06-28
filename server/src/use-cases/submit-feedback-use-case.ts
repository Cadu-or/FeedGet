import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbackRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {

  constructor(
    private feedbacksRepository: FeedbackRepository,
    private mailAdapter: MailAdapter,
  ){}

  async execute(req: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = req;

    if(!type){
      throw new Error('Tipo obrigatorio nao informado.')
    }

    if(!comment){
      throw new Error('Comentario obrigatorio nao informado.')
    }

    if(screenshot && !screenshot.startsWith('data:image/png;base64')){
      throw new Error('Formato de screenshot invalido.')
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    })

    await this.mailAdapter.sendMail({
      subject: 'Novo Feedback',
      body: [
        `<div style="font-family:sans-serif; font-size: 16px; color: #27272A;">`,
        `<p>Tipo de Feedback: ${type}</p>`, 
        `<p>Comentário: ${comment}</p>`, 
        `</div>`
      ].join('\n')
    })
  }
}