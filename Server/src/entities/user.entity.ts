import { Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { data } from './data.entity';

@Entity()
export class user {
  @PrimaryColumn()
  u_id: string;

  @OneToMany(() => data, (Data) => Data.user)
  dataEntries: data[];

}
