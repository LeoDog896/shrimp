import { openAI, respond as openAIRespond } from "./openai";

export async function respond(message: string): Promise<string | undefined> {
	return openAI ? await openAIRespond(openAI, message) : undefined;
}
