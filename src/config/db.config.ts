import {DataSource} from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { envConfigService } from './db-config.service'

export const appDataSource = new DataSource({
    type: 'postgres',
    ...envConfigService.getTypeOrmConfig(),
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrationsRun: false,
    migrationsTableName: 'migrations_auth',
    namingStrategy: new SnakeNamingStrategy()
})