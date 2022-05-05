import * as React from 'react'
import { StripeState } from '../share/reducer'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { Layout, Card, Row, Col, Modal, Form, Input, Button, Spin  } from 'antd';
import { loadBook, createPaymentIntent, confirmCardPayment } from '../share/actions/action';
import {IBook} from '../types/book';
import {Elements, CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import StripeModal from '../components/StripeModal';


export default function IndexPage() {

  const { Header, Content, Footer } = Layout;
  const { Meta } = Card;

  const state = useSelector((state: StripeState) => state);
  const dispatch = useDispatch();
  const router = useRouter()
  
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [chosenBook, setChosenBook] = React.useState<IBook>(null);
  
  const bookList = state.common.bookList;

  React.useEffect(() => {
      dispatch(loadBook());
  }, []);

  const showModal = (book: IBook) => {
    setChosenBook(book);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div id="home-page-content">
      <Layout >
        <Header style={{paddingTop: 0, paddingBottom: 0}}>
            <Row  gutter={[16, 24]}>
                <Col xs={24}>
                    <div id="page-title"><h2>Stripe Press Shop</h2></div>
                </Col>
            </Row>
        </Header>
        <Content className="home-page-content" >
            <Row  gutter={[16, 24]} style={{ marginBottom: 5, height: 'auto'}}>
                {
                  bookList ? bookList.map((book, key) => (
                    <Col md={8} key={key}>
                      <Card
                        hoverable
                        cover={<img alt="example" src={process.env.API_SERVER + book.image} />}
                      >
                        <Meta title={book.title} 
                        description={
                          <>
                            <Row >
                              <Col md={24}><b>{book.author}</b></Col>
                              <Col md={24}><p>{book.desc}</p></Col>
                              <Col md={24}>
                                <Button className="ant-btn ant-btn-primary" onClick={()=>{showModal(book)}}>
                                    <span>Purchase - ${book.price}</span>
                                </Button>
                              </Col>
                            </Row>
                          </>
                        } />
                      </Card>
                    </Col>
                  ))
                  : ''
                }
            </Row>
            {
              chosenBook ?
              <StripeModal chosenBook={chosenBook} isModalVisible={isModalVisible} handleCancel={handleCancel}></StripeModal>
              : ''
            }
        </Content>
        <Footer>
        </Footer>
      </Layout>
    </div>
  )
}
