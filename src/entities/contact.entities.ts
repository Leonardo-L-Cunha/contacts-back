import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Client from './client.entities';

@Entity('contacts')
class Contact {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    completeName: string

    @Column({unique: true})
    email: string

    @Column()
    phone: string

    @CreateDateColumn({type: 'date'})
    createdAt: string

    @ManyToOne(() => Client, client => client.contact)
    client: Client
}

export default Contact