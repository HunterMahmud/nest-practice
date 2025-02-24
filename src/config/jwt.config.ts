import { envConfigService } from 'src/config/db-config.service';

export default () => ({
    authJwtSecret:  envConfigService.getJwtSecret(),
    authTokenCookieName: 'token',
    authTokenExpiredTime: 24 * 60 * 60 * 1000,
    authRefreshTokenCookieName: "refreshToken",
    authRefreshTokenExpiredTime: 168 * 60 * 60 * 1000,
    isLive: false
})