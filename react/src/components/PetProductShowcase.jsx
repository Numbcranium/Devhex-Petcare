import '../styles/petProducts.css'
import { BiSearch } from 'react-icons/bi'
import { BiChevronDown } from 'react-icons/bi'
import { FiArrowUpRight } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { BsFilter } from 'react-icons/bs'

const PetProducts = () =>{
    const categories = [
        'Food', 'Toys', 'Grooming',
        'Bedding', 'Medicine'
    ]

    const brands = [
        'Pawfect', 'MeowMix', 'PetCare+',
        'WoofCo', 'HappyPaws', 'SnugglePaws'
    ]


    const products = [
  {
    "product_name": "Hamster Food Mix",
    "category": "Food",
    "price": 12.75,
    "stock": 302,
    "brand": "HappyPaws",
    "description": "Nutritious mix designed for hamsters.",
    "image_url": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6"
  },
  {
    "product_name": "Cat Bed Plush",
    "category": "Bedding",
    "price": 45.99,
    "stock": 45,
    "brand": "SnugglePaws",
    "description": "Soft and comfortable bed for cats.",
    "image_url": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6"
  },
  {
    "product_name": "Dog Blanket Cozy",
    "category": "Bedding",
    "price": 33.92,
    "stock": 399,
    "brand": "Pawfect",
    "description": "Warm and cozy blanket for pets.",
    "image_url": "https://images.unsplash.com/photo-1593139251928-37b3e9d2a32b"
  },
  {
    "product_name": "Cat Collar with Bell",
    "category": "Accessories",
    "price": 14.50,
    "stock": 278,
    "brand": "MeowMix",
    "description": "Lightweight collar with safety bell.",
    "image_url": "https://images.unsplash.com/photo-1574158622682-e40e69881006"
  },
  {
    "product_name": "Bird Seed Mix Premium",
    "category": "Food",
    "price": 19.11,
    "stock": 321,
    "brand": "PetCare+",
    "description": "Healthy premium mix for birds.",
    "image_url": "https://images.unsplash.com/photo-1501706362039-c6e80948e90f"
  },
  {
    "product_name": "Pet Cooling Mat",
    "category": "Bedding",
    "price": 29.99,
    "stock": 30,
    "brand": "SnugglePaws",
    "description": "Cooling mat to keep pets comfortable.",
    "image_url": "https://images.unsplash.com/photo-1583337130417-f88e2b58f6c7"
  },
  {
    "product_name": "Pet Grooming Brush",
    "category": "Grooming",
    "price": 18.75,
    "stock": 486,
    "brand": "WoofCo",
    "description": "Gentle grooming brush for pets.",
    "image_url": "https://images.unsplash.com/photo-1624120464925-3a5e889e1df6"
  },
  {
    "product_name": "Rabbit Chew Sticks",
    "category": "Toys",
    "price": 9.49,
    "stock": 144,
    "brand": "HappyPaws",
    "description": "Safe wooden chew sticks for rabbits.",
    "image_url": "https://images.unsplash.com/photo-1574158622682-e40e69881006"
  },
  {
    "product_name": "Guinea Pig Hideout",
    "category": "Accessories",
    "price": 22.99,
    "stock": 237,
    "brand": "PetCare+",
    "description": "Cozy hideout house for guinea pigs.",
    "image_url": "https://images.unsplash.com/photo-1624120464925-3a5e889e1df6"
  },
  {
    "product_name": "Dog Harness Adjustable",
    "category": "Accessories",
    "price": 24.50,
    "stock": 93,
    "brand": "SnugglePaws",
    "description": "Adjustable and durable harness.",
    "image_url": "https://images.unsplash.com/photo-1507149833265-60c372daea22"
  },
  {
    "product_name": "Cat Tunnel Foldable",
    "category": "Toys",
    "price": 19.95,
    "stock": 187,
    "brand": "Pawfect",
    "description": "Interactive foldable play tunnel.",
    "image_url": "https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
  },
  {
    "product_name": "Puppy Teething Ring",
    "category": "Toys",
    "price": 12.99,
    "stock": 276,
    "brand": "WoofCo",
    "description": "Durable teething ring for puppies.",
    "image_url": "https://images.unsplash.com/photo-1517849845537-4d257902454a"
  },
  {
    "product_name": "Pet Water Fountain",
    "category": "Accessories",
    "price": 35.40,
    "stock": 120,
    "brand": "PetCare+",
    "description": "Automatic fountain keeps pets hydrated.",
    "image_url": "https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
  },
  {
    "product_name": "Pet Nail Clippers",
    "category": "Grooming",
    "price": 16.85,
    "stock": 390,
    "brand": "HappyPaws",
    "description": "Safe nail clippers for pets.",
    "image_url": "https://images.unsplash.com/photo-1624120464925-3a5e889e1df6"
  },
  {
    "product_name": "Cat Scratching Post",
    "category": "Toys",
    "price": 29.50,
    "stock": 220,
    "brand": "MeowMix",
    "description": "Durable scratching post for cats.",
    "image_url": "https://images.unsplash.com/photo-1574158622682-e40e69881006"
  },
  {
    "product_name": "Organic Dog Food",
    "category": "Food",
    "price": 21.99,
    "stock": 311,
    "brand": "Pawfect",
    "description": "Organic and nutritious dog food.",
    "image_url": "https://images.unsplash.com/photo-1507149833265-60c372daea22"
  },
  {
    "product_name": "Pet Stain Remover Spray",
    "category": "Medicine",
    "price": 14.75,
    "stock": 180,
    "brand": "WoofCo",
    "description": "Removes pet stains and odors.",
    "image_url": "https://images.unsplash.com/photo-1583337130417-f88e2b58f6c7"
  },
  {
    "product_name": "Puppy Training Pads",
    "category": "Training",
    "price": 24.50,
    "stock": 410,
    "brand": "SnugglePaws",
    "description": "Leak-proof training pads for puppies.",
    "image_url": "https://images.unsplash.com/photo-1517849845537-4d257902454a"
  },
  {
    "product_name": "Dog Chew Bone",
    "category": "Toys",
    "price": 9.99,
    "stock": 367,
    "brand": "WoofCo",
    "description": "Durable chew bone for dogs.",
    "image_url": "https://images.unsplash.com/photo-1507149833265-60c372daea22"
  },
  {
    "product_name": "Cat Litter Fresh Scent",
    "category": "Bedding",
    "price": 18.49,
    "stock": 210,
    "brand": "MeowMix",
    "description": "Fresh litter with odor control.",
    "image_url": "https://images.unsplash.com/photo-1574158622682-e40e69881006"
  },
  {
    "product_name": "Rabbit Hay Feeder",
    "category": "Accessories",
    "price": 22.00,
    "stock": 142,
    "brand": "Pawfect",
    "description": "Hay feeder for rabbits and guinea pigs.",
    "image_url": "https://images.unsplash.com/photo-1624120464925-3a5e889e1df6"
  },
  {
    "product_name": "Reptile Heat Lamp",
    "category": "Accessories",
    "price": 39.15,
    "stock": 97,
    "brand": "PetCare+",
    "description": "Heating lamp for reptiles.",
    "image_url": "https://images.unsplash.com/photo-1501706362039-c6e80948e90f"
  },
  {
    "product_name": "Dog Shampoo Fresh Coat",
    "category": "Grooming",
    "price": 15.30,
    "stock": 301,
    "brand": "HappyPaws",
    "description": "Gentle shampoo for dogs.",
    "image_url": "https://images.unsplash.com/photo-1583337130417-f88e2b58f6c7"
  },
  {
    "product_name": "Catnip Mouse Toy",
    "category": "Toys",
    "price": 12.25,
    "stock": 255,
    "brand": "MeowMix",
    "description": "Catnip-filled toy mouse.",
    "image_url": "https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
  },
  {
    "product_name": "Flea & Tick Collar",
    "category": "Medicine",
    "price": 19.49,
    "stock": 178,
    "brand": "SnugglePaws",
    "description": "All-natural flea and tick protection.",
    "image_url": "https://images.unsplash.com/photo-1507149833265-60c372daea22"
  },
  {
    "product_name": "Hamster Bedding Soft",
    "category": "Bedding",
    "price": 10.99,
    "stock": 140,
    "brand": "Pawfect",
    "description": "Soft bedding for hamsters.",
    "image_url": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6"
  },
  {
    "product_name": "Bird Perch Wooden",
    "category": "Accessories",
    "price": 13.95,
    "stock": 175,
    "brand": "HappyPaws",
    "description": "Natural wooden perch for birds.",
    "image_url": "https://images.unsplash.com/photo-1501706362039-c6e80948e90f"
  },
  {
    "product_name": "Fish Flake Food",
    "category": "Food",
    "price": 7.49,
    "stock": 220,
    "brand": "WoofCo",
    "description": "Nutritious flakes for aquarium fish.",
    "image_url": "https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
  }
    ]

    let highestPrice = products[0].price;

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