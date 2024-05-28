import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { user } from './user.entity';
 
@Entity()
export class data {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 500 })
  prompt: string;
  @Column()
  prompt_time: Date;
  @Column({ type: 'varchar', length: 10000 })
  response: string;
  @Column()
  response_time: Date;
  @ManyToOne(() => user, (user) => user.dataEntries)
  user: user;
}
