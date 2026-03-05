import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'

import { LoginUserDto, CreateUserDto } from './dto';
import { User } from './entities/user.entity';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  async create(createUserDto: CreateUserDto) {
    
    try {

      const { password, ...userData } = createUserDto;

      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync( password, 10 ),
      });

      await this.userRepository.save( user );

      return user;
      //TODO: Return JWT
      
    } catch (error) {
      this.handleDBErrors(error);
    }

  }

  async login(loginUserDto: LoginUserDto) {

    const { email, password } = loginUserDto;

    const user = await this.userRepository.findOne({ 
      where: { email },
      select: { email: true, password: true},
     });

     if ( !user ) {
      throw new UnauthorizedException('Credentials are not valid (email)');
     }

     if ( !bcrypt.compareSync(password, user.password) ) {
      throw new UnauthorizedException('Credentials are not valid (password)');
     }

    return user;
    // TODO Return JWT
  }

  private handleDBErrors( error:any ): never {
    if (error.code === '23505'){
      throw new BadRequestException( error.detail );
    }

    console.log(error);

    throw new BadRequestException("Please check server errors");
  }
}
