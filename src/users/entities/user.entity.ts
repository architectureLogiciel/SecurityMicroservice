import { Type } from 'class-transformer';
import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TimeStampEntity } from '../../generics/db/timestamp.entity';

export enum UserRoleEnum {
  admin = 'admin',
  user = 'user',
}

@Entity('user')
export class User extends TimeStampEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @IsNotEmpty()
  @IsEmail() 
  @Column({ unique: true })
  email: string;

  @IsNotEmpty()
  @Column()
  password: string;

  @IsOptional()
  @IsDate()
  @Type((newType) => Date)
  @Column()
  birthday: Date;

  @Type((newType) => Number)
  @Column()
  phone: number;

  @IsOptional()
  @IsEnum(UserRoleEnum)
  @Column({
    type: 'enum',
    enum: UserRoleEnum,
    default: UserRoleEnum.user,
  })
  role: UserRoleEnum;
}