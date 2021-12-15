import React from 'react'
import '../css/Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/Leadup21-page/Eng-Mobile/1500x600_129_month._CB663607667_.jpg" alt="" className="home__image" />

                <div className="home__row">
                    <Product id="324234" title="Story Book" image="https://www.iuniverse.com/en/resources/publishing/-/media/asl/images/iuniverse/resources/iu_partsofyourbook_frontmatter.ashx?" price={22.22} rating={4} />
                    <Product id="343256" title="Amazon Alexa" price={26} rating={5} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzrbZ0YVo48S0HeYEuq6TfJDIkyz1sSk-Llw&usqp=CAU" />
                    {/*product*/}
                    {/*product*/}

                </div>
                <div className="home__row">
                    <Product id="324233" title="Sandist Card" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfrjUXYG_J-L63Bwlb5q2C6xCZGMdtrbFpyQ&usqp=CAU" price={7.62} rating={4} />
                    <Product id="574233" title="Earbud" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmn3HzA1LWmG_d93-yHHLNuBi7P3S7hyWWCg&usqp=CAU" price={17.62} rating={5} />
                    <Product id="924233" title="Digital Clock" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR3qq0qnelB5JnwDpBHp0tdSHBpcFy6BRXHA&usqp=CAU" price={4.62} rating={4} />
                </div>
                <div className="home__row">
                    <Product id="667788" title="Canon Camera" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXklo9QSjQ-IrDhNioLRFdpyjOQRN3JsTvmQ&usqp=CAU" price={50.5} rating={2}/>
                </div>
            </div>
        </div>
    )
}

export default Home