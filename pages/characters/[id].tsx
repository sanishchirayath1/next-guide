import style from '../../styles/character.module.scss'
import type { GetServerSideProps, GetStaticPaths, NextPage } from "next"
import Image from "next/image"
import imageLoader from "../../imageLoader"
import { Character, GetCharacterResults } from "../../types"

const characterPage = ({character} : {character: Character}) => {
    console.log(character)
    return (
        <div className={style.container}>
            <div className={style.character}>
                <h1>{character.name}</h1>
                <Image
                loader={imageLoader}
                unoptimized
                src={character.image}
                alt={character.name}
                width={300}
                height={300}
                />
                <div className={style.characterDetails}>
                    <p> <span>Status: </span>{character.status} </p>
                    <p><span> Gender: </span>{character.gender} </p>
                    <p><span>Species: </span>{character.species} </p>
                    <p><span> Origin: </span> {character.origin.name}</p>
                    <p><span>Location: </span>{character.location.name} </p>
                </div>
                
            </div>
        </div>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${context.query.id}`)
    const character = await res.json()
    
    return {
        props: {
            character
        }
    }
}


export default characterPage
