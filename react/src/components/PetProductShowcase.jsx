import '../styles/petProducts.css'
import { BiSearch } from 'react-icons/bi'
import { BiChevronDown } from 'react-icons/bi'
import { FiArrowUpRight } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { BsFilter } from 'react-icons/bs'
import productsData from '../public/data/products.json'
import categoriesData from '../data/categories.json'
import brandsData from '../data/brands.json'

const PetProducts = () =>{
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [brands, setBrands] = useState([])

    useEffect(() => {
        setProducts(productsData)
        setCategories(categoriesData)
        setBrands(brandsData)
    }, [])

    let highestPrice = products.length > 0 ? products[0].price : 0;

    products.forEach(product => {
        if(product.price > highestPrice){
            highestPrice = product.price
        }
    });

    const [noOfProducts, setNoOfProducts] = useState(products.length)

    const [filteredCategory, setFilteredcategory] = useState([]);
    const [filteredBrands, setFilteredBrands] = useState([]);
    const [filteredPrices, setFilteredPrices] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [filterType, setFilterType] = useState("all")

    const filterByCategory = (categoryC) =>{
        let filteredProducts = products.filter(product =>
            product.category == categoryC
        )
        setFilteredcategory(filteredProducts);
        setFilterType("category");
        setNoOfProducts(filteredProducts.length)
    }

    const filterByBrands = (brandB) =>{
        let ProductsByBrands = products.filter(product =>
            product.brand == brandB
        )
        setFilteredBrands(ProductsByBrands);
        setFilterType("brands");
        setNoOfProducts(filteredBrands.length)
    }

    const [priceRange, setPriceRange] = useState(
        {
          from: 0,
          to: 0
        }
    )

    const handleChange = (e) =>{
        setPriceRange({...priceRange, [e.target.name] : e.target.value})
    }


    const filterByPrice = (from, to) =>{
        let ProductsByPrice = products.filter(product =>
            product.price >= from && product.price <= to
        )
        setFilteredPrices(ProductsByPrice);
        setFilterType("price");
        setNoOfProducts(filteredPrices.length)

    }

    const [searchValue, setSearchValue] = useState('');

    const SearchBar = ({searchValue, onSearch}) => {

        const handleChange = (e) =>{
            onSearch(e.target.value)
        }

        return(
            <div className="searchBar">
                <BiSearch size={18} />
                <input onChange={handleChange} type="text" name=""
                value={searchValue}
                id="" placeholder='Search for products'/>
            </div>
        )
    }

    const filterBySearch = (search) =>{
            setSearchValue(search)
            let input = search.toLowerCase();
            let ProductsBySearch = products.filter(
                product => product.product_name.toLowerCase().includes(input)
            )
            setSearchResults(ProductsBySearch);
            setNoOfProducts(searchResults.length);
            setFilterType("search");
    }

    return(
        <>
        <div className="productsCon">
            <div className="flexCon">
                <div className="filters">
                    <div className="filterBlock">
                        <h2>Category</h2>
                        <ul className="options">
                            <li onClick={() => setFilterType("all")}>All</li>
                            {
                                categories.map((category, index) =>(
                                    <li key={index} onClick={() => filterByCategory(category)}>{category}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="filterBlock">
                        <h2>Brands</h2>
                        <ul className="options">
                            {
                                brands.map((brand, index) =>(
                                    <li onClick={() => filterByBrands(brand)} key={index}>{brand}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="filterBlock">
                        <h2>Price</h2>
                        <div className="priceRange">
                            <p>The highest price is ${highestPrice}</p>
                            <div className="inputs">
                                <span>$</span>
                                <input onChange={handleChange} type="number" name="from" id="" placeholder='From' />
                                <input onChange={handleChange} type="number" name="to" id="" placeholder='To'/>
                            </div>
                            <button className="filterB" onClick={() => filterByPrice(priceRange.from, priceRange.to)}>
                                <BsFilter size={16}/>
                                <span>Filter</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="products">
                    <div className="results">
                        <p>Showing {noOfProducts} of {products.length} products</p>
                        <div className="side">
                            <SearchBar searchValue={searchValue} onSearch={filterBySearch}/>
                        </div>
                    </div>
                    <div className="productsGrid">
                        {
                            noOfProducts == 0 ? "No products found" : ''
                        }
                        {   filterType == "all" &&
                            products.slice(0, 6).map((product, index) =>(
                                <div className='productCard' key={index}>
                                    <img src={product.image_url} alt="" />
                                    <div className="details">
                                        <div className="desc">
                                            <p>{product.product_name}</p>
                                            <p>{product.description}</p>
                                        </div>
                                        <div className="buy">
                                            <p>${product.price}</p>
                                            <button className='buyNow'>
                                                <span>Buy Now</span>
                                                <FiArrowUpRight size={15} fontWeight={9}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        {
                            filterType == "category" &&
                            filteredCategory.map((product, index) =>(
                                <div className='productCard' key={index}>
                                    <img src={product.image_url} alt="" />
                                    <div className="details">
                                        <div className="desc">
                                            <p>{product.product_name}</p>
                                            <p>{product.description}</p>
                                        </div>
                                        <div className="buy">
                                            <p>${product.price}</p>
                                            <button className='buyNow'>
                                                <span>Buy Now</span>
                                                <FiArrowUpRight size={15} fontWeight={9}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        {
                            filterType == "brands" &&
                            filteredBrands.map((product, index) =>(
                                <div className='productCard' key={index}>
                                    <img src={product.image_url} alt="" />
                                    <div className="details">
                                        <div className="desc">
                                            <p>{product.product_name}</p>
                                            <p>{product.description}</p>
                                        </div>
                                        <div className="buy">
                                            <p>${product.price}</p>
                                            <button className='buyNow'>
                                                <span>Buy Now</span>
                                                <FiArrowUpRight size={15} fontWeight={9}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        {
                            filterType == "price" &&
                            filteredPrices.map((product, index) =>(
                                <div className='productCard' key={index}>
                                    <img src={product.image_url} alt="" />
                                    <div className="details">
                                        <div className="desc">
                                            <p>{product.product_name}</p>
                                            <p>{product.description}</p>
                                        </div>
                                        <div className="buy">
                                            <p>${product.price}</p>
                                            <button className='buyNow'>
                                                <span>Buy Now</span>
                                                <FiArrowUpRight size={15} fontWeight={9}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        {
                            filterType == "search" &&
                            searchResults.map((product, index) =>(
                                <div className='productCard' key={index}>
                                    <img src={product.image_url} alt="" />
                                    <div className="details">
                                        <div className="desc">
                                            <p>{product.product_name}</p>
                                            <p>{product.description}</p>
                                        </div>
                                        <div className="buy">
                                            <p>${product.price}</p>
                                            <button className='buyNow'>
                                                <span>Buy Now</span>
                                                <FiArrowUpRight size={15} fontWeight={9}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PetProducts;
