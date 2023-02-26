import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import { FiClock , FiUser , FiMessageCircle , FiHeart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

class BlogDetails extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Blog Details' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7" data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="blog-single-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">50 Mensagens para mandar <br /> pra quem voce ama </h2>
                                    <ul className="blog-meta d-flex justify-content-center align-items-center">
                                        <li><FiClock />May 18, 2020</li>
                                        <li><FiUser />NipaBali</li>
                                        <li><FiMessageCircle />15 Comments</li>
                                        <li><FiHeart />Like</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Blog Details */}
                <div className="rn-blog-details pt--110 pb--70 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner-wrapper">
                                    <div className="inner">
                                        <p>50 Mensagens para mandar pra quem voce ama</p>
                                        
                                        <p className="mt--40">Não há como negar que a vida é imprevisível e, na maioria das vezes, somos forçados a fazer uma mudança para a qual realmente não nos preparávamos ou esperávamos. Perdemos empregos, perdemos pessoas, nos mudamos para outro país ou nos encontramos em circunstâncias desfavoráveis com as quais não fomos ensinados a lidar. Essas coisas o forçam a mudar algo que você não estava pronto para mudar, seja em sua vida ou em si mesmo.</p>
                                        <blockquote className="rn-blog-quote">Mudança é um conceito assustador; especialmente quando você é o tipo de pessoa que vive na zona de conforto ou quando as coisas são estáveis e claras. A mudança também o pressiona a superar certos medos ou inseguranças, algo que todos tememos fazer, mas a verdade é que a única maneira de abraçar a vida é abraçar a mudança. A única maneira de você se proteger das reviravoltas do destino é dominar a arte de mudar e se adaptar a quaisquer novas condições com as quais você seja forçado a viver.</blockquote>
                                        <p>Não há como negar que a vida é imprevisível e, na maioria das vezes, somos forçados a fazer uma mudança para a qual realmente não nos preparávamos ou esperávamos. Perdemos empregos, perdemos pessoas, nos mudamos para outro país ou nos encontramos em circunstâncias desfavoráveis com as quais não fomos ensinados a lidar. Essas coisas o forçam a mudar algo que você não estava pronto para mudar, seja em sua vida ou em si mesmo.</p>
                                        <div className="blog-single-list-wrapper d-flex flex-wrap">
                                            <div className="thumbnail">
                                                <img className="w-100" src="/assets/images/blog/blog-single-01.png" alt="BLog Images"/>
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</span>
                                            </div>
                                            <div className="content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo .</p>
                                                <h4 className="title">Ordered & Unordered Lists.</h4>
                                                <ul className="list-style">
                                                    <li>Yet this above sewed flirted opened ouch</li>
                                                    <li>Goldfinch realistic sporadic ingenuous</li>
                                                    <li>Abominable this abidin far successfully then like piquan</li>
                                                    <li>Risus commodo viverra</li>
                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                                </ul>
                                                <h4 className="title">Ordered & Unordered Lists.</h4>
                                                <ul className="list-style">
                                                    <li>Yet this above sewed flirted opened ouch</li>
                                                    <li>Goldfinch realistic sporadic ingenuous</li>
                                                    <li>Abominable this abidin far successfully then like piquan</li>
                                                    <li>Risus commodo viverra</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <p className="mt--25 mt_sm--5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet. It re are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injectedeed eedhumour, or randomised words which don't look even slightly believable.</p>
                                        <div className="video-wrapper position-relative mb--40">
                                            <div className="thumbnail">
                                                <img src="/assets/images/blog/bl-big-01.jpg" alt="Blog Images"/>
                                            </div>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                            <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div>
                                        <p className="mb--0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet. It re are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injectedeed eedhumour, or randomised words which don't look even slightly believable.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Blog Details */}

                {/* Start BLog Comment Form  */}
                <div className="blog-comment-form pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <h3 className="title mb--40 fontWeight500">Leave a Reply</h3>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12 col-12">
                                                <div className="rnform-group">
                                                    <input type="text" placeholder="Name" />
                                                </div>
                                                <div className="rnform-group">
                                                    <input type="email" placeholder="Email" />
                                                </div>
                                                <div className="rnform-group">
                                                    <input type="text" placeholder="Website" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-12">
                                                <div className="rnform-group">
                                                    <textarea type="text" placeholder="Comment"></textarea>
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="blog-btn">
                                                    {/* <a className="rn-button-style--2 btn-solid" href="#"></a> */}
                                                    <Link className="rn-button-style--2 btn-solid" to="/blog-details"><span>SEND MESSAGE</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End BLog Comment Form  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer /> 

            </React.Fragment>
        )
    }
}
export default BlogDetails;