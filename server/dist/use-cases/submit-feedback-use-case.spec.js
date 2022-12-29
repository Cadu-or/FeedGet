"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const submit_feedback_use_case_1 = require("./submit-feedback-use-case");
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
const submitFeedback = new submit_feedback_use_case_1.SubmitFeedbackUseCase({ create: createFeedbackSpy }, { sendMail: sendMailSpy });
describe('Submit Feedback', () => {
    it('nao deveria conseguir enviar um feedback sem um tipo', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'Exemplo',
            screenshot: 'data:image/png;base64,Exemplo.jpg',
        })).rejects.toThrow();
    });
    it('nao deveria conseguir enviar um feedback sem um comentario', async () => {
        await expect(submitFeedback.execute({
            type: 'Outro',
            comment: '',
            screenshot: 'data:image/png;base64,Exemplo.jpg',
        })).rejects.toThrow();
    });
    it('nao deveria conseguir enviar um feedback com o formato de imagem errado', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Exemplo',
            screenshot: 'Exemplo.jpg',
        })).rejects.toThrow();
    });
    it('deveria conseguir enviar um feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Exemplo',
            screenshot: 'data:image/png;base64,Exemplo.jpg',
        })).resolves.not.toThrow();
        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
});
