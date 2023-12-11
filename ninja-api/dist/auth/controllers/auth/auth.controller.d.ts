export declare class AuthController {
    login(): Promise<{}>;
    getAuthSession(session: Record<string, any>): Promise<Record<string, any>>;
    getAuthStatus(req: Request): Promise<ReadableStream<Uint8Array>>;
}
