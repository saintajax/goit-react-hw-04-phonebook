import { List, Item, Text, Link, Btn } from './ContactsList.styled';
import { PropTypes } from 'prop-types';
import { ReactComponent as DelIcon } from '../icons/delete.svg';

export const ContactsList = ({ contacts, del }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <Text>
          {name}: <Link href={`tel:${number}`}>{number}</Link>
        </Text>
        <Btn
          onClick={() => {
            del(id);
          }}
        >
          <DelIcon width="40" height="40" fill="black" />
        </Btn>
      </Item>
    ))}
  </List>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  del: PropTypes.func.isRequired,
};
