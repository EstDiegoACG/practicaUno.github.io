function form() {

    return (
        <>
        <div className="container">
            <form>
                <h1>Formulario de Comida</h1>

                <label htmlFor="food">Comida</label>
                <input type="text" id="food" name="food" required></input>

                <label>Tipo de Comida</label>
                
                <div>
                    <label htmlFor="breakfast">
                    <input type="radio" id="breakfast" name="meal" value="desayuno"></input>
                    Desayuno
                    </label>
        
                    <label htmlFor="lunch">
                    <input type="radio" id="lunch" name="meal" value="almuerzo"></input>
                    Almuerzo
                    </label>
        
                    <label htmlFor="dinner">
                    <input type="radio" id="dinner" name="meal" value="cena"></input>
                    Cena
                    </label>

                    <label htmlFor="vegetarian">
                    <input type="checkbox" id="vegetarian" name="vegetarian"></input>
                    Vegetariano
                    </label>

                    <button type="submit">Enviar</button>

                </div>

            </form>
        </div>
        </>

    )

}

export default form