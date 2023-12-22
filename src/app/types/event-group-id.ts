export type EventGroupId =
    | 'general'
    | 'football-adults/general'
    | 'football-adults/first-team'
    | 'football-adults/second-team'
    | 'football-adults/ah-team'
    | 'football-youth/general'
    | 'football-youth/a-youth'
    | 'football-youth/b-youth'
    | 'football-youth/c-youth'
    | 'football-youth/d-youth'
    | 'football-youth/e-youth'
    | 'football-youth/f-youth'
    | 'football-youth/g-youth'
    | 'gymnastics'
    | 'dancing';

export namespace EventGroupId {
    export const all: EventGroupId[] = [
        'general',
        'football-adults/general',
        'football-adults/first-team',
        'football-adults/second-team',
        'football-adults/ah-team',
        'football-youth/general',
        'football-youth/a-youth',
        'football-youth/d-youth',
        'football-youth/c-youth',
        'football-youth/d-youth',
        'football-youth/e-youth',
        'football-youth/f-youth',
        'football-youth/g-youth',
        'gymnastics',
        'dancing'
    ];

    export const title: Record<EventGroupId, string> = {
        'general': 'Allgemeines',
        'football-adults/general': 'Herrenfußball',
        'football-adults/first-team': '1. Mannschaft',
        'football-adults/second-team': '2. Mannschaft',
        'football-adults/ah-team': 'Alte Herren',
        'football-youth/general': 'Jugendfußball',
        'football-youth/a-youth': 'A-Jugend',
        'football-youth/b-youth': 'B-Jugend',
        'football-youth/c-youth': 'C-Jugend',
        'football-youth/d-youth': 'D-Jugend',
        'football-youth/e-youth': 'E-Jugend',
        'football-youth/f-youth': 'F-Jugend',
        'football-youth/g-youth': 'G-Jugend',
        'gymnastics': 'Gymnastik',
        'dancing': 'Tanzen'
    };
}
