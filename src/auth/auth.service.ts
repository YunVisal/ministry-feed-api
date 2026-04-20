import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const [existingUser] = await this.userService.getUserByEmail(dto.email);
    if (existingUser) {
      throw new BadRequestException('This email is already registered');
    }

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(dto.password, salt);

    const user = plainToClass(CreateUserDto, dto, {
      excludeExtraneousValues: true,
    });
    user.salt = salt;
    user.hash = hash;

    return this.userService.create(user);
  }

  async login(dto: LoginDto) {
    const [existingUser] = await this.userService.getUserByEmail(dto.email);
    if (!existingUser) {
      throw new BadRequestException('Credential is invalid');
    }

    const hash = await bcrypt.hash(dto.password, existingUser.salt);
    if (hash !== existingUser.hash) {
      throw new BadRequestException('Credential is invalid');
    }

    const payload = { sub: existingUser.id, username: existingUser.username };
    const accessToken = await this.jwtService.signAsync(payload);
    return { accessToken };
  }
}
