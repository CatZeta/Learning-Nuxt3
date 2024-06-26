import type { IncomingMessage, ServerResponse } from 'http';
import { useCookie } from 'nuxt/app';

export default async (req: IncomingMessage, res: ServerResponse) => {

    const userCookie = useCookie(req, 'userCookie');

    req.user = userCookie;
};