import { NextPage } from "next"

const staticPage: NextPage = () => {
    return (
        <div>
            GetStaticPaths
        </div>
    )
}

export default staticPage


// import type { GetStaticPaths, NextPage } from "next"
// import Image from "next/image"
// import imageLoader from "../../imageLoader"
// import { Character, GetCharacterResults } from "../../types"

// const characterPage = ({character} : {character: Character}) => {
//     return (
//         <div>
//            <h1>{character.name}</h1>
//               <Image
//                 loader={imageLoader}
//                 unoptimized
//                 src={character.image}
//                 alt={character.name}
//                 width={300}
//                 height={300}
//                 />
//         </div>
//     )
// }

// export const getStaticPaths = async () => {

//     const res = await fetch('https://rickandmortyapi.com/api/character/')

//     const {results}: GetCharacterResults = await res.json()
//     return {
//         paths: results.map(character => {
//             return {
//                 params: {
//                 id: character.id.toString() 
//                 },
                
//             }
//         }),
//         fallback: false,
//     }

// }

// export const getStaticProps = async ({ params} : {params: {id:string}}) => {
//     const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
//     const character = await res.json()
//     return {
//         props: {
//             character
//         }
//     }
// }


// export default characterPage
