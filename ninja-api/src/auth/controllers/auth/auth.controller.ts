import { Controller, Get, Post, Req, Request, Session, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedGuard, LocalAuthGuard } from 'src/auth/utils/LocalGuard';

@Controller('auth')
export class AuthController {
    @UseGuards(LocalAuthGuard)
    // @UseGuards(AuthGuard('local'))
    @Post('login')
    async login() {
        return {}
    }

    @Get('')
    async getAuthSession(@Session() session: Record<string, any>) {
        console.log(session)
        console.log(session.id)
        session.authenticated = true;
        return session
    }

    @UseGuards(AuthenticatedGuard)
    @Get('status')
    async getAuthStatus(@Request() req: Request) {
        
        return req.body;
    }
}
