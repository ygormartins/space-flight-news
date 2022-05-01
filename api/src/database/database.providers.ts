import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import * as MongooseDelete from 'mongoose-delete';

export const DatabaseProviders = [
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => {
      const dbUser = config.get('DATABASE_USERNAME');
      const dbPass = config.get('DATABASE_PASSWORD');
      let userPass = '';

      if (dbUser && dbPass) {
        userPass = `${dbUser}:${dbPass}`;
      }

      let uri = config.get('DATABASE_URL');
      if (userPass) {
        uri = [userPass, config.get('DATABASE_URL')].join('@');
      }

      return {
        uri: `mongodb+srv://${uri}`,
        connectionFactory: (connection) => {
          connection.plugin(MongooseDelete, {
            deletedAt: true,
            overrideMethods: true,
          });

          return connection;
        },
      };
    },
  }),
];
