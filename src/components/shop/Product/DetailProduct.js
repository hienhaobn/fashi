import React, { Component } from 'react'
import './css/DetailProduct.css';
import HeaderWeb from '../../base/header/HeaderWeb';
import FooterWeb from '../../base/footer/FooterWeb';
import BreacrumbSection from '../../base/BreacrumbSection/BreacrumbSection';
 class DetailProduct extends Component {
    render() {
        console.log('====', this.props.match);
        console.log('====', this.props.match.params.id);
        return (
            <div>
            <HeaderWeb/>
            <BreacrumbSection/>
            <div className="product">
              <div className="container">
                
                <div className="row product_row">
                  {/* Product Image */}
                  <div className="col-lg-7">
                    <div className="product_image">
                      <div className="product_image_large"><img src="images/product_image_1.jpg" alt="" /></div>
                      <div className="product_image_thumbnails d-flex flex-row align-items-start justify-content-start">
                        <div className="product_image_thumbnail" style={{backgroundImage: 'url(images/product_image_1.jpg)'}} data-image="images/product_image_1.jpg" />
                        <div className="product_image_thumbnail" style={{backgroundImage: 'url(images/product_image_2.jpg)'}} data-image="images/product_image_2.jpg" />
                        <div className="product_image_thumbnail" style={{backgroundImage: 'url(images/product_image_4.jpg)'}} data-image="images/product_image_4.jpg" />
                      </div>
                    </div>
                  </div>
                  {/* Product Content */}
                  <div className="col-lg-5">
                    <div className="product_content">
                      <div className="product_name">2 Piece Swimsuit</div>
                      <div className="product_price">$35.00</div>
                      <div className="rating rating_4" data-rating={4}>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      {/* In Stock */}
                      
                      <div className="product_text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis quam ipsum. Pellentesque consequat tellus non tortor tempus, id egestas elit iaculis. Proin eu dui porta, pretium metus vitae, pharetra odio. Sed ac mi commodo, pellentesque erat eget, accumsan justo. Etiam sed placerat felis. Proin non rutrum ligula.</p>
                      </div>
                      {/* Product Quantity */}
                      <div className="product_quantity_container">
                        <span>Quantity</span>
                        <div className="product_quantity clearfix">
                          <input id="quantity_input" type="text"  />
                          
                        </div>
                      </div>
                      {/* Product Size */}
                      <div className="product_size_container">
                        <span>Size</span>
                        <div className="product_size">
                          <ul className="d-flex flex-row align-items-start justify-content-start">
                            <li>
                              <input type="radio" id="radio_1" name="product_radio" className="regular_radio radio_1" />
                              <label htmlFor="radio_1">XS</label>
                            </li>
                            <li>
                              <input type="radio" id="radio_2" name="product_radio" className="regular_radio radio_2" defaultChecked />
                              <label htmlFor="radio_2">S</label>
                            </li>
                            <li>
                              <input type="radio" id="radio_3" name="product_radio" className="regular_radio radio_3" />
                              <label htmlFor="radio_3">M</label>
                            </li>
                            <li>
                              <input type="radio" id="radio_4" name="product_radio" className="regular_radio radio_4" />
                              <label htmlFor="radio_4">L</label>
                            </li>
                            <li>
                              <input type="radio" id="radio_5" name="product_radio" className="regular_radio radio_5" />
                              <label htmlFor="radio_5">XL</label>
                            </li>
                          </ul>
                        </div>
                        <div className="button cart_button"><a href="#">add to cart</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Reviews */}
                <div className="row">
                  <div className="col">
                    <div className="reviews">
                      <div className="reviews_title">reviews</div>
                      <div className="reviews_container">
                        <ul>
                          {/* Review */}
                          <li className=" review clearfix">
                            <div className="review_image"><img src="images/review_1.jpg" alt="" /></div>
                            <div className="review_content">
                              <div className="review_name"><a href="#">Maria Smith</a></div>
                              <div className="review_date">Nov 29, 2017</div>
                              <div className="rating rating_4 review_rating" data-rating={4}>
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                              <div className="review_text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis quam ipsum. Pellentesque consequat tellus non tortor tempus, id egestas elit iaculis. Proin eu dui porta, pretium metus vitae, pharetra odio. Sed ac mi commodo, pellentesque erat eget, accumsan justo. Etiam sed placerat felis. Proin non rutrum ligula. </p>
                              </div>
                            </div>
                          </li>
                          {/* Review */}
                          <li className=" review clearfix">
                            <div className="review_image"><img src="images/review_2.jpg" alt="" /></div>
                            <div className="review_content">
                              <div className="review_name"><a href="#">Maria Smith</a></div>
                              <div className="review_date">Nov 29, 2017</div>
                              <div className="rating rating_4 review_rating" data-rating={4}>
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                              <div className="review_text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis quam ipsum. Pellentesque consequat tellus non tortor tempus, id egestas elit iaculis. Proin eu dui porta, pretium metus vitae, pharetra odio. Sed ac mi commodo, pellentesque erat eget, accumsan justo. Etiam sed placerat felis. Proin non rutrum ligula. </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Leave a Review */}
                <div className="row">
                  <div className="col">
                    <div className="review_form_container">
                      <div className="review_form_title">leave a review</div>
                      <div className="review_form_content">
                        <form action="#" id="review_form" className="review_form">
                          <div className="d-flex flex-md-row flex-column align-items-start justify-content-between">
                            <input type="text" className="review_form_input" placeholder="Name" required="required" />
                            <input type="email" className="review_form_input" placeholder="E-mail" required="required" />
                            <input type="text" className="review_form_input" placeholder="Subject" />
                          </div>
                          <textarea className="review_form_text" name="review_form_text" placeholder="Message" defaultValue={""} />
                          <button type="submit" className="review_form_button">leave a review</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>		
            </div>
            {/* Newsletter */}
        
            <FooterWeb/>
          </div>
           
        
        )
    }
}

export default DetailProduct;
