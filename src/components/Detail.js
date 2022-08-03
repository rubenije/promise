const Detail = () => {
    return (
        <>
            <div className="container pt-4 mt-4">
            <div className="row">
                    <div className="col-12 col-md-12">
                        DETALLE DEL PRODUCTO
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 col-md-6">
                        <img src="http://placeimg.com/640/480/any"></img>
                    </div>
                    <div className="col-12 col-md-6">
                        <h1>Nombre del Producto</h1>
                        <h5 className="valor">$10.800</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Detail;