class ProductList extends React.Component {

    state = {
        inShoppingCart: false
    }

    toggleCart = () => {
        this.setState({ inShoppingCart: !this.state.inShoppingCart })
    }

    render() {
        return (
            <li onClick={() => this.props.handleAdd(this.props.groceries)}>{this.props.groceries.item}  {this.props.groceries.brand} {this.props.groceries.units} {this.props.groceries.quantity} {this.state.inShoppingCart ? <span> is in the shopping cart! </span> : ''}</li>
        )
    }
}
