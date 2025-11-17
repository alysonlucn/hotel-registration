import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Address } from "./Address";

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ unique: true })
    cpf!: string;
    
    @OneToOne(() => Address, (address) => address.client, {
        cascade: true,
    })

    @JoinColumn()
    address!: Address;
}
