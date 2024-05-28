import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/// Admin login table
@Entity()
export class admin {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column({ length: 200 })
  password: string;
}
