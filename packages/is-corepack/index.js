import * as process from 'node:process';

if (!process.env.COREPACK_ROOT) {
    console.error(
        'Your pnpm is not installed by corepack.\n' +
            '1. Please uninstall your pnpm.\n' +
            '   e.g. run `npm uninstall -g pnpm` if it was installed by npm.\n' +
            '2. And then run `corepack enable pnpm` to enable corepack pnpm.',
    );
    process.exit(1);
}
