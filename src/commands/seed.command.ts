import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import * as bcrypt from 'bcrypt';
import * as faker from "faker";
import { User, UserRoleEnum } from "src/users/entities/user.entity";
import { UsersService } from "src/users/users.service";

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  console.log('in seed File');
  // application logic...

  // Todo : Seed User
  const userService = app.get(UsersService);
  console.log('seeding users');
  for (let i = 1; i < 10; i++) {
    const user = new User();
    user.email = faker.internet.email();
    user.firstname = faker.name.firstName();
    user.lastname = faker.name.lastName();
    user.phone = faker.datatype.number({ 'min': 10000000, 'max': 99999999 })
    user.birthday = faker.date.past();
    let password = 'user';
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    user.password = hashedPassword;
    user.role = i % 3 == 0 ? UserRoleEnum.admin : UserRoleEnum.user;
    await userService.create(user);
  }
  console.log('end seeding users');


  await app.close();
}
bootstrap();