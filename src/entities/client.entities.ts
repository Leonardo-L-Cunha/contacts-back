import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Contact from './contact.entities';


@Entity('clients')
class Client {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    completeName: string

    @Column({nullable:true, default:null})
    avatar: string

    @Column({unique:true})
    email: string

    @Column()
    phone: string

    @Column({nullable:true, default:null})
    profession: string

    @CreateDateColumn({type: 'date'})
    createdAt: string

    @OneToMany(()=> Contact, contact => contact.client)
    contact: Contact
}

export default Client