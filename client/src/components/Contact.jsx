import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react'
import { deleteContact, getContact } from '../JS/action/contactActions';
import { toggleTrue } from '../JS/action/editAction';
const Contact = ({contact}) => {
  const dispatch = useDispatch()
  return (
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        />
        <Card.Header>{contact.name}</Card.Header>
        <Card.Meta> {contact.phone} </Card.Meta>
        <Card.Description>
          {contact.email}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Link to={`/edit/${contact._id}`}>
          <Button basic color='green' onClick={()=>{dispatch(getContact(contact._id)); dispatch(toggleTrue())} }>
            Edit
          </Button></Link>
          <Button basic color='red' onClick={()=>dispatch(deleteContact(contact._id))}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default Contact