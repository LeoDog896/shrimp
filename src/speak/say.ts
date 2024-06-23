import say from 'say';
import { platform } from 'node:os';
import { execa } from 'execa';
import { temporaryFile } from 'tempy';
import { writeFile } from 'node:fs/promises';

const signature = Symbol("say.js");

export async function sayPromise(message: string): Promise<unknown> {
	if (platform() === 'linux') {
		const file = temporaryFile();
		await writeFile(file, message);
		return await execa`festival --tts ${file}`;
	}

	return new Promise((resolve, reject) => {
		return say.speak(message, undefined, 1.0, (err) => err ? reject() : resolve(Symbol()));
	});
}

export async function speak(message: string): Promise<symbol> {
	await sayPromise(message);
	
	return signature;
}
