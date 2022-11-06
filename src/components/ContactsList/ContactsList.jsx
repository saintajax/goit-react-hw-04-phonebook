import { List, Item, Text, Link, Btn } from './ContactsList.styled';
import { PropTypes } from 'prop-types';
import { ReactComponent as DelIcon } from '../icons/delete.svg';
import { CSSTransition } from 'react-transition-group';

export const ContactsList = ({ contacts, del }) => (
  <List component="ul">
    {contacts.map(({ id, name, number }) => (
      <CSSTransition
        key={id}
        timeout={250}
        classNames={{
          enterActive: 'my-active-enter',
          exitActive: 'my-active-exit',
        }}
      >
        <Item>
          <Text component="ul">
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
      </CSSTransition>
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
