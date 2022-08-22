console.table(groceries)



class App extends React.Component {
    constructor(props) {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    state = { 
        groceries: groceries,
        item: '',
        brand: '',
        units: '',
        quantity: '',
        isPurchased: true
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newItem = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: this.state.quantity,            
        }
        this.setState({
            groceries: [newItem, ...this.state.groceries],
            item: '',
            brand: '',
            units: '',
            quantity: ''
        })
    }

    render() {
        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <lable htmlFor='item'>Item</lable>
                    <input type='text' value={this.state.item} onChange={this.handleChange} id='item' /><br />

                    <lable htmlFor='brand'>Brand</lable>
                    <input type='text' value={this.state.brand} onChange={this.handleChange} id='brand' /><br />

                    <lable htmlFor='units'>Units</lable>
                    <input type='text' value={this.state.units} onChange={this.handleChange} id='units' /><br />
                    
                    <lable htmlFor='quantity'>Quantity</lable>
                    <input type='text' value={this.state.quantity} onChange={this.handleChange} id='quantity' /><br />
                    
                    <lable htmlFor='isPurchased'>isPurchased</lable>
                    <input type='checkbox' value={this.state.isPurchased} onChange={this.handleChange} id='isPurchased' /><br />
                    <input type='submit' />
                </form>
                <div className="products">
                    <h3>Please Purchase our Excellent Groceries</h3>
                    <ul>
                        {this.state.groceries.map(grocery => {
                            return (
                                <ProductList grocery={grocery} />
                            )
                        }
                        )}
                    </ul>
                </div>

                {this.state.groceries.map(grocery => {
                    {
                        return grocery.isPurchased ?
                            (
                                <div>
                                    <ul>
                                        <li>item: {grocery.item}</li>
                                        <li>brand : {grocery.brand}</li>
                                        <li>units: {grocery.units}</li>
                                        <li>quantity: {grocery.quantity}</li>
                                        <li>isPurchased: {grocery.isPurchased}</li>
                                    </ul>
                                </div>
                            ) : null
                    }
                })
                }
                
            </div >
        )
    }


}

ReactDOM.render(<App />, document.querySelector('.container'))