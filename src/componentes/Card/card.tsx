export default function Card(props:any) {

    return(
      <div>
        <p>{props.data}</p>
        <h4>{props.titulo}</h4>
        <p>{props.empresa}</p>
        <p>{props.paragrafo}</p>
      </div>
    )
  }