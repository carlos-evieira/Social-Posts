import styles from "./Avatar.module.css"
// usando desestruturação, setamos o valor de hasBorder como true, pois 
// mesmo que a propriedade não seja passada, valera como verdadeira

export const Avatar = ({hasBorder = true, src }) => {
  return (
    <img className={hasBorder ? styles.avatarWhithBorder : styles.avatar} src={src}/>
  )
}
