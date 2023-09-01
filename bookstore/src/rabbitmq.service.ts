/*eslint-disable*/
import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@nestjs/rabbitmq';
import { RabbitMQService } from './rabbitmq.service';

@Module({
  imports: [RabbitMQModule.forRoot({
    name: 'my-rabbitmq',
    host: 'localhost',
    port: 5672,
    username: 'guest',
    password: 'guest',
  })],
  providers: [RabbitMQService],
})
export class AppModule {}

export { RabbitMQService };
