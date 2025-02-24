import { config } from 'dotenv';

config();

class ConfigService {
  constructor(private readonly env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`Config error - missing env.${key}`);
    }
    return value as string;
  }

  public ensureValues(keys: string[]): ConfigService {
    keys.forEach((key) => this.getValue(key));
    return this;
  }

  public getPort(): number {
    return Number(this.getValue('PORT')) as number;
  }

  public getJwtSecret(): string{
    return this.getValue("JWT_SECRET");
  }

  public isProduction(): boolean {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }

  public getOrigin(): string[] {
    try {
      const allowOrigin: string[] = this.getValue('ALLOW_ORIGINS', false).split(',').map(origin => origin.trim());
  
      return allowOrigin;
    } catch (error: any) {
      return []
    }
  }

  

  public getTypeOrmConfig() {
    return {
      host: this.getValue('POSTGRES_HOST'),
      port: parseInt(this.getValue('POSTGRES_PORT')),
      username: this.getValue('POSTGRES_USER'),
      password: this.getValue('POSTGRES_PASSWORD'),
      database: this.getValue('POSTGRES_DATABASE'),
      ssl: Boolean(this.isProduction()),
      synchronize: !Boolean(this.isProduction()),
    };
  }
}

const envConfigService = new ConfigService(process.env).ensureValues([
  'POSTGRES_HOST',
  'POSTGRES_PORT',
  'POSTGRES_USER',
  'POSTGRES_PASSWORD',
  'POSTGRES_DATABASE',
  'POSTGRES_SUNCHRONIZE',
  'JWT_SECRET',
  'ALLOW_ORIGINS',
  'MODE',
]);


export {envConfigService};