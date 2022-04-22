import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: process.env.DB_HOST,
        port: 3307,
        username: 'root',
        password: process.env.DB_PASSWORD,
        database: "security",
        autoLoadEntities: true,
        synchronize: true,
        logging: true,
      }
    ),
    UsersModule,
    AuthModule,
    MulterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
