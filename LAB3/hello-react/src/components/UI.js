function Name(props) {
    return (
      <li>
        {props.data}. {props.brand}
      </li>
    );
  }


function Brand() {
    const brandNames = [
        {id : 1, brand: "Toyota"},
        {id : 2, brand: "Mazda"},
        {id : 3, brand: "Kubota"}
    ];

    return(
        <>
            <ui>
              {brandNames.map((brandName) => (
                <Name key={brandName.id} brand={brandName.brand} />
              ))}
            </ui>
        </>
    );
}

export default Brand;