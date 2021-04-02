import React from 'react'
import { Column1, Column2, Img, ImgWrap, TextWrapper, TopLine } from '../AboutSection/about-elements'
import {ContactContainer, ContactWrapper, ContactRow} from './contact-elements'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup'
function Contact({id,lightBg,imgStart,topLine,img,alt,}) {
    return (
        <ContactContainer lightBg={lightBg} id={id}>
            <ContactWrapper>
                <ContactRow imgStart={imgStart}>
                    <Column1>
                      <TextWrapper>
                          <TopLine>{topLine}</TopLine>
                          <Form>
                          <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                          </Form.Group>

                          <Form.Group controlId="formBasicEmail">
                          <Form.Label>Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter your name" />
                          </Form.Group>

                          <Form.Group controlId="formGridState">
                          <Form.Label>State</Form.Label>
                          <Form.Control as="select" defaultValue="Choose...">
                          <option>No reason</option>
                          <option>Just to say Hi!</option>
                          <option>Business</option>
                          <option>Other</option>
                          </Form.Control>
                          </Form.Group>
                          <br />
                          <br />
                          <Form.Group>
                          <InputGroup>
                          <FormControl as="textarea" placeholder="Your message" />
                          </InputGroup>
                          </Form.Group>
                         

                          </Form>   

                      </TextWrapper>
                    </Column1>
                    <Column2>
                     <ImgWrap>
                     <Img src={img} alt={alt} />
                     </ImgWrap>
                    </Column2>
                </ContactRow>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact
