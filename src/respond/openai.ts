import OpenAI from 'openai';
import { variables } from '../env';

export const openAI = variables.OPENAI_KEY ? new OpenAI({
	apiKey: variables.OPENAI_KEY,
}) : undefined;

export async function respond(instance: OpenAI, message: string): Promise<string | undefined> {
	const chatCompletion = await instance.chat.completions.create({
		messages: [
			{ role: 'system', content: 'You are an AI assistant, programmed to be helpful, kind, and responsive to the user.' },
			{ role: 'user', content: message }
		],
		model: 'gpt-3.5-turbo',
	});

	return chatCompletion.choices[0].message.content ?? undefined;
}
