export enum ROUTES {
    IMPORT = 'import',
    CREATE = 'create-event',
    SETTINGS = 'settings',
    RESYNC = 'resync',
}

export const ROUTES_MAP: { [routeName: string]: string } = {
    [ROUTES.CREATE]: '/create-event',
    [ROUTES.IMPORT]: '/import',
    [ROUTES.SETTINGS]: '/settings',
    [ROUTES.RESYNC]: '/resync',
};