export enum ROUTES {
    IMPORT = 'import',
    CREATE = 'create-event',
    LIST = 'list-events',
}

export const ROUTES_MAP: { [routeName: string]: string } = {
    [ROUTES.CREATE]: '/create-event',
    [ROUTES.IMPORT]: '/import',
    [ROUTES.LIST]: '/list-events',
};