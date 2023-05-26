import { getRounds, hashSync } from 'bcryptjs';
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class User{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({unique:true})
    email: string

    @Column({length:127})
    password: string

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isEncrypted = getRounds(this.password)
        if(!isEncrypted){
            this.password =  hashSync(this.password, 10)
        }
    }
}

export default User