import { Entity, Column, PrimaryColumn } from 'typeorm';
@Entity()
export class question {
  @PrimaryColumn()
  id: number;
  @Column({ length: 10000 })
  prompt: string;
 
}
