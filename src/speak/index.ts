import { speak as speakSay } from './say';

export async function speak(message: string): Promise<symbol | undefined> {
	return await speakSay(message);
}
