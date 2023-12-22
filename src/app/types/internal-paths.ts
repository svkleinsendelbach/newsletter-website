export const internalPaths = {
    'home': {
        title: 'Startseite',
        path: ''
    },
    ':id': {
        title: 'Newsletter',
        path: ':id'
    },
} satisfies Record<string, {
    title: string;
    path: string;
}>;

export type InternalPathKey = keyof typeof internalPaths;
