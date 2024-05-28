import { Entity, Column, PrimaryColumn } from 'typeorm';

/// Chat prompt table for admin

@Entity()
export class prompt {
  @PrimaryColumn()
  id: number;
  @Column({ length: 10000 })
  prompt: string;
 
}
