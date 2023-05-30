
import styled from '@emotion/styled';

import Item from './Items';

const List = styled.ul({
  '&>li': {
    marginTop: 5,
    marginBottom: 5,
  },
});

export default function Navbar({ children }: React.PropsWithChildren) {
  console.log(children)
  return <List>{children}</List>;
}
