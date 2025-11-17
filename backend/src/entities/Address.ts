import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Client } from "./Client";

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    cep!: string;

    @Column()
    street!: string;

    @Column()
    city!: string;

    @Column()
    state!: string;

    @Column({ nullable: true })
    complement!: string;

    @Column({ nullable: true })
    number!: string;

    @OneToOne(() => Client, (client) => client.address)
    client!: Client;
}