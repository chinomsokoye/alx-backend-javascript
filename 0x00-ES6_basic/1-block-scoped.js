export default function taskBlock(trueorFalse) {
    const task = false;
    const task2 = true;

    /* eslint-disable no-use-vars */
    if (trueorFalse) {
	const task = true;
	const task2 = false;
    }

    /* eslint-disable no-use-vars */

    return [task, task2];
}
