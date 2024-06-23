import { Command } from '@commander-js/extra-typings';
import { respond } from './respond';
import { speak } from './speak';

const program = new Command();

program
	.action(() => {

	});

program
	.command("respond")
	.argument("<message>")
	.action(async (message) => {
		console.log(await respond(message));
	})

program
	.command("speak")
	.argument("<message>")
	.action(async (message) => {
		await speak(message);
	});

program.parse();
