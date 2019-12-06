import React, { PureComponent } from 'react';
import Card from "./ProductCard";
import { Grid } from "@material-ui/core";
import { productsBySubcategory } from "../../../services/products";
import { connect } from 'react-redux'
import { SERVER_BASE_URL } from "../../../constants";

class CardList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            successToastOpen: false,
            update: false,
        }
    }

    async getProducts() {
        console.log(this.props);
        const { idCategory, idSubcategory } = this.props
        productsBySubcategory({ idCategory, idSubcategory }).then(({ products }) => {
            if (!products) {
                return null
            }
            products.map(product => product.image = `${SERVER_BASE_URL}${product.image}`)
            this.setState({ data: products, update: false })
        })
    }
    componentDidMount() {
        this.getProducts()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.idCategory === this.props.idCategory && !this.state.update) {
            return null
        }
        this.getProducts()
    }


    render() {
        
        return (
            <Grid container
                direction="row"
                alignItems="center"
                spacing={2}>
                {this.state.data.map((card) => <Card key={card.id} card={card} />)}
            </Grid>
        )

    }
}

export default connect(state => state.category)(CardList)