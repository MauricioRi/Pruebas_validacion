// import React, { PureComponent } from 'react';
// import ItemCategory from './ItemCategory';
// import { withStyles } from '@material-ui/styles';
// import { Grid } from '@material-ui/core';
// //import categories from "../../../../../services/getSubcategories";


// const useStyles = theme => ({
//     root: {
//         width: '50vw',
//         backgroundColor: theme.palette.background.paper,
//         padding: '20px 40px 20px 20px',
//     },
// });

// class CategoryListSidebar extends PureComponent {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [],
//         }
//     }

//     async componentDidMount() {
//         categories().then(({ subcategorias }) => {
//             this.setState({ data: subcategorias })
//             console.log('CategoryListSidebar', subcategorias);

//         })
//     }

//     render() {
//         const { classes } = this.props;

//        // return (
//            // <Grid container className={classes.root} spacing={2}>
//              //   {this.state.data.map(
//                //     (category) => <ItemCategory category={category} key={`${category.idSubcategory}${category.idCategory}`} />)}
//             //</Grid>
//         );
//     }
// }
// //export default withStyles(useStyles)(CategoryListSidebar);