import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
});

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  ' > button': {
    padding: 10,
    fontSize: 16,
    lineHeight: 0,
    cursor: 'pointer',
    backgroundColor: '$gray800',
    color: '$white',
    border: 0,
    borderRadius: 6,
    position: 'relative',

    span: {
      position: 'absolute',
      top: -6,
      borderRadius: '50%',
      border: '2px solid $gray900',
      backgroundColor: '$green300',
      padding: 5,
      lineHeight: 0.5,
    },
  },
});
